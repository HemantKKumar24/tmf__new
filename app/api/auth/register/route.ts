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

    // Map form field 'name' to database column 'full_name'
    const full_name = name

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

    // Insert user into register_login table using the actual schema:
    // - full_name (not 'name')
    // - password_hash (not 'password')
    // - phone (optional, with default 'N/A')
    const insertData = {
      full_name,
      email,
      password_hash: hashedPassword,
      phone: phone || null, // Will use default 'N/A' if null
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
        
        // If password column is missing, this is critical
        if (missingColumn === 'password') {
          return NextResponse.json(
            { 
              error: "CRITICAL: The 'password' column is missing from 'register_login' table.",
              details: insertError.message,
              solution: `
You MUST add the 'password' column to your table. Run this SQL in Supabase SQL Editor:

ALTER TABLE public.register_login 
ADD COLUMN password TEXT NOT NULL;

Or if you want to allow NULL temporarily:
ALTER TABLE public.register_login 
ADD COLUMN password TEXT NULL;

After adding, you can remove NULL constraint:
ALTER TABLE public.register_login 
ALTER COLUMN password SET NOT NULL;
              `.trim(),
              checkSchema: "Visit http://localhost:3000/api/auth/check-schema to see your current table structure"
            },
            { status: 500 }
          )
        }
        
        return NextResponse.json(
          { 
            error: "Database schema mismatch. Missing column in 'register_login' table.",
            details: insertError.message,
            requiredColumns: [
              "id (primary key, auto-increment)",
              "email (text, unique, required) - MUST EXIST",
              "password (text, required) - MUST EXIST",
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

    // Return user data (excluding password_hash)
    const { password_hash: _, ...userWithoutPassword } = user

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

