"use client";

import Link from 'next/link';
import { Button } from "@/components/ui/button";
import Logo from '@/components/Logo';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Clock, Users, Calendar, DollarSign, BarChart2 } from 'lucide-react';
import Image from 'next/image';

const features = [
  {
    icon: <Calendar className="h-6 w-6 text-primary" />,
    title: "Agenda Online Inteligente",
    description: "Seus clientes veem seus horários livres e agendam com um clique, sem precisar te ligar."
  },
  {
    icon: <Users className="h-6 w-6 text-primary" />,
    title: "Página Personalizada",
    description: "Tenha um link exclusivo com sua foto, serviços e horários para divulgar seu trabalho profissionalmente."
  },
  {
    icon: <CheckCircle className="h-6 w-6 text-primary" />,
    title: "Confirmações Automáticas",
    description: "Reduza o não comparecimento com lembretes e confirmações enviadas por e-mail ou SMS."
  },
  {
    icon: <DollarSign className="h-6 w-6 text-primary" />,
    title: "Pagamentos Integrados",
    description: "Receba pagamentos online via Pix ou cartão de crédito no momento do agendamento."
  },
  {
    icon: <BarChart2 className="h-6 w-6 text-primary" />,
    title: "Relatórios Simplificados",
    description: "Acompanhe seus atendimentos e faturamento de forma fácil e intuitiva."
  },
  {
    icon: <Clock className="h-6 w-6 text-primary" />,
    title: "Área do Cliente",
    description: "Seus clientes podem gerenciar seus próprios agendamentos, ver histórico e remarcar."
  }
];

export default function Home() {

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Logo />
          <nav className="flex items-center gap-4">
            <Button variant="ghost" asChild>
              <Link href="/login">
                Entrar
              </Link>
            </Button>
            <Button asChild>
              <Link href="/register">
                Criar Conta Grátis
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="container py-12 md:py-24 text-center">
          <Badge className="mb-4">Para autônomos e freelancers</Badge>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl font-headline">
            Menos tempo agendando, mais tempo atendendo.
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
            O AgendApp organiza sua agenda, automatiza lembretes e facilita pagamentos. Dedique-se ao que você faz de melhor, nós cuidamos do resto.
          </p>
          <Button size="lg" className="mt-8" asChild>
            <Link href="/register">
              Comece a usar gratuitamente
            </Link>
          </Button>
        </section>

        <section className="container py-12 md:py-24">
            <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
                    A solução completa para o seu negócio
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    Cansado de gerenciar agendamentos pelo WhatsApp e perder clientes por desorganização? O AgendApp foi criado para você.
                </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.title} className="flex flex-col items-start p-6 bg-white rounded-lg shadow-sm border">
                    <div className="flex items-center justify-center bg-primary/10 rounded-full p-3 mb-4">
                        {feature.icon}
                    </div>
                    <h3 className="text-lg font-bold">{feature.title}</h3>
                    <p className="mt-2 text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
        </section>

        <section className="bg-white py-12 md:py-24">
          <div className="container grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
                Perfeito para todos os tipos de profissionais
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Se você é esteticista, cabeleireiro, personal trainer, professor, psicólogo, consultor ou freelancer, o AgendApp se adapta às suas necessidades, permitindo que você ofereça uma experiência de agendamento impecável.
              </p>
              <ul className="mt-6 space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-green-500" /> Diga adeus à agenda de papel.</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-green-500" /> Profissionalize sua imagem.</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-green-500" /> Aumente sua produtividade.</li>
              </ul>
            </div>
            <div>
              <Image src="https://placehold.co/600x400.png" alt="Profissionais usando o AgendApp" width={600} height={400} className="rounded-lg shadow-lg" data-ai-hint="happy professionals" />
            </div>
          </div>
        </section>

        <section className="container py-12 md:py-24">
          <Card className="mx-auto max-w-4xl shadow-lg bg-primary text-primary-foreground text-center p-8 md:p-12">
            <CardHeader>
              <CardTitle className="font-headline text-3xl md:text-4xl">
                Pronto para transformar sua gestão de agendamentos?
              </CardTitle>
              <CardDescription className="mt-4 text-primary-foreground/90 text-lg">
                Junte-se a milhares de profissionais que já otimizaram seu tempo e aumentaram seu faturamento com o AgendApp.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/register">
                  Criar minha conta agora
                </Link>
              </Button>
            </CardContent>
          </Card>
        </section>

      </main>

      <footer className="py-6 md:px-8 md:py-0 border-t bg-background">
        <div className="container flex flex-col items-center justify-center gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground">
            Feito com ❤️ para profissionais autônomos. © AgendApp 2024.
          </p>
        </div>
      </footer>
    </div>
  );
}

const Badge = ({className, ...props}: React.HTMLAttributes<HTMLDivElement>) => (
    <div className="inline-block rounded-full bg-primary/
