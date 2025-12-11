import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4">Shri Mandir</h3>
            <p className="text-sm opacity-90">
              A sacred Hindu temple serving the Canadian community with spiritual guidance and cultural celebrations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="opacity-80 hover:opacity-100">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/events" className="opacity-80 hover:opacity-100">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/resources" className="opacity-80 hover:opacity-100">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/contact" className="opacity-80 hover:opacity-100">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+1234567890">+1 (555) 123-4567</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@shrimandir.ca">info@shrimandir.ca</a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>123 Temple Ave, Toronto, ON M1A 1A1</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="opacity-80 hover:opacity-100">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="opacity-80 hover:opacity-100">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="opacity-80 hover:opacity-100">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-75">
          <p>&copy; 2025 Shri Mandir Hindu Temple. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
