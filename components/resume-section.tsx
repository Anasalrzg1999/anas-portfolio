"use client"

import { motion } from "framer-motion"
import { Briefcase, GraduationCap, MapPin, Phone, Mail, Award, Calendar } from "lucide-react"

export default function ResumeSection() {
  const experiences = [
    {
      title: "Werkstudent im Bereich Datenanalyse & Supply Chain",
      company: "Mercedes-Benz",
      period: "09/2024 - Aktuell",
      location: "Sindelfingen",
      tasks: [
        "Entwicklung von Dashboards zur Analyse von Lieferantenkennzahlen",
        "Nutzung von Databricks zur Datenmodellierung und -aufbereitung",
        "Mitarbeit in internationalen Supply-Chain-Projekten",
      ],
    },
    {
      title: "Praktikant im Bereich Digitalisierung & agile Methoden",
      company: "Mercedes-Benz",
      period: "03/2024 - 08/2024",
      location: "Sindelfingen",
      tasks: [
        "Mitarbeit in Projekten zur Digitalisierung der Lieferkette",
        "Anwendung agiler Methoden (Scrum, Sprintplanung)",
        "Erstellung interner Reports und Prozessanalysen",
        "Planung und Durchführung von GenAI-Vorträgen und Ideation-Workshops",
      ],
    },
    {
      title: "Werkstudent",
      company: "Zenjob",
      period: "08/2022 - 03/2024",
      location: "Stuttgart",
      tasks: [
        "Vielfältige Einsätze in Logistik, IT, Verkauf & Service",
        "Hohe Flexibilität und schnelle Auffassungsgabe",
        "Teamarbeit & Kundenorientierung gestärkt",
      ],
    },
    {
      title: "Werkstudent",
      company: "Malteser Hilfsdienst e.V",
      period: "10/2021 - 07/2022",
      location: "Stuttgart",
    },
    {
      title: "Teilzeit (Teamleiter)",
      company: "MD Sicherheit Firma",
      period: "03/2020 - 08/2021",
      location: "Stuttgart",
      tasks: [
        "Koordination eines kleinen Teams im Objektschutz und Veranstaltungsbereich",
        "Absprachen mit Kunden und Organisation der Mitarbeitereinsätze",
        "Kontrolle der Einhaltung von Sicherheitsvorschriften und Notfallmaßnahmen",
      ],
    },
    {
      title: "Aushilfe",
      company: "Colley Firma",
      period: "07/2017 - 02/2020",
      location: "Stuttgart",
      tasks: ["Einkaufstest (Erteilung von Rückmeldung in Einzelgesprächen)", "MHD Kontrolle", "Regalaufüller"],
    },
  ]

  const education = [
    {
      degree: "Wirtschaftsinformatik (7 Semester)",
      institution: "Hochschule Esslingen Wirtschaftsinformatik",
      period: "09/2021 - Aktuell",
      location: "Esslingen",
    },
    {
      degree: "Kaufmännisches Berufskolleg GN (1,9)",
      institution: "Kaufmännische Schule 1",
      period: "09/2019 - 07/2021",
      location: "Stuttgart",
    },
    {
      degree: "Realschulabschluss GN (2,0)",
      institution: "Jörg-Ratgeb-Schule",
      period: "09/2016 - 07/2019",
      location: "Stuttgart",
    },
  ]

  const achievements = [
    {
      title: "Datenanalyse Effizienz",
      description: "Erhöhte die Datenanalyse-Effizienz um 30% mit Databricks.",
    },
    {
      title: "Agile Methoden Einführung",
      description: "Implementierte agile Methoden zur Projektverbesserung.",
    },
    {
      title: "Parkplatzsteuerung Entwicklung",
      description: "Entwickelte Parkplatzsteuerung für 50 Fahrzeuge mit GUI.",
    },
    {
      title: "Sprint Koordination",
      description: "Koordinierte Sprints mit Scrum Master Techniken.",
    },
  ]

  const skills = [
    "Kommunikation mit Kunden",
    "Teambildung",
    "Wirtschaftskompetenz (Rechnungswesen)",
    "IT Kenntnisse: Java (gut), HTML (sehr gut), MS-Office (sehr gut), SQL (sehr gut), CSS (gut), JavaScript (gut), Power BI (gut), Java (sehr gut)",
  ]

  const languages = [
    { name: "Arabisch", level: "Muttersprachler" },
    { name: "Deutsch", level: "C2" },
    { name: "Englisch", level: "B1-B2" },
    { name: "Italienisch", level: "A2" },
  ]

  const personalInfo = {
    name: "Anas Alrzg",
    title: "Wirtschaftsinformatik",
    phone: "+4917810830379",
    email: "anasalrzg10@gmail.com",
    location: "Esslingen am Neckar",
  }

  return (
    <section id="resume" className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 neon-text-purple">Lebenslauf</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Meine berufliche Erfahrung und Ausbildung im Überblick
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-900/60 p-6 rounded-xl border border-gray-800"
          >
            <div className="flex flex-col items-center mb-6">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-2 border-neon-purple">
                <img
                  src="/placeholder.svg?height=128&width=128"
                  alt="Anas Alrzg"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold neon-text-cyan">{personalInfo.name}</h3>
              <p className="text-gray-400">{personalInfo.title}</p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-neon-purple" />
                <span>{personalInfo.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-neon-purple" />
                <span>{personalInfo.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-neon-purple" />
                <span>{personalInfo.location}</span>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-3 neon-text-cyan">Sprachen</h4>
              <ul className="space-y-2">
                {languages.map((language, index) => (
                  <li key={index} className="flex justify-between">
                    <span>{language.name}</span>
                    <span className="text-gray-400">{language.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <div className="bg-gray-900/60 p-6 rounded-xl border border-gray-800 mb-6">
              <h3 className="text-xl font-bold mb-4 flex items-center neon-text-cyan">
                <Briefcase className="mr-2 h-5 w-5" />
                Berufserfahrung
              </h3>

              <div className="timeline-container">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="timeline-item"
                  >
                    <div className="flex flex-col">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-semibold">{exp.title}</h4>
                        <div className="flex items-center text-sm text-gray-400">
                          <Calendar className="h-3 w-3 mr-1" />
                          {exp.period}
                        </div>
                      </div>
                      <div className="flex justify-between items-start mb-2">
                        <p className="text-neon-purple">{exp.company}</p>
                        <p className="text-sm text-gray-400">{exp.location}</p>
                      </div>
                      {exp.tasks && (
                        <ul className="list-disc list-inside text-sm text-gray-300 space-y-1 mt-1">
                          {exp.tasks.map((task, taskIndex) => (
                            <li key={taskIndex}>{task}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-gray-900/60 p-6 rounded-xl border border-gray-800">
              <h3 className="text-xl font-bold mb-4 flex items-center neon-text-cyan">
                <GraduationCap className="mr-2 h-5 w-5" />
                Ausbildung
              </h3>

              <div className="timeline-container">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="timeline-item"
                  >
                    <div className="flex flex-col">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-semibold">{edu.degree}</h4>
                        <div className="flex items-center text-sm text-gray-400">
                          <Calendar className="h-3 w-3 mr-1" />
                          {edu.period}
                        </div>
                      </div>
                      <div className="flex justify-between items-start">
                        <p className="text-neon-purple">{edu.institution}</p>
                        <p className="text-sm text-gray-400">{edu.location}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gray-900/60 p-6 rounded-xl border border-gray-800 mb-6"
        >
          <h3 className="text-xl font-bold mb-4 flex items-center neon-text-cyan">
            <Award className="mr-2 h-5 w-5" />
            Erfolge
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 p-4 rounded-lg border border-gray-700"
              >
                <h4 className="font-semibold mb-2 neon-text-purple">{achievement.title}</h4>
                <p className="text-sm text-gray-300">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gray-900/60 p-6 rounded-xl border border-gray-800"
        >
          <h3 className="text-xl font-bold mb-4 neon-text-cyan">Fähigkeiten</h3>

          <div className="space-y-2">
            {skills.map((skill, index) => (
              <p key={index} className="text-gray-300">
                {skill}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
