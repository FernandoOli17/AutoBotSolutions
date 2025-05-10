import Link from "next/link"
import { BotIcon as Robot, Mail, Phone, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2 text-2xl font-semibold mb-6">
              <Robot className="h-6 w-6 text-primary" />
              <span>AutoBot Solutions</span>
            </div>
            <p className="text-gray-400 max-w-md">
              Transformamos tarefas manuais em processos automatizados, economizando tempo e reduzindo erros.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <span>(11) 99999-9999</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <span>contato@autobot.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Instagram className="h-5 w-5 text-primary" />
                <span>@autobot.solutions</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Links Rápidos</h3>
            <div className="grid gap-3">
              <Link href="#inicio" className="hover:text-primary transition-colors">
                Início
              </Link>
              <Link href="#servicos" className="hover:text-primary transition-colors">
                Serviços
              </Link>
              <Link href="#sobre" className="hover:text-primary transition-colors">
                Sobre
              </Link>
              <Link href="#contato" className="hover:text-primary transition-colors">
                Contato
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© 2024 AutoBot Solutions. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
