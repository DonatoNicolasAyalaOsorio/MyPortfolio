import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { ProjectCarousel } from './components/ProjectCarousel';
import { projects } from './data/projects';
import { useLanguage } from './i18n';
import { Building, MapPin, Calendar, GraduationCap, Mail, Phone, Github, Linkedin, Download, Send } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const skills = [
  "Java", "JavaScript", "TypeScript", "Python", "PHP", "C#", "C++",
  "React", "Angular", "Node.js", "Spring Boot", "Laravel",
  "AWS", "Azure", "Google Cloud", "Docker", "Kubernetes",
  "TensorFlow", "Keras", "PyTorch", "Machine Learning"
];

function App() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div 
              className="w-80 h-80 mx-auto mb-16 rounded-[2.5rem] overflow-hidden shadow-2xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <img
                src="https://i.pinimg.com/736x/a4/a7/01/a4a70104a6fbe2b27dc1007c4ce53a6b.jpg"
                alt="Donato Nicolás Ayala Osorio"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.h1 
              className="text-6xl md:text-8xl font-bold mb-8 leading-tight tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              {t("Hola, soy", "Hi, I'm")} <br />
              Donato Nicolás Ayala Osorio
            </motion.h1>
            <motion.p 
              className="text-2xl md:text-3xl mb-12 text-[var(--text)]/80 max-w-4xl mx-auto leading-relaxed tracking-tight text-balance"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {t(
                "Ingeniero de Sistemas especialista en Ingeniería de Software con experiencia en desarrollo Full Stack, metodologías ágiles y soluciones en la nube.",
                "Systems Engineer specializing in Software Engineering with experience in Full Stack development, agile methodologies and cloud solutions."
              )}
            </motion.p>
            <motion.div 
              className="flex justify-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <a
                href="#contact"
                className="px-8 py-4 rounded-full bg-primary text-white font-semibold hover:bg-primary/90 transition-all hover:scale-105"
              >
                <Send className="inline-block w-5 h-5 mr-2" />
                {t("Contáctame", "Contact me")}
              </a>
              <a
                href="/CV_Donato_Ayala.pdf"
                download
                className="px-8 py-4 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-all hover:scale-105"
              >
                <Download className="inline-block w-5 h-5 mr-2" />
                {t("Descargar CV", "Download CV")}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-4 bg-[var(--accent)]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-8">{t("Sobre mí", "About me")}</h2>
            <p className="text-xl text-[var(--text)]/80 leading-relaxed text-balance mb-8">
              {t(
                "Apasionado por el desarrollo Full Stack y las soluciones en la nube, con enfoque en la calidad, seguridad, disponibilidad y eficiencia de los entregables. Destaco por mi capacidad de transformar requerimientos en soluciones escalables y de alto rendimiento, aplicando mejores prácticas de ingeniería y mitigando riesgos tecnológicos.",
                "Passionate about Full Stack development and cloud solutions, with a focus on quality, security, availability and efficiency of deliverables. I stand out for my ability to transform requirements into scalable and high-performance solutions, applying engineering best practices and mitigating technological risks."
              )}
            </p>
            <p className="text-xl text-[var(--text)]/80 leading-relaxed text-balance">
              {t(
                "Me caracterizo por mi orientación al logro, pensamiento crítico, trabajo en equipo, adaptabilidad, comunicación efectiva y compromiso con la mejora continua en entornos dinámicos.",
                "I am characterized by my results orientation, critical thinking, teamwork, adaptability, effective communication and commitment to continuous improvement in dynamic environments."
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-4">
              {t("Tecnologías y Habilidades", "Technologies & Skills")}
            </h2>
            <p className="text-xl text-[var(--text)]/80 mb-16 max-w-2xl mx-auto text-balance">
              {t(
                "Stack tecnológico con el que trabajo para crear soluciones innovadoras y escalables",
                "Technology stack I work with to create innovative and scalable solutions"
              )}
            </p>
            <motion.div 
              className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {skills.map((skill) => (
                <motion.span
                  key={skill}
                  variants={fadeInUp}
                  className="px-6 py-3 rounded-full bg-[var(--accent)] hover:bg-primary hover:text-white transition-all duration-300 cursor-default text-lg font-medium"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 bg-[var(--accent)]">
        <div className="max-w-[90rem] mx-auto">
          <motion.h2 
            className="text-4xl font-bold mb-4 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {t("Proyectos Destacados", "Featured Projects")}
          </motion.h2>
          <motion.p
            className="text-xl text-[var(--text)]/80 text-center mb-16 max-w-2xl mx-auto text-balance"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {t(
              "Una selección de proyectos que demuestran mi experiencia en desarrollo de software, arquitectura y tecnologías emergentes.",
              "A selection of projects that demonstrate my experience in software development, architecture and emerging technologies."
            )}
          </motion.p>
          <ProjectCarousel projects={projects} />
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold mb-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {t("Experiencia Profesional", "Professional Experience")}
          </motion.h2>
          <motion.div
            className="space-y-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div 
              variants={fadeInUp}
              className="p-8 rounded-2xl bg-[var(--accent)] hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">
                    {t("Líder de desarrollo", "Development Lead")}
                  </h3>
                  <div className="flex items-center gap-2 text-[var(--text)]/70 mb-2">
                    <Building className="w-4 h-4" />
                    <span>Centro de estudios Andino</span>
                  </div>
                  <div className="flex items-center gap-2 text-[var(--text)]/70">
                    <MapPin className="w-4 h-4" />
                    <span>Pasto, Colombia</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-primary font-semibold mt-4 md:mt-0">
                  <Calendar className="w-4 h-4" />
                  <span>{t("Enero 2025 – Agosto 2025", "January 2025 – August 2025")}</span>
                </div>
              </div>
              <ul className="space-y-2 text-[var(--text)]/80">
                <li className="flex gap-2">
                  <span className="text-primary mt-1">▹</span>
                  <span>
                    {t(
                      "Lideré el diseño, desarrollo e implementación de un sistema de control de registros estudiantiles utilizando TypeScript y Supabase, mejorando la disponibilidad, seguridad y eficiencia en la gestión de la información académica.",
                      "Led the design, development and implementation of a student records control system using TypeScript and Supabase, improving availability, security and efficiency in academic information management."
                    )}
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary mt-1">▹</span>
                  <span>
                    {t(
                      "Aplicó metodologías ágiles (SCRUM) en la planificación y ejecución de tareas, utilizando Azure DevOps para seguimiento y colaboración del equipo.",
                      "Applied agile methodologies (SCRUM) in task planning and execution, using Azure DevOps for team tracking and collaboration."
                    )}
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary mt-1">▹</span>
                  <span>
                    {t(
                      "Administró el versionamiento del código con GitHub, garantizando la integración continua, trazabilidad y control de cambios en el ciclo de vida del software.",
                      "Managed code versioning with GitHub, ensuring continuous integration, traceability and change control in the software lifecycle."
                    )}
                  </span>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="p-8 rounded-2xl bg-[var(--accent)] hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">
                    {t("Desarrollador Junior", "Junior Developer")}
                  </h3>
                  <div className="flex items-center gap-2 text-[var(--text)]/70 mb-2">
                    <Building className="w-4 h-4" />
                    <span>Centro de estudios Andino</span>
                  </div>
                  <div className="flex items-center gap-2 text-[var(--text)]/70">
                    <MapPin className="w-4 h-4" />
                    <span>Pasto, Colombia</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-primary font-semibold mt-4 md:mt-0">
                  <Calendar className="w-4 h-4" />
                  <span>{t("Agosto 2023 – Diciembre 2024", "August 2023 – December 2024")}</span>
                </div>
              </div>
              <ul className="space-y-2 text-[var(--text)]/80">
                <li className="flex gap-2">
                  <span className="text-primary mt-1">▹</span>
                  <span>
                    {t(
                      "Desarrolló y publicó el sitio web institucional con Angular, TypeScript y Bootstrap.",
                      "Developed and published the institutional website with Angular, TypeScript and Bootstrap."
                    )}
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary mt-1">▹</span>
                  <span>
                    {t(
                      "Elaboró documentación técnica y manuales de usuario para personal administrativo y docentes.",
                      "Created technical documentation and user manuals for administrative staff and teachers."
                    )}
                  </span>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="p-8 rounded-2xl bg-[var(--accent)] hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">
                    {t("Practicante de desarrollo Full Stack", "Full Stack Development Intern")}
                  </h3>
                  <div className="flex items-center gap-2 text-[var(--text)]/70 mb-2">
                    <Building className="w-4 h-4" />
                    <span>Cognitios</span>
                  </div>
                  <div className="flex items-center gap-2 text-[var(--text)]/70">
                    <MapPin className="w-4 h-4" />
                    <span>{t("Bogotá, Colombia (Remoto)", "Bogotá, Colombia (Remote)")}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-primary font-semibold mt-4 md:mt-0">
                  <Calendar className="w-4 h-4" />
                  <span>{t("Febrero 2023 – Mayo 2023", "February 2023 – May 2023")}</span>
                </div>
              </div>
              <ul className="space-y-2 text-[var(--text)]/80">
                <li className="flex gap-2">
                  <span className="text-primary mt-1">▹</span>
                  <span>
                    {t(
                      "Participó en la adaptación de interfaces con HTML, CSS y diseño responsive, incluyendo ajustes en estilos, contenedores y plantillas para dispositivos móviles.",
                      "Participated in interface adaptation with HTML, CSS and responsive design, including adjustments to styles, containers and templates for mobile devices."
                    )}
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary mt-1">▹</span>
                  <span>
                    {t(
                      "Implementó operaciones CRUD y generación de reportes tanto en Frontend con Angular como en Backend con JavaScript.",
                      "Implemented CRUD operations and report generation in both Frontend with Angular and Backend with JavaScript."
                    )}
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary mt-1">▹</span>
                  <span>
                    {t(
                      "Ejecutó pruebas y validó servicios con herramientas como Insomnia y Postman.",
                      "Executed tests and validated services with tools like Insomnia and Postman."
                    )}
                  </span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-32 px-4 bg-[var(--accent)]">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold mb-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {t("Educación", "Education")}
          </motion.h2>
          <motion.div
            className="space-y-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div 
              variants={fadeInUp}
              className="p-8 rounded-2xl bg-[var(--bg)] hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex items-start gap-4">
                <GraduationCap className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">
                    {t("Especialista en Ingeniería de Software", "Software Engineering Specialist")}
                  </h3>
                  <p className="text-[var(--text)]/70 mb-2">Pontificia Universidad Javeriana</p>
                  <p className="text-primary font-semibold">
                    {t("Enero 2024 – Septiembre 2025", "January 2024 – September 2025")}
                  </p>
                  <p className="text-[var(--text)]/70 mt-2">Cali, Colombia</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="p-8 rounded-2xl bg-[var(--bg)] hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex items-start gap-4">
                <GraduationCap className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">
                    {t("Ingeniero de Sistemas", "Systems Engineer")}
                  </h3>
                  <p className="text-[var(--text)]/70 mb-2">Universidad Mariana</p>
                  <p className="text-primary font-semibold">
                    {t("Enero 2019 – Abril 2024", "January 2019 – April 2024")}
                  </p>
                  <p className="text-[var(--text)]/70 mt-2">Pasto, Colombia</p>
                  <p className="text-[var(--text)]/80 mt-4">
                    {t(
                      "Tesis Meritoria: EcoBike - Aplicación móvil para incentivar el uso de la bicicleta como medio de transporte sostenible.",
                      "Meritorious Thesis: EcoBike - Mobile application to encourage the use of bicycles as sustainable transportation."
                    )}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2 
            className="text-4xl font-bold mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {t("Conectemos", "Let's connect")}
          </motion.h2>
          <motion.div 
            className="flex flex-col items-center gap-8 mb-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.a
              variants={fadeInUp}
              href="mailto:donatonicolasosorio@gmail.com"
              className="flex items-center gap-3 text-xl hover:text-primary transition-colors"
            >
              <Mail className="w-6 h-6" />
              donatonicolasosorio@gmail.com
            </motion.a>
            <motion.a
              variants={fadeInUp}
              href="tel:+573188401253"
              className="flex items-center gap-3 text-xl hover:text-primary transition-colors"
            >
              <Phone className="w-6 h-6" />
              +57 318 840 1253
            </motion.a>
          </motion.div>
          <motion.div 
            className="flex justify-center gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.a
              variants={fadeInUp}
              href="https://github.com/donatonicolasosorio"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-[var(--accent)] hover:bg-primary hover:text-white transition-all hover:scale-110"
            >
              <Github className="w-8 h-8" />
            </motion.a>
            <motion.a
              variants={fadeInUp}
              href="https://www.linkedin.com/in/donatonicolasayalaosorio/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-[var(--accent)] hover:bg-primary hover:text-white transition-all hover:scale-110"
            >
              <Linkedin className="w-8 h-8" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default App;