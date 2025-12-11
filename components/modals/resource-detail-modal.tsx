"use client"

import { X } from "lucide-react"

interface ResourceDetailModalProps {
  isOpen: boolean
  onClose: () => void
  resource: {
    title: string
    type: string
    category: string
    excerpt: string
    author: string
  }
}

export default function ResourceDetailModal({ isOpen, onClose, resource }: ResourceDetailModalProps) {
  if (!isOpen) return null

  const fullContent = {
    "Understanding the Bhagavad Gita":
      "The Bhagavad Gita is a 700-verse Hindu scripture that is part of the ancient Indian epic Mahabharata. This sacred text contains a conversation between Prince Arjuna and his charioteer Krishna on the battlefield of Kurukshetra. The Gita addresses the moral dilemmas and life lessons that are relevant even in today's modern world.\n\nKey teachings include:\n\n• Karma Yoga (Yoga of Action): Understanding the importance of duty without attachment to results\n• Bhakti Yoga (Yoga of Devotion): The path of loving devotion to the Divine\n• Jnana Yoga (Yoga of Knowledge): The pursuit of spiritual wisdom and self-realization\n• Dhyana Yoga (Yoga of Meditation): The practice of meditation for spiritual growth\n\nThe Bhagavad Gita teaches that true knowledge comes from understanding the nature of consciousness and the interconnection between all beings. It emphasizes the importance of dharma (righteousness) and encourages individuals to fulfill their duties while maintaining equanimity in success and failure.",
    "Meditation Techniques for Beginners":
      "Meditation is an ancient practice that has been used for thousands of years to cultivate inner peace, clarity, and spiritual growth. For beginners, starting a meditation practice can seem overwhelming, but with patience and consistency, anyone can develop a rewarding meditation routine.\n\nGetting Started:\n\n• Find a quiet, comfortable space where you won't be disturbed\n• Sit in a comfortable position with your spine upright\n• Start with just 5-10 minutes daily and gradually increase duration\n• Choose a consistent time, preferably early morning\n\nBasic Techniques:\n\n1. Breath Awareness Meditation: Focus on the natural rhythm of your breathing\n2. Mantra Meditation: Repeat a sacred mantra or affirmation\n3. Body Scan Meditation: Systematically relax each part of your body\n4. Loving-Kindness Meditation: Cultivate compassion for yourself and others\n\nBenefits of regular meditation include reduced stress, improved concentration, better emotional regulation, and deeper spiritual connection. Remember, there is no 'perfect' meditation – simply showing up with intention is what matters.",
  }

  const content =
    fullContent[resource.title as keyof typeof fullContent] ||
    resource.excerpt +
      "\n\nThis is the full detailed content for this resource. Continue reading for more in-depth information about this topic."

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-card rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-primary/10 border-b border-accent/20 px-6 py-4 flex items-center justify-between sticky top-0">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-primary">{resource.title}</h2>
            <p className="text-sm text-foreground/60 mt-1">
              {resource.type} • {resource.category}
            </p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-muted rounded-lg transition-colors flex-shrink-0">
            <X className="w-6 h-6 text-foreground" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="bg-primary/5 rounded-lg p-4 mb-6 border border-accent/20">
            <p className="text-sm text-foreground/70">
              <span className="font-semibold">By:</span> {resource.author}
            </p>
          </div>

          <div className="prose prose-sm max-w-none text-foreground/80 space-y-4">
            {content.split("\n\n").map((paragraph, idx) => (
              <p key={idx} className="leading-relaxed whitespace-pre-wrap">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="mt-8 pt-6 border-t border-border flex gap-3">
            <button className="flex-1 bg-primary text-primary-foreground py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
              Download PDF
            </button>
            <button className="flex-1 bg-muted text-foreground py-2 rounded-lg font-semibold hover:bg-muted/80 transition-colors">
              Share Resource
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
