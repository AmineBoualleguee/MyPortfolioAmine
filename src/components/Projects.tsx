import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Code, Calendar, Users, BarChart3, Bot, Zap, Car, Activity } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      icon: Activity,
      title: "Application HealthVision",
      type: "Projet Intégré",
      year: "2025",
      period: "Août - Oct",
      description: "Application web intelligente utilisant l'IA pour assister les professionnels de santé dans la détection de fractures sur des images radiographiques.",
      technologies: ["DeepLearning", "React", "FastAPI", "Python", "YOLOv8", "OpenCV", "Grad-CAM", "Docker"],
      color: "text-primary"
    },
    {
      icon: Bot,
      title: "IA – Résumeur et Traducteur Automatique Multimodal",
      type: "Projet IA",
      year: "2025",
      period: "Avr - Juil",
      description: "Application d'IA capable de résumer automatiquement vidéos et textes, avec traduction multilingue et génération de sous-titres. Intégration d'un module d'évaluation linguistique. Basée sur des modèles avancés de NLP et Deep Learning, avec inférences locales via Hugging Face et Ollama.",
      technologies: ["Python", "Transformers", "TensorFlow", "PyTorch", "Ollama"],
      color: "text-secondary"
    },
    {
      icon: Users,
      title: "Plateforme Medicollab",
      type: "Projet Intégré",
      year: "2025",
      period: "Fév - Avr",
      description: "Plateforme web facilitant la collaboration entre médecins et la gestion sécurisée des dossiers médicaux électroniques. Intégration de mesures de protection des données.",
      technologies: ["Angular", "Node.js", "Express.js", "PostgreSQL"],
      color: "text-accent"
    },
    {
      icon: BarChart3,
      title: "Application Web de Gestion d'Entreprise",
      type: "Projet de Fin d'Études – Licence",
      year: "2023",
      period: "Jan - Mai",
      description: "Application web pour gérer la facturation, les devis, les congés, la structure de l'entreprise, les clients et les notes de frais, avec un accent sur l'interface utilisateur intuitive.",
      technologies: ["Angular", "Spring Boot", "MySQL"],
      color: "text-primary-glow"
    },
    {
      icon: BarChart3,
      title: "Application Suiveur Corona",
      type: "Projet Académique",
      year: "2022",
      description: "Application de visualisation des données COVID-19 à l'aide d'organigrammes interactifs.",
      technologies: ["Java"],
      color: "text-accent"
    },
    {
      icon: Car,
      title: "Voiture Pilotée avec Application Mobile",
      type: "Hackathon",
      year: "2022",
      description: "Application mobile pour contrôler une voiture prototype lors d'un hackathon, intégrant des capteurs embarqués.",
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