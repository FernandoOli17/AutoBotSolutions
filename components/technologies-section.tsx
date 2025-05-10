import type React from "react"
import { PythonIcon, RobotIcon, DatabaseIcon, CloudIcon, GoogleIcon, CodeIcon } from "@/components/tech-icons"

export function TechnologiesSection() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Tecnologias que Utilizamos</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 max-w-4xl mx-auto">
          <TechItem icon={<PythonIcon />} name="Python" />
          <TechItem icon={<RobotIcon />} name="n8n" />
          <TechItem icon={<DatabaseIcon />} name="SQL" />
          <TechItem icon={<CloudIcon />} name="AWS" />
          <TechItem icon={<GoogleIcon />} name="Google Cloud" />
          <TechItem icon={<CodeIcon />} name="APIs" />
        </div>
      </div>
    </section>
  )
}

function TechItem({ icon, name }: { icon: React.ReactNode; name: string }) {
  return (
    <div className="bg-card rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border/40">
      <div className="flex flex-col items-center text-center gap-3">
        <div className="text-primary">{icon}</div>
        <span className="font-medium">{name}</span>
      </div>
    </div>
  )
}
