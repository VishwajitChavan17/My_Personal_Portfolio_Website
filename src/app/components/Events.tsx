import { motion } from 'motion/react';
import { Calendar, Trophy, Zap, Award } from 'lucide-react';

interface EventsProps {
  mousePosition: { x: number; y: number };
}

export default function Events({ mousePosition }: EventsProps) {
  const events = [
    {
      date: "Aug 2023 - Feb 2024",
      title: "Formula Bharat 2024",
      role: "Manufacturing Department",
      description: "Contributed to the manufacturing and assembly processes for the Formula Student racing vehicle",
      icon: <Trophy className="w-6 h-6" />,
      color: "#00aaff"
    },
    {
      date: "Mar 2024 - Aug 2024",
      title: "Formula Bharat 2025",
      role: "Electronics & DAQ",
      description: "Designed and implemented 4.3-inch dashboard for real-time telemetry and vehicle diagnostics",
      icon: <Zap className="w-6 h-6" />,
      color: "#a855f7",
      highlight: true
    },
    {
      date: "Sep 2024 - Aug 2025",
      title: "SUPRA SAE 2025",
      role: "ESO + Electronics/DAQ",
      description: "Achieved All India Rank 2 through advanced electronic systems optimization and data acquisition",
      icon: <Award className="w-6 h-6" />,
      color: "#FFD700",
      rank: "AIR 2"
    }
  ];

  return (
    <div className="min-h-screen px-4 pt-32 pb-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-block mb-6"
            style={{
              transform: `perspective(1000px) rotateY(${mousePosition.x * 5}deg)`
            }}
          >
            <h2 className="text-3xl md:text-6xl bg-gradient-to-r from-[#00aaff] via-[#a855f7] to-[#FFD700] bg-clip-text text-transparent">
              Events & Participation
            </h2>
            <motion.div 
              className="h-1 bg-gradient-to-r from-transparent via-[#00aaff] to-transparent mt-4"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            />
          </motion.div>
          <p className="text-xl text-white/60 max-w-2xl mx-auto mt-6">
            Timeline of competitive engineering achievements from Aug 2023 to Aug 2025
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00aaff] via-[#a855f7] to-[#FFD700] hidden lg:block" />

          {/* Timeline Items */}
          <div className="space-y-16">
            {events.map((event, index) => {
              const isLeft = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  initial={{ 
                    opacity: 0, 
                    x: isLeft ? -100 : 100,
                    rotateY: isLeft ? -30 : 30
                  }}
                  animate={{ 
                    opacity: 1, 
                    x: 0,
                    rotateY: 0
                  }}
                  transition={{ 
                    delay: index * 0.2,
                    type: "spring",
                    stiffness: 100
                  }}
                  className={`relative flex items-center gap-8 ${
                    isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex-col`}
                  style={{
                    transformStyle: 'preserve-3d',
                    perspective: '1000px'
                  }}
                >
                  {/* Content Card */}
                  <motion.div
                    className="flex-1 group"
                    whileHover={{ 
                      scale: 1.03,
                      rotateY: mousePosition.x * 5,
                      rotateX: -mousePosition.y * 5
                    }}
                    style={{
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    <div className="relative">
                      {/* Glow */}
                      <div 
                        className="absolute -inset-1 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500"
                        style={{
                          background: `linear-gradient(to right, ${event.color}, ${event.color}80)`
                        }}
                      />

                      {/* Card */}
                      <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 overflow-hidden">
                        {/* Particle effects */}
                        <div className="absolute inset-0 pointer-events-none">
                          {[...Array(8)].map((_, i) => (
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

                        {/* Date Badge */}
                        <motion.div 
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
                          style={{
                            background: `linear-gradient(135deg, ${event.color}40, ${event.color}20)`,
                            border: `1px solid ${event.color}40`
                          }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <Calendar className="w-4 h-4" style={{ color: event.color }} />
                          <span className="text-white text-sm">{event.date}</span>
                        </motion.div>

                        {/* Rank Badge (if applicable) */}
                        {event.rank && (
                          <motion.div 
                            className="absolute top-4 right-4 px-4 py-2 rounded-full"
                            style={{
                              background: `linear-gradient(135deg, ${event.color}60, ${event.color}40)`,
                              border: `2px solid ${event.color}`,
                              boxShadow: `0 0 20px ${event.color}60`
                            }}
                            animate={{
                              boxShadow: [
                                `0 0 20px ${event.color}60`,
                                `0 0 30px ${event.color}90`,
                                `0 0 20px ${event.color}60`
                              ]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          >
                            <span className="text-white">{event.rank}</span>
                          </motion.div>
                        )}

                        <h3 className="text-2xl md:text-3xl mb-2 text-white">
                          {event.title}
                        </h3>
                        <p 
                          className="mb-4 text-lg"
                          style={{ color: event.color }}
                        >
                          {event.role}
                        </p>
                        <p className="text-white/60 leading-relaxed">
                          {event.description}
                        </p>

                        {/* Corner accent */}
                        <div className="absolute bottom-4 right-4 opacity-20">
                          <div 
                            className="w-16 h-16 rounded-lg border-2"
                            style={{ 
                              borderColor: event.color,
                              transform: 'perspective(100px) rotateX(45deg) rotateZ(45deg)'
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Center Icon */}
                  <motion.div
                    className="relative z-10"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center shadow-2xl"
                      style={{
                        background: `linear-gradient(135deg, ${event.color}, ${event.color}cc)`,
                        boxShadow: `0 0 30px ${event.color}80`
                      }}
                    >
                      <div className="text-white">
                        {event.icon}
                      </div>
                    </div>

                    {/* Pulsing ring */}
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{
                        border: `2px solid ${event.color}`
                      }}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 0, 0.5]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>

                  {/* Spacer for alignment */}
                  <div className="flex-1 hidden lg:block" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Floating 3D Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(2)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-32 h-32 border border-[#a855f7]/10 rounded-lg"
              style={{
                left: `${20 + i * 60}%`,
                top: `${30 + i * 25}%`,
                transform: `perspective(1000px) rotateX(${45}deg) rotateZ(${45}deg)`
              }}
              animate={{
                rotateZ: [45, 405],
                y: [0, -25, 0]
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
