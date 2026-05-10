import { motion } from 'motion/react';
import { Calendar, MapPin, GraduationCap, Briefcase, Code2, Rocket } from 'lucide-react';

interface AboutProps {
  mousePosition: { x: number; y: number };
}

export default function About({ mousePosition }: AboutProps) {
  const timeline = [
    {
      year: "2023",
      title: "Engineering Journey Begins",
      subtitle: "MIT World Peace University",
      description: "Started Computer Science & Engineering program, diving into fundamentals of programming and systems design",
      icon: <GraduationCap className="w-6 h-6" />,
      color: "#00aaff"
    },
    {
      year: "2024",
      title: "Formula Bharat Team",
      subtitle: "MIT WPU Racing",
      description: "Joined the Formula Bharat team, working on sensor integration and motor cooling system for electric racing vehicle",
      icon: <Rocket className="w-6 h-6" />,
      color: "#a855f7"
    },
    {
      year: "2024",
      title: "Raspberry Pi Projects",
      subtitle: "IoT & Embedded Systems",
      description: "Developed Car Dashboard UI and Plant Monitoring System, exploring real-time data visualization and agricultural IoT",
      icon: <Code2 className="w-6 h-6" />,
      color: "#00aaff"
    },
    {
      year: "2025",
      title: "Advanced Systems",
      subtitle: "Automation & Control",
      description: "Focused on embedded systems, automation solutions, and applied software engineering for real-world challenges",
      icon: <Briefcase className="w-6 h-6" />,
      color: "#a855f7"
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
            <h2 className="text-5xl md:text-6xl bg-gradient-to-r from-[#00aaff] via-[#a855f7] to-[#00aaff] bg-clip-text text-transparent">
              My Journey
            </h2>
            <motion.div 
              className="h-1 bg-gradient-to-r from-transparent via-[#00aaff] to-transparent mt-4"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            />
          </motion.div>
          <p className="text-xl text-white/60 max-w-2xl mx-auto mt-6">
            From classroom theory to real-world innovation
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00aaff] via-[#a855f7] to-[#00aaff] hidden lg:block" />

          {/* Timeline Items */}
          <div className="space-y-16">
            {timeline.map((item, index) => {
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
                      scale: 1.02,
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
                        className="absolute -inset-1 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"
                        style={{
                          background: `linear-gradient(to right, ${item.color}, ${item.color}80)`
                        }}
                      />

                      {/* Card */}
                      <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8">
                        {/* Year Badge */}
                        <motion.div 
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
                          style={{
                            background: `linear-gradient(135deg, ${item.color}40, ${item.color}20)`,
                            border: `1px solid ${item.color}40`
                          }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <Calendar className="w-4 h-4" style={{ color: item.color }} />
                          <span className="text-white">{item.year}</span>
                        </motion.div>

                        <h3 className="text-2xl mb-2 text-white">
                          {item.title}
                        </h3>
                        <p 
                          className="mb-4 text-lg"
                          style={{ color: item.color }}
                        >
                          {item.subtitle}
                        </p>
                        <p className="text-white/60 leading-relaxed">
                          {item.description}
                        </p>

                        {/* Corner accent */}
                        <div className="absolute bottom-4 right-4 opacity-20">
                          <div 
                            className="w-16 h-16 rounded-lg border-2"
                            style={{ 
                              borderColor: item.color,
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
                        background: `linear-gradient(135deg, ${item.color}, ${item.color}cc)`,
                        boxShadow: `0 0 30px ${item.color}80`
                      }}
                    >
                      <div className="text-white">
                        {item.icon}
                      </div>
                    </div>

                    {/* Pulsing ring */}
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{
                        border: `2px solid ${item.color}`
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

        {/* Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20"
        >
          {[
            {
              icon: <GraduationCap className="w-8 h-8" />,
              label: "Education",
              value: "B.Tech CSE, MIT WPU",
              gradient: "from-[#00aaff] to-[#0088cc]"
            },
            {
              icon: <MapPin className="w-8 h-8" />,
              label: "Location",
              value: "Pune, Maharashtra",
              gradient: "from-[#a855f7] to-[#8b3fd8]"
            },
            {
              icon: <Briefcase className="w-8 h-8" />,
              label: "Focus",
              value: "IoT & Embedded Systems",
              gradient: "from-[#00aaff] to-[#a855f7]"
            }
          ].map((card, index) => (
            <motion.div
              key={index}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6 text-center group"
              whileHover={{ 
                scale: 1.05,
                borderColor: 'rgba(0, 170, 255, 0.3)'
              }}
            >
              <motion.div
                className={`w-16 h-16 mx-auto rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center mb-4`}
                whileHover={{ rotateY: 180 }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-white">
                  {card.icon}
                </div>
              </motion.div>
              <p className="text-white/60 text-sm mb-2">{card.label}</p>
              <p className="text-white">{card.value}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
