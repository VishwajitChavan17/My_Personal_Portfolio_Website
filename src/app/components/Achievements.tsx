import { motion } from 'motion/react';
import { Trophy, Zap, Award, Code, Users } from 'lucide-react';

interface AchievementsProps {
  mousePosition: { x: number; y: number };
}

export default function Achievements({ mousePosition }: AchievementsProps) {
  const achievements = [
    {
      title: "Formula Bharat 2025",
      subtitle: "MIT WPU Racing",
      description: "Core team member developing control systems and sensor integration for electric formula racing vehicle",
      icon: <Trophy className="w-10 h-10" />,
      gradient: "from-[#FFD700] to-[#FFA500]",
      particles: 12
    },
    {
      title: "IoT Innovation",
      subtitle: "Embedded Systems",
      description: "Developed multiple IoT projects including plant monitoring systems and automation solutions",
      icon: <Zap className="w-10 h-10" />,
      gradient: "from-[#00aaff] to-[#0088cc]",
      particles: 10
    },
    {
      title: "Technical Leadership",
      subtitle: "University Nominee",
      description: "University Secretary Nominee for IT Networking, leading technical initiatives and team collaboration",
      icon: <Users className="w-10 h-10" />,
      gradient: "from-[#a855f7] to-[#8b3fd8]",
      particles: 8
    },
    {
      title: "Hackathons & Events",
      subtitle: "Technical Excellence",
      description: "Active participant in various hackathons and technical competitions showcasing innovation",
      icon: <Code className="w-10 h-10" />,
      gradient: "from-[#00aaff] to-[#a855f7]",
      particles: 10
    },
    {
      title: "Project Recognition",
      subtitle: "Engineering Impact",
      description: "Multiple projects recognized for innovation in embedded systems and IoT applications",
      icon: <Award className="w-10 h-10" />,
      gradient: "from-[#8b3fd8] to-[#00aaff]",
      particles: 9
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
            <h2 className="text-5xl md:text-6xl bg-gradient-to-r from-[#FFD700] via-[#00aaff] to-[#a855f7] bg-clip-text text-transparent">
              Milestones
            </h2>
            <motion.div 
              className="h-1 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent mt-4"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            />
          </motion.div>
          <p className="text-xl text-white/60 max-w-2xl mx-auto mt-6">
            A journey through innovation, leadership, and technical excellence
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {achievements.map((achievement, index) => (
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
                className="relative"
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
                  className={`absolute -inset-1 bg-gradient-to-r ${achievement.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500`}
                />

                {/* Badge Container */}
                <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 overflow-hidden">
                  {/* Particle effects */}
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(achievement.particles)].map((_, i) => (
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
                    className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${achievement.gradient} flex items-center justify-center mb-6 relative z-10 shadow-2xl`}
                    animate={{ 
                      rotateY: [0, 360],
                      boxShadow: [
                        '0 0 20px rgba(0,170,255,0.3)',
                        '0 0 40px rgba(168,85,247,0.5)',
                        '0 0 20px rgba(0,170,255,0.3)'
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
                      {achievement.icon}
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10 text-center">
                    <h3 className="text-xl mb-2 text-white">
                      {achievement.title}
                    </h3>
                    <p className={`text-sm mb-4 bg-gradient-to-r ${achievement.gradient} bg-clip-text text-transparent`}>
                      {achievement.subtitle}
                    </p>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>

                  {/* Decorative corner accents */}
                  <div className="absolute top-0 right-0 w-20 h-20 opacity-20">
                    <div className={`absolute top-4 right-4 w-12 h-0.5 bg-gradient-to-l ${achievement.gradient}`} />
                    <div className={`absolute top-4 right-4 w-0.5 h-12 bg-gradient-to-b ${achievement.gradient}`} />
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
      </div>
    </div>
  );
}
