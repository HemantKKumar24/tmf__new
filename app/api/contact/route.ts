import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { sendContactEmail } from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const { name, email, phone, location, subject, message } = body;
    // Note: The table uses 'address' column, but form sends 'location'
    const address = location || null;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Insert into contact_messages table
    // Note: Table uses 'address' column, not 'location'
    const { data: contactMessage, error: insertError } = await supabase
      .from('contact_messages')
      .insert({
        name,
        email,
        phone: phone || null,
        address: address, // Map 'location' from form to 'address' in DB
        subject,
        message,
      })
      .select()
      .single();

    if (insertError) {
      console.error("Supabase insert error:", insertError);
      return NextResponse.json(
        { error: "Failed to save message. Please try again later." },
        { status: 500 }
      );
    }

    // Send email (optional - keep existing email functionality)
    try {
      await sendContactEmail({
        name,
        email,
        phone,
        location,
        subject,
        message,
      });
    } catch (emailError) {
      // Log email error but don't fail the request since DB save succeeded
      console.error("Email send error:", emailError);
    }

    return NextResponse.json(
      { message: "Message saved successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to process request. Please try again later." },
      { status: 500 }
    );
  }
}

