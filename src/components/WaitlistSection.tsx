import type React from "react"

import { useState } from "react"

import { actions } from 'astro:actions';

import { toast } from "sonner";

import confetti from 'canvas-confetti';

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Check, Loader2, Mail } from "lucide-react";

export default function WishlistSection() {
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(email)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!email.trim()) {
            toast.error("Email obrigatório", {
                description: "Por favor, insira seu email para continuar.",
            });
            return;
        }

        if (!validateEmail(email)) {
            toast.error("Email inválido", {
                description: "Por favor, insira um email válido.",
            });
            return
        }

        setIsLoading(true)

        const { error } = await actions.waitlist.register(email)

        if (error) {
            toast.error("Ooops!", {
                description: "Parece que algo deu errado! por entre em contato com o time da Descompilado."
            })
        } else {
            setIsSuccess(true)
            toast.success("Sucesso!", {
                description: "Seu lugar está garantido. Em breve você receberá mais informações."
            })

            confetti()
        }

        setIsLoading(false)
    }

    if (isSuccess) {
        return (
            <section id="waitlist" className="py-24 bg-gradient-hero">
                <div className="container mx-auto px-6">
                    <div className="max-w-2xl mx-auto text-center">
                        <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-8">
                            <Check className="w-10 h-10 text-primary" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Perfeito! Você está na lista 🎉
                        </h2>
                        <p className="text-xl text-muted-foreground mb-8">
                            Obrigado por se juntar a nós. Você será um dos primeiros a saber quando
                            lançarmos os primeiros desafios de construção.
                        </p>
                        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-3">
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                            <span className="text-sm text-primary font-medium">
                                Acompanhe seu email nos próximos dias
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="waitlist" className="py-24 bg-gradient-hero">
            <div className="container mx-auto px-6">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
                        Seja o <span className="gradient-text">Primeiro</span> a Construir
                    </h2>
                    <p className="text-xl text-muted-foreground mb-12 animate-slide-up">
                        Estamos finalizando os primeiros desafios. Inscreva-se para ser o primeiro
                        a saber do lançamento e garantir seu acesso.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6 animate-scale-in"
                        style={{ animationDelay: '0.3s' }}>
                        <div className="flex flex-col gap-4 max-w-lg mx-auto">
                            <div className="relative flex-1">
                                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                                <Input
                                    type="email"
                                    placeholder="seu-melhor-email@exemplo.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="pl-12 h-14 text-lg bg-card border-border focus:border-primary"
                                    disabled={isLoading}
                                />
                            </div>
                            <Button
                                type="submit"
                                size="lg"
                                disabled={isLoading}
                                className="h-14 px-8 text-lg glow-effect hover:shadow-emerald-700 transition-all duration-300 whitespace-nowrap cursor-pointer"
                            >
                                {isLoading ? (
                                    <>
                                        <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                                        Enviando...
                                    </>
                                ) : (
                                    "Quero fazer parte!"
                                )}
                            </Button>
                        </div>
                    </form>

                    <p className="text-sm text-muted-foreground mt-8">
                        Sem spam. Apenas atualizações importantes sobre o lançamento.
                    </p>
                </div>
            </div>
        </section>
    );
}
