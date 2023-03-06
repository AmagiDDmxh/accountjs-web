import "../styles/globals.css"
import type { AppProps } from "next/app"
import Head from "next/head"
import { Analytics } from "@vercel/analytics/react"
import { inter } from "@/lib/css"

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inter.variable} font-sans`}>
      <Head>
        <link rel="icon" href="/static/favicon.ico" sizes="any" />
        <link rel="icon" href="/static/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/static/apple-touch-icon.png" />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </main>
  )
}
