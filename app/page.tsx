import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Services from "@/components/services"
import TempleIntro from "@/components/temple-intro"
import DeityCarousel from "@/components/deity-carousel"
import HowWeHelp from "@/components/how-we-help"
import VolunteersSection from "@/components/volunteers-section"
import Achievements from "@/components/achievements"
import EventsGallery from "@/components/events-gallery"
import FestivalGallery from "@/components/festival-gallery"
import UpcomingEvents from "@/components/upcoming-events"
import Testimonials from "@/components/testimonials"
import CallToAction from "@/components/call-to-action"
import Footer from "@/components/footer"

export const metadata = {
  title: "Shri Mandir Hindu Temple Canada | Spiritual Community",
  description:
    "Experience spirituality with Shri Mandir, Canada's leading Hindu temple. Daily darshan, vedic classes, community events, and spiritual guidance for the Indian community.",
  keywords:
    "Hindu temple Canada, Indian community, Mandir, spiritual guidance, Vedic classes, temple events, Shiva, Ganesha, Durga",
  openGraph: {
    title: "Shri Mandir Hindu Temple Canada",
    description:
      "Join our thriving spiritual community for daily worship, cultural celebrations, and spiritual growth.",
    type: "website",
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <TempleIntro />
      <DeityCarousel />
      <Services />
      <HowWeHelp />
      <VolunteersSection />
      <Achievements />
      <FestivalGallery />
      <EventsGallery />
      <UpcomingEvents />
      <Testimonials />
      <CallToAction />
      <Footer />
    </main>
  )
}
