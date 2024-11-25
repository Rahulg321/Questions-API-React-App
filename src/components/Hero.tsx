import { motion } from "framer-motion";
import { Sparkles, BookOpen, DollarSign } from "lucide-react";
import Ripple from "./magicui/ripple";
import AnimatedGradientText from "./magicui/animated-gradient-text";

const features = [
  {
    icon: Sparkles,
    text: "AI-Powered Generation",
    gradient: "from-blue-500 to-indigo-500",
    delay: 0,
  },
  {
    icon: BookOpen,
    text: "Practice Test Creation",
    gradient: "from-indigo-500 to-purple-500",
    delay: 0.1,
  },
  {
    icon: DollarSign,
    text: "Monetization Tools",
    gradient: "from-purple-500 to-pink-500",
    delay: 0.2,
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden hero-gradient pt-16">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/30 via-gray-900/80 to-gray-900" />

      {/* Ripple Effect */}
      <Ripple className="z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-4"
          >
            <AnimatedGradientText text="Introducing Udemy Practice Exam Creator" />
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Create Udemy Courses
            <span className="text-indigo-400"> with AI</span>
          </motion.h1>

          <motion.p
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Generate high-quality practice tests and course content in minutes.
            Monetize your expertise with AI-powered course creation.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button
              className="group bg-indigo-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              <Sparkles className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform" />
              <span className="relative z-10">Start Creating</span>
            </motion.button>

            <motion.button
              className="group bg-gray-800 text-white px-8 py-4 rounded-lg font-medium border-2 border-gray-700 hover:bg-gray-700 hover:border-gray-600 transition-all flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <BookOpen className="w-5 h-5" />
              Watch Demo
            </motion.button>
          </motion.div>

          {/* Enhanced feature icons */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {features.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 + item.delay }}
                className="relative group"
              >
                <motion.div
                  className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r ${item.gradient} p-0.5 relative`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-full h-full rounded-2xl bg-gray-900 flex items-center justify-center relative overflow-hidden group-hover:bg-gray-800 transition-colors">
                    {/* Animated gradient border */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                    <item.icon className="w-8 h-8 text-white relative z-10 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                  </div>
                </motion.div>

                <motion.p
                  className="text-gray-300 font-medium mt-4 group-hover:text-indigo-400 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  {item.text}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Smooth transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-gray-900" />
    </section>
  );
}
