import { Clock, Heart, Book, Users, Hand as Hands, Music } from "lucide-react"

const services = [
  {
    icon: Clock,
    title: "Daily Darshan",
    description: "Experience the divine presence through daily worship and sacred rituals",
  },
  {
    icon: Heart,
    title: "Spiritual Counseling",
    description: "Personalized guidance from our experienced spiritual leaders",
  },
  {
    icon: Book,
    title: "Vedic Classes",
    description: "Learn from ancient wisdom through structured educational programs",
  },
  {
    icon: Users,
    title: "Community Events",
    description: "Celebrate festivals and traditions with our thriving community",
  },
  {
    icon: Hands,
    title: "Seva Programs",
    description: "Volunteer opportunities to serve and grow spiritually",
  },
  {
    icon: Music,
    title: "Bhajan & Kirtan",
    description: "Sacred chanting and devotional music sessions",
  },
]

export default function Services() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Services</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            We offer a comprehensive range of spiritual services designed to enrich your spiritual journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <div
                key={idx}
                className="bg-card rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-border"
              >
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{service.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
