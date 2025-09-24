import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Linkedin, Github, MessageCircle, Download } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Localisation",
      value: "Sidi Aich, Gafsa – Tunisie",
      action: "Voir sur la carte",
      color: "text-primary"
    },
    {
      icon: Phone,
      title: "Téléphone",
      value: "+216 58 643 373",
      action: "Appeler",
      color: "text-accent"
    },
    {
      icon: Mail,
      title: "Email",
      value: "amin.bouallegue2002@gmail.com",
      action: "Envoyer un email",
      color: "text-secondary"
    }
  ];

  return (
    <section className="py-20 px-6 gradient-subtle">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Contact
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Restons en Contact</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Intéressé par mon profil ? N'hésitez pas à me contacter pour discuter d'opportunités 
            de stage ou de collaboration
          </p>
        </div>
        
        {/* CTA Section */}
        <div className="text-center mb-12">
          <Badge variant="default" className="mb-4 px-4 py-2 text-sm">
            🎯 Disponible pour un stage PFE
          </Badge>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8 py-3 text-lg shadow-button">
              <MessageCircle className="w-5 h-5 mr-2" />
              Discutons de votre projet
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 text-lg">
              <Download className="w-5 h-5 mr-2" />
              Télécharger mon CV
            </Button>
          </div>
        </div>
        
        {/* Contact Information */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((contact, index) => (
            <Card key={index} className="shadow-card border-card-border hover:shadow-glow transition-smooth group text-center">
              <CardHeader className="pb-3">
                <div className={`inline-flex p-3 rounded-full bg-muted ${contact.color} mx-auto mb-3 group-hover:scale-110 transition-bounce`}>
                  <contact.icon className="w-6 h-6" />
                </div>
                <CardTitle className="text-lg">{contact.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-3">
                <p className="text-foreground font-medium">{contact.value}</p>
                <Button variant="ghost" size="sm" className={`${contact.color} hover:bg-muted`}>
                  {contact.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Social Links */}
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-6">Suivez-moi</h3>
          <div className="flex justify-center gap-4">
            <Button variant="outline" size="lg" className="px-6 py-3 hover:bg-primary/10 hover:border-primary transition-smooth">
              <Linkedin className="w-5 h-5 mr-2 text-primary" />
              LinkedIn
            </Button>
            <Button variant="outline" size="lg" className="px-6 py-3 hover:bg-primary/10 hover:border-primary transition-smooth">
              <Github className="w-5 h-5 mr-2 text-primary" />
              GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;