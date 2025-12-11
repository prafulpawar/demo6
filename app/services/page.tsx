import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Clock, Users, Heart, Book, Hand as Hands, Music, Flame, Compass } from "lucide-react"

const allServices = [
  {
    icon: Clock,
    title: "Daily Darshan",
    description: "Morning (6:00 AM - 9:00 AM) and Evening (6:00 PM - 9:00 PM) divine viewing.",
    details: "Experience the presence of the deity through daily worship rituals.",
  },
  {
    icon: Heart,
    title: "Spiritual Counseling",
    description: "One-on-one guidance from experienced spiritual leaders and gurus.",
    details: "Navigate life challenges through spiritual wisdom and ancient teachings.",
  },
  {
    icon: Book,
    title: "Vedic Classes",
    description: "Structured learning of Sanskrit, Vedas, and Hindu philosophy.",
    details: "Classes available for all ages from beginner to advanced levels.",
  },
  {
    icon: Users,
    title: "Community Events",
    description: "Festivals, celebrations, and gatherings throughout the year.",
    details: "Connect with fellow devotees during major Hindu festivals and celebrations.",
  },
  {
    icon: Hands,
    title: "Seva Programs",
    description: "Volunteer opportunities in temple maintenance, cooking, and community service.",
    details: "Serve others and grow spiritually through meaningful seva work.",
  },
  {
    icon: Music,
    title: "Bhajan & Kirtan",
    description: "Devotional chanting and sacred music sessions.",
    details: "Weekly sessions of devotional singing to purify the mind and soul.",
  },
  {
    icon: Flame,
    title: "Puja Services",
    description: "Personalized ritual performances for special occasions.",
    details: "Customized pujas for weddings, births, anniversaries, and more.",
  },
  {
    icon: Compass,
    title: "Meditation Sessions",
    description: "Guided meditation practices for inner peace and spiritual growth.",
    details: "Learn traditional meditation techniques to enhance your spiritual practice.",
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Temple Services</h1>
          <p className="text-lg text-foreground/70 max-w-2xl">
            Comprehensive spiritual and community services designed to support your spiritual journey and enhance your
            connection with the divine and our community.
          </p>
        </div>
      </section>

      {/* Quick Service Summary */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-accent/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6">
          <div className="bg-card rounded-lg p-6 shadow border border-border text-center">
            <p className="text-3xl font-bold text-primary">8+</p>
            <p className="text-sm text-foreground/70 mt-2">Core Services</p>
          </div>
          <div className="bg-card rounded-lg p-6 shadow border border-border text-center">
            <p className="text-3xl font-bold text-primary">7 days</p>
            <p className="text-sm text-foreground/70 mt-2">Open Weekly</p>
          </div>
          <div className="bg-card rounded-lg p-6 shadow border border-border text-center">
            <p className="text-3xl font-bold text-primary">3000+</p>
            <p className="text-sm text-foreground/70 mt-2">Members Served</p>
          </div>
          <div className="bg-card rounded-lg p-6 shadow border border-border text-center">
            <p className="text-3xl font-bold text-primary">50+</p>
            <p className="text-sm text-foreground/70 mt-2">Events/Year</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {allServices.map((service, idx) => {
              const Icon = service.icon
              return (
                <div
                  key={idx}
                  className="bg-card rounded-xl p-8 shadow-lg border border-border hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-7 h-7 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-primary mb-1">{service.title}</h3>
                      <p className="text-sm text-accent font-semibold mb-2">{service.description}</p>
                      <p className="text-foreground/70 text-sm mb-4">{service.details}</p>
                      <button className="text-accent hover:text-primary font-semibold text-sm transition-colors">
                        Learn More →
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-7xl mx-auto bg-card rounded-xl p-8 shadow-lg border border-border text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">Ready to Experience Our Services?</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto mb-6">
            Contact us today to book your service or learn more about our spiritual programs.
          </p>
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-bold hover:bg-primary/90 transition-colors">
            Book a Service
          </button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
