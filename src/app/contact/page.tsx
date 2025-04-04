import { ContactForm } from "@/components/ContactForm";
import { ContactInfo } from "@/components/ContactInfo";

export default function ContactPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden p-4">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(-45.5deg,_#272823_46.5%,_#f8f8f8_20%)]" />

      <div className="flex flex-col md:flex-row max-w-6xl w-full relative overflow-hidden">
        <ContactInfo />

        <div
          className="bg-white p-10 md:w-3/5 rounded-none shadow-xl
                     md:ml-[-50px] mt-[-20px] md:mt-0 relative z-0 md:pt-16 px-12"
        >
          <h1 className="text-3xl font-bold mb-6 text-[#272823] text-center">
            Contact Us
          </h1>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
