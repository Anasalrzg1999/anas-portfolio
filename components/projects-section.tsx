"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BarChart, Car, GitMerge, Database, Code, LineChart } from "lucide-react"

export default function ProjectsSection() {
  const projects = [
    {
      title: "Dashboard zur Analyse von Lieferkettenkennzahlen",
      description:
        "Entwicklung eines umfassenden Dashboards zur Analyse von Lieferantenkennzahlen bei Mercedes-Benz mit Databricks. Das Dashboard ermöglicht die Echtzeitüberwachung kritischer KPIs und unterstützt datengestützte Entscheidungen.",
      icon: BarChart,
      technologies: ["Databricks", "SQL", "Python", "Data Visualization"],
    },
    {
      title: "Parkplatzsteuerungssystem",
      description:
        "Entwicklung eines Parkplatzsteuerungssystems für 50 Fahrzeuge inklusive grafischer Benutzeroberfläche. Das System optimiert die Parkplatznutzung und verbessert die Benutzererfahrung durch intuitive Visualisierung.",
      icon: Car,
      technologies: ["Java", "GUI", "Datenbanken", "Algorithmen"],
    },
    {
      title: "Einführung agiler Methoden",
      description:
        "Implementierung agiler Methoden und Sprintkoordination mit Scrum-Techniken. Durch die Einführung dieser Methoden konnte die Projektdurchlaufzeit verkürzt und die Teamzusammenarbeit verbessert werden.",
      icon: GitMerge,
      technologies: ["Scrum", "Agile", "Jira", "Kanban"],
    },
    {
      title: "Power BI Dashboards zur Visualisierung betrieblicher Kennzahlen",
      description:
        "Entwicklung von Power BI Dashboards zur Visualisierung wichtiger betrieblicher Kennzahlen. Die Dashboards bieten einen übersichtlichen Einblick in relevante Geschäftsdaten und unterstützen datengestützte Entscheidungsprozesse.",
      icon: Database,
      technologies: ["Power BI", "Datenvisualisierung", "Dashboards", "Reporting"],
    },
    {
      title: "GenAI-Vorträge und Ideation-Workshops",
      description:
        "Planung und Durchführung von Vorträgen zu Generativer KI und Ideation-Workshops. Diese Workshops haben neue Anwendungsfälle für KI im Unternehmenskontext identifiziert und zur Digitalisierungsstrategie beigetragen.",
      icon: LineChart,
      technologies: ["GenAI", "Workshop-Moderation", "Präsentation", "Innovation"],
    },
    {
      title: "Portfolio-Website",
      description:
        "Entwicklung einer statischen Portfolio-Website zur Präsentation beruflicher Erfahrungen und technischer Fähigkeiten. Die Website wurde mit grundlegenden Webtechnologien umgesetzt und bietet ein ansprechendes, responsives Design.",
      icon: Code,
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 neon-text-purple">Projekte</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Eine Auswahl meiner wichtigsten Projekte und Erfolge
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-gray-900/60 border border-gray-800 hover:border-neon-purple/30 transition-all duration-300">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-2 rounded-full bg-neon-purple/10">
                      <project.icon className="h-5 w-5 text-neon-purple" />
                    </div>
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="bg-gray-800/50 text-gray-300 border-gray-700">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
