import { motion } from 'motion/react';
import { Trophy, Award, Zap, Star } from 'lucide-react';

interface HackathonsProps {
  mousePosition: { x: number; y: number };
}

export default function Hackathons({ mousePosition }: HackathonsProps) {
  const hackathons = [
    {
      title: "Smart India Hackathon",
      achievement: "Finalist (2024 & 2025)",
      description: "Qualified as finalist in two consecutive editions through innovative engineering and problem-solving solutions",
      icon: <Trophy className="w-12 h-12" />,
      gradient: "from-[#00aaff] to-[#0088cc]",
      color: "#00aaff",
      particles: 15
    },
    {
      title: "Hack MIT",
      achievement: "Top 5",
      description: "Recognized among top teams for innovation, technical execution, and solution design during Hack MIT competition",
      icon: <Zap className="w-12 h-12" />,
      gradient: "from-[#a855f7] to-[#8b3fd8]",
      color: "#a855f7",
      particles: 12
    },
    {
      title: "Amazon AI for Bharat",
      achievement: "Round 2 Finalist",
      description: "Advanced to Round 2 through AI-driven problem solving and intelligent system development",
      icon: <Award className="w-12 h-12" />,
      gradient: "from-[#00aaff] to-[#0088cc]",
      color: "#00aaff",
      particles: 14
    },
    {
      title: "IRIS Hackathon",
      achievement: "Finalist",
      description: "Selected as finalist in IRIS Hackathon powered by Bharat Go for innovative technical solution development and engineering execution",
      icon: <Zap className="w-12 h-12" />,
      gradient: "from-[#a855f7] to-[#8b3fd8]",
      color: "#a855f7",
      particles: 13
    },
    {
      title: "EV Safety Level 3E Certification",
      achievement: "SkillShark x ASDC Certified",
      description: "Successfully cleared EV Safety Level 3E certification under SkillShark and Automotive Skills Development Council (ASDC), focused on EV safety systems, electrical safety protocols, and automotive engineering practices",
      icon: <Award className="w-12 h-12" />,
      gradient: "from-[#00aaff] via-[#FFD700] to-[#0088cc]",
      color: "#00aaff",
      particles: 14
    },
    {
      title: "SUPRA SAE 2025",
      achievement: "AIR 2",
      description: "Achieved All India Rank 2 among 18+ national Formula Student teams for embedded telemetry systems, electronics integration, and vehicle diagnostics engineering",
      icon: <Trophy className="w-12 h-12" />,
      gradient: "from-[#FFD700] to-[#FFA500]",
      color: "#FFD700",
      particles: 18,
      highlight: true
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
            <h2 className="text-3xl md:text-6xl bg-gradient-to-r from-[#FFD700] via-[#00aaff] to-[#a855f7] bg-clip-text text-transparent">
              Hackathons & Achievements
            </h2>
            <motion.div 
              className="h-1 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent mt-4"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            />
          </motion.div>
          <p className="text-xl text-white/60 max-w-2xl mx-auto mt-6">
            Recognition for innovation and excellence in competitive technical challenges
          </p>
        </motion.div>

        {/* Badge Wall - Single Row Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {hackathons.map((hackathon, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ 
                delay: index * 0.15,
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
                  scale: 1.05,
                  rotateY: mousePosition.x * 10,
                  rotateX: -mousePosition.y * 10
                }}
                style={{
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* Glow effect */}
                <div 
                  className={`absolute -inset-1 bg-gradient-to-r ${hackathon.gradient} rounded-3xl blur-2xl opacity-0 group-hover:opacity-70 transition-opacity duration-500`}
                />

                {/* Badge Container */}
                <div className={`relative backdrop-blur-xl bg-white/5 border-2 rounded-3xl p-8 overflow-hidden h-full flex flex-col ${
                  hackathon.highlight ? 'border-[#a855f7]/40' : 'border-white/10'
                }`}>
                  {/* Particle effects */}
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(hackathon.particles)].map((_, i) => (
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

                  {/* Highlight Badge */}
                  {hackathon.highlight && (
                    <motion.div
                      className="absolute top-4 right-4"
                      animate={{
                        rotate: [0, 360]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                      <Star className="w-6 h-6 text-[#FFD700] fill-[#FFD700]" />
                    </motion.div>
                  )}

                  {/* Icon */}
                  <motion.div 
                    className={`w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br ${hackathon.gradient} flex items-center justify-center mb-6 relative z-10 shadow-2xl`}
                    animate={{ 
                      rotateY: [0, 360],
                      boxShadow: [
                        `0 0 30px ${hackathon.color}50`,
                        `0 0 50px ${hackathon.color}80`,
                        `0 0 30px ${hackathon.color}50`
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
                      {hackathon.icon}
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10 text-center flex-1 flex flex-col">
                    <h3 className="text-xl md:text-2xl mb-3 text-white">
                      {hackathon.title}
                    </h3>
                    <motion.p 
                      className={`text-lg mb-4 bg-gradient-to-r ${hackathon.gradient} bg-clip-text text-transparent`}
                      animate={hackathon.highlight ? {
                        scale: [1, 1.05, 1]
                      } : {}}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      {hackathon.achievement}
                    </motion.p>
                    <p className="text-white/60 text-sm leading-relaxed flex-1">
                      {hackathon.description}
                    </p>
                  </div>

                  {/* Decorative corner accents */}
                  <div className="absolute top-0 left-0 w-20 h-20 opacity-20">
                    <div className={`absolute top-4 left-4 w-12 h-0.5 bg-gradient-to-r ${hackathon.gradient}`} />
                    <div className={`absolute top-4 left-4 w-0.5 h-12 bg-gradient-to-b ${hackathon.gradient}`} />
                  </div>
                  <div className="absolute bottom-0 right-0 w-20 h-20 opacity-20">
                    <div className={`absolute bottom-4 right-4 w-12 h-0.5 bg-gradient-to-l ${hackathon.gradient}`} />
                    <div className={`absolute bottom-4 right-4 w-0.5 h-12 bg-gradient-to-t ${hackathon.gradient}`} />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Floating Trophy */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-5">
          <motion.div
            animate={{
              rotateY: [0, 360],
              y: [0, -30, 0]
            }}
            transition={{
              rotateY: {
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              },
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            <Trophy className="w-64 h-64 text-[#FFD700]" />
          </motion.div>
        </div>

        {/* Floating 3D Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-32 h-32 border border-[#FFD700]/10 rounded-lg"
              style={{
                left: `${20 + i * 30}%`,
                top: `${30 + i * 15}%`,
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
