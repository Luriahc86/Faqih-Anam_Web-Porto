import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, User, Briefcase } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Project Manager",
      company: "Tech Solutions Inc.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "Faqih delivered an exceptional website that exceeded our expectations. His attention to detail and technical expertise made the entire process smooth and professional.",
      project: "E-commerce Platform"
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Startup Founder",
      company: "InnovateLab",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "Working with Faqih was a game-changer for our startup. He transformed our ideas into a beautiful, functional application that our users love.",
      project: "Task Management App"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Marketing Director",
      company: "Creative Agency",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "Faqih's design skills are outstanding. He created a portfolio website that perfectly represents our brand and has significantly improved our online presence.",
      project: "Portfolio Website"
    },
    {
      id: 4,
      name: "David Kim",
      position: "Restaurant Owner",
      company: "Fusion Bistro",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "The restaurant management system Faqih built has streamlined our operations completely. Orders are processed faster and our staff loves the intuitive interface.",
      project: "Restaurant Management System"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={`${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-400'
        } transition-colors duration-200`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 px-6 bg-gray-800/30 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-zoom-in">
          <h2 className="text-4xl font-bold mb-6 gradient-text">
            What Clients Say
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto rounded-full animate-pulse"></div>
          <p className="text-gray-300 mt-6 text-lg max-w-2xl mx-auto">
            Don't just take my word for it - here's what my clients have to say about working with me
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial Card */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-700/50 card-3d holographic relative overflow-hidden">
            <div className="morphing-shape" style={{ top: '20px', right: '20px', width: '100px', height: '100px' }}></div>
            
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 opacity-20">
              <Quote size={60} className="text-blue-400" />
            </div>

            <div className="relative z-10">
              {/* Rating */}
              <div className="flex items-center gap-1 mb-6 justify-center">
                {renderStars(testimonials[currentTestimonial].rating)}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-xl md:text-2xl text-gray-200 text-center mb-8 leading-relaxed font-light">
                "{testimonials[currentTestimonial].text}"
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center justify-center gap-4">
                <div className="relative">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-blue-400/50"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 animate-pulse"></div>
                </div>
                <div className="text-center">
                  <h4 className="text-lg font-semibold text-white">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {testimonials[currentTestimonial].position}
                  </p>
                  <p className="text-blue-400 text-sm font-medium">
                    {testimonials[currentTestimonial].company}
                  </p>
                  <p className="text-gray-500 text-xs mt-1">
                    Project: {testimonials[currentTestimonial].project}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-3 bg-gray-700/50 hover:bg-gray-600/50 rounded-full transition-all duration-300 hover:scale-110 hover-glow"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} className="text-gray-300" />
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'bg-blue-400 scale-125'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 bg-gray-700/50 hover:bg-gray-600/50 rounded-full transition-all duration-300 hover:scale-110 hover-glow"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} className="text-gray-300" />
            </button>
          </div>

          {/* All Testimonials Preview */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                onClick={() => setCurrentTestimonial(index)}
                className={`p-4 rounded-xl border transition-all duration-300 text-left ${
                  index === currentTestimonial
                    ? 'border-blue-500/50 bg-blue-500/10'
                    : 'border-gray-700/50 bg-gray-800/30 hover:border-gray-600/50'
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <h5 className="text-sm font-medium text-white">{testimonial.name}</h5>
                    <p className="text-xs text-gray-400">{testimonial.company}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-2">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-xs text-gray-300 line-clamp-2">
                  {testimonial.text}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-8 border border-blue-500/20 card-3d">
            <h3 className="text-2xl font-bold mb-4 gradient-text">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-300 mb-6">
              Join these satisfied clients and let's create something amazing together
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 btn-animated hover-lift"
            >
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;