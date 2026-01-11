import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Code, Calendar, Users, BarChart3, Bot, Zap, Car, Activity } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      icon: Activity,
      title: "Application HealthVision",
      type: "Projet d'IA Médicale Avancée",
      year: "2025",
      period: "Août - Oct 2025",
      description: "Conception et développement d'une application web intelligente utilisant l'IA pour assister les professionnels de santé dans la détection automatique de fractures sur des images radiographiques. Mise en place d'un pipeline complet d'inférence incluant prétraitement d'images, détection YOLOv8, visualisation explicable via Grad-CAM.",
      technologies: ["React", "Node.js", "Express.js", "PostgreSQL", "Deep Learning", "YOLOv8", "OpenCV", "Grad-CAM", "Python", "FastAPI", "Docker"],
      color: "text-primary"
    },
    {
      icon: Bot,
      title: "IA Résumeur et Traducteur Automatique Multimodal",
      type: "Projet IA",
      year: "2025",
      period: "Avr - Juil 2025",
      description: "Développement d'une application d'IA capable de résumer automatiquement des vidéos et textes, générer des sous-titres et assurer la traduction multilingue. Intégration de modèles NLP avancés et d'un module d'évaluation linguistique pour tester le niveau des utilisateurs.",
      technologies: ["Python", "Transformers", "TensorFlow", "PyTorch", "Hugging Face", "Ollama"],
      color: "text-secondary"
    },
    {
      icon: Users,
      title: "Plateforme Medicollab",
      type: "Solution Web Sécurisée de Collaboration Médicale",
      year: "2025",
      period: "Fév - Avr 2025",
      description: "Développement d'une plateforme web facilitant la collaboration entre médecins et la gestion sécurisée des dossiers médicaux électroniques. Participation à la conception backend, APIs REST, modèles de données et intégration PostgreSQL avec un fort accent sur la protection des données.",
      technologies: ["Angular", "Node.js", "Express.js", "PostgreSQL"],
      color: "text-accent"
    },
    {
      icon: Zap,
      title: "EcoSynk",
      type: "Plateforme IA d'Économie Circulaire",
      year: "2024",
      period: "2024",
      description: "Développement d'une plateforme intelligente dédiée à la réduction des déchets et à la promotion de l'économie circulaire via un marketplace multi-acteurs (C2C, B2B, B2C). Conception et implémentation d'une architecture full-stack moderne intégrant des fonctionnalités avancées d'intelligence artificielle.",
      technologies: ["React", "Node.js", "Express.js", "PostgreSQL", "Python", "TensorFlow"],
      color: "text-primary-glow"
    },
    {
      icon: BarChart3,
      title: "Application Web de Gestion d'Entreprise",
      type: "Projet de Fin d'Études – Licence",
      year: "2023",
      period: "Jan - Mai 2023",
      description: "Développement d'une application web pour la gestion de la facturation, des devis, des congés, de la structure interne, des clients et des notes de frais. Conception UML, modèles de données, modules CRUD et automatisation des processus internes avec une interface utilisateur ergonomique.",
      technologies: ["Angular", "Spring Boot", "MySQL"],
      color: "text-accent"
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
                    {project.period || project.year}
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