import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa"; // FaPaperPlane যোগ করা হয়েছে
import { motion } from "framer-motion";
import Swal from "sweetalert2";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 20 },
  },
};

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false); // সাবমিট লোডিং স্টেট

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Web3Forms API (ফ্রি ইমেইল সার্ভিস)
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: "YOUR_ACCESS_KEY_HERE", // https://web3forms.com থেকে কী নিন
        ...formData,
      }),
    });

    const result = await response.json();

    if (result.success) {
      Swal.fire({
        title: "Message Sent!",
        html: `Hi <span class="text-purple-500 font-bold">${formData.name}</span>, your message has been delivered.`,
        icon: "success",
        background: "#1f2937",
        color: "#fff",
        confirmButtonColor: "#a855f7",
      });
      setFormData({ name: "", email: "", message: "" });
    } else {
      Swal.fire({ title: "Error!", text: "Something went wrong.", icon: "error" });
    }
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="pb-24 bg-[#0a0a0c] text-gray-300 overflow-hidden">
      <div className="container mx-auto px-6 md:px-16">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 text-center md:text-left">
            Get In <span className="text-purple-500">Touch</span>
          </h2>
          <p className="text-gray-400 mb-12 text-center md:text-left max-w-lg">
            Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to new opportunities!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info Cards */}
          <motion.div className="flex flex-col gap-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {[
              { icon: <FaEnvelope />, label: "Email", value: "hashemm621@gmail.com", link: "mailto:hashemm621@gmail.com" },
              { icon: <FaPhone />, label: "Phone", value: "+880 1601 611 120", link: "tel:+8801601611120" },
              { icon: <FaMapMarkerAlt />, label: "Location", value: "Narayanganj, Dhaka, Bangladesh", link: "#" },
            ].map((info, idx) => (
              <motion.a
                href={info.link}
                key={idx}
                variants={fadeUp}
                className="flex items-center gap-6 p-6 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-purple-500/50 transition-all duration-300 group"
              >
                <div className="text-purple-500 text-3xl group-hover:scale-110 transition-transform">{info.icon}</div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-widest">{info.label}</p>
                  <p className="text-lg font-semibold text-white">{info.value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-5 p-8 bg-gray-900/40 border border-gray-800 rounded-3xl shadow-2xl relative"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 bg-gray-950 border border-gray-800 rounded-xl focus:border-purple-500 focus:outline-none transition-all text-white"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 bg-gray-950 border border-gray-800 rounded-xl focus:border-purple-500 focus:outline-none transition-all text-white"
              />
            </div>
            <textarea
              name="message"
              placeholder="Your Message..."
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full px-5 py-4 bg-gray-950 border border-gray-800 rounded-xl focus:border-purple-500 focus:outline-none transition-all text-white resize-none"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-purple-600 text-white font-bold rounded-xl hover:bg-purple-500 transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              <FaPaperPlane className={`text-sm transition-transform ${isSubmitting ? "translate-x-10 opacity-0" : "group-hover:translate-x-1 group-hover:-translate-y-1"}`} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}