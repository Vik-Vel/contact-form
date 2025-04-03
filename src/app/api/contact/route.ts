//Here in this file is the server side of the contact form, which sends the information from the form to the specified email address.
import { NextResponse } from 'next/server' //for returning API responses
import { resend } from '@/lib/resend' //for sending emails
import { contactFormSchema } from '@/lib/validation' //for data validation

export async function POST(req: Request) {
  const body = await req.json(); //Extracts JSON data from the request

  const parse = contactFormSchema.safeParse(body); //Validates the data using contactFormSchema.safeParse

  if (!parse.success) {
    return NextResponse.json({ errors: parse.error.flatten() }, { status: 400 }); // If validation fails, returns an error with status 400
  }

  const { name, email, subject, message } = parse.data; //If validation succeeds, extracts the fields (name, email, subject, message)

  try {
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL!, //Attempts to send an email using the Resend library
      to: 'vikiveleva54@gmail.com', 
      subject: `New Contact Form: ${subject}`,
      replyTo: email,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Resend error:', error)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
