import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Heart } from "lucide-react"

const donationPurposes = [
  {
    title: "Annadaan (Food Service)",
    description: "Support our community meal programs providing free meals to all visitors",
    amount: "$25 feeds a family",
  },
  {
    title: "Temple Maintenance",
    description: "Help maintain and beautify our sacred spaces",
    amount: "$50 general support",
  },
  {
    title: "Building Fund",
    description: "Contribute to our expansion and renovation projects",
    amount: "$100+ for growth",
  },
  {
    title: "Spiritual Education",
    description: "Support classes and educational programs for all ages",
    amount: "$75 for programs",
  },
  {
    title: "Community Outreach",
    description: "Help us reach and support new community members",
    amount: "$40 for outreach",
  },
  {
    title: "General Seva",
    description: "Contribute to any area of need in our temple",
    amount: "Any amount helps",
  },
]

const donationAmounts = [10, 25, 50, 100, 250, 500]

export default function DonatePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Support Our Temple</h1>
          <p className="text-lg text-foreground/70 max-w-2xl">
            Your donation supports spiritual growth, community service, and the maintenance of our sacred space.
          </p>
        </div>
      </section>

      {/* Donation Purpose */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Where Your Donation Goes</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {donationPurposes.map((purpose, idx) => (
              <div key={idx} className="bg-card rounded-xl p-6 shadow-lg border border-border">
                <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-bold text-primary mb-2">{purpose.title}</h3>
                <p className="text-foreground/70 text-sm mb-4">{purpose.description}</p>
                <p className="text-accent font-semibold text-sm">{purpose.amount}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-2xl mx-auto bg-card rounded-xl p-8 shadow-lg border border-border">
          <h2 className="text-2xl font-bold text-primary mb-6">Make Your Donation</h2>

          <form className="space-y-6">
            {/* Donation Type */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-3">Donation Type</label>
              <div className="space-y-2">
                {[
                  { id: "onetime", label: "One-time Donation" },
                  { id: "monthly", label: "Monthly Recurring (2% discount)" },
                ].map((type) => (
                  <label key={type.id} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="type"
                      value={type.id}
                      defaultChecked={type.id === "onetime"}
                      className="w-4 h-4"
                    />
                    <span className="text-foreground">{type.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Purpose */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Donation Purpose</label>
              <select className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background">
                <option>General Seva</option>
                <option>Annadaan (Food Service)</option>
                <option>Temple Maintenance</option>
                <option>Building Fund</option>
                <option>Spiritual Education</option>
                <option>Community Outreach</option>
              </select>
            </div>

            {/* Amount */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-3">Amount</label>
              <div className="grid grid-cols-3 gap-2 mb-3">
                {donationAmounts.map((amount) => (
                  <button
                    key={amount}
                    type="button"
                    className="py-2 px-3 rounded-lg border-2 border-border text-foreground hover:border-primary hover:bg-primary/5 transition-colors"
                  >
                    ${amount}
                  </button>
                ))}
              </div>
              <input
                type="number"
                placeholder="Enter custom amount"
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
              />
            </div>

            {/* Personal Info */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                />
              </div>
            </div>

            {/* Payment Methods */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-3">Payment Method</label>
              <div className="space-y-2">
                {[
                  { id: "card", label: "Credit/Debit Card" },
                  { id: "etransfer", label: "e-Transfer (Canada)" },
                  { id: "bank", label: "Bank Transfer" },
                ].map((method) => (
                  <label key={method.id} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="payment"
                      value={method.id}
                      defaultChecked={method.id === "card"}
                      className="w-4 h-4"
                    />
                    <span className="text-foreground">{method.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Anonymous Option */}
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4" />
              <span className="text-sm text-foreground">Make this donation anonymous</span>
            </label>

            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-bold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
            >
              <Heart className="w-5 h-5" />
              Proceed to Donation
            </button>
          </form>

          <p className="text-center text-xs text-foreground/60 mt-6">
            Your donation is secure and will be processed securely.
            <br />
            Shri Mandir is a registered non-profit organization.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
