/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'heading': ['IBM Plex Sans', 'sans-serif'],  // IBM Plex Sans for body text
        'sans': ['Space Grotesk', 'sans-serif'],  // Space Grotesk for headings
      },
      
      colors: {
        primary: '#0C1F3F',
        accent: '#F5C518',
        darkGray: '#1C1C1C',
        lightGray: '#D1D1D1',
        white: '#FFFFFF',
      },

      fontSize: {
        'sm': ['14px', { lineHeight: '1.5', letterSpacing: '0.01em' }],
        'base': ['16px', { lineHeight: '1.75', letterSpacing: '0.01em' }],
        'lg': ['18px', { lineHeight: '1.75', letterSpacing: '0.015em' }],
        'xl': ['20px', { lineHeight: '2', letterSpacing: '0.02em' }],
        '2xl': ['24px', { lineHeight: '2', letterSpacing: '0.025em' }],
        '3xl': ['30px', { lineHeight: '1.2', letterSpacing: '0.03em' }],
        '4xl': ['36px', { lineHeight: '1.1', letterSpacing: '0.03em' }],
        '5xl': ['48px', { lineHeight: '1.1', letterSpacing: '0.03em' }],
        '6xl': ['64px', { lineHeight: '1.1', letterSpacing: '0.04em' }],
      },

      keyframes: {
        glowBlue: {
          '0%, 100%': { boxShadow: '0 0 6px 3px rgba(59, 130, 246, 0.5)' },
          '50%': { boxShadow: '0 0 10px 5px rgba(59, 130, 246, 1)' },
        },
        glowDarkBlue: {
          '0%, 100%': { boxShadow: '0 0 4px 2px rgba(12, 31, 63, 0.3)' },
          '50%': { boxShadow: '0 0 8px 4px rgba(12, 31, 63, 0.7)' }, 
        },
        glowGreen: {
          '0%, 100%': { boxShadow: '0 0 6px 3px rgba(16, 185, 129, 0.5)' },
          '50%': { boxShadow: '0 0 10px 5px rgba(16, 185, 129, 1)' },
        },
        typewriter: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        blink: {
          '50%': { borderColor: 'transparent' },
        },
        float: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
          '100%': { transform: 'translateY(0)' },
        },
      },

      animation: {
        glowBlue: 'glowBlue 3s infinite ease-in-out',
        glowDarkBlue: 'glowDarkBlue 3s infinite ease-in-out',
        glowGreen: 'glowGreen 3s infinite ease-in-out',
        typewriter: 'typewriter 4s steps(14) forwards, blink 1s step-end infinite',
        floatSlow: 'float 5s ease-in-out infinite',
        floatMedium: 'float 4s ease-in-out infinite',
        floatFast: 'float 3s ease-in-out infinite',
      },

      spacing: {
        '4': '1rem',
        '8': '2rem',
        '16': '4rem',
        '32': '8rem',
      },

      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          md: '4rem',
          lg: '5rem',
          xl: '6rem',
        },
      },
    },
  },
  plugins: [],
};
