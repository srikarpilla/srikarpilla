import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
  {
    title: 'DermaAI Skin Disease Classifier',
    description: 'Trained a CNN classifier across 23 skin disease categories, achieving 82%+ validation accuracy on 10,000+ labeled images using transfer learning and data augmentation. Lowered model error rate by 15% through hyperparameter tuning and deployed a FastAPI + Flask solution with sub-500ms real-time predictions, plus a RAG-powered virtual dermatologist chatbot using curated medical knowledge.',
    technologies: ['CNN', 'Transfer Learning', 'FastAPI', 'Flask', 'RAG', 'Computer Vision'],
    github: null,
    demo: 'https://huggingface.co/spaces/srikarp/dermaAI',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
  },
  {
    title: 'Sales Performance & Revenue Intelligence Dashboard',
    description: 'Developed a 4-page Power BI dashboard analyzing 10,000+ sales transactions using DAX formulas and a star-schema data model, saving approximately 3 hours of manual reporting per week.',
    technologies: ['Power BI', 'DAX', 'Star Schema', 'Data Modeling', 'Revenue Analytics'],
    github: 'https://github.com/srikarpilla/Superstore_Dashboard.pbix',
    demo: null,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  },
  {
    title: 'Zara AI Interview Platform',
    description: 'Full-stack AI interview platform that parses resumes and job descriptions, generates personalized questions with Mistral LLM, transcribes voice answers with Whisper, scores responses, and produces PDF hiring reports.',
    technologies: ['Mistral LLM', 'OpenAI Whisper', 'Python', 'PDF Reports', 'Full Stack'],
    github: 'https://github.com/srikarpilla/Zara_AI',
    demo: null,
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80',
  },
  {
    title: 'AI Stock Market Monitor',
    description: 'Fully automated n8n pipeline that monitors Apple, Meta, Google, Microsoft, Tesla, NVIDIA, and Amazon, correlates live news with price movement, generates Cohere AI Buy/Hold/Sell ratings, sends morning and evening email reports, and triggers spike/crash alerts.',
    technologies: ['n8n', 'Python', 'Flask', 'Cohere AI', 'NewsAPI', 'Gmail SMTP', 'ngrok'],
    github: 'https://github.com/srikarpilla',
    demo: null,
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80',
  },
  {
    title: 'RAG Chatbot',
    description: "Smart document intelligence pipeline for PDFs, HTML, and text using NLP, TF-IDF, and Cohere's generative AI.",
    technologies: ['Python', 'NLP', 'TF-IDF', 'Cohere API'],
    github: 'https://github.com/srikarpilla/RAG-PROJECT.git',
    demo: 'https://vzyvq5bvnnfwmfyci5hymb.streamlit.app/',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
  },
  {
    title: 'Deep Learning Tutorial Platform',
    description: 'Interactive learning platform with modular frontend, PHP backend, MySQL integration, and multimedia content.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    github: 'https://srikarpilla.github.io/dltutorial/',
    demo: 'https://srikarpilla.github.io/dltutorial/',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80',
  },
  {
    title: 'Audio Emotion Classification',
    description: 'Machine learning pipeline for classifying emotions in audio recordings with performance evaluation metrics.',
    technologies: ['Python', 'ML', 'Audio Processing'],
    github: 'https://github.com/srikarpilla/speechemotionrecognization',
    demo: null,
    image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=800&q=80',
  },
  {
    title: 'AI Astrology Platform',
    description: 'AI-powered astrology app with PyTorch neural networks, Swiss Ephemeris calculations, Flask backend, and responsive UI.',
    technologies: ['Flask', 'PyTorch', 'AI', 'Swiss Ephemeris'],
    github: 'https://github.com/srikarpilla/Astrology_prediction.git',
    demo: 'https://astrotalk1-1.onrender.com',
    image: 'https://images.unsplash.com/photo-1532968961962-8a0cb3a2d4f5?w=800&q=80',
  },
  {
    title: 'Flight Booking Price Prediction',
    description: 'Dynamic ML model that predicts flight ticket prices using historical and real-time data with visual price trend exploration.',
    technologies: ['Python', 'ML', 'Data Visualization', 'Web Development'],
    github: 'https://github.com/srikarpilla/Flight_Booking_Price_Prediction.git',
    demo: null,
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80',
  },
  {
    title: 'Data Analysis in Heart Disease',
    description: 'Exploratory data analysis and predictive modeling for heart disease datasets using ML models and diagnostic visualizations.',
    technologies: ['Python', 'Pandas', 'Scikit-learn', 'Data Visualization'],
    github: 'https://github.com/srikarpilla/Data-analysis-in-heart-disease',
    demo: null,
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80',
  },
  {
    title: 'Vehicle Registration Investor Dashboard',
    description: 'Streamlit dashboard analyzing vehicle registration records with interactive filters, accurate visualizations, and improved UI/UX.',
    technologies: ['Python', 'Streamlit', 'Data Visualization', 'UI/UX'],
    github: 'https://github.com/srikarpilla/UI-UX-Design',
    demo: 'https://ui-ux-design-3tbwgiuvxkdezmdd7wx5ww.streamlit.app/',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80',
  },
  {
    title: 'YouTube Data Analysis Dashboard',
    description: 'Power BI dashboard with predictive analytics, dynamic reports, interactive filters, and drill-down visuals for business analysis.',
    technologies: ['Power BI', 'SQL', 'Data Visualization', 'Predictive Analytics'],
    github: 'https://github.com/srikarpilla/Youtube_data_analysis_powerbi_project.git',
    demo: null,
    image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&q=80',
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            AI/ML, data science, and web projects extracted from my original portfolio
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-xl transition-shadow group"
            >
              <div className="relative overflow-hidden h-48">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
