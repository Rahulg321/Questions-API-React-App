import { motion } from 'framer-motion';
import { Play, ChevronRight } from 'lucide-react';

const steps = [
  {
    number: "01",
    title: "Input your course topic",
    description: "Simply enter your course subject and target audience"
  },
  {
    number: "02",
    title: "AI generates content",
    description: "Our AI creates comprehensive course materials and practice tests"
  },
  {
    number: "03",
    title: "Review and customize",
    description: "Fine-tune the generated content to match your teaching style"
  },
  {
    number: "04",
    title: "Export to Udemy",
    description: "Publish your course with one click and start earning"
  }
];

export default function Demo() {
  return (
    <section className="relative bg-gray-900 py-20">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-500/5 via-transparent to-transparent" />
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
            How it works
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-white mb-8"
          >
            Create courses in minutes,
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
              not months
            </span>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Demo Video/GIF Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-800/50 backdrop-blur-sm">
              <img
                src="https://cdn.dribbble.com/users/1626229/screenshots/8165287/media/62e40d0108774b108a66d950e2fc4e5e.gif"
                alt="Product Demo"
                className="w-full h-full object-cover"
              />
              
              {/* Play button overlay */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center bg-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity"
                whileHover={{ scale: 1.05 }}
              >
                <button className="w-16 h-16 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors">
                  <Play className="w-6 h-6 text-white fill-white" />
                </button>
              </motion.div>
            </div>
          </motion.div>

          {/* Steps Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
                
                <div className="relative flex items-start space-x-6 p-4 rounded-lg group-hover:bg-gray-800/50 transition-colors">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold">
                      {step.number}
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-white mb-2 flex items-center group-hover:text-indigo-400 transition-colors">
                      {step.title}
                      <ChevronRight className="w-5 h-5 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}