/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2D3047',
          light: '#3D4063',
          dark: '#1D2037',
        },
        accent: {
          DEFAULT: '#FF6B35',
          light: '#FF8C5F',
          dark: '#E55A24',
        },
        neutral: {
          DEFAULT: '#F8F9FA',
          dark: '#E9ECEF',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(to right, #2D3047, #3D4063)',
      },
      boxShadow: {
        'card': '0 4px 20px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 10px 30px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};