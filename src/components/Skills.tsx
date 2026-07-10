import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Wrench, Brain, Globe } from "lucide-react";
import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programmation",
      skills: ["Java", "C#", "Python", "JavaScript", "TypeScript"],
      color: "text-primary"
    },
    {
      icon: Globe,
      title: "Frameworks",
      skills: ["Angular", "React", "ASP.NET Core", "Spring Boot", "FastAPI", "Node.js", "Express.js"],
      color: "text-accent"
    },
    {
      icon: Database,
      title: "Bases de Données",
      skills: ["MySQL", "PostgreSQL", "MongoDB"],
      color: "text-secondary"
    },
    {
      icon: Wrench,
      title: "DevOps & Outils",
      skills: ["Docker", "Git", "GitHub Actions", "CI/CD", "Maven", "Uptime Kuma"],
      color: "text-primary-glow"
    },
    {
      icon: Brain,
      title: "IA / Machine Learning",
      skills: ["TensorFlow", "PyTorch", "Transformers", "YOLOv8", "NLP", "OpenCV"],
      color: "text-accent"
    }
  ];

  const languages = [
    { language: "Arabe", level: "Langue maternelle", proficiency: 100 },
    { language: "Français", level: "Courant", proficiency: 90 },
    { language: "Anglais", level: "Courant", proficiency: 85 }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-20 px-6 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Compétences
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Technologies & Langues</h2>
          <p className="text-lg text-muted-foreground">
            Ma stack technique et mes compétences linguistiques
          </p>
        </motion.div>
        
        {/* Technical Skills */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-8 text-center"
          >
            Compétences Techniques
          </motion.h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skillCategories.map((category, index) => (
              <motion.div key={index} variants={cardVariants}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="shadow-card border-card-border hover:shadow-glow transition-smooth group cursor-pointer h-full">
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-3 mb-2">
                        <motion.div
                          className={`inline-flex p-2 rounded-lg bg-muted ${category.color}`}
                          whileHover={{ rotate: 10 }}
                        >
                          <category.icon className="w-5 h-5" />
                        </motion.div>
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
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* Languages */}
        <div>
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-8 text-center"
          >
            Langues
          </motion.h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {languages.map((lang, index) => (
              <motion.div key={index} variants={cardVariants}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="shadow-card border-card-border hover:shadow-glow transition-smooth cursor-pointer">
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
                        <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                          <motion.div 
                            className="bg-gradient-to-r from-primary to-accent h-2 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${lang.proficiency}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: index * 0.2, ease: "easeOut" }}
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;