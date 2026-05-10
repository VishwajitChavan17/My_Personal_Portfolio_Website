import { motion } from 'motion/react';
import ProjectCard from './ProjectCard';
import { Gauge, Cpu, Sprout, Lock, BookOpen, Thermometer } from 'lucide-react';

interface ProjectsProps {
  mousePosition: { x: number; y: number };
}

export default function Projects({ mousePosition }: ProjectsProps) {
  const projects = [
    {
      title: "Car Dashboard UI",
      description: "Real-time data visualization system displaying Speed, State of Charge (SOC), Motor Temperature, and Brake Pressure using Flask framework and Raspberry Pi for MIT WPU Racing Formula Bharat team.",
      tech: ["Flask", "Raspberry Pi", "Python", "Real-time Data"],
      icon: <Gauge className="w-8 h-8" />,
      gradient: "from-[#00aaff] to-[#0088cc]"
    },
    {
      title: "Formula Bharat 2025 Control System",
      description: "Advanced coolant system automation using Arduino and thermistor voltage divider for ME1616 motor. Implements temperature monitoring and automatic cooling activation when temperature exceeds threshold.",
      tech: ["Arduino", "C++", "Embedded Systems", "Thermistor"],
      icon: <Thermometer className="w-8 h-8" />,
      gradient: "from-[#a855f7] to-[#8b3fd8]"
    },
    {
      title: "Plant Monitoring System",
      description: "IoT-based agricultural solution with NPK sensor integration and cloud connectivity. Monitors soil moisture, NPK levels, and temperature to help farmers optimize crop yields through data-driven decisions.",
      tech: ["IoT", "NPK Sensor", "Cloud", "Agriculture Tech"],
      icon: <Sprout className="w-8 h-8" />,
      gradient: "from-[#00aaff] to-[#a855f7]"
    },
    {
      title: "Password Door Lock (8051)",
      description: "Microcontroller-based security system featuring I2C LCD display, matrix keypad for password entry, and servo motor control for automated door locking mechanism. Built on 8051 architecture.",
      tech: ["8051", "I2C LCD", "Servo Motor", "Embedded C"],
      icon: <Lock className="w-8 h-8" />,
      gradient: "from-[#8b3fd8] to-[#00aaff]"
    },
    {
      title: "Dictionary using BST",
      description: "Efficient string-based Binary Search Tree implementation in C for rapid word lookup operations. Optimized data structure provides O(log n) search complexity for dictionary operations.",
      tech: ["C", "Data Structures", "BST", "Algorithms"],
      icon: <BookOpen className="w-8 h-8" />,
      gradient: "from-[#00aaff] to-[#a855f7]"
    },
    {
      title: "Raspberry Pi Projects",
      description: "Collection of innovative Raspberry Pi implementations including sensor integrations, automation systems, and embedded solutions for various engineering challenges.",
      tech: ["Raspberry Pi", "Python", "GPIO", "Linux"],
      icon: <Cpu className="w-8 h-8" />,
      gradient: "from-[#a855f7] to-[#00aaff]"
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
              Tech Innovations
            </h2>
            <motion.div 
              className="h-1 bg-gradient-to-r from-transparent via-[#00aaff] to-transparent mt-4"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            />
          </motion.div>
          <p className="text-xl text-white/60 max-w-2xl mx-auto mt-6">
            Interactive showcase of engineering projects spanning embedded systems, IoT, and automation
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              index={index}
              mousePosition={mousePosition}
            />
          ))}
        </div>

        {/* Floating 3D Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-32 h-32 border border-[#00aaff]/10 rounded-lg"
              style={{
                left: `${20 + i * 30}%`,
                top: `${30 + i * 20}%`,
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
