/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          50: '#F5F0E6',
          100: '#E6D5BD',
          500: '#8B4513',
          700: '#5D2E1F'
        }
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
        'display': ['Poppins', 'ui-sans-serif', 'system-ui']
      },
      backgroundImage: {
        'coffee-gradient': 'linear-gradient(135deg, #8B4513 0%, #5D2E1F 100%)'
      },
      animation: {
        'coffee-steam': 'steam 2s ease-in-out infinite'
      },
      keyframes: {
        steam: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      }
    }
  },
  plugins: []
}