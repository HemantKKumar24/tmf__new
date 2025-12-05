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

    // Find password field - try common column name variations
    const passwordColumns = ['password', 'user_password', 'pwd', 'pass', 'hashed_password', 'password_hash']
    const userPasswordField = passwordColumns.find(col => user[col as keyof typeof user]) || 'password'
    const storedPassword = user[userPasswordField as keyof typeof user] as string

    if (!storedPassword) {
      console.error("Password field not found in user record. Available fields:", Object.keys(user))
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      )
    }

    // Verify password using bcrypt
    const isPasswordValid = await bcrypt.compare(password, storedPassword)
    
    if (!isPasswordValid) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      )
    }

    // Return user data (excluding password)
    const { password: _, ...userWithoutPassword } = user

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

