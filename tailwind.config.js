/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    screens: {
      xs: "475px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        // Base — warm off-whites
        ivory: "#FBFAF7",
        pearl: "#F4F1EA",
        mist: "#EDE9E0",
        // Gold family
        gold: {
          DEFAULT: "#C9A24B",
          light: "#E4C878",
          soft: "#D8B96A",
          deep: "#A9852F",
        },
        // Bronze family
        bronze: {
          DEFAULT: "#8C6A3F",
          light: "#B08A57",
          deep: "#5E4527",
        },
        // Ink — near-black text
        ink: {
          DEFAULT: "#221D16",
          soft: "#4A4239",
          muted: "#8A8175",
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"Jost"', "system-ui", "sans-serif"],
      },
      letterSpacing: {
        luxe: "0.28em",
        wide2: "0.18em",
      },
      boxShadow: {
        luxe: "0 30px 60px -25px rgba(94, 69, 39, 0.35)",
        card: "0 20px 45px -22px rgba(34, 29, 22, 0.28)",
        glow: "0 0 40px -8px rgba(201, 162, 75, 0.45)",
      },
      backgroundImage: {
        "gold-line":
          "linear-gradient(90deg, transparent, #C9A24B 20%, #E4C878 50%, #C9A24B 80%, transparent)",
        "gold-sheen":
          "linear-gradient(135deg, #A9852F 0%, #E4C878 30%, #C9A24B 55%, #8C6A3F 100%)",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        floaty: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        kenburns: {
          "0%": { transform: "scale(1) translate(0, 0)" },
          "100%": { transform: "scale(1.12) translate(-1.5%, -1.5%)" },
        },
      },
      animation: {
        shimmer: "shimmer 6s linear infinite",
        floaty: "floaty 6s ease-in-out infinite",
        marquee: "marquee 32s linear infinite",
        kenburns: "kenburns 22s ease-out infinite alternate",
      },
    },
  },
  plugins: [],
};
