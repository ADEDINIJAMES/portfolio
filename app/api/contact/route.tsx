// import { type NextRequest, NextResponse } from "next/server"

// export async function POST(request: NextRequest) {
//   try {
//     const { name, email, subject, message } = await request.json()

//     // Validate required fields
//     if (!name || !email || !subject || !message) {
//       return NextResponse.json({ error: "All fields are required" }, { status: 400 })
//     }

//     // Email validation
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
//     if (!emailRegex.test(email)) {
//       return NextResponse.json({ error: "Invalid email address" }, { status: 400 })
//     }

//     try {
//       const response = await fetch("https://api.resend.com/emails", {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           from: "TumTech Portfolio <noreply@tumtech.dev>",
//           to: ["adedinijames28@gmail.com"],
//           subject: `Portfolio Contact: ${subject}`,
//           html: `
//             <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
//               <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
//                 New Contact Form Submission
//               </h2>
//               <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
//                 <p><strong>Name:</strong> ${name}</p>
//                 <p><strong>Email:</strong> ${email}</p>
//                 <p><strong>Subject:</strong> ${subject}</p>
//               </div>
//               <div style="background: white; padding: 20px; border: 1px solid #dee2e6; border-radius: 8px;">
//                 <h3 style="color: #495057; margin-top: 0;">Message:</h3>
//                 <p style="line-height: 1.6; color: #212529;">${message.replace(/\n/g, "<br>")}</p>
//               </div>
//               <div style="margin-top: 20px; padding: 15px; background: #e9ecef; border-radius: 8px; font-size: 12px; color: #6c757d;">
//                 <p>This email was sent from your TumTech portfolio contact form.</p>
//                 <p>Timestamp: ${new Date().toLocaleString()}</p>
//               </div>
//             </div>
//           `,
//         }),
//       })

//       if (!response.ok) {
//         throw new Error(`Resend API error: ${response.status}`)
//       }

//       const result = await response.json()
//       console.log("Email sent successfully:", result)

//       return NextResponse.json({ message: "Message sent successfully!" }, { status: 200 })
//     } catch (emailError) {
//       console.error("Email sending failed:", emailError)

//       try {
//         const fallbackResponse = await fetch("https://formspree.io/f/xdkogkvo", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             name,
//             email,
//             subject,
//             message,
//             _replyto: email,
//           }),
//         })

//         if (fallbackResponse.ok) {
//           return NextResponse.json({ message: "Message sent successfully!" }, { status: 200 })
//         }
//       } catch (fallbackError) {
//         console.error("Fallback email service failed:", fallbackError)
//       }

//       console.log("IMPORTANT - Manual follow-up required for contact form submission:", {
//         name,
//         email,
//         subject,
//         message,
//         timestamp: new Date().toISOString(),
//       })

//       return NextResponse.json(
//         {
//           message: "Message received! I'll get back to you soon.",
//         },
//         { status: 200 },
//       )
//     }
//   } catch (error) {
//     console.error("Contact form error:", error)
//     return NextResponse.json({ error: "Failed to send message. Please try again." }, { status: 500 })
//   }
// }

import { type NextRequest, NextResponse } from "next/server";

const MAX_MESSAGE_LENGTH = 2000;
const RATE_LIMIT = 5; // max per IP/hour (example placeholder)

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Basic validation
    if (
      !name?.trim() ||
      !email?.trim() ||
      !subject?.trim() ||
      !message?.trim()
    ) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Length check
    if (message.length > MAX_MESSAGE_LENGTH) {
      return NextResponse.json(
        { error: "Message is too long" },
        { status: 400 }
      );
    }

    // Rate limiting placeholder (replace with Redis/Vercel KV/Upstash etc.)
    const ip = request.headers.get("x-forwarded-for") || "unknown";
    // TODO: increment per-IP counter in Redis & block if > RATE_LIMIT/hour

    try {
      // Send with Resend
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "TumTech Portfolio <onboarding@resend.dev>",
          to: ["adedinijames28@gmail.com"],
          subject: `Portfolio Contact: ${subject}`,
          reply_to: email, // ✅ so you can reply directly
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
                New Contact Form Submission
              </h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Subject:</strong> ${subject}</p>
              <h3>Message:</h3>
              <p>${message.replace(/\n/g, "<br>")}</p>
              <hr />
              <small>Sent from TumTech portfolio · ${new Date().toLocaleString()}</small>
            </div>
          `,
        }),
      });

      if (!response.ok) {
        throw new Error(`Resend API error: ${response.status}`);
      }

      return NextResponse.json(
        { message: "Message sent successfully!" },
        { status: 200 }
      );
    } catch (emailError) {
      console.error("Resend failed:", emailError);

      // 🔄 fallback: Formspree
      try {
        const fallbackResponse = await fetch(
          "https://formspree.io/f/xdkogkvo",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name,
              email,
              subject,
              message,
              _replyto: email,
            }),
          }
        );

        if (fallbackResponse.ok) {
          return NextResponse.json(
            { message: "Message sent successfully!" },
            { status: 200 }
          );
        }
      } catch (fallbackError) {
        console.error("Fallback failed:", fallbackError);
      }

      // Final fallback: safe acknowledgment
      return NextResponse.json(
        { message: "Message received! I'll get back to you soon." },
        { status: 200 }
      );
    }
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
