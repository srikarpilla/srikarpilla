import { motion } from 'motion/react';
import { Brain, Cloud, Code, Database } from 'lucide-react';

const skillCategories = [
  {
    icon: Code,
    title: 'Programming Languages',
    skills: ['Python', 'C', 'SQL'],
  },
  {
    icon: Brain,
    title: 'AI/ML & GenAI',
    skills: [
      'Machine Learning',
      'Deep Learning',
      'TensorFlow',
      'PyTorch',
      'Scikit-learn',
      'OpenCV',
      'RAG',
      'Cohere AI',
      'Mistral LLM',
      'OpenAI Whisper',
      'Prompt Engineering',
      'n8n',
      'Antigravity',
    ],
  },
  {
    icon: Database,
    title: 'Web & Data',
    skills: ['HTML', 'CSS', 'Flask', 'FastAPI', 'Pandas', 'Seaborn', 'Power BI', 'DAX', 'Data Visualization'],
  },
  {
    icon: Cloud,
    title: 'Cloud & Automation',
    skills: [
      'AWS',
      'AWS Bedrock',
      'AWS Lex',
      'AWS Lambda',
      'Amazon Connect',
      'Azure',
      'n8n',
      'NewsAPI',
      'Gmail SMTP',
      'ngrok',
      'Streamlit',
      'MongoDB',
      'Git',
      'Vercel',
      'PDF Reports',
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">Skills & Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use across AI/ML, data science, cloud, and web development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <category.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-muted text-muted-foreground rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
