"use client"

import type React from "react"

import { useEffect } from "react"
import { FileSpreadsheet, Database, BarChart3, Network } from "lucide-react"

export function ServicesSection() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate")
        }
      })
    }, observerOptions)

    document.querySelectorAll(".service-card").forEach((card) => {
      observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Nossos Serviços</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard
            icon={<FileSpreadsheet className="h-10 w-10 text-primary" />}
            title="Automação de Planilhas"
            description="Automatize o preenchimento e processamento de planilhas Excel."
          />

          <ServiceCard
            icon={<Database className="h-10 w-10 text-primary" />}
            title="Extract de Dados"
            description="Coleta automática de dados de diversas fontes e sistemas."
          />

          <ServiceCard
            icon={<BarChart3 className="h-10 w-10 text-primary" />}
            title="Relatórios Automáticos"
            description="Geração automática de relatórios e dashboards."
          />

          <ServiceCard
            icon={<Network className="h-10 w-10 text-primary" />}
            title="Integração de Sistemas"
            description="Conecte diferentes sistemas e automatize o fluxo de dados."
          />
        </div>
      </div>
    </section>
  )
}

function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="service-card bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border/40">
      <div className="flex flex-col items-center text-center">
        <div className="mb-6 p-4 bg-primary/10 rounded-full">{icon}</div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}
