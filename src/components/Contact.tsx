import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Linkedin, Github, MessageCircle, Download } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Localisation",
      value: "Sousse, Tunisie",
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-20 px-6 gradient-subtle">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Contact
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Restons en Contact</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Intéressé par mon profil ? N'hésitez pas à me contacter pour discuter d'opportunités 
            de stage ou de collaboration
          </p>
        </motion.div>
        
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Badge variant="default" className="mb-4 px-4 py-2 text-sm">
            🎯 Disponible pour un stage PFE
          </Badge>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="px-8 py-3 text-lg shadow-button">
                <MessageCircle className="w-5 h-5 mr-2" />
                Discutons de votre projet
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" size="lg" className="px-8 py-3 text-lg" asChild>
                <a href="/Amine_Bouallegue_CV.pdf" download="Amine_Bouallegue_CV.pdf">
                  <Download className="w-5 h-5 mr-2" />
                  Télécharger mon CV
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Contact Information */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {contactInfo.map((contact, index) => (
            <motion.div key={index} variants={cardVariants}>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="shadow-card border-card-border hover:shadow-glow transition-smooth group text-center cursor-pointer h-full">
                  <CardHeader className="pb-3">
                    <motion.div
                      className={`inline-flex p-3 rounded-full bg-muted ${contact.color} mx-auto mb-3`}
                      whileHover={{ rotate: 10, scale: 1.1 }}
                    >
                      <contact.icon className="w-6 h-6" />
                    </motion.div>
                    <CardTitle className="text-lg">{contact.title}</CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-3">
                    <p className="text-foreground font-medium">{contact.value}</p>
                    <Button variant="ghost" size="sm" className={`${contact.color} hover:bg-muted`}>
                      {contact.action}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-xl font-semibold mb-6">Suivez-moi</h3>
          <div className="flex justify-center gap-4">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button 
                variant="outline" 
                size="lg" 
                className="px-6 py-3 hover:bg-primary/10 hover:border-primary transition-smooth"
                asChild
              >
                <a href="https://www.linkedin.com/in/amine-bouallegue" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 mr-2 text-primary" />
                  LinkedIn
                </a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button 
                variant="outline" 
                size="lg" 
                className="px-6 py-3 hover:bg-primary/10 hover:border-primary transition-smooth"
                asChild
              >
                <a href="https://github.com/amine-bouallegue" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2 text-primary" />
                  GitHub
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;