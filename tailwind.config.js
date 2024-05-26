// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{html,js}", "./src/**/*.html"],
  theme: {
    extend: {
      colors: {
       'customGreen': '#7DFFAF',
        'black': '#000',
        'white': '#E5F2E3',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      borderRadius: {
        'xl': '32px',
        '2xl': '120px',
      },
      lineHeight: {
        'extra-loose': '2.4',
      },
      letterSpacing: {
        'custom': '0.32px',
        'wider-custom': '5.28px',
      },
      maxWidth: {
        '630': '630px',
        '870': '870px',
        '836': '836px',
      },
      backgroundColor: {
        'custom-green': '#7DFFAF',
        'custom-disabled': 'rgba(24, 145, 13, 0.30)',
        'custom-active': '#18910D',
      },
      width: {
        'custom': '1140px'
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['disabled', 'active'],
      cursor: ['disabled'],
    },
  },
  plugins: [],
}
