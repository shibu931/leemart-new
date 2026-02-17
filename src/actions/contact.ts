"use server";

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const message = formData.get("message") as string;
  const product = formData.get("product") as string;

  // In a real application, you would send an email here using a service like Resend, SendGrid, or Nodemailer.
  // For now, we'll log the data to the console.
  console.log("--- New Contact Form Submission ---");
  console.log("Product:", product || "General Inquiry");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Phone:", phone);
  console.log("Message:", message);
  console.log("-----------------------------------");

  // Simulate a delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return { success: true, message: "Inquiry sent successfully!" };
}
