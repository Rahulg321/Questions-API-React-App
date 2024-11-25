import { motion } from 'framer-motion';
import Scene3D from './3d/Scene';
import Globe from './3d/Globe';

export default function About() {
  return (
    <section className="relative min-h-screen bg-gray-900 py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-indigo-900/20" />
      
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
            className="inline-block px-4 py-1 rounded-full bg-gray-800 text-gray-300 text-sm mb-8"
          >
            About Us
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight"
          >
            We're an indie team
            <br />
            dotted across the globe
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto mb-12"
          >
            Our mission is to revolutionize online education by empowering course creators
            with cutting-edge AI tools that make content creation effortless and engaging.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="inline-flex items-center px-6 py-3 rounded-lg bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors"
          >
            See our values
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative w-full max-w-4xl mx-auto"
        >
          <Scene3D height="h-[600px]" cameraPosition={[0, 0, 2.5]} background="#000">
            <Globe />
          </Scene3D>
        </motion.div>
      </div>
    </section>
  );
}