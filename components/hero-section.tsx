"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { ChevronDown } from "lucide-react"
import Image from "next/image"

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-16 overflow-hidden"
    >
      {/* Background animation */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(123,97,255,0.1)_0,rgba(0,0,0,0)_70%)]" />
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 -z-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-neon-purple"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: Math.random() * 0.5 + 0.3,
            }}
            animate={{
              y: [null, Math.random() * 100 - 50 + "%"],
              opacity: [null, Math.random() * 0.3 + 0.1, Math.random() * 0.5 + 0.3],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left lg:w-1/2"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-2 animate-text-shimmer">ANAS ALRZG</h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mb-8"
          >
            <TypeAnimation
              sequence={[
                "Fullstack Webentwickler",
                1000,
                "Datenanalyst",
                1000,
                "Fullstack Webentwickler & Datenanalyst",
                2000,
              ]}
              wrapper="h2"
              speed={50}
              className="text-xl md:text-2xl font-light neon-text-cyan"
              repeat={Number.POSITIVE_INFINITY}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-lg text-gray-300 max-w-xl mx-auto lg:mx-0"
          >
            Ich verwandle Ideen in Code und Daten in Erkenntnisse. Willkommen auf meiner interaktiven
            Portfolio-Webseite.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="lg:w-1/2 flex justify-center"
        >
          <div className="profile-image-container w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-neon-purple/30 animate-pulse-glow">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wKmOcsqRKPSVjHOIWvdU2E1sTjmuk6.png"
              alt="Anas Alrzg"
              width={500}
              height={500}
              className="w-full h-full object-cover object-top"
              priority
            />
          </div>
        </motion.div>
      </div>

      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-10 animate-bounce-slow"
        aria-label="Nach unten scrollen"
      >
        <ChevronDown className="h-10 w-10 text-neon-cyan" />
      </motion.button>
    </section>
  )
}
