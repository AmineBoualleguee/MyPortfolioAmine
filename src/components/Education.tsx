import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const Education = () => {
  const education = [
    {
      degree: "Diplôme National d'Ingénieur en Informatique",
      institution: "Institut Supérieur d'Informatique et des Technologies de Communication de Sousse",
      location: "Sousse",
      period: "2023 – 2026",
      status: "En cours",
      color: "text-primary"
    },
    {
      degree: "Licence en Génie Logiciel",
      institution: "Faculté des Sciences de Gafsa",
      location: "Gafsa", 
      period: "2020 – 2023",
      status: "Obtenu",
      color: "text-accent"
    },
    {
      degree: "Baccalauréat en Sciences Expérimentales",
      institution: "Lycée Ibn Khaldoun",
      location: "Sidi Aïch, Gafsa",
      period: "2020",
      status: "Obtenu",
      color: "text-secondary"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Parcours
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Formation</h2>
          <p className="text-lg text-muted-foreground">
            Mon parcours académique en informatique et technologies
          </p>
        </motion.div>
        
        <div className="relative">
          {/* Timeline Line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary origin-top"
          />
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative flex items-start"
              >
                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                  whileHover={{ scale: 1.2 }}
                  className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-card border-2 border-card-border ${edu.color} flex-shrink-0`}
                >
                  <GraduationCap className="w-6 h-6" />
                </motion.div>
                
                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="ml-8 flex-1"
                >
                  <Card className="shadow-card border-card-border hover:shadow-glow transition-smooth">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between mb-2">
                        <Badge 
                          variant={edu.status === "En cours" ? "default" : "secondary"} 
                          className="text-xs"
                        >
                          {edu.status}
                        </Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4 mr-1" />
                          {edu.period}
                        </div>
                      </div>
                      <CardTitle className="text-xl leading-tight">{edu.degree}</CardTitle>
                      <CardDescription className="text-base">
                        <div className={`font-semibold ${edu.color}`}>{edu.institution}</div>
                        <div className="text-muted-foreground">{edu.location}</div>
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;