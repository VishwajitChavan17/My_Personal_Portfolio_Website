import { motion } from 'motion/react';
import { BookOpen, Award, FileCheck } from 'lucide-react';

interface ResearchProps {
  mousePosition: { x: number; y: number };
}

export default function Research({ mousePosition }: ResearchProps) {
  const papers = [
    {
      title: "Towards Sustainable Lawn Care: Autonomous Grass-Cutting Robot Powered by LiPo Battery",
      status: "IEEE Published + Scopus Indexed",
      role: "Primary Author",
      icon: <Award className="w-10 h-10" />,
      gradient: "from-[#00aaff] to-[#0088cc]",
      statusColor: "#00aaff"
    },
    {
      title: "Agricultural Automation System to Measure Soil Moisture and NPK Values using IoT",
      status: "IEEE Published + Scopus Indexed",
      role: "Co-Author & Designer",
      icon: <FileCheck className="w-10 h-10" />,
      gradient: "from-[#a855f7] to-[#8b3fd8]",
      statusColor: "#a855f7"
    }
  ];

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
              Research Publications
            </h2>
            <motion.div 
              className="h-1 bg-gradient-to-r from-transparent via-[#00aaff] to-transparent mt-4"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            />
          </motion.div>
          <p className="text-xl text-white/60 max-w-2xl mx-auto mt-6">
            Contributing to academic knowledge through innovative research
          </p>
        </motion.div>

        {/* Research Papers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {papers.map((paper, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, rotateY: index === 0 ? -30 : 30 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              className="relative group"
              style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px'
              }}
            >
              <motion.div
                className="relative h-full"
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
                  className={`absolute -inset-1 bg-gradient-to-r ${paper.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500`}
                />

                {/* Card Container */}
                <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 overflow-hidden h-full flex flex-col">
                  {/* Particle effects */}
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(12)].map((_, i) => (
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
                    className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${paper.gradient} flex items-center justify-center mb-6 relative z-10 shadow-2xl`}
                    animate={{ 
                      rotateY: [0, 360],
                      boxShadow: [
                        `0 0 20px ${paper.statusColor}60`,
                        `0 0 40px ${paper.statusColor}90`,
                        `0 0 20px ${paper.statusColor}60`
                      ]
                    }}
                    transition={{ 
                      rotateY: {
                        duration: 4,
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
                    <div className="text-white">
                      {paper.icon}
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10 text-center flex-1 flex flex-col">
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <span 
                        className="text-sm px-4 py-1 rounded-full border"
                        style={{
                          background: `linear-gradient(to right, ${paper.statusColor}20, ${paper.statusColor}10)`,
                          borderColor: `${paper.statusColor}40`,
                          color: paper.statusColor
                        }}
                      >
                        {paper.status}
                      </span>
                    </div>
                    
                    <h3 className="text-xl mb-3 text-white leading-relaxed flex-1">
                      {paper.title}
                    </h3>
                    
                    <div className="mt-4">
                      <div className="flex items-center justify-center gap-2">
                        <BookOpen className="w-4 h-4 text-white/60" />
                        <p className="text-white/60 text-sm">
                          {paper.role}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Decorative corner accents */}
                  <div className="absolute top-0 right-0 w-20 h-20 opacity-20">
                    <div className={`absolute top-4 right-4 w-12 h-0.5 bg-gradient-to-l ${paper.gradient}`} />
                    <div className={`absolute top-4 right-4 w-0.5 h-12 bg-gradient-to-b ${paper.gradient}`} />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Floating 3D Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(2)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-32 h-32 border border-[#a855f7]/10 rounded-lg"
              style={{
                left: `${25 + i * 50}%`,
                top: `${35 + i * 15}%`,
                transform: `perspective(1000px) rotateX(${45}deg) rotateZ(${45}deg)`
              }}
              animate={{
                rotateZ: [45, 405],
                y: [0, -25, 0]
              }}
              transition={{
                duration: 11 + i * 2,
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
