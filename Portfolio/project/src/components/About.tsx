import React from 'react';
import { Zap, Users, Code, Lightbulb } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Technical Foundation",
      description: "Electronics Engineering background enables me to understand hardware constraints and opportunities in design."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "User-Centered Approach",
      description: "Every design decision is backed by user research, testing, and iterative feedback loops."
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "AI/ML Integration",
      description: "Specialized in designing interfaces for intelligent systems and IoT applications."
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation Mindset",
      description: "Constantly exploring emerging technologies and their potential for better user experiences."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Professional Summary
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate UI/UX Designer with a unique technical background in Electronics Engineering. 
            Currently in my 3rd year of studies, I specialize in creating intuitive interfaces for AI/ML 
            and IoT applications, combining deep technical understanding with user-centered design principles.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 mb-4">
                {highlight.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{highlight.title}</h3>
              <p className="text-gray-600 leading-relaxed">{highlight.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-indigo-600 mb-2">15+</div>
              <div className="text-gray-600">UI/UX Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">3</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-600 mb-2">8+</div>
              <div className="text-gray-600">Technologies Mastered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;