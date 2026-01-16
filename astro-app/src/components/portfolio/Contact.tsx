import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, MapPin, Phone, Send, Github, Linkedin } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { ScaleIn } from "@/components/ui/scale-in";

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "diogo@clairtyx.com",
      href: "mailto:diogo@clairtyx.com",
    },
    {
      icon: Phone,
      label: "Téléphone",
      value: "+33 6 79 09 41 01",
      href: "tel:+33679094101",
    },
    {
      icon: MapPin,
      label: "Localisation",
      value: "Vendée, France",
      target: "_blank",
      href: "https://www.google.com/maps/place/Vendée",
    },
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/entcorporg" },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/diogo-pires",
    },
  ];

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <FadeIn className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="px-4 py-1.5">
            Contact
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Travaillons Ensemble
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Vous avez un projet en tête ? N'hésitez pas à me contacter pour en
            discuter.
          </p>
        </FadeIn>

        {/* <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto"> */}
          {/* Contact Info */}
          <FadeIn delay={0.2} className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Informations de contact</CardTitle>
                <CardDescription>
                  Plusieurs façons de me contacter, choisissez celle qui vous
                  convient le mieux.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    target={info.target || "_self"}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted transition-colors group"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <info.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {info.label}
                      </p>
                      <p className="font-medium">{info.value}</p>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card>
              <CardHeader>
                <CardTitle>Réseaux sociaux</CardTitle>
                <CardDescription>
                  Suivez-moi sur les réseaux pour voir mes dernières actualités.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <Button key={index} variant="outline" size="lg" asChild>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                      >
                        <social.icon className="h-5 w-5" />
                      </a>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </FadeIn>

          {/* Contact Form */}
          {/* <ScaleIn delay={0.3}>
            <Card>
              <CardHeader>
                <CardTitle>Envoyez-moi un message</CardTitle>
                <CardDescription>
                  Remplissez le formulaire ci-dessous et je vous répondrai dans
                  les plus brefs délais.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Nom
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Votre nom"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="votre@email.com"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Sujet
                    </label>
                    <input
                      id="subject"
                      type="text"
                      placeholder="Sujet de votre message"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Décrivez votre projet..."
                      className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-none"
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    <Send className="h-4 w-4 mr-2" />
                    Envoyer le message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </ScaleIn> 
        </div>*/}
      </div>
    </section>
  );
}
