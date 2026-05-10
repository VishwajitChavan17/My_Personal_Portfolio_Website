import { motion } from 'motion/react';
import { FileText, Sparkles } from 'lucide-react';

interface PatentsProps {
  mousePosition: { x: number; y: number };
}

export default function Patents({ mousePosition }: PatentsProps) {
  return (
    <div className="min-h-screen px-4 pt-32 pb-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-block mb-6"
            style={{
              transform: `perspective(1000px) rotateY(${mousePosition.x * 5}deg)`
            }}
          >
            <h2 className="text-5xl md:text-6xl bg-gradient-to-r from-[#00aaff] via-[#a855f7] to-[#00aaff] bg-clip-text text-transparent">
              Patents
            </h2>
            <motion.div 
              className="h-1 bg-gradient-to-r from-transparent via-[#00aaff] to-transparent mt-4"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            />
          </motion.div>
          <p className="text-xl text-white/60 max-w-2xl mx-auto mt-6">
            Intellectual property contributions to innovation
          </p>
        </motion.div>

        {/* Patent Card */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ 
              delay: 0.3,
              type: "spring",
              stiffness: 100
            }}
            className="relative group max-w-2xl w-full"
            style={{
              transformStyle: 'preserve-3d',
              perspective: '1000px'
            }}
          >
            <motion.div
              className="relative"
              whileHover={{ 
                scale: 1.03,
                rotateY: mousePosition.x * 5,
                rotateX: -mousePosition.y * 5
              }}
              style={{
                transformStyle: 'preserve-3d'
              }}
            >
              {/* Glow effect */}
              <div 
                className="absolute -inset-1 bg-gradient-to-r from-[#00aaff] to-[#a855f7] rounded-3xl blur-2xl opacity-0 group-hover:opacity-70 transition-opacity duration-500"
              />

              {/* Card Container */}
              <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 overflow-hidden">
                {/* Particle effects */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(15)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-white/30 rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`
                      }}
                      animate={{
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0]
                      }}
                      transition={{
                        duration: 2 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2
                      }}
                    />
                  ))}
                </div>

                {/* Icon */}
                <motion.div 
                  className="w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br from-[#00aaff] to-[#a855f7] flex items-center justify-center mb-6 relative z-10 shadow-2xl"
                  animate={{ 
                    rotateY: [0, 360],
                    boxShadow: [
                      '0 0 30px rgba(0,170,255,0.5)',
                      '0 0 50px rgba(168,85,247,0.7)',
                      '0 0 30px rgba(0,170,255,0.5)'
                    ]
                  }}
                  transition={{ 
                    rotateY: {
                      duration: 5,
                      repeat: Infinity,
                      ease: "linear"
                    },
                    boxShadow: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                >
                  <FileText className="w-12 h-12 text-white" />
                </motion.div>

                {/* Content */}
                <div className="relative z-10 text-center">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    >
                      <Sparkles className="w-5 h-5 text-[#00aaff]" />
                    </motion.div>
                    <span className="text-sm px-4 py-1 rounded-full bg-gradient-to-r from-[#00aaff]/20 to-[#a855f7]/20 border border-[#00aaff]/30 text-white/80">
                      Filed at Indian Patent Office
                    </span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl mb-4 text-white">
                    Grass Cutting Robot
                  </h3>
                  
                  <p className="text-white/60 leading-relaxed max-w-xl mx-auto">
                    An autonomous robotic system designed for sustainable lawn maintenance, featuring intelligent navigation and energy-efficient operation powered by advanced battery technology.
                  </p>
                </div>

                {/* Decorative corner accents */}
                <div className="absolute top-0 right-0 w-24 h-24 opacity-20">
                  <div className="absolute top-6 right-6 w-16 h-0.5 bg-gradient-to-l from-[#00aaff] to-[#a855f7]" />
                  <div className="absolute top-6 right-6 w-0.5 h-16 bg-gradient-to-b from-[#00aaff] to-[#a855f7]" />
                </div>
                <div className="absolute bottom-0 left-0 w-24 h-24 opacity-20">
                  <div className="absolute bottom-6 left-6 w-16 h-0.5 bg-gradient-to-r from-[#a855f7] to-[#00aaff]" />
                  <div className="absolute bottom-6 left-6 w-0.5 h-16 bg-gradient-to-t from-[#a855f7] to-[#00aaff]" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating 3D Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(2)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-40 h-40 border border-[#00aaff]/10 rounded-lg"
              style={{
                left: `${15 + i * 60}%`,
                top: `${40 + i * 10}%`,
                transform: `perspective(1000px) rotateX(${45}deg) rotateZ(${45}deg)`
              }}
              animate={{
                rotateZ: [45, 405],
                y: [0, -30, 0]
              }}
              transition={{
                duration: 12 + i * 3,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
