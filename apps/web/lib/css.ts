import { Inter, JetBrains_Mono } from "next/font/google"

export const inter = Inter({
  subsets: ["latin"],
  weight: [
    "400", // normal
    "500", // medium
    "700", // bold
    "800", // extrabold
  ],
  variable: "--font-inter",
})

export const jb = JetBrains_Mono({
  weight: [
    "400", // normal
    "500", // medium
    "700", // bold
  ],
  subsets: ["latin"],
})
