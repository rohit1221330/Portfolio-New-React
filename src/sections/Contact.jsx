// src/sections/Contact.jsx

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle, FiAlertCircle, FiLoader, FiMessageSquare } from 'react-icons/fi';

const contactInfo = [
  {
    id: "email",
    title: "Mail Me",
    detail: "rohitdhyani50@gmail.com", // APNA EMAIL UPDATE KAREIN
    icon: <FiMail />,
    link: "mailto:your-email@example.com",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "group-hover:border-blue-500/50"
  },
  {
    id: "whatsapp",
    title: "Message Me",
    detail: "WhatsApp / Telegram",
    icon: <FiMessageSquare />,
    link: "https://wa.me/919971770689",
    color: "text-green-400",
    bg: "bg-green-500/10",
    border: "group-hover:border-green-500/50"
  },
  {
    id: "loc",
    title: "Location",
    detail: "New Delhi, India",
    icon: <FiMapPin />,
    link: "#",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "group-hover:border-purple-500/50"
  }
];

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ type: null, message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    emailjs.send(
      'service_333jes2',
      'template_2xx71cu',
      {
        from_name: form.name,
        to_name: 'Your Name', // Or any name you prefer
        from_email: form.email,
        to_email: 'rohitdhyani50@gmail.com', // The email address you want to receive messages at
        message: form.message,
      },
      'bZ2-9FcIBtoWc40Bj'
    ).then(() => {
      setLoading(false);
      setStatus({ type: 'success', message: 'Thank you! Your message has been sent.' });
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus({ type: '', message: '' }), 5000);
    }, (error) => {
      setLoading(false);
      console.error(error);
      setStatus({ type: 'error', message: 'Something went wrong. Please try again.' });
      setTimeout(() => setStatus({ type: '', message: '' }), 5000);
    });
  };
  return (
    <section id="contact" className="relative py-20 overflow-hidden font-sans bg-black md:py-24">

      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px]" />
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-cyan-900/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-6xl px-5 mx-auto sm:px-6">

        {/* HEADER */}
        <div className="mb-16 text-center md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <span className="w-8 h-[2px] bg-purple-600"></span>
            <span className="text-purple-400 text-xs font-bold tracking-[0.25em] uppercase">
              Contact
            </span>
            <span className="w-8 h-[2px] bg-purple-600"></span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl font-bold leading-tight text-white md:text-5xl"
          >
            Let’s Start a <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-cyan-200">
              Conversation
            </span>
          </motion.h2>
        </div>


        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">

          {/* LEFT: INFO & HIGHLIGHTED TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center gap-8"
          >
            <div>
              <h3 className="mb-4 text-2xl font-bold text-white">
                Got a project? <span className="text-purple-400">Let's talk.</span>
              </h3>
              <p className="max-w-md text-base leading-relaxed text-gray-400">
                Whether you have a <span className="font-medium text-white">clear vision</span> or just a <span className="font-medium text-white">rough idea</span>, I’m here to help you refine it and bring it to life.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {contactInfo.map((info) => (
                <a
                  key={info.id}
                  href={info.link}
                  className={`group flex items-center gap-4 p-4 transition-all duration-300 border border-white/5 rounded-2xl bg-[#0a0a0a] hover:bg-white/5 ${info.border}`}
                >
                  <div className={`flex items-center justify-center w-12 h-12 rounded-xl ${info.bg} ${info.color} text-xl group-hover:scale-110 transition-transform`}>
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">{info.title}</p>
                    <p className="text-sm font-bold text-white transition-colors md:text-base group-hover:text-purple-300">{info.detail}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>


          {/* RIGHT: FORM */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex  flex-col gap-5 p-6 md:p-8 rounded-3xl bg-[#0a0a0a] border border-white/10 shadow-2xl"
            >
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="ml-1 text-xs font-bold tracking-widest text-gray-500 uppercase">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full px-4 py-3 text-white transition-all border outline-none bg-white/5 border-white/10 rounded-xl focus:border-purple-500 focus:bg-white/10 focus:shadow-[0_0_15px_rgba(168,85,247,0.1)] placeholder:text-gray-600"
                  />
                </div>
                <div className="space-y-2">
                  <label className="ml-1 text-xs font-bold tracking-widest text-gray-500 uppercase">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full px-4 py-3 text-white transition-all border outline-none bg-white/5 border-white/10 rounded-xl focus:border-purple-500 focus:bg-white/10 focus:shadow-[0_0_15px_rgba(168,85,247,0.1)] placeholder:text-gray-600"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="ml-1 text-xs font-bold tracking-widest text-gray-500 uppercase">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  className="w-full px-4 py-3 text-white transition-all border outline-none bg-white/5 border-white/10 rounded-xl focus:border-purple-500 focus:bg-white/10 focus:shadow-[0_0_15px_rgba(168,85,247,0.1)] placeholder:text-gray-600"
                />
              </div>

              <div className="space-y-2">
                <label className="ml-1 text-xs font-bold tracking-widest text-gray-500 uppercase">Message</label>
                <textarea
                  rows="4"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                  className="w-full px-4 py-3 text-white transition-all border outline-none resize-none bg-white/5 border-white/10 rounded-xl focus:border-purple-500 focus:bg-white/10 focus:shadow-[0_0_15px_rgba(168,85,247,0.1)] placeholder:text-gray-600"
                />
              </div>

              {/* Status Message */}
              <AnimatePresence>
                {status.message && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className={`flex items-center gap-2 px-4 py-3 text-sm font-medium rounded-xl ${status.type === 'success'
                        ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                        : 'bg-red-500/10 text-red-400 border border-red-500/20'
                      }`}
                  >
                    {status.type === 'success' ? <FiCheckCircle /> : <FiAlertCircle />}
                    {status.message}
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                type="submit"
                disabled={loading}
                className="flex items-center justify-center w-full gap-2 py-4 mt-2 text-sm font-bold text-black transition-all bg-white rounded-xl hover:bg-gray-200 disabled:opacity-70 disabled:cursor-not-allowed group shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
              >
                {loading ? (
                  <>Sending <FiLoader className="animate-spin" /></>
                ) : (
                  <>Discuss Your Project <FiSend className="transition-transform group-hover:translate-x-1" /></>
                )}
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;