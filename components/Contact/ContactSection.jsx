import MailTo from "./MailTo";
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";

const ContactSection = () => {
  const phoneNumber = "+8801725599308";
  return (
    <section id="contact" className="bg-primary-color">
      <div className="md:py-20 py-4 mx-10 md:mx-28 flex flex-col gap-4 items-start  ">
        <p className="text-left font-bold text-xl text-[#457B9D]">Contacts</p>
        <MailTo />
        <a
          href={`tel:${phoneNumber}`}
          className="text-gray-600 hover:text-black"
        >
          <div className="flex items-center">
            <FaPhone className="mr-2" />
            {phoneNumber}
          </div>
        </a>
        <div className="flex gap-4 items-center text-2xl">
          <a
            href="https://www.linkedin.com/in/tahmidtomal/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#457B9D] hover:shadow-xl flex items-center"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/T0MAL"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#457B9D] hover:shadow-xl flex items-center"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.instagram.com/tahmid_tomal/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#457B9D] hover:shadow-xl flex items-center"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.facebook.com/tahmidislam.tomal/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#457B9D] hover:shadow-xl flex items-center"
          >
            <FaFacebook />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
