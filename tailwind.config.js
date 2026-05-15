const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', ...defaultTheme.fontFamily.sans]
      },
      boxShadow: {
        soft: '0 24px 80px rgba(15, 23, 42, 0.08)'
      },
      colors: {
        surface: '#0f172a',
        panel: '#111827'
      }
    }
  },
  plugins: []
};
