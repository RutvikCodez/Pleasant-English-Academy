import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  const { name, phoneNumber, email, time } = await request.json();
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "darjirutvik049@gmail.com",
      pass: `${process.env.NEXT_PUBLIC_PASS}`,
    },
  });
  const mailOptions = {
    from: "darjirutvik049@gmail.com",
    to: email,
    subject: `"Thank You for Your Inquiry at  Pleasant English Academy"`,
    text: `Dear ${name},
    Thank you for reaching out to Pleasant English Academy. We appreciate your interest in our English courses, and we are thrilled to assist you on your language learning journey.

    Our team is currently reviewing your inquiry and will get back to you as soon as possible. In the meantime, if you have any urgent questions or additional information to provide, please feel free to reply to this email.
    
    We understand the importance of mastering English, and we are committed to providing you with the best learning experience. Whether you are looking for general English courses, exam preparation (such as IELTS), or spoken English programs, we have tailored solutions to meet your needs.
    
    If you have specific preferences or requirements, please let us know, and we will do our best to accommodate them. Our dedicated team is here to guide you through the enrollment process and answer any questions you may have.
    
    Thank you once again for choosing Pleasant English Academy. We look forward to the opportunity to help you achieve your language learning goals.
    
    Best regards,
    Pleasant English Academy`,
  };

  const mymail = {
    from: "darjirutvik049@gmail.com",
    to: "rutvikdarji21@gnu.ac.in",
    subject: "New Form Submission",
    text: `Name: ${name}\nEmail: ${email}\nMobile No: ${phoneNumber}\nTime: ${time}`,
  };
  try {
    const info = await transporter.sendMail(mailOptions);
    const myinfo = await transporter.sendMail(mymail);
    return NextResponse.json("Email sent sucessfully!");
  } catch (error) {
    return NextResponse.json("Internal Server Error!");
  }
}
