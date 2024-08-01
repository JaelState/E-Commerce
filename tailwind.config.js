module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./frontend/components/**/*.{js,ts,jsx,tsx,mdx}", // Add this line if needed
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'uefa-blue': '#0033A0',
        'light-blue': '#007BFF',
        'grey': '#F2F2F2',
        'dark-grey': '#4D4D4D',
        
      },
      fontFamily: {
        'sans': ['Helvetica', 'Arial', 'sans-serif'],
        'sporty': ['Bebas Neue', 'cursive'],
      },
    },
  },
  plugins: [],
};
