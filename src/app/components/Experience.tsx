import { motion } from 'motion/react';
import { Award, Briefcase, GraduationCap } from 'lucide-react';

const timeline = [
  {
    icon: GraduationCap,
    date: '2022 - 2026',
    title: 'BTech Completed',
    organization: 'Anil Neerukonda Institute of Technology and Sciences (ANITS)',
    points: [
      'Completed BTech in Artificial Intelligence & Machine Learning.',
      'CGPA: 8.36 / 10.',
    ],
  },
  {
    icon: Briefcase,
    date: 'May 2025 - Jun 2025',
    title: 'AI/ML Intern',
    organization: 'Technogen',
    points: [
      'Gained hands-on experience in artificial intelligence and machine learning using AWS.',
      'Implemented Amazon Contact Flow to create a customer care number.',
      'Built a pizza-ordering chatbot with AWS Lex and a knowledge base using AWS Bedrock.',
      'Created a ChatGPT-like chatbot using Claude in Bedrock and AWS Lambda.',
    ],
  },
  {
    icon: Award,
    date: '2025',
    title: 'EY Techathon 2025',
    organization: 'National-Level Technology Competition',
    points: [
      'Round 2 Qualifier among 10,000+ participants.',
    ],
  },
];

const certificates = [
  {
    title: 'Technogen Internship Certificate',
    href: 'https://drive.google.com/file/d/1qoSmG4DqubZyWQmjAe7Vmxb368O6Z1mN/view?usp=drive_link',
  },
  {
    title: 'Artificial Intelligence and Data Science - iHub Divya Sampark, IIT Roorkee via Intellipaat',
    href: 'https://tih.iitr.ac.in/certificate/intellipaat/IPTIH25070911.png',
  },
  {
    title: 'SQL Certification - Intellipaat Software Solutions',
    href: null,
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">Experience & Education</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My journey through AI/ML, software development, cloud tools, and applied projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_0.8fr] gap-8">
          <div className="space-y-6">
            {timeline.map((item, index) => (
              <motion.article
                key={`${item.title}-${item.organization}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border rounded-lg p-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg w-fit">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-primary mb-2">{item.date}</p>
                    <h3 className="mb-1">{item.title}</h3>
                    <p className="text-muted-foreground mb-4">{item.organization}</p>
                    <ul className="space-y-2 text-muted-foreground">
                      {item.points.map((point) => (
                        <li key={point} className="leading-relaxed">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card border border-border rounded-lg p-6 h-fit"
          >
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-6 h-6 text-primary" />
              <h3>Certificates</h3>
            </div>
            <div className="space-y-4">
              {certificates.map((certificate) =>
                certificate.href ? (
                  <a
                    key={certificate.title}
                    href={certificate.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
                  >
                    {certificate.title}
                  </a>
                ) : (
                  <div key={certificate.title} className="p-4 bg-muted/50 rounded-lg">
                    {certificate.title}
                  </div>
                ),
              )}
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
