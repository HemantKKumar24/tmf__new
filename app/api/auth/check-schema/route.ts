import { NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"

// This is a diagnostic endpoint to check table structure
export async function GET(request: Request) {
  try {
    // Try to query the table to see what columns exist
    const { data, error } = await supabase
      .from('register_login')
      .select('*')
      .limit(1)

    if (error) {
      return NextResponse.json(
        { 
          error: "Error querying table",
          details: error.message,
          code: error.code,
          hint: error.hint,
          requiredColumns: [
            "id (primary key)",
            "email (text, unique, required)",
            "password (text, required)",
            "name (text, optional)",
            "phone (text, optional)",
            "created_at (timestamp, optional)"
          ]
        },
        { status: 500 }
      )
    }

    // If we get data, show the structure
    if (data && data.length > 0) {
      const columns = Object.keys(data[0])
      const requiredColumns = ['id', 'email', 'password']
      const missingColumns = requiredColumns.filter(col => !columns.includes(col))
      
      return NextResponse.json(
        { 
          message: "Table structure detected",
          columns: columns,
          sampleRow: data[0],
          missingRequiredColumns: missingColumns,
          requiredColumns: [
            "id (primary key)",
            "email (text, unique, required)",
            "password (text, required)",
            "name (text, optional)",
            "phone (text, optional)",
            "created_at (timestamp, optional)"
          ]
        },
        { status: 200 }
      )
    }

    // If no data, we can't detect columns, but provide expected structure
    return NextResponse.json(
      { 
        message: "Table exists but is empty - cannot detect columns",
        note: "The table structure cannot be detected because it's empty.",
        requiredColumns: [
          "id (primary key, bigserial or uuid)",
          "email (text, unique, required)",
          "password (text, required)",
          "name (text, optional)",
          "phone (text, optional)",
          "created_at (timestamp, optional)"
        ],
        sqlToCreateTable: `
CREATE TABLE IF NOT EXISTS public.register_login (
  id BIGSERIAL NOT NULL PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL,
  name TEXT NULL,
  phone TEXT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
        `.trim()
      },
      { status: 200 }
    )
  } catch (error: any) {
    return NextResponse.json(
      { 
        error: "Failed to check schema",
        details: error.message
      },
      { status: 500 }
    )
  }
}

