import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ProjectsSection from "@/components/projects-section"
import ContactSection from "@/components/contact-section"
import { Suspense } from "react"
import { Loader } from "@/components/ui/loader"

export default function Home() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <HeroSection />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <AboutSection />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <ProjectsSection />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <ContactSection />
      </Suspense>
    </>
  )
}
