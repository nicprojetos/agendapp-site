"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { optimizeEmailContent } from "@/ai/flows/optimize-email-content-flow";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Sparkles } from "lucide-react";

const formSchema = z.object({
  customerInteractions: z.string().min(20, "Forneça mais detalhes sobre as interações com o cliente."),
  currentEmailContent: z.string().min(20, "Forneça mais detalhes sobre o conteúdo do e-mail atual."),
  professionalPreferences: z.string().min(10, "Descreva seu idioma e tom preferidos."),
});

export default function AiAssistantPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [suggestion, setSuggestion] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      customerInteractions: "O feedback recente dos clientes indica que nossos e-mails promocionais são muito genéricos. As taxas de cliques caíram 15% no último mês. Alguns usuários mencionaram que preferem ofertas personalizadas com base em seu histórico de compras.",
      currentEmailContent: "Assunto: Grandes Economias Aqui! ✨\n\nOlá,\n\Não perca nossa promoção sazonal! Ganhe até 50% de desconto em serviços selecionados. Agende agora antes que seja tarde demais!\n\nAtenciosamente,\nA Equipe",
      professionalPreferences: "Um tom amigável, mas profissional. Queremos construir um relacionamento de longo prazo com nossos clientes, então a linguagem deve ser calorosa e convidativa. Use emojis com moderação.",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setSuggestion(null);
    try {
      const result = await optimizeEmailContent(values);
      setSuggestion(result.suggestedPrompts);
    } catch (error) {
      console.error("Falha ao obter sugestões:", error);
      // Handle error, maybe show a toast
    }
    setIsLoading(false);
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardHeader>
              <CardTitle>Otimizador de Conteúdo de E-mail com IA</CardTitle>
              <CardDescription>
                Forneça os detalhes abaixo e nosso assistente de IA sugerirá prompts para melhorar o engajamento do seu e-mail.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="customerInteractions"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Resumo das Interações com o Cliente</FormLabel>
                    <FormControl>
                      <Textarea placeholder="ex: feedback, taxas de cliques, etc." {...field} rows={5} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="currentEmailContent"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Conteúdo do E-mail Atual</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Cole o rascunho do seu e-mail atual aqui." {...field} rows={7} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="professionalPreferences"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Idioma e Tom Preferidos</FormLabel>
                    <FormControl>
                      <Textarea placeholder="ex: amigável, profissional, espirituoso..." {...field} rows={3} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              <Button type="submit" disabled={isLoading} className="w-full">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Otimizando...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-4 w-4" />
                    Otimizar Conteúdo
                  </>
                )}
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>
      <Card className="flex flex-col">
        <CardHeader>
          <CardTitle>Prompts Sugeridos</CardTitle>
          <CardDescription>
            Use estes prompts gerados por IA para criar conteúdo de e-mail mais eficaz.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-1">
          {isLoading ? (
            <div className="flex h-full items-center justify-center">
              <div className="flex flex-col items-center gap-2 text-muted-foreground">
                <Loader2 className="h-8 w-8 animate-spin" />
                <span>Gerando sugestões...</span>
              </div>
            </div>
          ) : suggestion ? (
            <div className="prose prose-sm prose-p:leading-relaxed prose-pre:bg-background prose-pre:border prose-pre:rounded-md max-w-none text-foreground whitespace-pre-wrap rounded-md bg-muted/50 p-4 font-mono text-sm h-full">
                {suggestion}
            </div>
          ) : (
            <div className="flex h-full items-center justify-center rounded-lg border-2 border-dashed">
              <div className="text-center text-muted-foreground">
                <p>Suas sugestões aparecerão aqui.</p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  
