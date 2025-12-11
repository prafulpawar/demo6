import { Award, Target, Users, Calendar } from "lucide-react"

const achievements = [
  {
    icon: Users,
    number: "500+",
    label: "Active Members",
  },
  {
    icon: Calendar,
    number: "50+",
    label: "Annual Events",
  },
  {
    icon: Award,
    number: "15+",
    label: "Years of Service",
  },
  {
    icon: Target,
    number: "1000+",
    label: "Lives Touched",
  },
]

export default function Achievements() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-secondary/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Achievements</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Proud milestones in building a thriving spiritual community
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, idx) => {
            const Icon = achievement.icon
            return (
              <div
                key={idx}
                className="bg-card rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border hover:border-accent hover:scale-105 text-center group"
              >
                <div className="w-16 h-16 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/30 transition-colors">
                  <Icon className="w-8 h-8 text-accent" />
                </div>
                <p className="text-4xl font-bold text-primary mb-2">{achievement.number}</p>
                <p className="text-lg text-foreground/70 font-semibold">{achievement.label}</p>
              </div>
            )
          })}
        </div>

        {/* Additional Achievements */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <div className="bg-card rounded-xl p-8 shadow-lg border border-border">
            <h3 className="text-2xl font-bold text-primary mb-4">Community Impact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold text-xl mt-1">✓</span>
                <span className="text-foreground/80">Organized 15+ major festivals annually</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold text-xl mt-1">✓</span>
                <span className="text-foreground/80">Provided emergency community support and relief</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold text-xl mt-1">✓</span>
                <span className="text-foreground/80">Youth mentorship programs with 200+ participants</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold text-xl mt-1">✓</span>
                <span className="text-foreground/80">Charitable donations to community causes</span>
              </li>
            </ul>
          </div>

          <div className="bg-card rounded-xl p-8 shadow-lg border border-border">
            <h3 className="text-2xl font-bold text-primary mb-4">Cultural Preservation</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold text-xl mt-1">✓</span>
                <span className="text-foreground/80">Established Vedic and Sanskrit education programs</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold text-xl mt-1">✓</span>
                <span className="text-foreground/80">Traditional music and arts workshops</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold text-xl mt-1">✓</span>
                <span className="text-foreground/80">Documented and shared spiritual teachings</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold text-xl mt-1">✓</span>
                <span className="text-foreground/80">Intergenerational knowledge transfer initiatives</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
