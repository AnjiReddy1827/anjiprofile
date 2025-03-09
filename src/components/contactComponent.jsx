"use client";
import React, { useState } from "react";
import Image from "next/image";
import emailjs from "emailjs-com";
const ContactComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_1gm7gr4", // Replace with your EmailJS service ID
        "template_v4zlviv", // Replace with your EmailJS template ID
        {
          user_name: formData.name,
          user_email: formData.email,
          message: formData.message,
        },
        "ICxEqm7hsZQE1O8-g" // Replace with your EmailJS public key
      )
      .then(
        (response) => {
          console.log(
            "Email sent successfully!",
            response.status,
            response.text
          );
          alert("Message sent successfully!");
        },
        (error) => {
          console.log("Failed to send email.", error);
          alert("Failed to send message. Please try again.");
        }
      );

    setFormData({ name: "", email: "", message: "" });
  };
  return (
    <div className="relative !w-full rounded-t-6xl bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16 min-h-screen">
      <div className="container mx-auto px-6 flex flex-col items-center">
        {/* Contact Section Heading */}
        <h2 className="text-4xl font-extrabold text-center mb-12 tracking-wide">
          CONTACT ME
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center w-11/12 gap-12">
          {/* Left Contact Info Section */}
          <div className="w-full md:w-1/2 bg-blue-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold mb-6 text-blue-200">
              Drop Me a Message
            </h3>
            <p className="mb-8 text-gray-300 w-10/12 leading-relaxed">
              I’m always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision. Feel free to reach out!
            </p>

            {/* Contact Information */}
            <div className="mb-6 flex items-center gap-4">
              <div className="bg-blue-600 p-3 rounded-full">
                <Image
                  src="/image/phone.svg"
                  alt="Phone"
                  width={24}
                  height={24}
                />
              </div>
              <p className="text-lg">+91 7660915810</p>
            </div>

            <div className="mb-6 flex items-center gap-4">
              <div className="bg-blue-600 p-3 rounded-full">
                <Image
                  src="/image/email.svg"
                  alt="Email"
                  width={24}
                  height={24}
                />
              </div>
              <p className="text-lg">anji182708@gmail.com</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full md:w-1/2 bg-gradient-to-r from-blue-800 to-blue-600 p-8 rounded-lg shadow-xl">
            <form onSubmit={sendEmail}>
              <div className="mb-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-4 rounded-lg bg-blue-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
              <div className="mb-6">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-4 rounded-lg bg-blue-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
              <div className="mb-6">
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-4 rounded-lg bg-blue-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  rows={4}
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
