"use client"; //Tell Next.js that this file should be executed in the browser (client-side), not on the server.

//imports
import { z } from "zod";
import { contactFormSchema } from "@/lib/validation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// Typing the given formats using Zod schema
type ContactFormData = z.infer<typeof contactFormSchema>; // Extracts a TypeScript type from the Zod schema for use in the form

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      console.error("Failed to send message.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 max-w-lg mx-auto mt-8"
    >
      <div>
        <label className="block">Name</label>
        <input type="text" {...register("name")} className="input" />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>

      <div>
        <label className="block">Email</label>
        <input type="email" {...register("email")} className="input" />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>

      <div>
        <label className="block">Subject</label>
        <select {...register("subject")} className="input">
          <option value="">-- Select --</option>
          <option value="Website">Website</option>
          <option value="HybridApp">HybridApp</option>
          <option value="Online shop">Online shop</option>
        </select>
        {errors.subject && (
          <p className="text-red-500">{errors.subject.message}</p>
        )}
      </div>

      <div>
        <label className="block">Message</label>
        <textarea {...register("message")} className="input" rows={5} />
        {errors.message && (
          <p className="text-red-500">{errors.message.message}</p>
        )}
      </div>

      <button type="submit" disabled={isSubmitting} className="btn">
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>

      {isSubmitSuccessful && <p className="text-green-600">Message sent!</p>}
    </form>
  );
}
