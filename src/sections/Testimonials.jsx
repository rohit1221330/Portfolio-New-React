// src/sections/Testimonials.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '../constants';

import { Swiper, SwiperSlide, useSwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';

// Polished TestimonialCard that reacts to its position in the slider
const TestimonialCard = ({ testimonial }) => {
  const swiperSlide = useSwiperSlide();

  return (
    <motion.div
      className="relative flex flex-col h-full p-8 bg-white border border-gray-200 shadow-lg dark:bg-gray-900/50 rounded-2xl dark:border-white/10"
      animate={{
        scale: swiperSlide.isActive ? 1 : 0.85,
        opacity: swiperSlide.isActive ? 1 : 0.5
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <p className="absolute top-0 left-0 text-[10rem] font-black text-purple-500/5 dark:text-purple-500/10 -translate-x-4 -translate-y-12 select-none">“</p>
      <div className="relative z-10 flex-grow">
        <p className="text-lg tracking-normal text-gray-700 dark:text-gray-300">{testimonial.quote}</p>
      </div>
      <div className="relative z-10 flex items-center gap-4 pt-6 mt-6 border-t border-gray-200 dark:border-white/10">
        <img src={testimonial.image} alt={testimonial.name} className="object-cover w-12 h-12 rounded-full" />
        <div className="flex flex-col flex-1">
          <p className="text-lg font-semibold text-gray-900 dark:text-white">{testimonial.name}</p>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{testimonial.designation} at {testimonial.company}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 overflow-hidden bg-gray-100 dark:bg-black">
      <div className="px-4 mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl dark:text-white">Testimonials</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">What others have to say about my work.</p>
          <div className="w-24 h-1 mx-auto mt-4 bg-purple-500 rounded"></div>
        </motion.div>

        <div className="relative">
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            loop={true}   // loop enable
            loopedSlides={testimonials.length} // ensure all slides loop properly
            centeredSlides={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 20 },
              1024: { slidesPerView: 2.3, spaceBetween: 40 },
            }}
            className="pb-16"
          >

            {testimonials.map((testimonial, index) => (
              // Ensure each slide has a unique key for React, but Swiper handles looping
              <SwiperSlide key={testimonial.name + index} className="h-auto max-w-lg">
                <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>


          {/* Custom Navigation Arrows */}
          <div className="absolute z-10 flex justify-between w-full px-0 -translate-y-1/2 top-1/2 sm:-px-8">
            <button className="swiper-button-prev-custom testimonial-swiper-button">
              <FaChevronLeft />
            </button>
            <button className="swiper-button-next-custom testimonial-swiper-button">
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;