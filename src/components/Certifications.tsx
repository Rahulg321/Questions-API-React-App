import { motion } from 'framer-motion';
import IconCloud from './magicui/icon-cloud';

const techIcons = [
  "typescript",
  "javascript",
  "java",
  "python",
  "react",
  "angular",
  "vuedotjs",
  "amazonaws",
  "googlecloud",
  "microsoftazure",
  "docker",
  "kubernetes",
  "linux",
  "windows",
  "cisco",
  "vmware",
  "oracle",
  "mongodb",
  "postgresql",
  "mysql",
  "redis",
  "nginx",
  "apache",
  "git",
  "github",
  "gitlab",
  "jenkins",
  "terraform",
  "ansible",
  "prometheus"
];

export default function Certifications() {
  return (
    <section className="relative min-h-screen bg-gray-900 py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-indigo-900/10 to-gray-900" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-block px-4 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-sm mb-8 border border-indigo-500/20"
          >
            Certifications
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-white mb-8"
          >
            Practice Tests for
            <br />
            Popular Technologies
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto mb-16"
          >
            Generate high-quality practice tests for the most in-demand certifications across various technologies
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative h-[600px] w-full bg-gradient-radial from-indigo-500/5 via-transparent to-transparent"
        >
          <IconCloud iconSlugs={techIcons} />
        </motion.div>
      </div>
    </section>
  );
}