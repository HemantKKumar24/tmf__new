import nodemailer from "nodemailer";
import path from "path";

// Check if SMTP credentials are configured
const isConfigured = !!(process.env.SMTP_USER && process.env.SMTP_PASSWORD);

// Create reusable transporter using Gmail SMTP
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

// Log configuration status (without exposing secrets)
console.log("Email Config Status:", {
  isConfigured,
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: process.env.SMTP_PORT || "587",
  user: process.env.SMTP_USER ? `${process.env.SMTP_USER.substring(0, 3)}***` : "NOT SET",
  passwordSet: !!process.env.SMTP_PASSWORD,
});

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  location?: string;
  subject: string;
  message: string;
}

// Logo path - embedded as attachment
const logoPath = path.join(process.cwd(), "public", "bg_pic", "tmf_no_bg.png");

export async function sendContactEmail(data: ContactFormData) {
  // Check if SMTP is configured
  if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
    console.error("SMTP credentials not configured!");
    console.error("Please set SMTP_USER and SMTP_PASSWORD in your .env file");
    throw new Error("Email service not configured. Please contact the administrator.");
  }

  const { name, email, phone, location, subject, message } = data;

  // Common attachment for logo
  const logoAttachment = {
    filename: "tmf_logo.png",
    path: logoPath,
    cid: "tmflogo", // Content-ID for embedding in HTML
  };

  // Email to gym owner
  const mailOptionsToOwner = {
    from: `"🏋️ TMF Contact Form" <${process.env.SMTP_USER}>`,
    to: process.env.CONTACT_EMAIL || "Tmfitness71@gmail.com",
    replyTo: email,
    subject: `📩 New Contact Form: ${subject}`,
    attachments: [logoAttachment],
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="margin: 0; padding: 0; background: linear-gradient(135deg, #1f2937 0%, #111827 100%);">
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          
          <!-- Main Card -->
          <div style="background: linear-gradient(145deg, #374151 0%, #1f2937 100%); border-radius: 24px; overflow: hidden; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(220, 38, 38, 0.1);">
            
            <!-- Header with Logo -->
            <div style="background: linear-gradient(135deg, #dc2626 0%, #b91c1c 50%, #991b1b 100%); padding: 40px 30px; text-align: center; position: relative;">
              <!-- Logo Frame -->
              <div style="display: inline-block; background: white; padding: 15px; border-radius: 20px; box-shadow: 0 10px 40px rgba(0,0,0,0.3), 0 0 0 4px rgba(255,255,255,0.2), inset 0 2px 4px rgba(0,0,0,0.1); margin-bottom: 20px;">
                <img src="cid:tmflogo" alt="TMF" style="width: 70px; height: 70px; display: block;" />
              </div>
              <h1 style="color: white; margin: 0; font-size: 26px; font-weight: 700; letter-spacing: 1px; text-shadow: 0 2px 4px rgba(0,0,0,0.2);">
                🔔 New Message Received!
              </h1>
              <p style="color: rgba(255,255,255,0.85); margin: 10px 0 0 0; font-size: 15px; font-weight: 400;">
                Someone wants to connect with Team Muscle Fitness
              </p>
            </div>
            
            <!-- Contact Details -->
            <div style="padding: 35px 30px;">
              
              <!-- Info Cards -->
              <div style="margin-bottom: 25px;">
                <div style="background: linear-gradient(135deg, #4b5563 0%, #374151 100%); border-radius: 16px; padding: 20px; margin-bottom: 12px; border-left: 4px solid #dc2626;">
                  <table style="width: 100%;">
                    <tr>
                      <td style="width: 40px; vertical-align: top;">
                        <div style="width: 36px; height: 36px; background: linear-gradient(135deg, #dc2626, #b91c1c); border-radius: 10px; display: flex; align-items: center; justify-content: center; text-align: center; line-height: 36px; font-size: 18px;">👤</div>
                      </td>
                      <td style="padding-left: 15px; vertical-align: middle;">
                        <p style="margin: 0; color: #9ca3af; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Name</p>
                        <p style="margin: 4px 0 0 0; color: #f3f4f6; font-size: 17px; font-weight: 600;">${name}</p>
                      </td>
                    </tr>
                  </table>
                </div>
                
                <div style="background: linear-gradient(135deg, #4b5563 0%, #374151 100%); border-radius: 16px; padding: 20px; margin-bottom: 12px; border-left: 4px solid #dc2626;">
                  <table style="width: 100%;">
                    <tr>
                      <td style="width: 40px; vertical-align: top;">
                        <div style="width: 36px; height: 36px; background: linear-gradient(135deg, #dc2626, #b91c1c); border-radius: 10px; text-align: center; line-height: 36px; font-size: 18px;">📧</div>
                      </td>
                      <td style="padding-left: 15px; vertical-align: middle;">
                        <p style="margin: 0; color: #9ca3af; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Email</p>
                        <a href="mailto:${email}" style="margin: 4px 0 0 0; color: #ef4444; font-size: 16px; font-weight: 500; text-decoration: none; display: block;">${email}</a>
                      </td>
                    </tr>
                  </table>
                </div>
                
                ${phone ? `
                <div style="background: linear-gradient(135deg, #4b5563 0%, #374151 100%); border-radius: 16px; padding: 20px; margin-bottom: 12px; border-left: 4px solid #dc2626;">
                  <table style="width: 100%;">
                    <tr>
                      <td style="width: 40px; vertical-align: top;">
                        <div style="width: 36px; height: 36px; background: linear-gradient(135deg, #dc2626, #b91c1c); border-radius: 10px; text-align: center; line-height: 36px; font-size: 18px;">📱</div>
                      </td>
                      <td style="padding-left: 15px; vertical-align: middle;">
                        <p style="margin: 0; color: #9ca3af; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Phone</p>
                        <a href="tel:${phone}" style="margin: 4px 0 0 0; color: #ef4444; font-size: 16px; font-weight: 500; text-decoration: none; display: block;">${phone}</a>
                      </td>
                    </tr>
                  </table>
                </div>
                ` : ''}
                
                ${location ? `
                <div style="background: linear-gradient(135deg, #4b5563 0%, #374151 100%); border-radius: 16px; padding: 20px; margin-bottom: 12px; border-left: 4px solid #dc2626;">
                  <table style="width: 100%;">
                    <tr>
                      <td style="width: 40px; vertical-align: top;">
                        <div style="width: 36px; height: 36px; background: linear-gradient(135deg, #dc2626, #b91c1c); border-radius: 10px; text-align: center; line-height: 36px; font-size: 18px;">📍</div>
                      </td>
                      <td style="padding-left: 15px; vertical-align: middle;">
                        <p style="margin: 0; color: #9ca3af; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Location / Address</p>
                        <p style="margin: 4px 0 0 0; color: #f3f4f6; font-size: 16px; font-weight: 500;">${location}</p>
                      </td>
                    </tr>
                  </table>
                </div>
                ` : ''}
                
                <div style="background: linear-gradient(135deg, #4b5563 0%, #374151 100%); border-radius: 16px; padding: 20px; border-left: 4px solid #dc2626;">
                  <table style="width: 100%;">
                    <tr>
                      <td style="width: 40px; vertical-align: top;">
                        <div style="width: 36px; height: 36px; background: linear-gradient(135deg, #dc2626, #b91c1c); border-radius: 10px; text-align: center; line-height: 36px; font-size: 18px;">📝</div>
                      </td>
                      <td style="padding-left: 15px; vertical-align: middle;">
                        <p style="margin: 0; color: #9ca3af; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Subject</p>
                        <p style="margin: 4px 0 0 0; color: #f3f4f6; font-size: 17px; font-weight: 600;">${subject}</p>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
              
              <!-- Message Box -->
              <div style="background: linear-gradient(145deg, #4b5563 0%, #374151 100%); border-radius: 20px; padding: 25px; border: 1px solid rgba(220, 38, 38, 0.3);">
                <div style="display: flex; align-items: center; margin-bottom: 15px;">
                  <span style="font-size: 20px; margin-right: 10px;">💬</span>
                  <h3 style="color: #ef4444; margin: 0; font-size: 18px; font-weight: 600;">Message</h3>
                </div>
                <div style="background: linear-gradient(135deg, #374151 0%, #1f2937 100%); padding: 20px; border-radius: 14px; border-left: 3px solid #ef4444;">
                  <p style="margin: 0; white-space: pre-wrap; color: #e5e7eb; line-height: 1.8; font-size: 15px;">${message}</p>
                </div>
              </div>
              
              <!-- Reply Button -->
              <div style="text-align: center; margin-top: 30px;">
                <a href="mailto:${email}?subject=Re: ${encodeURIComponent(subject)}" style="display: inline-block; background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%); color: white; padding: 16px 45px; border-radius: 50px; text-decoration: none; font-weight: 700; font-size: 15px; letter-spacing: 0.5px; box-shadow: 0 10px 25px -5px rgba(220, 38, 38, 0.5), 0 4px 6px -2px rgba(220, 38, 38, 0.3);">
                  ↩️ Reply to ${name}
                </a>
              </div>
            </div>
            
            <!-- Footer -->
            <div style="background: linear-gradient(135deg, #374151 0%, #1f2937 100%); padding: 25px 30px; text-align: center; border-top: 1px solid rgba(255,255,255,0.05);">
              <p style="color: #6b7280; font-size: 13px; margin: 0;">
                🏋️ Sent from TMF Website Contact Form
              </p>
              <p style="color: #4b5563; font-size: 12px; margin: 8px 0 0 0;">
                © ${new Date().getFullYear()} Team Muscle Fitness • Bowenpally, Hyderabad
              </p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `,
  };

  // Confirmation email to the user
  const mailOptionsToUser = {
    from: `"🏋️ Team Muscle Fitness" <${process.env.SMTP_USER}>`,
    to: email,
    subject: `✅ We received your message - Team Muscle Fitness`,
    attachments: [logoAttachment],
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="margin: 0; padding: 0; background: linear-gradient(135deg, #1f2937 0%, #111827 100%);">
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          
          <!-- Main Card -->
          <div style="background: linear-gradient(145deg, #374151 0%, #1f2937 100%); border-radius: 24px; overflow: hidden; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(220, 38, 38, 0.1);">
            
            <!-- Header with Logo -->
            <div style="background: linear-gradient(135deg, #dc2626 0%, #b91c1c 50%, #991b1b 100%); padding: 45px 30px; text-align: center; position: relative;">
              <!-- Logo Frame -->
              <div style="display: inline-block; background: white; padding: 18px; border-radius: 24px; box-shadow: 0 15px 50px rgba(0,0,0,0.35), 0 0 0 5px rgba(255,255,255,0.25), inset 0 2px 4px rgba(0,0,0,0.1); margin-bottom: 25px;">
                <img src="cid:tmflogo" alt="TMF" style="width: 80px; height: 80px; display: block;" />
              </div>
              <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 700; letter-spacing: 1px; text-shadow: 0 2px 4px rgba(0,0,0,0.2);">
                Thank You! ✨
              </h1>
              <p style="color: rgba(255,255,255,0.9); margin: 12px 0 0 0; font-size: 16px; font-weight: 400;">
                We've received your message 💪
              </p>
            </div>
            
            <!-- Main Content -->
            <div style="padding: 35px 30px;">
              
              <!-- Greeting -->
              <div style="background: linear-gradient(135deg, #4b5563 0%, #374151 100%); border-radius: 20px; padding: 25px; margin-bottom: 25px; border: 1px solid rgba(255,255,255,0.05);">
                <h2 style="color: #f3f4f6; margin: 0 0 15px 0; font-size: 22px; font-weight: 600;">
                  Hey ${name}! 👋
                </h2>
                <p style="line-height: 1.8; font-size: 15px; color: #d1d5db; margin: 0;">
                  Thanks for reaching out to <strong style="color: #ef4444;">Team Muscle Fitness</strong>! 
                  We're excited to hear from you and our team will get back to you within <strong style="color: #f3f4f6;">24 hours</strong>. 🚀
                </p>
              </div>
              
              <!-- Message Summary -->
              <div style="background: linear-gradient(145deg, #4b5563 0%, #374151 100%); border-radius: 20px; padding: 25px; margin-bottom: 25px; border: 1px solid rgba(220, 38, 38, 0.2);">
                <div style="display: flex; align-items: center; margin-bottom: 20px; padding-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1);">
                  <span style="font-size: 22px; margin-right: 12px;">📨</span>
                  <h3 style="color: #ef4444; margin: 0; font-size: 18px; font-weight: 600;">Your Message Summary</h3>
                </div>
                
                <div style="margin-bottom: 15px;">
                  <p style="color: #9ca3af; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 5px 0;">📝 Subject</p>
                  <p style="color: #f3f4f6; font-size: 16px; font-weight: 500; margin: 0; padding: 12px 15px; background: rgba(0,0,0,0.2); border-radius: 10px;">${subject}</p>
                </div>
                
                <div>
                  <p style="color: #9ca3af; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 5px 0;">💬 Message</p>
                  <div style="background: linear-gradient(135deg, #374151 0%, #1f2937 100%); padding: 18px; border-radius: 14px; border-left: 3px solid #ef4444;">
                    <p style="color: #e5e7eb; white-space: pre-wrap; margin: 0; line-height: 1.7; font-size: 14px;">${message}</p>
                  </div>
                </div>
              </div>
              
              <!-- CTA Section -->
              <div style="background: linear-gradient(135deg, #7f1d1d 0%, #991b1b 50%, #b91c1c 100%); padding: 30px; border-radius: 20px; text-align: center; margin-bottom: 25px;">
                <p style="color: rgba(255,255,255,0.9); margin: 0 0 20px 0; font-size: 16px; font-weight: 500;">
                  🏃 Can't wait? Visit us or give us a call!
                </p>
                <a href="tel:07702553859" style="display: inline-block; background: white; color: #dc2626; padding: 14px 35px; border-radius: 50px; text-decoration: none; font-weight: 700; font-size: 16px; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.3);">
                  📞 077025 53859
                </a>
              </div>
              
              <!-- Signature -->
              <div style="text-align: center; padding-top: 10px;">
                <p style="color: #9ca3af; font-size: 15px; line-height: 1.6; margin: 0;">
                  Stay strong and keep pushing! 💪
                </p>
                <p style="color: #f3f4f6; font-size: 20px; font-weight: 700; margin: 15px 0 5px 0;">
                  Team Muscle Fitness
                </p>
                <p style="color: #ef4444; font-size: 14px; font-weight: 500; margin: 0;">
                  Where Champions Are Made! 🏆
                </p>
              </div>
            </div>
            
            <!-- Location & Social -->
            <div style="background: linear-gradient(135deg, #374151 0%, #1f2937 100%); padding: 30px; text-align: center; border-top: 1px solid rgba(255,255,255,0.05);">
              <p style="color: #9ca3af; font-size: 14px; margin: 0 0 20px 0; line-height: 1.6;">
                📍 <strong style="color: #d1d5db;">Find Us:</strong><br>
                Vegetable Market, Opposite Al Ridaan Hotel,<br>
                Anjaiah Nagar, Bowenpally, Hyderabad
              </p>
              
              <!-- Social Links -->
              <div style="margin-bottom: 20px;">
                <a href="https://www.instagram.com/team_muscle_fitness_gym/" style="display: inline-block; margin: 0 8px; padding: 10px 20px; background: linear-gradient(135deg, #4b5563, #374151); border-radius: 25px; color: #ef4444; text-decoration: none; font-size: 13px; font-weight: 500;">
                  📸 Instagram
                </a>
                <a href="https://www.facebook.com/108621378746408" style="display: inline-block; margin: 0 8px; padding: 10px 20px; background: linear-gradient(135deg, #4b5563, #374151); border-radius: 25px; color: #ef4444; text-decoration: none; font-size: 13px; font-weight: 500;">
                  👍 Facebook
                </a>
              </div>
              
              <p style="color: #4b5563; font-size: 12px; margin: 0;">
                © ${new Date().getFullYear()} Team Muscle Fitness. All rights reserved.<br>
                🏋️ Best Gym in Bowenpally 🏋️
              </p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `,
  };

  // Send both emails
  try {
    console.log("Sending email to owner...");
    await transporter.sendMail(mailOptionsToOwner);
    console.log("Email to owner sent successfully!");
    
    console.log("Sending confirmation email to user...");
    await transporter.sendMail(mailOptionsToUser);
    console.log("Confirmation email sent successfully!");
    
    return { success: true };
  } catch (error: unknown) {
    console.error("Failed to send email:", error);
    
    // Provide helpful error messages
    if (error instanceof Error) {
      if (error.message.includes("Invalid login") || error.message.includes("authentication")) {
        throw new Error("Email authentication failed. Please check your Gmail App Password.");
      }
      if (error.message.includes("socket close") || error.message.includes("ECONNREFUSED")) {
        throw new Error("Could not connect to email server. Check your SMTP settings and App Password.");
      }
    }
    throw error;
  }
}

// Verify SMTP connection
export async function verifyEmailConnection() {
  try {
    await transporter.verify();
    return { success: true };
  } catch (error) {
    console.error("SMTP connection error:", error);
    return { success: false, error };
  }
}
