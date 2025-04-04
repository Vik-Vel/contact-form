"use client"; //Tell Next.js that this file should be executed in the browser (client-side), not on the server.

//imports
import { useState } from "react";
import { z } from "zod";
import { contactFormSchema } from "@/lib/validation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SelectField } from "@/components/ui/SelectField";
import { SuccessDialog } from "@/components/ui/SuccessDialog";

// Typing the given formats using Zod schema
type ContactFormData = z.infer<typeof contactFormSchema>;

// Main functional component for the contact form
export function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);

  // Setting up form methods using react-hook-form and zod for validation
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  // Function to handle form submission
  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      // Handle response errors
      if (!response.ok) {
        console.error("Failed to send message.");
        return;
      }

      // Reset form and show success dialog
      setIsOpen(true);
      reset();
    } catch (error) {
      console.error("Something went wrong:", error);
    }
  };

  return (
    //JSX fragment to avoid additional divs
    <>
      <form
        onSubmit={handleSubmit(onSubmit)} // Form submission handler
        className="space-y-3 w-full mx-auto my-9 px-25"
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-10 flex items-center justify-center z-0"
          style={{
            backgroundImage: "url('/img/rubDuck.png')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "30%",
          }}
        />
        <div>
          <label className="block font-medium mb-1">Name</label>
          <input
            type="text"
            {...register("name")} // React Hook Form registration
            className="w-full px-4 py-2 mt-1 bg-white border border-black text-black placeholder-gray-500 
            focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-300"
            placeholder="Your full name"
          />
          {errors.name && (
            <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="block font-medium mb-1">Email</label>
          <input
            type="email"
            {...register("email")}
            className="w-full px-4 py-2 mt-1 bg-white border border-black text-black placeholder-gray-500 
            focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-300"
            placeholder="you@example.com"
          />
          {errors.email && (
            <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <SelectField
          name="subject"
          control={control}
          label="Subject"
          options={["Website", "HybridApp", "Online shop"]}
          error={errors.subject?.message}
        />

        <div>
          <label className="block font-medium mb-1">Message</label>
          <textarea
            {...register("message")}
            className="w-full px-4 py-2 mt-1 bg-white border border-black text-black placeholder-gray-500 
            focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-300"
            rows={5}
            placeholder="How can we help you?"
          />
          {errors.message && (
            <p className="text-red-400 text-sm mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting} // Disable button while form is submitting
          className="w-full py-3 bg-[#272823] hover:bg-gray-800 transition text-white font-semibold"
        >
          {/* Change button text based on submission state */}
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>

      <SuccessDialog isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
