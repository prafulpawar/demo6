import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Heart, Users, Zap, Award, ArrowRight } from "lucide-react"

const opportunities = [
  {
    icon: Heart,
    title: "Temple Maintenance",
    description: "Help maintain our sacred spaces and keep the temple clean and beautiful.",
    commitment: "4-8 hours/month",
    skills: "Dedication, attention to detail",
  },
  {
    icon: Users,
    title: "Event Organization",
    description: "Assist in planning and executing community events and celebrations.",
    commitment: "8-12 hours/month",
    skills: "Organization, communication",
  },
  {
    icon: Zap,
    title: "Community Outreach",
    description: "Help engage new members and spread awareness about our temple.",
    commitment: "6-10 hours/month",
    skills: "Communication, enthusiasm",
  },
  {
    icon: Award,
    title: "Youth Program Leadership",
    description: "Guide and mentor young members in spiritual and cultural education.",
    commitment: "6-12 hours/month",
    skills: "Leadership, patience, knowledge",
  },
]

const steps = [
  {
    number: "1",
    title: "Express Interest",
    description: "Fill out the volunteer form below with your details and preferred areas",
  },
  {
    number: "2",
    title: "Meet the Team",
    description: "We'll contact you to discuss opportunities and answer any questions",
  },
  {
    number: "3",
    title: "Get Trained",
    description: "Receive orientation and training for your chosen volunteer role",
  },
  {
    number: "4",
    title: "Start Serving",
    description: "Begin your seva journey and grow spiritually with our community",
  },
]

export default function VolunteerPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Join Our Seva Program</h1>
          <p className="text-lg text-foreground/70 max-w-2xl">
            Discover meaningful ways to serve your community and deepen your spiritual practice through volunteering.
          </p>
        </div>
      </section>

      {/* Why Volunteer Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-accent/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Why Volunteer?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card rounded-xl p-6 shadow-lg border border-border text-center">
              <div className="text-4xl mb-3">🙏</div>
              <h3 className="font-bold text-primary mb-2">Spiritual Growth</h3>
              <p className="text-sm text-foreground/70">Deepen your connection to divine service</p>
            </div>
            <div className="bg-card rounded-xl p-6 shadow-lg border border-border text-center">
              <div className="text-4xl mb-3">👥</div>
              <h3 className="font-bold text-primary mb-2">Community</h3>
              <p className="text-sm text-foreground/70">Connect with like-minded individuals</p>
            </div>
            <div className="bg-card rounded-xl p-6 shadow-lg border border-border text-center">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="font-bold text-primary mb-2">Purpose</h3>
              <p className="text-sm text-foreground/70">Make a meaningful impact in our community</p>
            </div>
            <div className="bg-card rounded-xl p-6 shadow-lg border border-border text-center">
              <div className="text-4xl mb-3">⭐</div>
              <h3 className="font-bold text-primary mb-2">Leadership</h3>
              <p className="text-sm text-foreground/70">Develop new skills and expertise</p>
            </div>
          </div>
        </div>
      </section>

      {/* Opportunities */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-12">Volunteer Opportunities</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {opportunities.map((opp, idx) => {
              const Icon = opp.icon
              return (
                <div key={idx} className="bg-card rounded-xl p-8 shadow-lg border border-border">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-primary">{opp.title}</h3>
                  </div>
                  <p className="text-foreground/70 mb-4">{opp.description}</p>
                  <div className="space-y-2 border-t border-border pt-4">
                    <div>
                      <p className="text-xs font-semibold text-foreground/60">Time Commitment</p>
                      <p className="text-foreground/80 text-sm">{opp.commitment}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-foreground/60">Required Skills</p>
                      <p className="text-foreground/80 text-sm">{opp.skills}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* How to Get Started */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">How to Get Started</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="bg-card rounded-xl p-6 shadow-lg border border-border text-center h-full">
                  <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    {step.number}
                  </div>
                  <h3 className="font-bold text-primary mb-2">{step.title}</h3>
                  <p className="text-sm text-foreground/70">{step.description}</p>
                </div>
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-accent" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sign Up Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto bg-card rounded-xl p-8 shadow-lg border border-border">
          <h2 className="text-2xl font-bold text-primary mb-6">Express Your Interest</h2>
          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">First Name</label>
                <input
                  type="text"
                  placeholder="John"
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Last Name</label>
                <input
                  type="text"
                  placeholder="Doe"
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Phone</label>
              <input
                type="tel"
                placeholder="+1 (555) 123-4567"
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Preferred Area(s)</label>
              <select className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background">
                <option>Select an opportunity</option>
                <option>Temple Maintenance</option>
                <option>Event Organization</option>
                <option>Community Outreach</option>
                <option>Youth Program Leadership</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Availability</label>
              <textarea
                placeholder="Tell us about your availability and interests..."
                rows={3}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-bold hover:bg-primary/90 transition-colors"
            >
              Submit Volunteer Application
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  )
}
