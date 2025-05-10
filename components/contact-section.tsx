"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export function ContactSection() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_phone: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Parâmetros para o EmailJS
      const templateParams = {
        user_name: formData.user_name,
        user_email: formData.user_email,
        user_phone: formData.user_phone,
        message: formData.message,
        to_email: "fernandodeoliveirarena@outlook.com",
        to_name: "fernando rena",
      }

      // Simulando o envio do EmailJS
      // Na implementação real, você usaria:
      // await emailjs.send('service_mc183fy', 'template_n0kpd2y', templateParams)

      // Simulando um atraso de envio
      await new Promise((resolve) => setTimeout(resolve, 1000))

      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve.",
      })

      setFormData({
        user_name: "",
        user_email: "",
        user_phone: "",
        message: "",
      })
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error)
      toast({
        title: "Erro ao enviar",
        description: "Ocorreu um erro ao enviar sua mensagem. Tente novamente.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Entre em Contato</h2>

        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                type="text"
                name="user_name"
                placeholder="Nome"
                value={formData.user_name}
                onChange={handleChange}
                required
                className="w-full"
              />
            </div>

            <div>
              <Input
                type="email"
                name="user_email"
                placeholder="Email"
                value={formData.user_email}
                onChange={handleChange}
                required
                className="w-full"
              />
            </div>

            <div>
              <Input
                type="tel"
                name="user_phone"
                placeholder="Telefone"
                value={formData.user_phone}
                onChange={handleChange}
                required
                className="w-full"
              />
            </div>

            <div>
              <Textarea
                name="message"
                placeholder="Descreva seu processo que precisa ser automatizado"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full min-h-[150px]"
              />
            </div>

            <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
              {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
