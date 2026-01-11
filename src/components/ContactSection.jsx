import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { TbMailFilled } from "react-icons/tb";

function ContactSection() {
  const form = useRef();
  const [btnText, setBtnText] = useState("SUBMIT");

  const sendEmail = (e) => {
    e.preventDefault();
    setBtnText("Sending...");

    // Replace these with your actual IDs from EmailJS dashboard
    const serviceID = "service_6vcnbg9";
    const templateID = "template_wkcftrt";
    const publicKey = "NSm1tD-oIeArwJty4";

    emailjs
      .sendForm(serviceID, templateID, form.current, publicKey)
      .then(
        () => {
          setBtnText("Done!");
          form.current.reset(); // Clears the form
          setTimeout(() => setBtnText("SUBMIT"), 3000);
        },
        (error) => {
          console.error("FAILED...", error.text);
          setBtnText("Failed to send");
          setTimeout(() => setBtnText("SUBMIT"), 3000);
        }
      );
  };

  return (
    <>
      <div
        className="w-full bg-accent rounded-[30px] pb-[50px]"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <div className="w-full flex justify-center items-center" data-aos="fade-up" data-aos-delay="500">
          <p className="text-[30px] md:text-[40px] font-squada-one text-zinc-300">Contact</p>
        </div>

        <div className="text-white flex flex-col md:flex-row mt-[20px]">
          {/* Left Side: Contact Info */}
          <div className="w-full md:w-[45%] p-3 flex flex-col items-center gap-10 ml-0 md:ml-[20px] pt-[40px] md:pt-[70px]" data-aos="fade-up" data-aos-delay="700">
            <p className="text-[30px] md:text-[40px] font-rubik-80s-fade">Get in Touch</p>
            <p className="text-center text-[14px] md:text-[16px] text-zinc-400 px-4 md:px-0">
              I'd love to hear from you - whether it's about a new project, a
              collaboration, or just to say hi. Drop me a message anytime, and
              I'll get back to you as soon as I can.
            </p>
            <div className="text-black flex gap-3 md:gap-5">
              <a href="https://www.instagram.com/didula_prabashwara/" target="_black" className="p-2 md:p-3 w-[40px] md:w-[50px] h-[40px] md:h-[50px] bg-zinc-500 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition duration-900">
                <FaInstagram className="text-[24px] md:text-[30px]" />
              </a>
              <a href="https://wa.me/94715973909" className="p-2 md:p-3 w-[40px] md:w-[50px] h-[40px] md:h-[50px] bg-zinc-500 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition duration-900">
                <FaWhatsapp className="text-[24px] md:text-[30px]" />
              </a>
              <a href="https://www.facebook.com/dcrizy1" className="p-2 md:p-3 w-[40px] md:w-[50px] h-[40px] md:h-[50px] bg-zinc-500 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition duration-900">
                <FaFacebookF className="text-[24px] md:text-[30px]" />
              </a>
              <a href="https://www.linkedin.com/in/didula-prabashwara-695a14282" className="p-2 md:p-3 w-[40px] md:w-[50px] h-[40px] md:h-[50px] bg-zinc-500 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition duration-900">
                <FaLinkedinIn className="text-[24px] md:text-[30px]" />
              </a>
            </div>

            <div className="flex items-center justify-center gap-2 text-zinc-500 text-[14px] md:text-base">
              <TbMailFilled className="text-[24px] md:text-[30px]" />
              <p>itzcrizystudio@gmail.com</p>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="w-full md:w-[50%] py-[40px] flex flex-col items-center mt-4 md:mt-0" data-aos="fade-up" data-aos-delay="900">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col items-center p-2 w-[90%] gap-5 text-zinc-400"
            >
              <div className="flex flex-col md:flex-row justify-between w-full gap-4 md:gap-0">
                <div className="flex flex-col w-full md:w-[48%]">
                  <label>First Name</label>
                  <input
                    type="text"
                    name="from_name" // Ensure this matches your EmailJS template placeholder
                    required
                    className="border border-zinc-500 bg-transparent p-2 rounded-[5px] text-white"
                  />
                </div>
                <div className="flex flex-col w-full md:w-[48%]">
                  <label>Last Name</label>
                  <input
                    type="text"
                    name="last_name"
                    className="border border-zinc-500 bg-transparent p-2 rounded-[5px] text-white"
                  />
                </div>
              </div>

              <div className="flex flex-col w-full">
                <label>Email</label>
                <input
                  type="email"
                  name="from_email" // Match template placeholder
                  required
                  className="border border-zinc-500 bg-transparent p-2 rounded-[5px] text-white"
                />
              </div>

              <div className="flex flex-col w-full">
                <label>Message</label>
                <textarea
                  name="message" // Match template placeholder
                  rows="4"
                  required
                  className="border border-zinc-500 bg-transparent p-2 rounded-[5px] text-white"
                ></textarea>
              </div>

              <div className="w-full flex items-center justify-center">
                <button 
                  type="submit"
                  disabled={btnText === "Sending..."}
                  className="py-[8px] w-full bg-zinc-600 rounded-[10px] hover:bg-zinc-700 cursor-pointer hover:scale-105 transition duration-900 text-white font-bold"
                >
                  {btnText}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactSection;