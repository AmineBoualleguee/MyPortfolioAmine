import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Wrench, Brain, Globe, Cpu } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programmation",
      skills: ["Java", "Python", "JavaScript"],
      color: "text-primary"
    },
    {
      icon: Globe,
      title: "Développement Web",
      skills: ["Angular", "Spring Boot", "Node.js", "Express.js"],
      color: "text-accent"
    },
    {
      icon: Database,
      title: "Bases de Données",
      skills: ["MySQL", "PostgreSQL"],
      color: "text-secondary"
    },
    {
      icon: Wrench,
      title: "Outils",
      skills: ["Docker", "Maven", "Git"],
      color: "text-primary-glow"
    },
    {
      icon: Brain,
      title: "Intelligence Artificielle",
      skills: ["NLP", "Deep Learning", "TensorFlow", "PyTorch", "Transformers", "Hugging Face", "Ollama"],
      color: "text-accent"
    },
    {
      icon: Cpu,
      title: "Systèmes Embarqués",
      skills: ["Arduino", "Raspberry Pi"],
      color: "text-secondary"
    }
  ];

  const languages = [
    { language: "Arabe", level: "Langue maternelle", proficiency: 100 },
    { language: "Français", level: "Courant", proficiency: 90 },
    { language: "Anglais", level: "Courant", proficiency: 85 }
  ];

  return (
    <section className="py-20 px-6 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Compétences
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Technologies & Langues</h2>
          <p className="text-lg text-muted-foreground">
            Ma stack technique et mes compétences linguistiques
          </p>
        </div>
        
        {/* Technical Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Compétences Techniques</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="shadow-card border-card-border hover:shadow-glow transition-smooth group">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`inline-flex p-2 rounded-lg bg-muted ${category.color} group-hover:scale-110 transition-bounce`}>
                      <category.icon className="w-5 h-5" />
                    </div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs px-3 py-1">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Languages */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Langues</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {languages.map((lang, index) => (
              <Card key={index} className="shadow-card border-card-border hover:shadow-glow transition-smooth">
                <CardHeader className="text-center pb-3">
                  <CardTitle className="text-xl">{lang.language}</CardTitle>
                  <CardDescription className="text-sm">{lang.level}</CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Niveau</span>
                      <span>{lang.proficiency}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${lang.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;