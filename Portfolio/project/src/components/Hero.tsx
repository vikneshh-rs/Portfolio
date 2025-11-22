import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10 max-w-4xl">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-emerald-400">Alex Chen</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-6 font-light">
            UI/UX Designer & Electronics Engineer
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Bridging the gap between human-centered design and cutting-edge technology. 
            Currently pursuing Electronics Engineering with a passion for AI/ML and IoT innovations.
          </p>
        </div>
        
        <div className="flex justify-center space-x-6 mb-12 animate-fade-in animation-delay-500">
          <a href="#contact" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300">
            <Mail size={20} />
            <span>Email</span>
          </a>
          <a href="https://linkedin.com" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300">
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300">
            <Github size={20} />
            <span>GitHub</span>
          </a>
        </div>
        
        <div className="animate-bounce">
          <ChevronDown size={32} className="text-gray-400 mx-auto cursor-pointer hover:text-white transition-colors duration-300" 
                       onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} />
        </div>
      </div>
    </section>
  );
};

export default Hero;