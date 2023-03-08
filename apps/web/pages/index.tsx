import Head from "next/head"

import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { Footer } from "@/components/Footer"
import { GradientBackground } from "@/components/GradientBackground"

export default function Home() {
  return (
    <>
      <Head>
        <title>Account.js - Account Abstraction JavaScript SDK</title>
        <meta
          name="description"
          content="Account Abstraction JavaScript SDK. Create a account abstraction dapp with ease."
        />
      </Head>
      <GradientBackground />
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </>
  )
}
