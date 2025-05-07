"use client"

import { motion } from "framer-motion"
import { Linkedin, Mail, Github, Heart } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="py-8 border-t border-gray-800 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-6 md:mb-0"
          >
            <Link href="/" className="text-2xl font-bold animate-text-shimmer">
              Anas Alrzg
            </Link>
            <p className="text-gray-400 mt-2">Fullstack Webentwickler & Datenanalyst</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-end"
          >
            <div className="flex space-x-4 mb-4">
              <a
                href="https://www.linkedin.com/in/anas-alrzg-75182b286/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-neon-purple transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:anasalrzg10@gmail.com"
                className="text-gray-400 hover:text-neon-purple transition-colors"
                aria-label="E-Mail"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-neon-purple transition-colors" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </div>
            <p className="text-gray-400 text-sm flex items-center">
              Mit <Heart className="h-3 w-3 mx-1 text-neon-purple" /> erstellt in {new Date().getFullYear()}
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
