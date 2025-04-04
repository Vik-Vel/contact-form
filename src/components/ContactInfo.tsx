// Importing the icons from React Icons that are used in the component
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaBuilding,
  FaEnvelope,
} from "react-icons/fa";

// Definition of the functional component ContactInfo for displaying contact information
export function ContactInfo() {
  return (
    <div
      // Main container for the component with styles for background, positioning
      className="bg-[#272823] text-white p-8 w-full md:w-[400px] h-[400px] overflow-hidden rounded-none shadow-2xl
               relative z-10 md:transform md:translate-y-45 md:translate-x-4 flex flex-col justify-between md:mr-[-20px]"
    >
      <div>
        {/* Heading of the component with styling for the text */}
        <h2 className="text-2xl font-bold mb-8 text-center">Contact Info</h2>
        <ul className="space-y-3 text-sm opacity-90 mb-6 ">
          <li className="flex items-start">
            <FaMapMarkerAlt className="text-white mt-0.5 mr-2 text-base flex-shrink-0" />
            <div>
              <strong className="text-sm font-medium block mb-0.5 text-white">
                Main office:
              </strong>
              <a
                href="https://www.google.com/maps/place/Rubber+Duck/@42.6667889,23.2950745,17z/data=!4m5!3m4!1s0x40aa85c4dcb855f7:0xe8878db83da1db2a!8m2!3d42.6667814!4d23.2972658?shorturl=1"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-85 hover:opacity-100 transition-opacity duration-200 text-xs leading-tight"
              >
                ul. "Rikkardo Vakkarini" 4, 1404 Motopista, Sofia
              </a>
            </div>
          </li>

          <li className="flex items-start">
            <FaBuilding className="text-white mt-0.5 mr-2 text-base flex-shrink-0" />
            <div>
              <strong className="text-sm font-medium block mb-0.5 text-white">
                Secondary office:
              </strong>
              <a
                href="https://www.google.com/maps/place/Rubber+Duck+Plovdiv/@42.1505961,24.7751846,838m/data=!3m2!1e3!4b1!4m6!3m5!1s0x14acd1ab9dd8900b:0x4dd6c5e2d74e56d0!8m2!3d42.1505961!4d24.7751846!16s%2Fg%2F11r_vpnm4d?entry=ttu&g_ep=EgoyMDI1MDQwMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-85 hover:opacity-100 transition-opacity duration-200 text-xs leading-tight"
              >
                bul. "6-ti septemvri" 264, Bart Business Center 4006, Plovdiv
              </a>
            </div>
          </li>

          <li className="flex items-start">
            <FaEnvelope className="text-white mt-0.5 mr-2 text-base flex-shrink-0" />
            <div>
              <strong className="text-sm font-medium block mb-0.5 text-white">
                Email:
              </strong>
              <a
                href="mailto:quack@rubberduck.xyz"
                className="opacity-85 hover:opacity-100 transition-opacity duration-200 text-xs"
              >
                quack@rubberduck.xyz
              </a>
            </div>
          </li>
        </ul>
      </div>

      {/* Footer section with social media links */}
      <div className="pt-3 border-t border-white-500">
        <p className="text-xs text-center mb-3 opacity-75">
          Follow us on social media
        </p>
        <div className="flex justify-center gap-5 text-xl">
          <a
            href="https://www.facebook.com/RubberDuck.xyz/?locale=bg_BG"
            target="_blank"
            rel="noopener noreferrer"
            title="Visit our Facebook"
            className="text-white hover:opacity-100 opacity-80 transform hover:scale-110 transition-all duration-200"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/rubberduck.xyz/"
            target="_blank"
            rel="noopener noreferrer"
            title="Visit our Instagram"
            className="text-white hover:opacity-100 opacity-80 transform hover:scale-110 transition-all duration-200"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/company/rubber-duck-ltd/"
            target="_blank"
            rel="noopener noreferrer"
            title="Visit our LinkedIn"
            className="text-white hover:opacity-100 opacity-80 transform hover:scale-110 transition-all duration-200"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
}
