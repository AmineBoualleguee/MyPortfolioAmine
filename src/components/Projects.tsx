import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Code, Calendar, Users, BarChart3, Bot, Zap, Car } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      icon: BarChart3,
      title: "Application Web de Gestion",
      type: "Projet de Fin d'Études – Licence",
      year: "2023",
      description: "Développement d'une application web complète de gestion d'entreprise incluant facturation, devis, congés, structure d'entreprise, clients et notes de frais. Accent mis sur une interface utilisateur intuitive.",
      technologies: ["Angular", "Spring Boot", "MySQL"],
      color: "text-primary"
    },
    {
      icon: Users,
      title: "Plateforme Medicollab",
      type: "Projet Intégré",
      year: "2024",
      description: "Plateforme web facilitant la collaboration entre médecins et la gestion sécurisée des dossiers médicaux électroniques. Intégration de mesures avancées de protection des données.",
      technologies: ["Angular", "Node.js", "Express.js", "PostgreSQL"],
      color: "text-accent"
    },
    {
      icon: Bot,
      title: "Projets Intelligence Artificielle",
      type: "Projets Académiques",
      year: "2024",
      description: "Développement d'un résumeur automatique pour vidéos et documents, système de traduction vidéo avec sous-titres multilingues, et module de test linguistique pour évaluer le niveau de langue.",
      technologies: ["Python", "Transformers", "TensorFlow", "PyTorch", "Ollama"],
      color: "text-secondary"
    },
    {
      icon: Zap,
      title: "Application Météo",
      type: "Projet Personnel",
      year: "2023",
      description: "Application permettant la consultation de la météo mondiale et des prévisions détaillées via intégration d'API externes. Interface moderne et responsive.",
      technologies: ["Python"],
      color: "text-primary-glow"
    },
    {
      icon: BarChart3,
      title: "Suivi COVID-19",
      type: "Projet Académique",
      year: "2022",
      description: "Application de visualisation des données COVID-19 avec diagrammes interactifs et tableaux de bord en temps réel pour le suivi des statistiques mondiales.",
      technologies: ["Java"],
      color: "text-accent"
    },
    {
      icon: Car,
      title: "Voiture Pilotée Mobile",
      type: "Hackathon",
      year: "2023",
      description: "Application mobile pour contrôler une voiture prototype intégrant des capteurs embarqués. Projet développé lors d'un hackathon avec système de pilotage à distance.",
      technologies: ["Python", "Arduino Uno", "Raspberry Pi Pico"],
      color: "text-secondary"
    }
  ];

  return (
    <section className="py-20 px-6 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Portfolio
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Expériences & Projets</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez mes projets académiques et personnels qui démontrent ma passion pour la technologie
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="shadow-card border-card-border hover:shadow-glow transition-smooth group overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <div className={`inline-flex p-2 rounded-lg bg-muted ${project.color} group-hover:scale-110 transition-bounce`}>
                    <project.icon className="w-5 h-5" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {project.year}
                  </Badge>
                </div>
                <CardTitle className="text-lg leading-tight">{project.title}</CardTitle>
                <CardDescription className="text-sm text-primary font-medium">
                  {project.type}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs px-2 py-1">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;