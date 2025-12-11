import Link from "next/link"

export default function CallToAction() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-12 md:p-16 text-center text-primary-foreground shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Join Our Community?</h2>
          <p className="text-lg mb-8 opacity-90">
            Begin your spiritual journey with us. Become a member, volunteer, or simply connect with our sacred space.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/membership"
              className="inline-block bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-primary-foreground transition-colors"
            >
              Become a Member
            </Link>
            <Link
              href="/volunteer"
              className="inline-block bg-primary-foreground/20 border-2 border-primary-foreground text-primary-foreground px-8 py-3 rounded-full font-bold hover:bg-primary-foreground/30 transition-colors"
            >
              Volunteer
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
