import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Mail, Phone } from "lucide-react"

const leaders = [
  {
    name: "Swami Ananda",
    role: "Head Priest & Spiritual Director",
    experience: "40+ years",
    expertise: "Vedic Philosophy, Rituals, Meditation",
    email: "swami@shrimandir.ca",
    phone: "+1 (555) 111-1111",
  },
  {
    name: "Guru Dev Sharma",
    role: "Senior Spiritual Counselor",
    experience: "30+ years",
    expertise: "Yoga, Ayurveda, Spiritual Counseling",
    email: "guru@shrimandir.ca",
    phone: "+1 (555) 111-2222",
  },
  {
    name: "Priya Devi",
    role: "Community Coordinator",
    experience: "15+ years",
    expertise: "Event Management, Community Building",
    email: "priya@shrimandir.ca",
    phone: "+1 (555) 111-3333",
  },
  {
    name: "Rajesh Kumar",
    role: "Vedic Scholar",
    experience: "20+ years",
    expertise: "Vedas, Sanskrit, Ancient Texts",
    email: "rajesh@shrimandir.ca",
    phone: "+1 (555) 111-4444",
  },
  {
    name: "Ananya Singh",
    role: "Yoga & Wellness Instructor",
    experience: "12+ years",
    expertise: "Classical Yoga, Meditation, Wellness",
    email: "ananya@shrimandir.ca",
    phone: "+1 (555) 111-5555",
  },
  {
    name: "Arjun Patel",
    role: "Board Member & Treasurer",
    experience: "25+ years",
    expertise: "Temple Management, Finance, Administration",
    email: "arjun@shrimandir.ca",
    phone: "+1 (555) 111-6666",
  },
]

export default function LeadersPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Spiritual Leaders & Community Team</h1>
          <p className="text-lg text-foreground/70 max-w-2xl">
            Meet our experienced team of spiritual guides, counselors, and community leaders dedicated to serving our
            temple and strengthening our faith community.
          </p>
        </div>
      </section>

      {/* Leadership Message */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-accent/5">
        <div className="max-w-7xl mx-auto bg-card rounded-xl p-8 shadow-lg border border-border">
          <h2 className="text-2xl font-bold text-primary mb-4">Our Vision</h2>
          <p className="text-foreground/70">
            Our leadership team is committed to preserving Hindu traditions, nurturing spiritual growth, and fostering a
            welcoming community where all can connect with the divine and with one another. We believe in serving with
            humility, wisdom, and dedication to our shared values.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leaders.map((leader, idx) => (
              <div
                key={idx}
                className="bg-card rounded-xl overflow-hidden shadow-lg border border-border hover:shadow-xl transition-shadow"
              >
                {/* Profile Header */}
                <div className="h-32 bg-gradient-to-r from-primary to-accent"></div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-1">{leader.name}</h3>
                  <p className="text-accent font-semibold text-sm mb-4">{leader.role}</p>

                  <div className="space-y-3 mb-6">
                    <div>
                      <p className="text-xs font-semibold text-foreground/60 uppercase">Experience</p>
                      <p className="text-foreground/80">{leader.experience}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-foreground/60 uppercase">Expertise</p>
                      <p className="text-foreground/80 text-sm">{leader.expertise}</p>
                    </div>
                  </div>

                  <div className="border-t border-border pt-4 space-y-3">
                    <a
                      href={`mailto:${leader.email}`}
                      className="flex items-center gap-2 text-sm text-accent hover:text-primary transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      {leader.email}
                    </a>
                    <a
                      href={`tel:${leader.phone}`}
                      className="flex items-center gap-2 text-sm text-accent hover:text-primary transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      {leader.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
