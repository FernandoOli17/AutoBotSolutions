"use client"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Terminal } from "@/components/terminal"

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-6 md:pr-10">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tighter">
              Automatize seus processos,
              <br className="hidden sm:inline" /> diminua seus custos
            </h1>

            <p className="text-lg text-muted-foreground">
              Transformamos tarefas manuais em processos automatizados, economizando tempo e reduzindo erros.
            </p>

            <Terminal />

            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="#contato">Comece Agora</Link>
            </Button>
          </div>

          <div className="relative h-[400px] md:h-[500px] w-full">
            <Image
              src="/placeholder.svg?height=500&width=500"
              alt="Automação de Processos"
              fill
              className="object-contain animate-float rounded-xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
