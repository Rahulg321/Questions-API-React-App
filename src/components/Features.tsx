import { motion } from 'framer-motion';
import { Brain, Target, Rocket, PenTool, BarChart, Zap } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: "AI Content Generation",
    description: "Generate comprehensive practice tests and course materials using advanced AI",
    gradient: "from-blue-500/10 to-indigo-500/10"
  },
  {
    icon: Target,
    title: "Topic Analysis",
    description: "AI analyzes your subject matter to create relevant, targeted questions",
    gradient: "from-indigo-500/10 to-purple-500/10"
  },
  {
    icon: Rocket,
    title: "Quick Creation",
    description: "Create complete course content in minutes, not hours or days",
    gradient: "from-purple-500/10 to-pink-500/10"
  },
  {
    icon: PenTool,
    title: "Custom Editing",
    description: "Fine-tune and customize generated content to match your style",
    gradient: "from-pink-500/10 to-rose-500/10"
  },
  {
    icon: BarChart,
    title: "Performance Tracking",
    description: "Monitor course performance and student engagement metrics",
    gradient: "from-rose-500/10 to-orange-500/10"
  },
  {
    icon: Zap,
    title: "Instant Export",
    description: "Export directly to Udemy's platform with one click",
    gradient: "from-orange-500/10 to-amber-500/10"
  }
];

export default function Features() {
  return (
    <section className="relative min-h-screen bg-gray-900 py-20 overflow-hidden">
      {/* Smooth transition from previous section */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/5 via-gray-900 to-gray-900" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
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
            Features
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500"
          >
            Powerful Features for
            <br />
            Course Creators
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Everything you need to create engaging courses and practice tests that students love
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-2xl blur-xl opacity-50`} />
              
              <div className="relative bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 group-hover:border-indigo-500/50 transition-colors duration-300">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-indigo-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}