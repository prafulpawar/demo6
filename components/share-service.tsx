"use client"

import { Share2, MessageCircle, Send, Mail, Link2 } from "lucide-react"
import { useState } from "react"

interface ShareServiceProps {
  serviceName: string
  serviceDescription: string
}

export default function ShareService({ serviceName, serviceDescription }: ShareServiceProps) {
  const [showOptions, setShowOptions] = useState(false)
  const [copied, setCopied] = useState(false)

  const shareUrl = typeof window !== "undefined" ? window.location.href : ""
  const shareText = `Check out ${serviceName}: ${serviceDescription}`

  const handleShare = async (platform: string) => {
    let url = ""

    switch (platform) {
      case "whatsapp":
        url = `https://wa.me/?text=${encodeURIComponent(shareText + " " + shareUrl)}`
        break
      case "facebook":
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`
        break
      case "twitter":
        url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`
        break
      case "email":
        url = `mailto:?subject=${encodeURIComponent(serviceName)}&body=${encodeURIComponent(shareText + " " + shareUrl)}`
        break
      case "copy":
        navigator.clipboard.writeText(`${shareText} ${shareUrl}`)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
        setShowOptions(false)
        return
    }

    if (url) {
      window.open(url, "_blank")
      setShowOptions(false)
    }
  }

  return (
    <div className="relative inline-block w-full">
      <button
        onClick={() => setShowOptions(!showOptions)}
        className="w-full flex items-center justify-center gap-2 bg-accent text-accent-foreground py-2 px-4 rounded-lg font-semibold hover:bg-accent/90 transition-all duration-200 shadow-sm hover:shadow-md"
      >
        <Share2 className="w-4 h-4" />
        Share
      </button>

      {showOptions && (
        <div className="absolute bottom-full right-0 mb-3 bg-card border border-border rounded-xl shadow-xl p-3 z-40 w-56 backdrop-blur-sm">
          <div className="space-y-2">
            <button
              onClick={() => handleShare("whatsapp")}
              className="w-full text-left px-4 py-3 hover:bg-primary/10 rounded-lg transition-colors text-sm font-medium flex items-center gap-3 text-foreground hover:text-primary"
            >
              <MessageCircle className="w-4 h-4 text-green-500" />
              WhatsApp
            </button>
            <button
              onClick={() => handleShare("facebook")}
              className="w-full text-left px-4 py-3 hover:bg-primary/10 rounded-lg transition-colors text-sm font-medium flex items-center gap-3 text-foreground hover:text-primary"
            >
              <Send className="w-4 h-4 text-blue-500" />
              Facebook
            </button>
            <button
              onClick={() => handleShare("twitter")}
              className="w-full text-left px-4 py-3 hover:bg-primary/10 rounded-lg transition-colors text-sm font-medium flex items-center gap-3 text-foreground hover:text-primary"
            >
              <Share2 className="w-4 h-4 text-sky-500" />
              Twitter
            </button>
            <button
              onClick={() => handleShare("email")}
              className="w-full text-left px-4 py-3 hover:bg-primary/10 rounded-lg transition-colors text-sm font-medium flex items-center gap-3 text-foreground hover:text-primary"
            >
              <Mail className="w-4 h-4 text-orange-500" />
              Email
            </button>
            <div className="border-t border-border my-2"></div>
            <button
              onClick={() => handleShare("copy")}
              className="w-full text-left px-4 py-3 hover:bg-primary/10 rounded-lg transition-colors text-sm font-medium flex items-center gap-3 text-foreground hover:text-primary"
            >
              <Link2 className="w-4 h-4 text-accent" />
              {copied ? "Copied!" : "Copy Link"}
            </button>
          </div>
        </div>
      )}

      {showOptions && <div className="fixed inset-0 z-30 md:hidden" onClick={() => setShowOptions(false)}></div>}
    </div>
  )
}
