"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, BotIcon as Robot } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Navbar() {
  const [lastScroll, setLastScroll] = useState(0)
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset

      if (currentScroll <= 0) {
        setScrollDirection(null)
        return
      }

      if (currentScroll > lastScroll && !scrollDirection) {
        setScrollDirection("down")
      } else if (currentScroll < lastScroll && scrollDirection) {
        setScrollDirection("up")
      }

      setLastScroll(currentScroll)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScroll, scrollDirection])

  return (
    <nav
      className={`navbar fixed w-full top-0 z-50 bg-background/95 backdrop-blur-sm ${
        scrollDirection === "down" ? "scroll-down" : scrollDirection === "up" ? "scroll-up" : ""
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center h-20">
        <div className="flex items-center gap-2 text-primary font-semibold text-xl">
          <Robot className="h-6 w-6" />
          <span>AutoBot Solutions</span>
        </div>

        <ul className="hidden md:flex gap-8">
          <li>
            <Link href="#inicio" className="font-medium hover:text-primary transition-colors">
              Início
            </Link>
          </li>
          <li>
            <Link href="#servicos" className="font-medium hover:text-primary transition-colors">
              Serviços
            </Link>
          </li>
          <li>
            <Link href="#sobre" className="font-medium hover:text-primary transition-colors">
              Sobre
            </Link>
          </li>
          <li>
            <Link href="#contato" className="font-medium hover:text-primary transition-colors">
              Contato
            </Link>
          </li>
        </ul>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col gap-6 mt-8">
              <Link href="#inicio" className="text-lg font-medium hover:text-primary transition-colors">
                Início
              </Link>
              <Link href="#servicos" className="text-lg font-medium hover:text-primary transition-colors">
                Serviços
              </Link>
              <Link href="#sobre" className="text-lg font-medium hover:text-primary transition-colors">
                Sobre
              </Link>
              <Link href="#contato" className="text-lg font-medium hover:text-primary transition-colors">
                Contato
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}
