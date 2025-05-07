"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  Briefcase,
  GraduationCap,
  Code,
  Languages,
  User,
  Calendar,
  MapPin,
  Award,
  CheckCircle,
  Phone,
} from "lucide-react"

export default function AboutSection() {
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
      tasks: [
        "Durchführung von Einkaufstests mit anschließender Rückmeldung in Einzelgesprächen",
        "Kontrolle von Mindesthaltbarkeitsdaten (MHD)",
        "Regalpflege und Warenverräumung",
      ],
    },
  ]

  const education = [
    {
      degree: "Wirtschaftsinformatik (7 Semester)",
      institution: "Hochschule Esslingen Wirtschaftsinformatik",
      period: "09/2021 - Aktuell",
      location: "Esslingen",
      grade: "Gut",
    },
    {
      degree: "Kaufmännisches Berufskolleg GN",
      institution: "Kaufmännische Schule 1",
      period: "09/2019 - 07/2021",
      location: "Stuttgart",
      grade: "1,9",
    },
    {
      degree: "Realschulabschluss GN",
      institution: "Jörg-Ratgeb-Schule",
      period: "09/2016 - 07/2019",
      location: "Stuttgart",
      grade: "2,0",
    },
  ]

  const skills = [
    { name: "Java", level: 70 },
    { name: "SQL", level: 85 },
    { name: "CSS", level: 80 },
    { name: "Databricks", level: 80 },
    { name: "HTML", level: 80 },
    { name: "Power BI", level: 70 },
    { name: "JavaScript", level: 70 },
    { name: "MS-Office", level: 95 },
  ]

  const languages = [
    { name: "Arabisch", level: "Muttersprachler", flag: "🇸🇦", percent: 100 },
    { name: "Deutsch", level: "C2", flag: "🇩🇪", percent: 95 },
    { name: "Englisch", level: "B1-B2", flag: "🇬🇧", percent: 75 },
    { name: "Italienisch", level: "A2", flag: "🇮🇹", percent: 40 },
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

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 neon-text-purple">Über mich</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Motivierter Wirtschaftsinformatiker mit Fokus auf Datenanalyse, Webentwicklung sowie Projektmanagement und
            Logistikplanung. Ich liebe es, Ideen in durchdachten Code, effiziente Prozesse und strukturierte Abläufe zu
            verwandeln.
          </p>
        </motion.div>

        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid grid-cols-5 mb-8">
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span className="hidden sm:inline">Wer ich bin</span>
            </TabsTrigger>
            <TabsTrigger value="experience" className="flex items-center gap-2">
              <Briefcase className="h-4 w-4" />
              <span className="hidden sm:inline">Erfahrung</span>
            </TabsTrigger>
            <TabsTrigger value="education" className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4" />
              <span className="hidden sm:inline">Ausbildung</span>
            </TabsTrigger>
            <TabsTrigger value="skills" className="flex items-center gap-2">
              <Code className="h-4 w-4" />
              <span className="hidden sm:inline">Skills</span>
            </TabsTrigger>
            <TabsTrigger value="languages" className="flex items-center gap-2">
              <Languages className="h-4 w-4" />
              <span className="hidden sm:inline">Sprachen</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <Card className="bg-gray-900/60 border-gray-800">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 neon-text-cyan flex items-center gap-2">
                    <User className="h-5 w-5" /> Persönliches Profil
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Als Wirtschaftsinformatiker verbinde ich technisches Know-how mit betriebswirtschaftlichem
                    Verständnis. Ich bin motiviert, kontaktfreudig und offen für Neues. Seit 2015 in Deutschland,
                    entwickle ich mich kontinuierlich weiter und bin inspiriert vom Austausch mit Menschen.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-neon-purple" />
                      <span>Esslingen am Neckar</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-neon-purple" />
                      <a href="tel:+491781083079" className="hover:text-neon-cyan transition-colors">
                        +49 178 108 3079
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/60 border-gray-800">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 neon-text-cyan flex items-center gap-2">
                    <Award className="h-5 w-5" /> Erfolge
                  </h3>
                  <div className="space-y-4">
                    {achievements.map((achievement, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle className="h-5 w-5 text-neon-purple mt-0.5" />
                        <div>
                          <h4 className="font-semibold">{achievement.title}</h4>
                          <p className="text-sm text-gray-400">{achievement.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="experience">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-900/60 p-6 rounded-xl border border-gray-800"
            >
              <h3 className="text-xl font-bold mb-6 neon-text-cyan flex items-center gap-2">
                <Briefcase className="h-5 w-5" /> Berufliche Erfahrung
              </h3>

              <div className="timeline-container">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
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
                        <p className="neon-text-purple">{exp.company}</p>
                        <p className="text-sm text-gray-400 flex items-center">
                          <MapPin className="h-3 w-3 mr-1" />
                          {exp.location}
                        </p>
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
            </motion.div>
          </TabsContent>

          <TabsContent value="education">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-900/60 p-6 rounded-xl border border-gray-800"
            >
              <h3 className="text-xl font-bold mb-6 neon-text-cyan flex items-center gap-2">
                <GraduationCap className="h-5 w-5" /> Ausbildung
              </h3>

              <div className="timeline-container">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="timeline-item"
                  >
                    <div className="flex flex-col">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-semibold flex items-center">
                          {edu.degree}
                          <Badge className="ml-2 bg-neon-purple/20 text-neon-purple border-neon-purple/30">
                            {edu.grade}
                          </Badge>
                        </h4>
                        <div className="flex items-center text-sm text-gray-400">
                          <Calendar className="h-3 w-3 mr-1" />
                          {edu.period}
                        </div>
                      </div>
                      <div className="flex justify-between items-start">
                        <p className="neon-text-purple">{edu.institution}</p>
                        <p className="text-sm text-gray-400 flex items-center">
                          <MapPin className="h-3 w-3 mr-1" />
                          {edu.location}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="skills">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-900/60 p-6 rounded-xl border border-gray-800"
            >
              <h3 className="text-xl font-bold mb-6 neon-text-cyan flex items-center gap-2">
                <Code className="h-5 w-5" /> Technische Fähigkeiten
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="mb-2 flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-neon-cyan">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="skill-bar h-full"
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8">
                <h4 className="font-semibold mb-4">Weitere Kompetenzen</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Kommunikation mit Kunden",
                    "Teambildung",
                    "Wirtschaftskompetenz",
                    "Rechnungswesen",
                    "Agile Methoden",
                    "Scrum",
                    "Kanban",
                    "Projektmanagement",
                    "Datenanalyse",
                    "Databricks",
                    "ETL-Prozesse",
                    "Logistikplanung",
                  ].map((skill, index) => (
                    <Badge key={index} className="bg-gray-800 hover:bg-gray-700 transition-colors">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="languages">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-900/60 p-6 rounded-xl border border-gray-800"
            >
              <h3 className="text-xl font-bold mb-6 neon-text-cyan flex items-center gap-2">
                <Languages className="h-5 w-5" /> Sprachkenntnisse
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {languages.map((language, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex flex-col"
                  >
                    <div className="mb-2 flex justify-between items-center">
                      <span className="font-medium flex items-center gap-2">
                        <span className="text-xl">{language.flag}</span>
                        {language.name}
                      </span>
                      <Badge
                        className={`${
                          language.level === "Muttersprachler"
                            ? "bg-neon-purple/20 text-neon-purple border-neon-purple/30"
                            : "bg-gray-800"
                        }`}
                      >
                        {language.level}
                      </Badge>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${language.percent}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="skill-bar h-full"
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
