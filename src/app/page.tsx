import HeroSection from '@/components/HeroSection'
import ExperienceSection from '@/components/ExperienceSection'
import SkillsSection from '@/components/SkillsSection'
import EducationSection from '@/components/EducationSection'
import ContactSection from '@/components/ContactSection'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
      <ContactSection />
    </main>
  )
}