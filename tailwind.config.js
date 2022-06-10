module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        andada: ["Andada Pro", "serif"],
        cormorant: ["Cormorant", "serif"],
        encode: ["Encode Sans", "sans-serif"],
        hahmlet: ["Hahmlet", "serif"],
        lato: ["Lato", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
        poppins: ["Poppins", "sans-serif"],
        robotoslab: ["Roboto Slab", "serif"],
        titillium: ["Titillium Web", "sans-serif"],
        nanum: ["Nanum Gothic Coding", "monospace"],
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0d6efd",
          paste: "#2abba7",
          secondary: "#6c757d",
          success: "#198754",
          danger: "#dc3545",
          warning: "#ffc107",
          info: "#0dcaf0",
          light: "#f8f9fa",
          dark: "#212529",
          darkLight: "#343a40",
          text: "#212529",
          background: "#ffffff",
          border: "#dee2e6",
          accent: "#37cdbe",
          neutral: "#3d4451",
          error: "#dc3545",
          "base-100": "#ffffff",
        },
      },
    ],
  },

  plugins: [require("daisyui")],
};
