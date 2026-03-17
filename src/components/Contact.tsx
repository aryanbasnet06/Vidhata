import { useState } from "react";
import emailjs from "@emailjs/browser";

import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // idle | sending | success | error

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        "service_mp2zfsb",
        "template_d4tiham",
        templateParams,
        "ZpGq0EY0TbFbHhGBX"
      )
      .then(() => {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });

        setTimeout(() => setStatus(""), 4000); // auto hide
      })
      .catch((error) => {
        console.error("Email error:", error);
        setStatus("error");

        setTimeout(() => setStatus(""), 4000);
      });
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-2xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-gray-900 mb-8">Get in Touch</h2>
          <div className="w-16 h-1 bg-[#5B8A8D] mx-auto mb-12" />
          <p className="text-lg text-gray-600">
            Have questions or want to get involved? We'd love to hear from you.
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm text-gray-700">
                Name
              </label>
              <Input
                id="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm text-gray-700">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm text-gray-700">
              Message
            </label>
            <Textarea
              id="message"
              placeholder="Your message..."
              rows={6}
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          {/* 🔥 Status Message */}
          {status === "sending" && (
            <div className="text-center text-sm text-gray-500 animate-pulse">
              Sending message...
            </div>
          )}

          {status === "success" && (
            <div className="text-center bg-green-100 text-green-700 py-3 rounded-lg shadow-md">
              ✓ Message sent successfully!
            </div>
          )}

          {status === "error" && (
            <div className="text-center bg-red-100 text-red-700 py-3 rounded-lg shadow-md">
              ❌ Failed to send message. Please try again.
            </div>
          )}

          <div className="text-center">
            <Button
              type="submit"
              disabled={status === "sending"}
              className="bg-[#5B8A8D] hover:bg-[#4a7174] text-white px-12 py-6 rounded-full shadow-lg transition-all disabled:opacity-50"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </Button>
          </div>
        </form>

        <div className="mt-16 text-center space-y-3">
          <p className="text-sm text-gray-600">
            Email: contact.vidhata@gmail.com
          </p>
          <p className="text-sm text-gray-600">Location: Kathmandu, Nepal</p>
        </div>
      </div>
    </section>
  );
}
