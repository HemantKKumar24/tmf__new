import { NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"
import bcrypt from "bcryptjs"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, password } = body

    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "Name, email, and password are required" },
        { status: 400 }
      )
    }

    // Check if user already exists in register_login table
    const { data: existingUser, error: checkError } = await supabase
      .from('register_login')
      .select('id, email')
      .eq('email', email)
      .maybeSingle()

    if (existingUser) {
      return NextResponse.json(
        { error: "User with this email already exists" },
        { status: 400 }
      )
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Try to insert with standard column names
    // If table is empty, we can't detect columns, so we'll try standard names
    // and provide helpful error if they don't exist
    const insertData: any = {
      email,
      password: hashedPassword,
    }

    // Add optional fields
    if (name) {
      insertData.name = name
    }
    if (phone) {
      insertData.phone = phone
    }

    const { data: user, error: insertError } = await supabase
      .from('register_login')
      .insert(insertData)
      .select()
      .single()

    if (insertError) {
      console.error("Supabase insert error:", insertError)
      // Provide detailed error message with instructions
      if (insertError.message?.includes("column")) {
        const missingColumn = insertError.message.match(/column '(\w+)'/)?.[1] || 'unknown'
        return NextResponse.json(
          { 
            error: "Database schema mismatch. Missing required column in 'register_login' table.",
            details: insertError.message,
            requiredColumns: [
              "id (primary key, auto-increment)",
              "email (text, unique, required)",
              "password (text, required)",
              "name (text, optional)",
              "phone (text, optional)",
              "created_at (timestamp, optional)"
            ],
            missingColumn: missingColumn,
            solution: `Please add the '${missingColumn}' column to your 'register_login' table in Supabase. Visit: http://localhost:3000/api/auth/check-schema to see current table structure.`
          },
          { status: 500 }
        )
      }
      return NextResponse.json(
        { error: "Failed to create user. Please try again." },
        { status: 500 }
      )
    }

    // Return user data (excluding password)
    const { password: _, ...userWithoutPassword } = user

    return NextResponse.json(
      { message: "User created successfully", userId: user.id, user: userWithoutPassword },
      { status: 201 }
    )
  } catch (error) {
    console.error("Registration error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}

