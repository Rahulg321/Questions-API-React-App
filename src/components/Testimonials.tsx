import { motion, useAnimationControls } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Course Creator",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
    content: "This platform has revolutionized how I create Udemy courses. The AI-generated practice tests are spot-on and save me hours of work."
  },
  {
    name: "Michael Chen",
    role: "Tech Instructor",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
    content: "The quality of AI-generated content is impressive. My students love the practice tests, and my course ratings have improved significantly."
  },
  {
    name: "Emily Rodriguez",
    role: "Education Consultant",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
    content: "A game-changer for online education. The platform's AI understands complex topics and creates engaging content that actually helps students learn."
  },
  {
    name: "David Kim",
    role: "Programming Instructor",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
    content: "The AI course generator has transformed my teaching workflow. It creates perfect practice questions that challenge students at just the right level."
  },
  {
    name: "Lisa Thompson",
    role: "Digital Marketing Expert",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
    content: "I was skeptical about AI-generated content, but this platform exceeded my expectations. The quality and relevance are outstanding."
  }
];

const doubledTestimonials = [...testimonials, ...testimonials];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const isAnimating = useRef(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    let animationTimeout: NodeJS.Timeout;

    const startAnimation = async () => {
      if (!scrollRef.current || isAnimating.current) return;

      const scrollWidth = scrollRef.current.scrollWidth / 2;
      const animationDuration = 30;

      const animate = async () => {
        isAnimating.current = true;
        
        try {
          await controls.start({
            x: -scrollWidth,
            transition: {
              duration: animationDuration,
              ease: "linear"
            }
          });

          if (isMounted) {
            controls.set({ x: 0 });
            isAnimating.current = false;
            animationTimeout = setTimeout(animate, 0);
          }
        } catch (error) {
          isAnimating.current = false;
        }
      };

      animate();
    };

    startAnimation();

    return () => {
      clearTimeout(animationTimeout);
      isAnimating.current = false;
    };
  }, [controls, isMounted]);

  const handleMouseEnter = () => {
    if (isMounted) {
      controls.stop();
    }
  };

  const handleMouseLeave = () => {
    if (isMounted && scrollRef.current) {
      const scrollWidth = scrollRef.current.scrollWidth / 2;
      controls.start({
        x: -scrollWidth,
        transition: {
          duration: 30,
          ease: "linear"
        }
      });
    }
  };

  return (
    <section className="relative min-h-screen bg-gray-900 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-indigo-500/20 via-gray-900 to-gray-900" />
      
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
            Wall of love
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-8"
          >
            Loved by educators
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto mb-16"
          >
            Here's what course creators are saying about our platform
          </motion.p>
        </motion.div>

        <div className="relative" ref={containerRef}>
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-900 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-900 to-transparent z-10" />
          
          <div 
            className="overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div
              ref={scrollRef}
              animate={controls}
              className="flex gap-6 pb-8"
            >
              {doubledTestimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 w-[400px] flex-shrink-0 cursor-pointer hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/20 transition-all"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-white">{testimonial.name}</h4>
                      <p className="text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}