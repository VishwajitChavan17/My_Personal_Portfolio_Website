import { motion } from 'motion/react';
import { Cpu, Radio, Heart, Thermometer, Sprout, Gauge, MonitorDot, Layers, Eye, Brain, Activity, Wrench } from 'lucide-react';

interface ProjectsReorganizedProps {
  mousePosition: { x: number; y: number };
}

export default function ProjectsReorganized({ mousePosition }: ProjectsReorganizedProps) {
  const projectCategories = [
    {
      title: "Hardware & Embedded Systems",
      gradient: "from-[#00aaff] to-[#0088cc]",
      projects: [
        { name: "Formula Student Telemetry & Diagnostics System", icon: <Radio className="w-5 h-5" />, isPremium: true },
        { name: "Grass Cutting Robot", icon: <Wrench className="w-5 h-5" /> },
        { name: "Smart Health & Safety Band", icon: <Heart className="w-5 h-5" /> },
        { name: "Motor Cooling System Automation", icon: <Thermometer className="w-5 h-5" /> },
        { name: "Low-Cost IoT Soil Monitoring System", icon: <Sprout className="w-5 h-5" /> },
        { name: "Steering Angle Measurement (Rotary Encoder)", icon: <Gauge className="w-5 h-5" /> }
      ]
    },
    {
      title: "Software / IoT / Dashboard",
      gradient: "from-[#a855f7] to-[#8b3fd8]",
      projects: [
        { name: "Formula Student Telemetry Dashboard", icon: <MonitorDot className="w-5 h-5" />, isPremium: true },
        { name: "Embedded Telemetry Data Bridge", icon: <Layers className="w-5 h-5" /> },
        { name: "ADAS Simulation & Validation", icon: <Eye className="w-5 h-5" />, isPremium: true },
        { name: "Bharat Graam Saarthi AI", icon: <Brain className="w-5 h-5" /> },
        { name: "ROP Detection using Machine Learning", icon: <Cpu className="w-5 h-5" />, isPremium: true },
        { name: "Soil Monitoring Dashboard (Flask)", icon: <Activity className="w-5 h-5" /> }
      ]
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
              Projects
            </h2>
            <motion.div 
              className="h-1 bg-gradient-to-r from-transparent via-[#00aaff] to-transparent mt-4"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            />
          </motion.div>
          <p className="text-xl text-white/60 max-w-2xl mx-auto mt-6">
            Embedded Systems • Automotive Telemetry • Intelligent Systems
          </p>
        </motion.div>

        {/* Two Column Layout - Centered */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projectCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: categoryIndex * 0.15,
                type: "spring",
                stiffness: 80
              }}
              className="relative group"
            >
              {/* Category Container */}
              <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 h-full">
                {/* Category Header */}
                <motion.div
                  className={`relative rounded-2xl p-4 mb-6 bg-gradient-to-br ${category.gradient}`}
                  whileHover={{ scale: 1.02 }}
                  style={{
                    boxShadow: '0 10px 30px rgba(0, 170, 255, 0.2)'
                  }}
                >
                  <h3 className="text-xl text-white text-center">
                    {category.title}
                  </h3>
                </motion.div>

                {/* Projects List */}
                <div className="space-y-3">
                  {category.projects.map((project, projectIndex) => (
                    <motion.div
                      key={projectIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        delay: categoryIndex * 0.15 + projectIndex * 0.05
                      }}
                      whileHover={{ 
                        scale: 1.03,
                        x: 5
                      }}
                      className="relative group/item"
                    >
                      {/* Project Card */}
                      <div className={`relative backdrop-blur-md bg-white/5 border ${project.isPremium ? 'border-white/20' : 'border-white/10'} rounded-xl p-4 overflow-hidden transition-all duration-300 hover:bg-white/10 hover:border-white/30 ${project.isPremium ? 'shadow-lg' : ''}`}>
                        {/* Hover Glow */}
                        <div 
                          className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-0 group-hover/item:opacity-10 transition-opacity duration-300`}
                        />
                        
                        {/* Premium accent glow */}
                        {project.isPremium && (
                          <div 
                            className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-5`}
                          />
                        )}
                        
                        <div className="relative z-10 flex items-center gap-3">
                          {/* Icon */}
                          <motion.div 
                            className={`flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br ${category.gradient} flex items-center justify-center shadow-lg ${project.isPremium ? 'ring-2 ring-white/20' : ''}`}
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                            <div className="text-white">
                              {project.icon}
                            </div>
                          </motion.div>
                          
                          {/* Project Name */}
                          <p className={`${project.isPremium ? 'text-white' : 'text-white/80'} text-sm leading-tight flex-1 ${project.isPremium ? 'font-medium' : ''}`}>
                            {project.name}
                          </p>
                        </div>

                        {/* Particle effect on hover */}
                        <div className="absolute inset-0 pointer-events-none">
                          {[...Array(3)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-1 h-1 bg-white/40 rounded-full"
                              style={{
                                left: `${20 + i * 30}%`,
                                top: `${30 + i * 20}%`
                              }}
                              animate={{
                                scale: [0, 1, 0],
                                opacity: [0, 0.8, 0]
                              }}
                              transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                delay: i * 0.3
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Decorative corner accent */}
                <div className="absolute bottom-4 right-4 opacity-10">
                  <div 
                    className="w-16 h-16 rounded-lg border-2"
                    style={{ 
                      borderImage: `linear-gradient(135deg, ${category.gradient.includes('00aaff') ? '#00aaff' : '#a855f7'}, transparent) 1`,
                      transform: 'perspective(100px) rotateX(45deg) rotateZ(45deg)'
                    }}
                  />
                </div>
              </div>

              {/* Column glow effect */}
              <div 
                className={`absolute -inset-1 bg-gradient-to-b ${category.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`}
              />
            </motion.div>
          ))}
        </div>

        {/* Floating 3D Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-32 h-32 border border-[#00aaff]/10 rounded-lg"
              style={{
                left: `${15 + i * 30}%`,
                top: `${25 + i * 20}%`,
                transform: `perspective(1000px) rotateX(${45}deg) rotateZ(${45}deg)`
              }}
              animate={{
                rotateZ: [45, 405],
                y: [0, -20, 0]
              }}
              transition={{
                duration: 10 + i * 2,
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