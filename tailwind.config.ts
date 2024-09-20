import type { Config } from "tailwindcss";

const config: Config = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        colors: {
          background: "var(--background)",
          foreground: "var(--foreground)",
        },
        animation: {
          fastskeleton: 'fastskeleton 1s ease-in-out infinite',
        },
        keyframes: {
          fastskeleton: {
            '0%, 100%': { opacity: '0.5' },
            '50%': { opacity: '0.8' },
          },
      },
    },
    plugins: [],
  }
}

export default config;
