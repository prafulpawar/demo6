"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import EventRegistrationModal from "@/components/modals/event-registration-modal"
import { useState } from "react"
import { Calendar, MapPin, Clock, Users } from "lucide-react"

const allEvents = [
  {
    title: "Maha Shivaratri",
    date: "2025-02-26",
    time: "6:00 PM - 10:00 PM",
    location: "Main Temple Hall",
    category: "Festival",
    attendees: 150,
    description: "Night dedicated to Lord Shiva with special puja and meditation sessions.",
  },
  {
    title: "Weekly Satsang",
    date: "2025-03-02",
    time: "10:00 AM - 12:00 PM",
    location: "Meditation Hall",
    category: "Weekly",
    attendees: 80,
    description: "Spiritual discourse and devotional singing session.",
  },
  {
    title: "Holi Festival Celebration",
    date: "2025-03-14",
    time: "11:00 AM - 6:00 PM",
    location: "Community Grounds",
    category: "Festival",
    attendees: 300,
    description: "Festival of colors with traditional food, music, and celebration.",
  },
  {
    title: "Vedic Sanskrit Class",
    date: "2025-03-05",
    time: "7:00 PM - 8:30 PM",
    location: "Study Hall",
    category: "Class",
    attendees: 40,
    description: "Learn Vedic Sanskrit with our experienced instructor.",
  },
  {
    title: "Navratri Celebration",
    date: "2025-10-01",
    time: "6:00 PM - 9:00 PM",
    location: "Main Hall",
    category: "Festival",
    attendees: 250,
    description: "Nine nights of celebrating the divine feminine energy.",
  },
  {
    title: "Diwali Festival",
    date: "2025-11-01",
    time: "5:00 PM - 10:00 PM",
    location: "Temple Grounds",
    category: "Festival",
    attendees: 400,
    description: "Festival of lights with lamps, prayers, and celebrations.",
  },
]

export default function EventsPage() {
  const [filter, setFilter] = useState("All")
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState<(typeof allEvents)[0] | null>(null)

  const categories = ["All", "Festival", "Weekly", "Class"]
  const filtered = filter === "All" ? allEvents : allEvents.filter((e) => e.category === filter)

  const handleRegisterClick = (event: (typeof allEvents)[0]) => {
    setSelectedEvent(event)
    setIsModalOpen(true)
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Events Calendar</h1>
          <p className="text-lg text-foreground/70 max-w-2xl">
            Join us for sacred celebrations, spiritual gatherings, and community events throughout the year.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Filter */}
          <div className="flex gap-3 mb-12 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                  filter === cat ? "bg-primary text-primary-foreground" : "bg-muted text-foreground hover:bg-muted/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Events List */}
          <div className="space-y-6">
            {filtered.map((event, idx) => (
              <div
                key={idx}
                className="bg-card rounded-xl p-8 shadow-lg border-l-4 border-accent hover:shadow-xl transition-shadow"
              >
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <h3 className="text-2xl font-bold text-primary mb-2">{event.title}</h3>
                    <p className="text-foreground/70 mb-4">{event.description}</p>

                    <div className="space-y-2">
                      <div className="flex items-center gap-3 text-foreground/70">
                        <Calendar className="w-5 h-5 text-accent flex-shrink-0" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-3 text-foreground/70">
                        <Clock className="w-5 h-5 text-accent flex-shrink-0" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-3 text-foreground/70">
                        <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-3 text-foreground/70">
                        <Users className="w-5 h-5 text-accent flex-shrink-0" />
                        <span>{event.attendees} Expected</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <span className="inline-block bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold w-fit">
                      {event.category}
                    </span>
                    <button
                      onClick={() => handleRegisterClick(event)}
                      className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                    >
                      Register Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedEvent && (
        <EventRegistrationModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          eventTitle={selectedEvent.title}
          eventDate={selectedEvent.date}
          eventTime={selectedEvent.time}
        />
      )}

      <Footer />
    </main>
  )
}
