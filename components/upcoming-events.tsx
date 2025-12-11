import Link from "next/link"
import { Calendar, MapPin, Users, Clock } from "lucide-react"

const events = [
  {
    title: "Maha Shivaratri",
    date: "February 26, 2025",
    time: "6:00 PM - 10:00 PM",
    location: "Main Temple Hall",
    attendees: 150,
  },
  {
    title: "Weekly Satsang",
    date: "Every Sunday",
    time: "10:00 AM - 12:00 PM",
    location: "Meditation Hall",
    attendees: 80,
  },
  {
    title: "Holi Festival Celebration",
    date: "March 14, 2025",
    time: "11:00 AM - 6:00 PM",
    location: "Community Grounds",
    attendees: 300,
  },
]

export default function UpcomingEvents() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">Upcoming Events</h2>
            <p className="text-foreground/70">Join us for sacred celebrations and spiritual gatherings</p>
          </div>
          <Link
            href="/events"
            className="text-accent font-semibold hover:text-primary transition-colors hidden sm:block"
          >
            View Calendar →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {events.map((event, idx) => (
            <div
              key={idx}
              className="bg-card rounded-xl p-6 shadow-lg border-l-4 border-accent hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-bold text-primary mb-4">{event.title}</h3>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-foreground/70">
                  <Calendar className="w-5 h-5 text-accent" />
                  <span className="text-sm">{event.date}</span>
                </div>
                <div className="flex items-center gap-3 text-foreground/70">
                  <Clock className="w-5 h-5 text-accent" />
                  <span className="text-sm">{event.time}</span>
                </div>
                <div className="flex items-center gap-3 text-foreground/70">
                  <MapPin className="w-5 h-5 text-accent" />
                  <span className="text-sm">{event.location}</span>
                </div>
                <div className="flex items-center gap-3 text-foreground/70">
                  <Users className="w-5 h-5 text-accent" />
                  <span className="text-sm">{event.attendees} Expected</span>
                </div>
              </div>

              <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Register Now
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:hidden">
          <Link href="/events" className="text-accent font-semibold hover:text-primary transition-colors">
            View Full Calendar →
          </Link>
        </div>
      </div>
    </section>
  )
}
