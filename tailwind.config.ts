import type { Config } from "tailwindcss";
import {iconsPlugin, getIconCollections} from "@egoist/tailwindcss-icons"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    iconsPlugin({
      collections: getIconCollections(["fa6-brands", "fa6-solid"]),
    })
  ],
};

export default config;
