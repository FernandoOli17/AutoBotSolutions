export function ProcessSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Como Trabalhamos</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-primary/20 -translate-y-1/2 z-0"></div>

          <ProcessStep
            number={1}
            title="Análise"
            description="Entendemos seu processo atual e identificamos oportunidades de automação"
          />

          <ProcessStep
            number={2}
            title="Desenvolvimento"
            description="Criamos a solução personalizada para suas necessidades"
          />

          <ProcessStep
            number={3}
            title="Implementação"
            description="Implementamos e testamos a automação em seu ambiente"
          />

          <ProcessStep
            number={4}
            title="Suporte"
            description="Oferecemos suporte contínuo e melhorias quando necessário"
          />
        </div>
      </div>
    </section>
  )
}

function ProcessStep({
  number,
  title,
  description,
}: {
  number: number
  title: string
  description: string
}) {
  return (
    <div className="bg-card rounded-xl p-6 shadow-md border border-border/40 relative z-10">
      <div className="flex flex-col items-center text-center">
        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-semibold mb-4">
          {number}
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}
