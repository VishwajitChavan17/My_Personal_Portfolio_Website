import { motion } from 'motion/react';
import { useState } from 'react';
import { Mail, Send, Github, Linkedin, Instagram, MapPin, Phone } from 'lucide-react';

interface ContactProps {
  mousePosition: { x: number; y: number };
}

export default function Contact({ mousePosition }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Message sent! (This is a demo - no actual email sent)');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "vishwajit.chavan@mitwpu.edu.in",
      href: "mailto:vishwajit.chavan@mitwpu.edu.in",
      gradient: "from-[#00aaff] to-[#0088cc]"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Pune, Maharashtra, India",
      gradient: "from-[#a855f7] to-[#8b3fd8]"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Availability",
      value: "Open to opportunities",
      gradient: "from-[#00aaff] to-[#a855f7]"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      href: "https://github.com/VishwajitChavan17",
      color: "#00aaff"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/vishwajit-chavan-660998286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      color: "#0077b5"
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      label: "Instagram",
      href: "#",
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
          className="text-center mb-16"
        >
          <motion.div
            className="inline-block mb-6"
            style={{
              transform: `perspective(1000px) rotateY(${mousePosition.x * 5}deg)`
            }}
          >
            <h2 className="text-3xl md:text-6xl bg-gradient-to-r from-[#00aaff] via-[#a855f7] to-[#00aaff] bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <motion.div 
              className="h-1 bg-gradient-to-r from-transparent via-[#00aaff] to-transparent mt-4"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            />
          </motion.div>
          <p className="text-xl text-white/60 max-w-2xl mx-auto mt-6">
            Have a project in mind? Let's build something amazing together
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-[#00aaff] to-[#a855f7] rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
            
            <form 
              onSubmit={handleSubmit}
              className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8"
            >
              <h3 className="text-2xl mb-6 text-white">Send Message</h3>
              
              {/* Name Input */}
              <motion.div 
                className="mb-6"
                whileFocus={{ scale: 1.02 }}
              >
                <label className="block text-white/60 mb-2 text-sm">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-[#00aaff] focus:outline-none transition-colors backdrop-blur-sm"
                  placeholder="Your name"
                  style={{
                    boxShadow: '0 0 0 0 rgba(0,170,255,0.0)',
                    transition: 'all 0.3s ease'
                  }}
                  onFocus={(e) => {
                    e.target.style.boxShadow = '0 0 20px rgba(0,170,255,0.3)';
                  }}
                  onBlur={(e) => {
                    e.target.style.boxShadow = '0 0 0 0 rgba(0,170,255,0.0)';
                  }}
                />
              </motion.div>

              {/* Email Input */}
              <motion.div 
                className="mb-6"
                whileFocus={{ scale: 1.02 }}
              >
                <label className="block text-white/60 mb-2 text-sm">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-[#00aaff] focus:outline-none transition-colors backdrop-blur-sm"
                  placeholder="your.email@example.com"
                  style={{
                    boxShadow: '0 0 0 0 rgba(0,170,255,0.0)',
                    transition: 'all 0.3s ease'
                  }}
                  onFocus={(e) => {
                    e.target.style.boxShadow = '0 0 20px rgba(0,170,255,0.3)';
                  }}
                  onBlur={(e) => {
                    e.target.style.boxShadow = '0 0 0 0 rgba(0,170,255,0.0)';
                  }}
                />
              </motion.div>

              {/* Message Input */}
              <motion.div 
                className="mb-6"
                whileFocus={{ scale: 1.02 }}
              >
                <label className="block text-white/60 mb-2 text-sm">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-[#00aaff] focus:outline-none transition-colors backdrop-blur-sm resize-none"
                  placeholder="Your message..."
                  style={{
                    boxShadow: '0 0 0 0 rgba(0,170,255,0.0)',
                    transition: 'all 0.3s ease'
                  }}
                  onFocus={(e) => {
                    e.target.style.boxShadow = '0 0 20px rgba(0,170,255,0.3)';
                  }}
                  onBlur={(e) => {
                    e.target.style.boxShadow = '0 0 0 0 rgba(0,170,255,0.0)';
                  }}
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#00aaff] to-[#a855f7] text-white flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            {/* Info Cards */}
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="group"
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative">
                  <div className={`absolute -inset-1 bg-gradient-to-r ${info.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                  
                  <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
                    <div className="flex items-start gap-4">
                      <motion.div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.gradient} flex items-center justify-center flex-shrink-0`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <div className="text-white">
                          {info.icon}
                        </div>
                      </motion.div>
                      
                      <div className="flex-1">
                        <p className="text-white/60 text-sm mb-1">{info.label}</p>
                        {info.href ? (
                          <a 
                            href={info.href}
                            className="text-white hover:text-[#00aaff] transition-colors break-all"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-white">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-[#00aaff] to-[#a855f7] rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
              
              <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
                <h4 className="text-white mb-4">Connect on Social</h4>
                <div className="flex items-center gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      className="group/social relative"
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div 
                        className="absolute inset-0 rounded-full blur-lg opacity-0 group-hover/social:opacity-70 transition-opacity"
                        style={{ backgroundColor: social.color }}
                      />
                      <div className="relative w-12 h-12 rounded-full backdrop-blur-xl bg-white/5 border border-white/10 flex items-center justify-center hover:border-[#00aaff] transition-colors">
                        <div className="text-white/80 group-hover/social:text-white transition-colors">
                          {social.icon}
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Decorative 3D Element */}
            <motion.div
              className="relative h-64 rounded-2xl overflow-hidden opacity-20 pointer-events-none"
              animate={{
                rotateY: [0, 360],
                rotateX: [0, 10, 0]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00aaff] to-[#a855f7] opacity-30" />
              {[...Array(10)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-full h-0.5 bg-white/20"
                  style={{ top: `${i * 10}%` }}
                  animate={{
                    x: ['-100%', '100%']
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
