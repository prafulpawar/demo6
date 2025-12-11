import { Users, Heart, Zap } from "lucide-react"
import Link from "next/link"

const volunteers = [
  {
    name: "Rajesh Patel",
    role: "Head of Seva",
    image: "👨‍💼",
    contribution: "10+ years of service",
  },
  {
    name: "Priya Sharma",
    role: "Community Organizer",
    image: "👩‍💼",
    contribution: "Event coordination & planning",
  },
  {
    name: "Arun Kumar",
    role: "Spiritual Mentor",
    image: "👨‍🎓",
    contribution: "Vedic classes & counseling",
  },
  {
    name: "Deepa Verma",
    role: "Youth Program Lead",
    image: "👩‍🏫",
    contribution: "Education & mentorship",
  },
  {
    name: "Vikram Singh",
    role: "Maintenance Coordinator",
    image: "👨‍🔧",
    contribution: "Facility management",
  },
  {
    name: "Anita Gupta",
    role: "Cultural Events Manager",
    image: "👩‍🎨",
    contribution: "Festival celebrations",
  },
]

export default function VolunteersSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Volunteers</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Meet the dedicated individuals who give their time and heart to serve our community
          </p>
        </div>

        {/* Volunteer Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {volunteers.map((volunteer, idx) => (
            <div
              key={idx}
              className="bg-card rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-border text-center group"
            >
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">{volunteer.image}</div>
              <h3 className="text-xl font-bold text-primary mb-1">{volunteer.name}</h3>
              <p className="text-accent font-semibold mb-3">{volunteer.role}</p>
              <p className="text-sm text-foreground/70">{volunteer.contribution}</p>
            </div>
          ))}
        </div>

        {/* Volunteer Call to Action */}
        <div className="bg-gradient-to-r from-secondary/20 to-primary/10 rounded-2xl p-12 border border-border">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-primary mb-1">Make a Difference</h4>
                <p className="text-sm text-foreground/70">Contribute your skills and time to serve the community</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-primary mb-1">Join Our Team</h4>
                <p className="text-sm text-foreground/70">Connect with like-minded individuals in the community</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-primary mb-1">Grow Spiritually</h4>
                <p className="text-sm text-foreground/70">Develop yourself while serving others (Seva)</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/volunteer"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors"
            >
              Become a Volunteer
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
