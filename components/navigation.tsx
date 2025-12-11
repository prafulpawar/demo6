"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/events", label: "Events" },
    { href: "/resources", label: "Resources" },
    { href: "/leaders", label: "Leaders" },
    { href: "/member-services", label: "Member Services" },
    { href: "/volunteer", label: "Volunteer" },
    { href: "/directory", label: "Community" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="bg-primary text-primary-foreground sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-lg font-bold text-primary">
              ॐ
            </div>
            <span className="hidden sm:inline font-bold text-base md:text-lg">Shri Mandir</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1 lg:gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs lg:text-sm font-medium hover:text-accent transition-colors px-2 lg:px-0"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-2 lg:gap-4">
            <a
              href="tel:+1234567890"
              className="hidden lg:flex items-center gap-2 text-sm font-medium hover:text-accent"
            >
              <Phone className="w-4 h-4" />
              <span>+1 (555) 123-4567</span>
            </a>
            <Link
              href="/donate"
              className="bg-accent text-accent-foreground px-4 lg:px-6 py-2 rounded-full font-semibold hover:bg-secondary transition-colors text-xs lg:text-sm"
            >
              Donate
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-primary-foreground/10 touch-target"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-primary-foreground/20">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-3 px-4 text-sm font-medium hover:bg-primary-foreground/10 rounded touch-target"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 px-4 border-t border-primary-foreground/20 mt-4">
              <Link
                href="/donate"
                className="block w-full bg-accent text-accent-foreground px-6 py-3 rounded-full font-semibold text-center hover:bg-secondary mb-2 text-sm"
              >
                Donate
              </Link>
              <a href="tel:+1234567890" className="block text-sm font-medium text-center hover:text-accent py-2">
                +1 (555) 123-4567
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
