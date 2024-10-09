import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import { useInView } from 'react-intersection-observer';
import emailjs from 'emailjs-com';

// Animation variants for the reveal effect
const revealVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.5, ease: 'easeInOut' },
  },
};

const Contact = () => {
  const form = useRef(null); // Form reference
  const [messageSent, setMessageSent] = useState(''); // State to control success/error message visibility
  const [isFormOpaque, setIsFormOpaque] = useState(false); // State to control form opacity

  const { ref: formRef, inView: formInView } = useInView({ triggerOnce: true, threshold: 0.1 }); // Hook for form reveal on scroll
  const { ref: titleRef, inView: titleInView } = useInView({ triggerOnce: true, threshold: 0.1 }); // Hook for title reveal on scroll

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_trdxpz4', 'template_rs7n2je', form.current, '7n0JkJMbEc0mn3hN-') // Public key as a string
      .then(
        (result) => {
          setMessageSent('Message sent successfully!'); // Show success message
          setIsFormOpaque(true); // Make form background opaque
          form.current.reset(); // Reset the form

          // Hide the message and reset form opacity after 3 seconds
          setTimeout(() => {
            setMessageSent('');
            setIsFormOpaque(false); // Restore form background to normal
          }, 3000);
        },
        (error) => {
          setMessageSent('Failed to send the message, please try again.'); // Show error message
          setIsFormOpaque(true); // Make form background opaque

          // Hide the message and reset form opacity after 3 seconds
          setTimeout(() => {
            setMessageSent('');
            setIsFormOpaque(false); // Restore form background to normal
          }, 3000);
        }
      );
  };

  return (
    <section id="contact" className="min-h-screen bg-black text-white py-12 flex items-center justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center md:flex-row space-y-6 md:space-y-0">
        
        {/* Left Side: Contact Me Title with On-Scroll Reveal */}
        <motion.div
          ref={titleRef}
          initial="hidden"
          animate={titleInView ? 'visible' : 'hidden'}
          variants={revealVariants}
          className="md:w-1/2 text-center md:text-left"
        >
          <div className="relative">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase">
              Contact <span className="text-orange-500">Me</span>.
            </h2>
            {/* Custom Underline */}
            <div className="w-32 h-1 bg-orange-500 rounded-full mt-2 mx-auto md:mx-0"></div>
          </div>
        </motion.div>

        {/* Right Side: Contact Form with On-Scroll Reveal */}
        <motion.div
          ref={formRef}
          initial="hidden"
          animate={formInView ? 'visible' : 'hidden'}
          variants={revealVariants}
          className="md:w-1/2 w-full max-w-lg lg:max-w-xl xl:max-w-2xl relative"
        >
          <div
            className={`bg-white text-black p-6 sm:p-8 lg:p-10 rounded-lg shadow-xl relative transition-opacity duration-300 ${
              isFormOpaque ? 'opacity-60' : 'opacity-100'
            }`} // Adjust opacity when form is opaque
          >
            <form ref={form} onSubmit={sendEmail} noValidate>
              {/* Name Field */}
              <div className="mb-4 sm:mb-6">
                <label htmlFor="user_name" className="block text-base sm:text-lg font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  className="mt-1 block w-full p-3 sm:p-4 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 text-base sm:text-lg"
                  placeholder="Your Name"
                  required
                />
              </div>

              {/* Email Field */}
              <div className="mb-4 sm:mb-6">
                <label htmlFor="user_email" className="block text-base sm:text-lg font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  className="mt-1 block w-full p-3 sm:p-4 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 text-base sm:text-lg"
                  placeholder="Your Email"
                  required
                />
              </div>

              {/* Message Field */}
              <div className="mb-4 sm:mb-6">
                <label htmlFor="message" className="block text-base sm:text-lg font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="mt-1 block w-full p-3 sm:p-4 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 text-base sm:text-lg"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-right">
                <button
                  type="submit"
                  className="inline-flex justify-center py-3 sm:py-4 px-6 sm:px-8 border border-transparent shadow-md text-base sm:text-lg font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transform transition-transform duration-300 ease-in-out hover:translate-y-1 hover:shadow-md"
                >
                  Send
                </button>
              </div>
            </form>
          </div>

          {/* Message Bubble (fully opaque, centered in the form) */}
          {messageSent && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-green-500 text-white py-2 px-4 rounded-lg shadow-lg z-50">
                {messageSent}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
