import { Heart, Users, Book, Gift, TrendingUp, Lightbulb } from "lucide-react"

const helpItems = [
  {
    icon: Heart,
    title: "Spiritual Guidance",
    description:
      "Personal spiritual counseling and guidance from experienced spiritual leaders to help you find inner peace",
  },
  {
    icon: Users,
    title: "Community Support",
    description: "Join a welcoming community that celebrates your cultural heritage and provides mutual support",
  },
  {
    icon: Book,
    title: "Educational Programs",
    description: "Vedic classes, Sanskrit learning, and spiritual wisdom sessions for all age groups",
  },
  {
    icon: Gift,
    title: "Life Event Blessings",
    description: "Sacred rituals and ceremonies for marriages, births, festivals, and important milestones",
  },
  {
    icon: TrendingUp,
    title: "Personal Growth",
    description: "Meditation sessions, yoga classes, and wellness programs for holistic development",
  },
  {
    icon: Lightbulb,
    title: "Cultural Preservation",
    description: "Keeping our traditions alive through educational programs and cultural celebrations",
  },
]

export default function HowWeHelp() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-secondary/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">How We Can Help You</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            We are committed to supporting your spiritual journey, cultural connection, and personal well-being
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {helpItems.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="group bg-card rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-border hover:border-accent/50 hover:bg-accent/5"
              >
                <div className="w-14 h-14 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
