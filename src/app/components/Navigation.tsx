import { motion } from 'motion/react';
import { Home, FileText, BookOpen, FolderOpen, Calendar, Trophy, Mail } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'patents', label: 'Patents', icon: FileText },
    { id: 'research', label: 'Research', icon: BookOpen },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'events', label: 'Events', icon: Calendar },
    { id: 'hackathons', label: 'Achievements', icon: Trophy },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-full px-8 py-4 shadow-2xl"
          style={{
            boxShadow: '0 8px 32px 0 rgba(0, 170, 255, 0.1)'
          }}
        >
          <div className="flex items-center justify-between gap-8">
            {/* Logo */}
            <motion.div 
              className="text-[#00aaff]"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-xl">VC</span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                
                return (
                  <motion.button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`relative px-6 py-2 rounded-full transition-all ${
                      isActive 
                        ? 'text-white' 
                        : 'text-white/60 hover:text-white'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-gradient-to-r from-[#00aaff] to-[#a855f7] rounded-full"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-2">
                      <Icon className="w-4 h-4" />
                      {item.label}
                    </span>
                  </motion.button>
                );
              })}
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden overflow-x-auto no-scrollbar flex items-center gap-1 max-w-[280px]">
              <div className="flex items-center gap-1 min-w-max px-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.id;
                  
                  return (
                    <motion.button
                      key={item.id}
                      onClick={() => setActiveSection(item.id)}
                      className={`relative p-3 rounded-full transition-all ${
                        isActive 
                          ? 'text-white' 
                          : 'text-white/60'
                      }`}
                      whileTap={{ scale: 0.9 }}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeMobileTab"
                          className="absolute inset-0 bg-gradient-to-r from-[#00aaff] to-[#a855f7] rounded-full"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                      <Icon className="w-5 h-5 relative z-10" />
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </nav>
  );
}