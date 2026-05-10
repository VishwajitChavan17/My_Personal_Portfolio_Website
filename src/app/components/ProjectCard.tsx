import { motion } from 'motion/react';
import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  icon: React.ReactNode;
  gradient: string;
  index: number;
  mousePosition: { x: number; y: number };
}

export default function ProjectCard({ 
  title, 
  description, 
  tech, 
  icon, 
  gradient, 
  index,
  mousePosition 
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ delay: index * 0.1 }}
      className="relative group"
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
    >
      <motion.div
        className="relative cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsExpanded(!isExpanded)}
        style={{
          transform: isHovered 
            ? `perspective(1000px) rotateY(${mousePosition.x * 10}deg) rotateX(${-mousePosition.y * 10}deg) translateZ(20px)` 
            : 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0px)',
          transition: 'transform 0.3s ease-out'
        }}
        whileHover={{ scale: 1.05 }}
      >
        {/* Glow effect */}
        <div 
          className={`absolute -inset-1 bg-gradient-to-r ${gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
        />

        {/* Card */}
        <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(45deg, #00aaff 25%, transparent 25%, transparent 75%, #00aaff 75%, #00aaff), linear-gradient(45deg, #00aaff 25%, transparent 25%, transparent 75%, #00aaff 75%, #00aaff)',
              backgroundSize: '20px 20px',
              backgroundPosition: '0 0, 10px 10px'
            }} />
          </div>

          {/* Icon */}
          <motion.div 
            className={`w-16 h-16 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-6 relative z-10`}
            animate={isHovered ? { rotateY: 360 } : { rotateY: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-white">
              {icon}
            </div>
          </motion.div>

          {/* Content */}
          <div className="relative z-10">
            <h3 className="text-xl mb-3 text-white">{title}</h3>
            
            <motion.div
              initial={false}
              animate={{ height: isExpanded ? 'auto' : '60px' }}
              className="overflow-hidden"
            >
              <p className="text-white/60 mb-4">{description}</p>
            </motion.div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {tech.map((item, i) => (
                <motion.span
                  key={i}
                  className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#00aaff] text-sm"
                  whileHover={{ scale: 1.05, borderColor: 'rgba(0, 170, 255, 0.5)' }}
                >
                  {item}
                </motion.span>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <motion.button
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#00aaff] to-[#a855f7] text-white text-sm flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="w-4 h-4" />
                View Project
              </motion.button>
              <motion.button
                className="p-2 rounded-lg backdrop-blur-xl bg-white/5 border border-white/10 text-white/60 hover:text-white hover:border-[#00aaff] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-4 h-4" />
              </motion.button>
            </div>
          </div>

          {/* Floating particles */}
          {isHovered && [...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#00aaff] rounded-full"
              initial={{ 
                x: Math.random() * 100 + '%',
                y: Math.random() * 100 + '%',
                opacity: 0 
              }}
              animate={{ 
                y: '-100%',
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
