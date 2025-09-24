import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Brain, Shield, Cloud } from "lucide-react";

const About = () => {
  const interests = [
    { icon: Code, label: "Développement Logiciel", color: "text-primary" },
    { icon: Brain, label: "Intelligence Artificielle", color: "text-accent" },
    { icon: Shield, label: "Cybersécurité", color: "text-secondary" },
    { icon: Cloud, label: "Cloud Computing", color: "text-primary-glow" },
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            À propos
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Profil Professionnel</h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Description */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Étudiant en 3ᵉ année d'ingénierie informatique à l'<strong className="text-foreground">Institut 
              Supérieur d'Informatique et des Technologies de Communication de Sousse</strong>, 
              je me passionne pour les technologies émergentes et leur application pratique.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Compétent dans le développement full-stack avec <strong className="text-primary">Java</strong>, 
              <strong className="text-primary"> Angular</strong> et <strong className="text-primary">Spring Boot</strong>, 
              je cherche constamment à élargir mes compétences dans le domaine du numérique.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Actuellement à la recherche d'un <strong className="text-accent">stage de fin d'études (PFE)</strong> 
              pour mettre en pratique mes connaissances et contribuer à des projets innovants.
            </p>
          </div>
          
          {/* Interests Grid */}
          <div className="grid grid-cols-2 gap-4">
            {interests.map((interest, index) => (
              <Card key={index} className="p-6 shadow-card border-card-border hover:shadow-glow transition-smooth group">
                <div className="text-center space-y-3">
                  <div className={`inline-flex p-3 rounded-full bg-muted ${interest.color} group-hover:scale-110 transition-bounce`}>
                    <interest.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-sm">{interest.label}</h3>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;