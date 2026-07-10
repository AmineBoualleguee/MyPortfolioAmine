import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Brain, Shield, Cloud } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const interests = [
    { icon: Code, label: "Développement Logiciel", color: "text-primary" },
    { icon: Brain, label: "Intelligence Artificielle", color: "text-accent" },
    { icon: Shield, label: "Cybersécurité", color: "text-secondary" },
    { icon: Cloud, label: "Cloud Computing", color: "text-primary-glow" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 px-4 py-2">
            À propos
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Profil Professionnel</h2>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ingénieur en informatique spécialisé en <strong className="text-foreground">développement full-stack, 
              Cloud et DevOps</strong>, avec une expérience dans la conception d'applications web, d'APIs REST, 
              de bases de données et d'architectures modernes.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Solides compétences en <strong className="text-primary">Angular</strong>, 
              <strong className="text-primary"> React</strong>, <strong className="text-primary">Spring Boot</strong> et 
              <strong className="text-primary"> ASP.NET Core</strong>, avec une expérience pratique sur des projets 
              IA, cloud et full-stack.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Expérience dans la réalisation de solutions web, cloud et IA orientées vers la 
              <strong className="text-accent"> performance, l'automatisation, la sécurité, l'observabilité 
              et la fiabilité</strong>.
            </p>
          </motion.div>
          
          {/* Interests Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 gap-4"
          >
            {interests.map((interest, index) => (
              <motion.div key={index} variants={itemVariants}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Card className="p-6 shadow-card border-card-border hover:shadow-glow transition-smooth group cursor-pointer">
                    <div className="text-center space-y-3">
                      <div className={`inline-flex p-3 rounded-full bg-muted ${interest.color} group-hover:scale-110 transition-bounce`}>
                        <interest.icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold text-sm">{interest.label}</h3>
                    </div>
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

export default About;