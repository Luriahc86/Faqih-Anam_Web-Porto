import React, { useState } from 'react';
import { ExternalLink, Github, Code2, Palette, Database, Globe, Smartphone, Monitor, Star, Calendar, Users, Award } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      category: "fullstack",
      github: "https://github.com/Luriahc86",
      demo: "#",
      status: "completed",
      year: "2024",
      team: "Solo Project",
      awards: ["Best UI Design"]
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Modern task management application with drag-and-drop functionality, real-time updates, and team collaboration features.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "TypeScript", "Firebase", "Framer Motion"],
      category: "frontend",
      github: "https://github.com/Luriahc86",
      demo: "#",
      status: "completed",
      year: "2024",
      team: "2 Developers",
      awards: []
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Beautiful weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "OpenWeather API", "Chart.js", "CSS3"],
      category: "frontend",
      github: "https://github.com/Luriahc86",
      demo: "#",
      status: "completed",
      year: "2023",
      team: "Solo Project",
      awards: ["Most Creative"]
    },
    {
      id: 4,
      title: "Restaurant Management System",
      description: "Complete restaurant management system with order tracking, inventory management, and customer relationship features.",
      image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Next.js", "PostgreSQL", "Prisma", "NextAuth"],
      category: "fullstack",
      github: "https://github.com/Luriahc86",
      demo: "#",
      status: "in-progress",
      year: "2024",
      team: "3 Developers",
      awards: []
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "Modern, responsive portfolio website with 3D animations, dark mode, and optimized performance.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      category: "frontend",
      github: "https://github.com/Luriahc86",
      demo: "#",
      status: "completed",
      year: "2024",
      team: "Solo Project",
      awards: ["Best Portfolio"]
    },
    {
      id: 6,
      title: "Mobile Banking App UI",
      description: "Modern mobile banking application UI design with intuitive user experience and secure transaction flows.",
      image: "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Figma", "Adobe XD", "Principle", "InVision"],
      category: "design",
      github: "#",
      demo: "#",
      status: "completed",
      year: "2023",
      team: "Solo Project",
      awards: ["Best UX Design"]
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', icon: Globe },
    { id: 'fullstack', label: 'Full Stack', icon: Code2 },
    { id: 'frontend', label: 'Frontend', icon: Monitor },
    { id: 'design', label: 'UI/UX Design', icon: Palette },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-400 bg-green-400/10';
      case 'in-progress': return 'text-yellow-400 bg-yellow-400/10';
      default: return 'text-gray-400 bg-gray-400/10';
    }
  };

  return (
    <section id="projects" className="py-20 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-zoom-in">
          <h2 className="text-4xl font-bold mb-6 gradient-text">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full animate-pulse"></div>
          <p className="text-gray-300 mt-6 text-lg max-w-2xl mx-auto">
            Explore my latest work and creative projects that showcase my skills in web development and design
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 stagger-item animate ${
                filter === category.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <category.icon size={20} />
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group card-3d holographic stagger-item animate"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 flex gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(project.status)}`}>
                    {project.status.replace('-', ' ')}
                  </span>
                  {project.awards.length > 0 && (
                    <span className="px-3 py-1 rounded-full text-xs font-semibold text-yellow-400 bg-yellow-400/10 flex items-center gap-1">
                      <Award size={12} />
                      Award
                    </span>
                  )}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-3d group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Calendar size={14} />
                    {project.year}
                  </div>
                </div>

                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                  <Users size={14} />
                  {project.team}
                </div>

                {project.awards.length > 0 && (
                  <div className="mb-4">
                    {project.awards.map((award, idx) => (
                      <span key={idx} className="inline-flex items-center gap-1 px-2 py-1 bg-yellow-400/10 text-yellow-400 rounded-lg text-xs mr-2">
                        <Star size={12} />
                        {award}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-lg text-xs hover:bg-blue-500/20 hover:text-blue-400 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-700/50 hover:bg-gray-600/50 px-4 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 hover-glow"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 px-4 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 hover-lift"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Statistics */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Projects Completed', value: '15+', icon: Code2 },
            { label: 'Happy Clients', value: '10+', icon: Users },
            { label: 'Awards Won', value: '5', icon: Award },
            { label: 'Years Experience', value: '2+', icon: Star },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 text-center card-3d holographic stagger-item animate"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-3 icon-3d" />
              <div className="text-2xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;