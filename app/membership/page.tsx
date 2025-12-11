import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Check } from "lucide-react"

const membershipTiers = [
  {
    name: "Individual",
    price: "$50",
    period: "/year",
    description: "Perfect for individuals seeking spiritual growth",
    benefits: ["Access to all daily services", "Event discounts", "Newsletter access", "Community directory"],
    cta: "Join Now",
  },
  {
    name: "Family",
    price: "$150",
    period: "/year",
    description: "Ideal for families wanting to grow together",
    benefits: [
      "Access for up to 5 family members",
      "All individual benefits",
      "Family event discounts",
      "Priority event registration",
      "Family counseling sessions",
    ],
    cta: "Join Now",
    featured: true,
  },
  {
    name: "Lifetime",
    price: "$1,000",
    period: "one-time",
    description: "Lifetime commitment to our community",
    benefits: [
      "Lifetime membership status",
      "All Family membership benefits",
      "Personalized spiritual guidance",
      "Priority temple services",
      "Recognition in temple records",
    ],
    cta: "Join Now",
  },
]

export default function MembershipPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Join Our Community</h1>
          <p className="text-lg text-foreground/70 max-w-2xl">
            Become a valued member and gain full access to our temple's spiritual services and community.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Why Become a Member?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-8 shadow-lg border border-border text-center">
              <div className="text-4xl mb-4">🙏</div>
              <h3 className="font-bold text-primary mb-2 text-lg">Spiritual Connection</h3>
              <p className="text-foreground/70">Deepen your spiritual practice with dedicated services and guidance</p>
            </div>
            <div className="bg-card rounded-xl p-8 shadow-lg border border-border text-center">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="font-bold text-primary mb-2 text-lg">Community Support</h3>
              <p className="text-foreground/70">Connect with families who share your values and beliefs</p>
            </div>
            <div className="bg-card rounded-xl p-8 shadow-lg border border-border text-center">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="font-bold text-primary mb-2 text-lg">Exclusive Resources</h3>
              <p className="text-foreground/70">Access premium educational and spiritual content</p>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Plans */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Membership Plans</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {membershipTiers.map((tier, idx) => (
              <div
                key={idx}
                className={`rounded-xl shadow-lg border overflow-hidden transition-transform hover:scale-105 ${
                  tier.featured
                    ? "bg-primary text-primary-foreground border-accent md:scale-105"
                    : "bg-card border-border text-foreground"
                }`}
              >
                <div className={`p-8 ${tier.featured ? "bg-primary/90" : "bg-primary/5"}`}>
                  <h3
                    className={`text-2xl font-bold mb-2 ${tier.featured ? "text-primary-foreground" : "text-primary"}`}
                  >
                    {tier.name}
                  </h3>
                  <p className={`text-sm mb-4 ${tier.featured ? "text-primary-foreground/80" : "text-foreground/70"}`}>
                    {tier.description}
                  </p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">{tier.price}</span>
                    <span className={`text-sm ${tier.featured ? "text-primary-foreground/70" : "text-foreground/70"}`}>
                      {tier.period}
                    </span>
                  </div>
                </div>

                <div className="px-8 py-6">
                  <button
                    className={`w-full py-3 rounded-lg font-bold mb-6 transition-colors ${
                      tier.featured
                        ? "bg-accent text-accent-foreground hover:bg-secondary"
                        : "bg-primary text-primary-foreground hover:bg-primary/90"
                    }`}
                  >
                    {tier.cta}
                  </button>

                  <div className="space-y-3">
                    {tier.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Check
                          className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                            tier.featured ? "text-accent-foreground" : "text-accent"
                          }`}
                        />
                        <span
                          className={`text-sm ${tier.featured ? "text-primary-foreground/90" : "text-foreground/80"}`}
                        >
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: "Can I upgrade my membership?",
                a: "Yes, you can upgrade to a higher tier at any time. The difference will be prorated.",
              },
              {
                q: "Is there a long-term commitment?",
                a: "Annual memberships are yearly. Lifetime memberships are one-time. No long-term lock-in required.",
              },
              {
                q: "Can I cancel my membership?",
                a: "Yes, members can request to pause or cancel their membership with 30 days notice.",
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept credit cards, debit cards, and e-transfer for membership payments.",
              },
            ].map((faq, idx) => (
              <div key={idx} className="bg-card rounded-xl p-6 border border-border">
                <h3 className="font-bold text-primary mb-2">{faq.q}</h3>
                <p className="text-foreground/70">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
