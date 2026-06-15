import { motion } from 'motion/react';
import { ArrowDown, Download } from 'lucide-react';

export function Hero() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="mb-6">Hi, I'm Srikar</h1>
          <h2 className="text-muted-foreground mb-8">AI/ML Engineer</h2>
          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
            AI/ML Engineer with hands-on experience building and deploying Generative AI systems,
            RAG pipelines, and computer vision models. Shipped a serverless customer engagement
            platform on AWS, reducing retrieval latency by 40% and cutting customer response time
            by 30% across 2 communication channels. Strong foundation across the full ML stack:
            data preprocessing, model training, REST API development, and cloud deployment.
            Actively seeking full-time AI/ML Engineer roles.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
            >
              View My Work
            </a>
            <a
              href="https://drive.google.com/file/d/18N8DpnHSzqwW7Mxkxqmg3yHF6zkLFBR8/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-20"
        >
          <ArrowDown className="w-6 h-6 mx-auto text-muted-foreground animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
