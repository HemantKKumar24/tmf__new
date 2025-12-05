import { NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"
import bcrypt from "bcryptjs"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, password } = body

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      )
    }

    // Query the register_login table to find user
    // Schema uses: full_name, email, phone, password_hash
    const { data: user, error: queryError } = await supabase
      .from('register_login')
      .select('*')
      .eq('email', email)
      .maybeSingle()

    if (queryError || !user) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      )
    }

    // Get password_hash from user (schema uses password_hash, not password)
    const storedPasswordHash = user.password_hash as string

    if (!storedPasswordHash) {
      console.error("Password field not found in user record. Available fields:", Object.keys(user))
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      )
    }

    // Verify password using bcrypt
    const isPasswordValid = await bcrypt.compare(password, storedPasswordHash)
    
    if (!isPasswordValid) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      )
    }

    // Return user data (excluding password_hash)
    const { password_hash: _, ...userWithoutPassword } = user

    return NextResponse.json(
      { 
        message: "Login successful", 
        user: userWithoutPassword 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("Login error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}

