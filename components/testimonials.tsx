import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Rajesh Sharma",
    role: "Community Member",
    content:
      "Shri Mandir has become my spiritual home. The community is welcoming and the teachings are transformative.",
    rating: 5,
  },
  {
    name: "Priya Patel",
    role: "Volunteer",
    content: "Serving here through Seva programs has deepened my spiritual practice. Highly recommended!",
    rating: 5,
  },
  {
    name: "Amit Kumar",
    role: "Long-time Member",
    content: "The events and classes are well-organized. A true sanctuary for spiritual growth.",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">Community Voices</h2>
          <p className="text-foreground/70">What our members say about their experience</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-card rounded-xl p-8 shadow-lg border border-border">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                ))}
              </div>

              <p className="text-foreground/80 mb-6 leading-relaxed italic">"{testimonial.content}"</p>

              <div className="border-t border-border pt-4">
                <p className="font-bold text-primary">{testimonial.name}</p>
                <p className="text-sm text-foreground/60">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
