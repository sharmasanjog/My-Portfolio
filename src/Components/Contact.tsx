import React, { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  Clock,
} from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import AnimatedButton from "./AnimatedButton";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [currentTime, setCurrentTime] = useState<string>(""); // state to store live time
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);

  // Update the current time every second
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleString()); // Example: "9/23/2025, 7:32:10 PM"
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Handle Input Changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Submit Form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Send message to YOU
      await emailjs.send(
        "service_6q4skqn",
        "template_ql68wxk",
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          time: currentTime, // <-- added dynamic time
        },
        "u83ZyK6w02igkEoGC"
      );

      // Auto-reply to the USER
      await emailjs.send(
        "service_6q4skqn",
        "template_tzhgvja",
        {
          to_name: formData.name,
          to_email: formData.email,
          reply_message: `Hi ${formData.name},\n\nThank you for reaching out! I have received your message at ${currentTime} and will get back to you shortly.\n\nBest regards,\nSanjog Sharma`,
          time: currentTime, // include time in auto-reply
        },
        "u83ZyK6w02igkEoGC"
      );

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" }); // Reset form
    } catch (error) {
      console.error("Email sending error:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  // Contact Information
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "sharmasanjog2005@gmail.com",
      link:
        "https://mail.google.com/mail/u/0/?view=cm&fs=1&to=sharmasanjog2005@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+977 9742886222",
      link: "tel:+9779742886222",
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Rukum West, Nepal",
      link: "https://www.google.com/maps/place/HOTEL+RIVERSIDE+%E0%A4%B9%E0%A4%BE%E0%A5%87%E0%A4%9F%E0%A4%B2+%E0%A4%B0%E0%A4%BF%E0%A4%AD%E0%A4%B0+%E0%A4%B8%E0%A4%BE%E0%A4%88%E0%A4%A1/@28.6226768,82.4587015,17z/data=!3m1!4b1!4m6!3m5!1s0x39bd5b71258a8c1f:0x514358ef7df508e7!8m2!3d28.6226768!4d82.4612764!16s%2Fg%2F11gpmzvj2m?entry=ttu",
    },
    {
      icon: Clock,
      title: "Current Time",
      details: currentTime,
      link: "#",
    },
  ];

  // Social Media Links
  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/sanjog-gautam-7a5a82313/",
      hoverTextClass: "hover:text-blue-600",
    },
    {
      icon: Twitter,
      label: "Twitter",
      link: "https://x.com/Sanjogshar49",
      hoverTextClass: "hover:text-sky-500",
    },
    {
      icon: Instagram,
      label: "Instagram",
      link: "https://www.instagram.com/sanjoggautam10/",
      hoverTextClass: "hover:text-pink-500",
    },
    {
      icon: Facebook,
      label: "Facebook",
      link: "https://www.facebook.com/sanjog.gautam.2025",
      hoverTextClass: "hover:text-blue-500",
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 bg-slate-50 dark:bg-slate-800 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Get In{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Touch
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or
            just having a chat about technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info Section */}
          <div
            className={`lg:col-span-1 transition-all duration-1000 transform ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 rounded-2xl text-white shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-8">Contact Information</h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={index}
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 hover:bg-white/10 p-3 rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center transform hover:rotate-12 transition-transform duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-medium">{info.title}</p>
                        <p className="text-blue-100 text-sm">{info.details}</p>
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* Social Media */}
              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="mb-4 font-medium">Follow me on social media</p>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={social.label}
                        className={`p-3 rounded-full bg-white/10 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 ${social.hoverTextClass} hover:bg-white/20 transition-all duration-300 transform hover:scale-110`}
                      >
                        <Icon size={24} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`lg:col-span-2 transition-all duration-1000 transform ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}
          >
            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700">
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">
                Send me a message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                    placeholder="What's this about?"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                    placeholder="Tell me more about your project or idea..."
                    required
                  ></textarea>
                </div>

                {/* Send button */}
                <AnimatedButton
                  variant="primary"
                  size="lg"
                  icon={Send}
                  className="w-full"
                >
                  {loading ? "Sending..." : "Send Message"}
                </AnimatedButton>

                {/* Status Messages */}
                {status === "success" && (
                  <p className="text-green-600 mt-2 text-center">
                    ✅ Message sent successfully! Check your inbox for confirmation.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-red-600 mt-2 text-center">
                    ❌ Something went wrong. Please try again.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
