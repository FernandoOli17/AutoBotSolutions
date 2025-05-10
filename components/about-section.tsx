import type React from "react"
import { Clock, CheckCircle, TrendingUp } from "lucide-react"

export function AboutSection() {
  return (
    <section id="sobre" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Sobre Nós</h2>

          <p className="text-lg text-muted-foreground mb-12">
            Somos especialistas em automação de processos usando Python e n8n. Nossa missão é transformar tarefas
            manuais em processos automatizados, permitindo que você e sua equipe foquem no que realmente importa.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Clock className="h-8 w-8 text-primary" />}
              title="Economia de Tempo"
              description="Reduza em até 80% o tempo gasto em tarefas repetitivas"
            />

            <FeatureCard
              icon={<CheckCircle className="h-8 w-8 text-primary" />}
              title="Precisão"
              description="Elimine erros humanos com automação precisa"
            />

            <FeatureCard
              icon={<TrendingUp className="h-8 w-8 text-primary" />}
              title="Produtividade"
              description="Aumente a produtividade da sua equipe"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border/40">
      <div className="flex flex-col items-center text-center">
        <div className="mb-4">{icon}</div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}
