import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-primary mb-4 text-balance">Contact Us</h1>
          <p className="text-base md:text-lg text-foreground/70 max-w-2xl">
            Reach out to us for inquiries, volunteering opportunities, or to connect with our community.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Form */}
          <div className="bg-card rounded-xl p-6 md:p-8 shadow-lg border border-border">
            <h2 className="text-2xl font-bold text-primary mb-6">Send us a Message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-sm md:text-base"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-sm md:text-base"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Phone</label>
                <input
                  type="tel"
                  placeholder="Your phone number"
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-sm md:text-base"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
                <textarea
                  placeholder="Your message"
                  rows={5}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background resize-none text-sm md:text-base"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-bold hover:bg-primary/90 transition-colors text-sm md:text-base"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-card rounded-xl p-6 md:p-8 shadow-lg border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-primary mb-1 text-base md:text-lg">Phone</h3>
                  <a
                    href="tel:+1234567890"
                    className="text-foreground/70 hover:text-accent text-sm md:text-base break-all"
                  >
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 md:p-8 shadow-lg border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-primary mb-1 text-base md:text-lg">Email</h3>
                  <a
                    href="mailto:info@shrimandir.ca"
                    className="text-foreground/70 hover:text-accent text-sm md:text-base break-all"
                  >
                    info@shrimandir.ca
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 md:p-8 shadow-lg border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-1 text-base md:text-lg">Location</h3>
                  <p className="text-foreground/70 text-sm md:text-base">
                    123 Temple Avenue
                    <br />
                    Toronto, ON M1A 1A1
                    <br />
                    Canada
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 md:p-8 shadow-lg border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-1 text-base md:text-lg">Hours</h3>
                  <p className="text-foreground/70 text-sm md:text-base">
                    Daily: 6:00 AM - 9:00 PM
                    <br />
                    Closed: Mondays (Office Hours)
                    <br />
                    24/7 Prayer Available
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
