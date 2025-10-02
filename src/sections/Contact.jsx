// src/sections/Contact.jsx

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { contactInfo } from '../constants/index';
import { FiCheckCircle, FiAlertCircle } from 'react-icons/fi';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

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
    <section id="contact" className="relative py-20 overflow-hidden bg-gray-100 dark:bg-black">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 dark:opacity-30">
        <div className="absolute rounded-full top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 blur-3xl animate-blob"></div>
        <div className="absolute rounded-full bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/20 blur-3xl animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="relative z-10 px-4 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl dark:text-white">Get In Touch</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">Have a project in mind? Let's connect.</p>
          <div className="w-24 h-1 mx-auto mt-4 bg-purple-500 rounded"></div>
        </motion.div>

        <div className="grid items-start grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", staggerChildren: 0.2 }}
            className="flex flex-col gap-6"
          >
            {contactInfo.map((info) => (
              <motion.div 
                key={info.title} 
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="flex items-center p-6 border border-gray-200 shadow-lg bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-xl dark:border-white/10"
              >
                <div className="p-4 bg-purple-100 rounded-full dark:bg-purple-900/50"><span className="text-2xl text-purple-600 dark:text-purple-400">{info.icon}</span></div>
                <div className="ml-5">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{info.title}</h3>
                  <a href={info.title === 'Email' ? `mailto:${info.detail}` : (info.title === 'Phone' ? `tel:${info.detail}` : '#')} className="text-gray-600 break-all dark:text-gray-400 hover:text-purple-500">{info.detail}</a>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6 p-8 border border-gray-200 shadow-lg bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl dark:border-white/10">
              <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your Name" required className="p-4 transition-all bg-gray-100 border-2 border-transparent rounded-lg outline-none dark:bg-gray-800 placeholder:text-gray-500 focus:border-purple-500 focus:ring-1 focus:ring-purple-500" />
              <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Your Email" required className="p-4 transition-all bg-gray-100 border-2 border-transparent rounded-lg outline-none dark:bg-gray-800 placeholder:text-gray-500 focus:border-purple-500 focus:ring-1 focus:ring-purple-500" />
              <input type="text" name="subject" value={form.subject} onChange={handleChange} placeholder="Subject" required className="p-4 transition-all bg-gray-100 border-2 border-transparent rounded-lg outline-none dark:bg-gray-800 placeholder:text-gray-500 focus:border-purple-500 focus:ring-1 focus:ring-purple-500" />
              <textarea rows="5" name="message" value={form.message} onChange={handleChange} placeholder="Your Message" required className="p-4 transition-all bg-gray-100 border-2 border-transparent rounded-lg outline-none resize-none dark:bg-gray-800 placeholder:text-gray-500 focus:border-purple-500 focus:ring-1 focus:ring-purple-500" />
              
              <AnimatePresence>
                {status.message && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`flex items-center gap-3 p-3 rounded-lg ${
                      status.type === 'success' ? 'bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300' : 'bg-red-100 dark:bg-red-900/50 text-red-800 dark:text-red-300'
                    }`}
                  >
                    {status.type === 'success' ? <FiCheckCircle /> : <FiAlertCircle />}
                    {status.message}
                  </motion.div>
                )}
              </AnimatePresence>

              <button type="submit" disabled={loading} className="px-8 py-3 font-bold text-white transition-all duration-300 bg-purple-600 border-2 border-purple-600 rounded-xl hover:bg-transparent hover:text-purple-500 dark:hover:text-purple-400 disabled:opacity-50 disabled:cursor-not-allowed">
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;