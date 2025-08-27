import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ideas from: Voice-to-Code Generator',
  description: '[
  {
    "title": "Voice-Powered App Builder",
    "one_liner": "Create fully functional applications simply by speaking your ideas.",
    "why_now": "The rise of no-code and low-code platforms makes it timely to incorporate voice technology for a more intuitive development experience.",
    "novel_mechanism": "Utilizes advanced natural language processing to interpret complex commands and generate an app structure instantly.",
    "ai_stack": [
      "GPT-4",
      "Speech Recognition",
      "RAG",
      "Vector Databases"
    ],
    "edge_use_cases": [
      "Rapid prototyping of apps from ideas shared in meetings",
      "Education tool for teaching coding concepts",
      "Assistive tech for developers with disabilities"
    ],
    "blue_ocean": true,
    "execution_72h": {
      "mvp_scope": [
        "Basic app creation from voice",
        "User account management",
        "Template selection"
      ],
      "tools": [
        "React",
        "Firebase",
        "Twilio",
        "OpenAI API"
      ],
      "data_bootstrap": [
        "public app development frameworks",
        "crowdsourced ideas"
      ],
      "risk": [
        "accuracy of voice recognition",
        "user security concerns"
      ],
      "mitigation": [
        "implement thorough voice training",
        "secure user data with encryption"
      ]
    },
    "go_to_market": {
      "hooks": [
        "Transform your voice into an app in minutes!",
        "Unleash your imagination without coding."
      ],
      "channels": [
        "ProductHunt",
        "Discord communities",
        "YouTube demos"
      ],
      "pricing": {
        "free": "limited features/app usage",
        "pro": "$19/month for advanced tools",
        "business": "$99/month for teams"
      }
    },
    "moat": [
      "network effects through user-generated templates",
      "partnerships with educational institutions",
      "strong community engagement"
    ],
    "scores": {
      "novelty": 8,
      "72h_feasibility": 9,
      "revenue_potential": 7,
      "defensibility": 6
    },
    "total_score": 30,
    "reasoning": "Unlike existing products, this seamlessly integrates voice and code in a way that appeals to non-technical users, thereby opening a new market segment."
  }
]',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>{children}</body>
    </html>
  )
}