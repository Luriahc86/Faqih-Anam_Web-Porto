import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight, Tag, Eye, Heart, Share2, BookOpen } from 'lucide-react';

const BlogSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: "Building Modern Web Applications with React and TypeScript",
      excerpt: "Learn how to create scalable and maintainable web applications using React with TypeScript. This comprehensive guide covers best practices and advanced patterns.",
      content: "In this article, we'll explore the powerful combination of React and TypeScript...",
      image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "development",
      tags: ["React", "TypeScript", "Web Development"],
      publishDate: "2024-01-15",
      readTime: "8 min read",
      views: 1250,
      likes: 89,
      featured: true
    },
    {
      id: 2,
      title: "The Future of UI/UX Design: Trends to Watch in 2024",
      excerpt: "Discover the latest trends in UI/UX design that are shaping the digital landscape. From micro-interactions to AI-powered interfaces.",
      content: "The world of UI/UX design is constantly evolving...",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "design",
      tags: ["UI/UX", "Design Trends", "User Experience"],
      publishDate: "2024-01-10",
      readTime: "6 min read",
      views: 980,
      likes: 67,
      featured: false
    },
    {
      id: 3,
      title: "Optimizing Web Performance: A Developer's Guide",
      excerpt: "Learn essential techniques for optimizing web performance, from code splitting to image optimization and caching strategies.",
      content: "Web performance is crucial for user experience and SEO...",
      image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "development",
      tags: ["Performance", "Optimization", "Web Development"],
      publishDate: "2024-01-05",
      readTime: "10 min read",
      views: 1450,
      likes: 112,
      featured: true
    },
    {
      id: 4,
      title: "My Journey as a Self-Taught Developer",
      excerpt: "Sharing my personal experience and lessons learned while transitioning into software development without a formal computer science background.",
      content: "Starting as a self-taught developer can be challenging...",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "personal",
      tags: ["Career", "Learning", "Personal Growth"],
      publishDate: "2023-12-28",
      readTime: "5 min read",
      views: 2100,
      likes: 156,
      featured: false
    },
    {
      id: 5,
      title: "Creating Responsive Designs with Tailwind CSS",
      excerpt: "Master the art of responsive web design using Tailwind CSS. Learn utility-first approaches and mobile-first design principles.",
      content: "Tailwind CSS has revolutionized how we approach styling...",
      image: "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "development",
      tags: ["Tailwind CSS", "Responsive Design", "CSS"],
      publishDate: "2023-12-20",
      readTime: "7 min read",
      views: 890,
      likes: 73,
      featured: false
    },
    {
      id: 6,
      title: "The Psychology of Color in Web Design",
      excerpt: "Understand how color choices impact user behavior and emotions. Learn to create effective color palettes for your web projects.",
      content: "Color is one of the most powerful tools in a designer's arsenal...",
      image: "https://images.pexels.com/photos/1279813/pexels-photo-1279813.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "design",
      tags: ["Color Theory", "Psychology", "Web Design"],
      publishDate: "2023-12-15",
      readTime: "6 min read",
      views: 1320,
      likes: 94,
      featured: true
    }
  ];

  const categories = [
    { id: 'all', label: 'All Posts', count: blogPosts.length },
    { id: 'development', label: 'Development', count: blogPosts.filter(post => post.category === 'development').length },
    { id: 'design', label: 'Design', count: blogPosts.filter(post => post.category === 'design').length },
    { id: 'personal', label: 'Personal', count: blogPosts.filter(post => post.category === 'personal').length }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPosts = blogPosts.filter(post => post.featured);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'development': return 'blue';
      case 'design': return 'purple';
      case 'personal': return 'green';
      default: return 'gray';
    }
  };

  return (
    <section id="blog" className="py-20 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-zoom-in">
          <h2 className="text-4xl font-bold mb-6 gradient-text">
            Latest Articles
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full animate-pulse"></div>
          <p className="text-gray-300 mt-6 text-lg max-w-2xl mx-auto">
            Sharing insights, tutorials, and thoughts on web development, design, and technology
          </p>
        </div>

        {/* Featured Posts */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <BookOpen className="text-orange-400" size={24} />
            Featured Articles
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPosts.slice(0, 3).map((post, index) => (
              <article
                key={post.id}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 group card-3d holographic stagger-item animate"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold text-${getCategoryColor(post.category)}-400 bg-${getCategoryColor(post.category)}-400/10 border border-${getCategoryColor(post.category)}-400/20`}>
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {formatDate(post.publishDate)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {post.readTime}
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold mb-3 text-white group-hover:text-orange-400 transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h4>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-gray-400">
                      <span className="flex items-center gap-1">
                        <Eye size={12} />
                        {post.views}
                      </span>
                      <span className="flex items-center gap-1">
                        <Heart size={12} />
                        {post.likes}
                      </span>
                    </div>
                    <button className="text-orange-400 hover:text-orange-300 transition-colors duration-300 flex items-center gap-1 text-sm font-medium">
                      Read More
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 stagger-item animate ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Tag size={16} />
              {category.label}
              <span className="bg-gray-700/50 px-2 py-1 rounded-full text-xs">
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* All Posts */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <article
              key={post.id}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 group card-3d holographic stagger-item animate"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold text-${getCategoryColor(post.category)}-400 bg-${getCategoryColor(post.category)}-400/10 border border-${getCategoryColor(post.category)}-400/20`}>
                    {post.category}
                  </span>
                </div>
                {post.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="px-2 py-1 rounded-full text-xs font-semibold text-yellow-400 bg-yellow-400/10 border border-yellow-400/20">
                      ⭐ Featured
                    </span>
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {formatDate(post.publishDate)}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} />
                    {post.readTime}
                  </span>
                </div>

                <h4 className="text-lg font-semibold mb-3 text-white group-hover:text-orange-400 transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h4>

                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 2).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded-lg text-xs hover:bg-orange-500/20 hover:text-orange-400 transition-all duration-300"
                    >
                      #{tag}
                    </span>
                  ))}
                  {post.tags.length > 2 && (
                    <span className="px-2 py-1 bg-gray-700/50 text-gray-400 rounded-lg text-xs">
                      +{post.tags.length - 2} more
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <Eye size={12} />
                      {post.views}
                    </span>
                    <span className="flex items-center gap-1">
                      <Heart size={12} />
                      {post.likes}
                    </span>
                    <button className="flex items-center gap-1 hover:text-gray-300 transition-colors duration-300">
                      <Share2 size={12} />
                      Share
                    </button>
                  </div>
                  <button className="text-orange-400 hover:text-orange-300 transition-colors duration-300 flex items-center gap-1 text-sm font-medium">
                    Read More
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-2xl p-8 border border-orange-500/20 card-3d">
            <h3 className="text-2xl font-bold mb-4 gradient-text">
              Stay Updated
            </h3>
            <p className="text-gray-300 mb-6">
              Subscribe to my newsletter for the latest articles and insights
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-gray-700/50 border border-gray-600 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-400 transition-colors duration-300"
              />
              <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 btn-animated">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;