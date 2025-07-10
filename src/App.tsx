import React, { useEffect, useState } from 'react';
import { 
  Code2, 
  GraduationCap, 
  User, 
  Mail, 
  Github, 
  Linkedin, 
  Download,
  MapPin,
  Calendar,
  ExternalLink,
  Figma,
  GitBranch,
  Database,
  Palette,
  Video,
  FileText,
  ChevronRight,
  Instagram,
  Star,
  Sparkles,
  Zap,
  Heart,
  Rocket,
  Globe
} from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Floating particles effect
  useEffect(() => {
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'particle fixed pointer-events-none z-0';
      particle.style.left = Math.random() * 100 + 'vw';
      particle.style.top = '100vh';
      particle.style.width = Math.random() * 4 + 2 + 'px';
      particle.style.height = particle.style.width;
      particle.style.background = `hsl(${Math.random() * 60 + 200}, 70%, 60%)`;
      particle.style.animation = `float ${Math.random() * 3 + 2}s ease-in-out infinite`;
      particle.style.opacity = '0.3';
      
      document.body.appendChild(particle);
      
      setTimeout(() => {
        particle.remove();
      }, 5000);
    };

    const interval = setInterval(createParticle, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="floating-element floating-element-1">
          <Code2 size={60} className="text-blue-500/20 animate-rotate-slow" />
        </div>
        <div className="floating-element floating-element-2">
          <Rocket size={80} className="text-purple-500/20 animate-float" />
        </div>
        <div className="floating-element floating-element-3">
          <Star size={40} className="text-green-500/20 animate-wiggle" />
        </div>
        <div className="floating-element floating-element-4">
          <Sparkles size={50} className="text-yellow-500/20 animate-bounce" />
        </div>
        <div className="floating-element floating-element-5">
          <Globe size={70} className="text-pink-500/20 animate-float-reverse" />
        </div>
        <div className="floating-element floating-element-6">
          <Zap size={45} className="text-cyan-500/20 animate-pulse" />
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="fixed inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-green-600/10 animate-gradient pointer-events-none z-0"></div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-gray-900/90 backdrop-blur-md border-b border-gray-700/50 z-50 animate-slide-up">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold gradient-text animate-bounce-in">
              Faqih Chairul Anam
            </div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Education', 'Skills', 'Contact'].map((item, index) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="hover:text-blue-400 transition-all duration-300 hover-bounce relative group stagger-item animate"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-green-600/20 animate-gradient"></div>
        <div className="relative z-10 text-center px-6">
          <div className="mb-8 flex justify-center animate-zoom-in">
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-400 via-purple-400 to-green-400 p-1 bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 animate-pulse-glow hover-glow">
                <img 
                  src="/WhatsApp Image 2025-07-09 at 18.06.55_7c982447.jpg" 
                  alt="Faqih Chairul Anam" 
                  className="w-full h-full object-cover rounded-full bg-gray-800 hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 rounded-full blur opacity-30 animate-pulse"></div>
              <div className="absolute top-0 right-0">
                <Heart className="text-red-400 animate-bounce" size={20} />
              </div>
            </div>
          </div>
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text animate-zoom-out">
              Faqih Chairul Anam
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-delay">
              Software Developer & Web Designer
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in-delay-2">
              Passionate about creating beautiful, functional applications and bringing ideas to life through code
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-3">
            <button 
              onClick={() => scrollToSection('about')}
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-blue-500/25 btn-animated hover-lift"
            >
              <span className="flex items-center gap-2">
                <Sparkles size={20} />
                Learn More
              </span>
            </button>
            <button className="border border-gray-600 hover:border-blue-400 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:bg-gray-800/50 flex items-center gap-2 btn-animated hover-glow">
              <Download size={20} />
              Download CV
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section 
        id="about" 
        className={`py-20 px-6 relative z-10 section-reveal ${isVisible.about ? 'revealed' : ''}`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-zoom-in">
            <h2 className="text-4xl font-bold mb-6 gradient-text">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full animate-pulse"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover-lift stagger-item animate">
                <div className="flex items-center gap-3 mb-4">
                  <User className="text-blue-400 animate-bounce" size={24} />
                  <h3 className="text-xl font-semibold">Background</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  I'm a passionate software developer and web designer currently studying Informatika at Institut Teknologi Kalimantan. 
                  I love creating digital experiences that are both beautiful and functional.
                </p>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover-lift stagger-item animate">
                <div className="flex items-center gap-3 mb-4">
                  <Code2 className="text-purple-400 animate-wiggle" size={24} />
                  <h3 className="text-xl font-semibold">Expertise</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Specializing in web development, UI/UX design, and full-stack applications. 
                  I work with modern technologies and frameworks to deliver high-quality solutions.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl p-8 border border-blue-500/20 hover-glow stagger-item animate">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <Star className="text-yellow-400 animate-spin" size={20} />
                  Quick Facts
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 hover-bounce">
                    <MapPin className="text-blue-400" size={20} />
                    <span className="text-gray-300">Kalimantan, Indonesia</span>
                  </div>
                  <div className="flex items-center gap-3 hover-bounce">
                    <GraduationCap className="text-purple-400" size={20} />
                    <span className="text-gray-300">Institut Teknologi Kalimantan</span>
                  </div>
                  <div className="flex items-center gap-3 hover-bounce">
                    <Code2 className="text-green-400" size={20} />
                    <span className="text-gray-300">Full-Stack Developer</span>
                  </div>
                  <div className="flex items-center gap-3 hover-bounce">
                    <Palette className="text-pink-400" size={20} />
                    <span className="text-gray-300">UI/UX Designer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section 
        id="education" 
        className={`py-20 px-6 bg-gray-800/30 relative z-10 section-reveal ${isVisible.education ? 'revealed' : ''}`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-zoom-in">
            <h2 className="text-4xl font-bold mb-6 gradient-text">
              Education
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full animate-pulse"></div>
          </div>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 to-blue-500 animate-pulse"></div>
            <div className="space-y-12">
              {/* Current Education */}
              <div className="relative flex items-center stagger-item animate">
                <div className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center animate-pulse-glow">
                  <GraduationCap size={16} className="text-white" />
                </div>
                <div className="ml-16 md:ml-0 md:w-1/2 md:pr-8">
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-green-500/50 transition-all duration-300 hover-lift">
                    <h3 className="text-xl font-semibold text-green-400 mb-2">Institut Teknologi Kalimantan</h3>
                    <p className="text-gray-300 mb-2">Program Studi Informatika</p>
                    <p className="text-gray-400 text-sm flex items-center gap-2">
                      <Calendar size={16} />
                      Current
                    </p>
                  </div>
                </div>
              </div>

              {/* High School */}
              <div className="relative flex items-center stagger-item animate">
                <div className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center animate-pulse-glow">
                  <GraduationCap size={16} className="text-white" />
                </div>
                <div className="ml-16 md:ml-0 md:w-1/2 md:pl-8 md:ml-auto">
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover-lift">
                    <h3 className="text-xl font-semibold text-blue-400 mb-2">SMAN 2 PPU</h3>
                    <p className="text-gray-300 mb-2">Sekolah Menengah Atas</p>
                    <p className="text-gray-400 text-sm flex items-center gap-2">
                      <Calendar size={16} />
                      Completed
                    </p>
                  </div>
                </div>
              </div>

              {/* Junior High School */}
              <div className="relative flex items-center stagger-item animate">
                <div className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center animate-pulse-glow">
                  <GraduationCap size={16} className="text-white" />
                </div>
                <div className="ml-16 md:ml-0 md:w-1/2 md:pr-8">
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover-lift">
                    <h3 className="text-xl font-semibold text-purple-400 mb-2">SMPN 13 PPU</h3>
                    <p className="text-gray-300 mb-2">Sekolah Menengah Pertama</p>
                    <p className="text-gray-400 text-sm flex items-center gap-2">
                      <Calendar size={16} />
                      Completed
                    </p>
                  </div>
                </div>
              </div>

              {/* Elementary School */}
              <div className="relative flex items-center stagger-item animate">
                <div className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center animate-pulse-glow">
                  <GraduationCap size={16} className="text-white" />
                </div>
                <div className="ml-16 md:ml-0 md:w-1/2 md:pl-8 md:ml-auto">
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-pink-500/50 transition-all duration-300 hover-lift">
                    <h3 className="text-xl font-semibold text-pink-400 mb-2">SD 004 Waru</h3>
                    <p className="text-gray-300 mb-2">Sekolah Dasar</p>
                    <p className="text-gray-400 text-sm flex items-center gap-2">
                      <Calendar size={16} />
                      Completed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section 
        id="skills" 
        className={`py-20 px-6 relative z-10 section-reveal ${isVisible.skills ? 'revealed' : ''}`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-zoom-in">
            <h2 className="text-4xl font-bold mb-6 gradient-text">
              Skills & Expertise
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full animate-pulse"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Programming Languages */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group hover-lift stagger-item animate">
              <div className="flex items-center gap-3 mb-6">
                <Code2 className="text-blue-400 group-hover:scale-110 transition-transform duration-300 animate-bounce" size={32} />
                <h3 className="text-xl font-semibold">Programming Languages</h3>
              </div>
              <div className="space-y-3">
                {['TypeScript', 'JavaScript', 'Python', 'C++', 'HTML', 'CSS', 'Node.js', 'Next.js'].map((skill, index) => (
                  <div key={skill} className="flex items-center gap-3 group/item" style={{ animationDelay: `${index * 0.1}s` }}>
                    <ChevronRight className="text-blue-400 group-hover/item:translate-x-1 transition-transform duration-200" size={16} />
                    <span className="text-gray-300 group-hover/item:text-white transition-colors duration-200">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Design Tools */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 group hover-lift stagger-item animate">
              <div className="flex items-center gap-3 mb-6">
                <Palette className="text-purple-400 group-hover:scale-110 transition-transform duration-300 animate-wiggle" size={32} />
                <h3 className="text-xl font-semibold">Design Tools</h3>
              </div>
              <div className="space-y-3">
                {['Figma', 'Canva', 'CapCut'].map((tool, index) => (
                  <div key={tool} className="flex items-center gap-3 group/item" style={{ animationDelay: `${index * 0.1}s` }}>
                    <ChevronRight className="text-purple-400 group-hover/item:translate-x-1 transition-transform duration-200" size={16} />
                    <span className="text-gray-300 group-hover/item:text-white transition-colors duration-200">{tool}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Development Tools */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-green-500/50 transition-all duration-300 group hover-lift stagger-item animate">
              <div className="flex items-center gap-3 mb-6">
                <GitBranch className="text-green-400 group-hover:scale-110 transition-transform duration-300 animate-pulse" size={32} />
                <h3 className="text-xl font-semibold">Development Tools</h3>
              </div>
              <div className="space-y-3">
                {['VS Code', 'GitHub', 'GitLab', 'Draw.io'].map((tool, index) => (
                  <div key={tool} className="flex items-center gap-3 group/item" style={{ animationDelay: `${index * 0.1}s` }}>
                    <ChevronRight className="text-green-400 group-hover/item:translate-x-1 transition-transform duration-200" size={16} />
                    <span className="text-gray-300 group-hover/item:text-white transition-colors duration-200">{tool}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Documentation */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-yellow-500/50 transition-all duration-300 group hover-lift stagger-item animate">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="text-yellow-400 group-hover:scale-110 transition-transform duration-300 animate-bounce" size={32} />
                <h3 className="text-xl font-semibold">Documentation</h3>
              </div>
              <div className="space-y-3">
                {['SRS (Software Requirements Specification)', 'SDD (Software Design Document)', 'ERD (Entity Relationship Diagram)'].map((doc, index) => (
                  <div key={doc} className="flex items-center gap-3 group/item" style={{ animationDelay: `${index * 0.1}s` }}>
                    <ChevronRight className="text-yellow-400 group-hover/item:translate-x-1 transition-transform duration-200" size={16} />
                    <span className="text-gray-300 group-hover/item:text-white transition-colors duration-200">{doc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Specializations */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-pink-500/50 transition-all duration-300 group md:col-span-2 hover-lift stagger-item animate">
              <div className="flex items-center gap-3 mb-6">
                <ExternalLink className="text-pink-400 group-hover:scale-110 transition-transform duration-300 animate-spin" size={32} />
                <h3 className="text-xl font-semibold">Specializations</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {['Web Design', 'Mobile Apps', 'UI/UX Design', 'Full-Stack Development'].map((spec, index) => (
                  <div key={spec} className="flex items-center gap-3 group/item" style={{ animationDelay: `${index * 0.1}s` }}>
                    <ChevronRight className="text-pink-400 group-hover/item:translate-x-1 transition-transform duration-200" size={16} />
                    <span className="text-gray-300 group-hover/item:text-white transition-colors duration-200">{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        id="contact" 
        className={`py-20 px-6 bg-gray-800/30 relative z-10 section-reveal ${isVisible.contact ? 'revealed' : ''}`}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-zoom-in">
            <h2 className="text-4xl font-bold mb-6 gradient-text">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto rounded-full animate-pulse"></div>
            <p className="text-gray-300 mt-6 text-lg">
              I'm always open to discussing new opportunities and interesting projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover-lift stagger-item animate">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <Rocket className="text-blue-400 animate-bounce" size={24} />
                  Let's Connect
                </h3>
                <div className="space-y-4">
                  {[
                    { icon: Mail, color: 'blue', label: 'Email', value: 'faqih.chairul08@gmail.com', href: 'mailto:faqih.chairul08@gmail.com' },
                    { icon: Github, color: 'purple', label: 'GitHub', value: '@Luriahc86', href: 'https://github.com/Luriahc86' },
                    { icon: Linkedin, color: 'blue', label: 'LinkedIn', value: 'Faqih Chairul Anam', href: 'https://www.linkedin.com/in/faqih-chairul-287a32319/' },
                    { icon: Instagram, color: 'pink', label: 'Instagram', value: '@faqih_anam', href: 'https://www.instagram.com/faqih_anam/' },
                    { icon: Video, color: 'red', label: 'TikTok', value: '@poiuyt_827', href: 'https://www.tiktok.com/@poiuyt_827' }
                  ].map((social, index) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target={social.href.startsWith('http') ? '_blank' : undefined}
                      rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 p-4 bg-gray-700/50 rounded-xl hover:bg-gray-700 transition-all duration-300 group hover-glow stagger-item animate"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <social.icon className={`text-${social.color}-400 group-hover:scale-110 transition-transform duration-300 animate-bounce`} size={24} />
                      <div>
                        <div className="font-medium">{social.label}</div>
                        <div className="text-gray-400 text-sm">{social.value}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover-lift stagger-item animate">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Sparkles className="text-green-400 animate-spin" size={24} />
                Send a Message
              </h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-400 transition-all duration-300 hover:border-purple-400"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-400 transition-all duration-300 hover:border-purple-400"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-400 transition-all duration-300 resize-none hover:border-purple-400"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 btn-animated hover-glow flex items-center justify-center gap-2"
                >
                  <Zap size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-700/50 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            © 2024 Faqih Chairul Anam. Built with React & Tailwind CSS.
            <Heart className="text-red-400 animate-pulse" size={16} />
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;