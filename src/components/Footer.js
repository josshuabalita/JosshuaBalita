import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update the time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update every second

    // Cleanup the timer when the component is unmounted
    return () => clearInterval(timer);
  }, []);

  // Format the date and time
  const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  const formattedDate = currentTime.toLocaleDateString();

  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-6 md:py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        
        {/* Footer Left: Logo or Company Name */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold">JOSSHUA BALITA</h2>
          <p className="text-sm text-gray-400">© 2024 All rights reserved.</p>
        </div>

        {/* Footer Center: Current Date and Time */}
        <div className="text-center">
          <p className="text-lg">{formattedDate}</p>
          <p className="text-lg">{formattedTime}</p>
        </div>

        {/* Footer Right: LinkedIn and GitHub Social Icons */}
        <div className="flex justify-center md:justify-end space-x-6">
          <a
            href="https://linkedin.com/in/josshua-balita"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition duration-300"
          >
            <i className="fab fa-linkedin-in text-2xl"></i>
          </a>
          <a
            href="https://github.com/josshuabalita"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition duration-300"
          >
            <i className="fab fa-github text-2xl"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
