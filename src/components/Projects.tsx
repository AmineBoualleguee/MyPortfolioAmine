import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Code, Calendar, Users, BarChart3, Bot, Zap, Car, Activity } from "lucide-react";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      icon: BarChart3,
      title: "Plateforme de Facturation Électronique Intelligente",
      type: "Plateforme Full-Stack & IA",
      year: "2026",
      period: "2026",
      description: "Conception et développement d'une plateforme intelligente de facturation électronique permettant l'importation des factures, l'extraction automatique des données, la correction des champs, la validation des lignes et la génération de documents structurés. Intégration d'un module IA avec Flask, backend Spring Boot, déploiement Docker, pipeline CI/CD et supervision Uptime Kuma.",
      technologies: ["Angular", "Spring Boot", "Flask", "IA", "Docker", "CI/CD", "Uptime Kuma"],
      color: "text-primary"
    },
    {
      icon: Users,
      title: "Système de Gestion des Ressources Humaines",
      type: "Application Full-Stack & DevOps",
      year: "2026",
      period: "Mai – Juil 2026",
      description: "Développement d'une application web de gestion des employés, départements, congés et évaluations avec authentification sécurisée, APIs REST, gestion des rôles utilisateurs, tests automatisés, observabilité complète et pipeline CI/CD.",
      technologies: ["Angular", "ASP.NET Core", "C#", "Entity Framework Core", "PostgreSQL", "JWT", "RBAC", "Docker", "GitHub Actions", "xUnit", "Testcontainers", "Vitest", "Trivy", "OpenTelemetry", "Prometheus", "Grafana"],
      color: "text-accent"
    },
    {
      icon: Activity,
      title: "Application HealthVision",
      type: "Projet d'IA Médicale Avancée",
      year: "2025",
      period: "Août - Oct 2025",
      description: "Conception d'une application web intelligente pour la détection automatique de fractures sur images radiographiques, avec pipeline d'inférence, prétraitement, YOLOv8, Grad-CAM et interface React interactive.",
      technologies: ["React", "Node.js", "Express.js", "PostgreSQL", "YOLOv8", "OpenCV", "Grad-CAM", "Python", "FastAPI", "Docker"],
      color: "text-secondary"
    },
    {
      icon: Users,
      title: "Site de Recrutement en Ligne",
      type: "Plateforme Web Full-Stack",
      year: "2025",
      period: "2025",
      description: "Conception et développement d'une plateforme web de recrutement permettant la publication d'offres d'emploi, la gestion des candidatures, l'analyse des CV et le suivi des profils candidats. Architecture full-stack avec interface React moderne, backend Node.js et base de données MongoDB.",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "REST API", "GitHub"],
      color: "text-primary-glow"
    },
    {
      icon: Bot,
      title: "IA Résumeur et Traducteur Automatique Multimodal",
      type: "Projet IA",
      year: "2025",
      period: "Avr - Juil 2025",
      description: "Développement d'une application IA de résumé automatique de vidéos et textes, génération de sous-titres, traduction multilingue et évaluation linguistique des utilisateurs.",
      technologies: ["Python", "Transformers", "TensorFlow", "PyTorch", "Hugging Face", "Ollama"],
      color: "text-accent"
    },
    {
      icon: Users,
      title: "Plateforme Medicollab",
      type: "Collaboration Médicale Sécurisée",
      year: "2025",
      period: "Fév - Avr 2025",
      description: "Développement d'une plateforme web pour la collaboration entre médecins et la gestion sécurisée des dossiers médicaux électroniques, avec APIs REST et intégration PostgreSQL.",
      technologies: ["Angular", "Node.js", "Express.js", "PostgreSQL"],
      color: "text-secondary"
    },
    {
      icon: Zap,
      title: "EcoSynk",
      type: "Plateforme IA d'Économie Circulaire",
      year: "2024",
      period: "2024",
      description: "Développement d'une plateforme intelligente dédiée à l'économie circulaire via un marketplace multi-acteurs, intégrant des fonctionnalités avancées d'intelligence artificielle.",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "Python", "TensorFlow"],
      color: "text-primary"
    },
    {
      icon: BarChart3,
      title: "Application Web de Gestion d'Entreprise",
      type: "Projet de Fin d'Études – Licence",
      year: "2023",
      period: "Jan - Mai 2023",
      description: "Développement d'une application web pour la gestion de la facturation, des devis, des congés, de la structure interne, des clients et des notes de frais. Conception UML, modèles de données, modules CRUD et automatisation des processus internes.",
      technologies: ["Angular", "Spring Boot", "MySQL"],
      color: "text-accent"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="projects" className="py-20 px-6 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Portfolio
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Expériences & Projets</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez mes projets académiques et personnels qui démontrent ma passion pour la technologie
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={cardVariants}>
              <motion.div
                whileHover={{ scale: 1.03, y: -8 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="shadow-card border-card-border hover:shadow-glow transition-smooth group overflow-hidden h-full cursor-pointer">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-3">
                      <motion.div 
                        className={`inline-flex p-2 rounded-lg bg-muted ${project.color}`}
                        whileHover={{ rotate: 10 }}
                      >
                        <project.icon className="w-5 h-5" />
                      </motion.div>
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
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;