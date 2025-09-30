"use server";

import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export async function submitContactForm(prevState: any, formData: FormData) {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      type: "error" as const,
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please correct the errors in the form.",
    };
  }

  // Simulate sending an email or saving to a database
  console.log("Form data submitted:", validatedFields.data);
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // You can add your email sending logic here, e.g., using Resend or Nodemailer.
  
  return {
    type: "success" as const,
    message: "Thank you for your message! I'll get back to you soon.",
  };
}
