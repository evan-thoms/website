// pages/index.js
import { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Technologies from '../components/Technologies'
import Experience from '../components/Experience'
import Projects from '../components/Projects'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div>
      <Head>
        <title>Evan Thoms - Developer</title>
        <meta name="description" content="Full-stack developer and AI enthusiast" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <Technologies />
      <Experience />
      <Projects />
    </div>
  )
}