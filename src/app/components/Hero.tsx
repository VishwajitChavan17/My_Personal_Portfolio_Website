import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { Github, Linkedin, Instagram, ChevronDown } from 'lucide-react';

interface HeroProps {
  mousePosition: { x: number; y: number };
}

export default function Hero({ mousePosition }: HeroProps) {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  
  const roles = [
    "Raspberry Pi Developer",
    "IoT & Embedded Systems Enthusiast",
    "Formula Bharat 2025 Engineer",
    "Full Stack Developer"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-24 pb-12 relative">
      {/* 3D Holographic Rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-[#00aaff]/20"
            style={{
              width: `${300 + i * 150}px`,
              height: `${300 + i * 150}px`,
              transform: `perspective(1000px) rotateX(${60 + mousePosition.y * 10}deg) rotateZ(${mousePosition.x * 20}deg)`
            }}
            animate={{
              rotate: 360,
              scale: [1, 1.05, 1]
            }}
            transition={{
              rotate: {
                duration: 20 + i * 5,
                repeat: Infinity,
                ease: "linear"
              },
              scale: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Avatar Container */}
        <motion.div
          className="mb-12 relative"
          initial={{ scale: 0, rotateY: 0 }}
          animate={{ scale: 1, rotateY: 360 }}
          transition={{ 
            scale: { duration: 1, type: "spring" },
            rotateY: { duration: 20, repeat: Infinity, ease: "linear" }
          }}
        >
          <div 
            className="w-48 h-48 mx-auto rounded-full relative"
            style={{
              transform: `perspective(1000px) rotateY(${mousePosition.x * 15}deg) rotateX(${mousePosition.y * 15}deg)`,
              transition: 'transform 0.3s ease-out'
            }}
          >
            {/* Holographic effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#00aaff] via-[#a855f7] to-[#00aaff] animate-pulse" />
            <div className="absolute inset-2 rounded-full bg-[#0b0c10] backdrop-blur-xl border-2 border-white/10 flex items-center justify-center">
              <span className="text-6xl bg-gradient-to-br from-[#00aaff] to-[#a855f7] bg-clip-text text-transparent">
                VC
              </span>
            </div>
            
            {/* Orbiting particles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 bg-[#00aaff] rounded-full"
                style={{
                  top: '50%',
                  left: '50%'
                }}
                animate={{
                  x: Math.cos((i / 6) * Math.PI * 2) * 120,
                  y: Math.sin((i / 6) * Math.PI * 2) * 120
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.1
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl mb-6 bg-gradient-to-r from-white via-[#00aaff] to-white bg-clip-text text-transparent"
            style={{
              transform: `translateY(${mousePosition.y * 5}px)`
            }}
          >
            Hi, I'm <span className="text-[#00aaff]">Vishwajit Chavan</span>
          </motion.h1>
          
          <motion.div className="h-20 mb-8 flex items-center justify-center">
            <motion.p
              key={currentRoleIndex}
              className="text-xl md:text-2xl text-white/80"
              initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
              transition={{ duration: 0.5 }}
            >
              {roles[currentRoleIndex]}
            </motion.p>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            A Developer, Innovator, and Formula Student Engineer crafting the future of embedded systems and IoT solutions.
          </motion.p>

          {/* Social Links */}
          <motion.div
            className="flex items-center justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            {[
              { Icon: Github, href: 'https://github.com/VishwajitChavan17', label: 'GitHub' },
              { Icon: Linkedin, href: 'https://www.linkedin.com/in/vishwajit-chavan-660998286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', label: 'LinkedIn' },
              { Icon: Instagram, href: '#', label: 'Instagram' }
            ].map(({ Icon, href, label }, i) => (
              <motion.a
                key={label}
                href={href}
                className="group relative"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  transform: `perspective(500px) rotateY(${mousePosition.x * 10}deg)`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#00aaff] to-[#a855f7] rounded-full blur-lg opacity-0 group-hover:opacity-70 transition-opacity" />
                <div className="relative w-14 h-14 rounded-full backdrop-blur-xl bg-white/5 border border-white/10 flex items-center justify-center hover:border-[#00aaff] transition-colors">
                  <Icon className="w-6 h-6 text-white/80 group-hover:text-white transition-colors" />
                </div>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-[#00aaff]/50" />
        </motion.div>
      </div>
    </div>
  );
}
