"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Linkedin, Mail, Send, Github, ExternalLink, Phone } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 relative bg-gradient-to-t from-gray-950 to-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 neon-text-purple">Kontakt</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Interesse an einer Zusammenarbeit? Kontaktiere mich gerne!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gray-900/60 p-6 rounded-xl border border-gray-800"
          >
            <h3 className="text-xl font-bold mb-6 neon-text-cyan">Schreib mir eine Nachricht</h3>

            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Dein Name"
                    className="bg-gray-800/50 border-gray-700 focus-visible:ring-neon-purple"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    E-Mail
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="deine@email.de"
                    className="bg-gray-800/50 border-gray-700 focus-visible:ring-neon-purple"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Betreff
                </label>
                <Input
                  id="subject"
                  placeholder="Worum geht es?"
                  className="bg-gray-800/50 border-gray-700 focus-visible:ring-neon-purple"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Nachricht
                </label>
                <Textarea
                  id="message"
                  placeholder="Deine Nachricht..."
                  rows={5}
                  className="bg-gray-800/50 border-gray-700 focus-visible:ring-neon-purple"
                />
              </div>
              <Button className="w-full bg-neon-purple hover:bg-neon-purple/80">
                <Send className="mr-2 h-4 w-4" />
                Nachricht senden
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between"
          >
            <div className="bg-gray-900/60 p-6 rounded-xl border border-gray-800 mb-6">
              <h3 className="text-xl font-bold mb-6 neon-text-cyan">Kontaktinformationen</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-neon-purple/10">
                    <Phone className="h-5 w-5 text-neon-purple" />
                  </div>
                  <div>
                    <h4 className="font-medium">Telefon</h4>
                    <a href="tel:+491781083079" className="text-gray-400 hover:text-neon-cyan transition-colors">
                      +49 178 108 3079
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-neon-purple/10">
                    <Mail className="h-5 w-5 text-neon-purple" />
                  </div>
                  <div>
                    <h4 className="font-medium">E-Mail</h4>
                    <a
                      href="mailto:anasalrzg10@gmail.com"
                      className="text-gray-400 hover:text-neon-cyan transition-colors"
                    >
                      anasalrzg10@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-neon-purple/10">
                    <Linkedin className="h-5 w-5 text-neon-purple" />
                  </div>
                  <div>
                    <h4 className="font-medium">LinkedIn</h4>
                    <a
                      href="https://www.linkedin.com/in/anas-alrzg-75182b286/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-neon-cyan transition-colors flex items-center gap-1"
                    >
                      Anas Alrzg
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-neon-purple/10">
                    <Github className="h-5 w-5 text-neon-purple" />
                  </div>
                  <div>
                    <h4 className="font-medium">GitHub</h4>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-neon-cyan transition-colors flex items-center gap-1"
                    >
                      github.com/anasalrzg
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900/60 p-6 rounded-xl border border-gray-800"
            >
              <h3 className="text-xl font-bold mb-4 neon-text-cyan">Lass uns zusammenarbeiten</h3>
              <p className="text-gray-300 mb-4">
                Ich bin offen für neue Projekte, Herausforderungen und Möglichkeiten zur Zusammenarbeit. Kontaktiere
                mich gerne für weitere Informationen.
              </p>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  className="border-neon-purple text-neon-purple hover:bg-neon-purple/10"
                  asChild
                >
                  <a href="https://www.linkedin.com/in/anas-alrzg-75182b286/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
                <Button variant="outline" className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10" asChild>
                  <a href="mailto:anasalrzg10@gmail.com">
                    <Mail className="mr-2 h-4 w-4" />
                    E-Mail
                  </a>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
