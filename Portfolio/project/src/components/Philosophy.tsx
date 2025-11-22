import React from 'react';
import { Heart, Users, Lightbulb, Target } from 'lucide-react';

const Philosophy = () => {
  const principles = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Human-Centered Design",
      description: "Every design decision starts with understanding the user's needs, emotions, and context. Technology should enhance human capabilities, not complicate them."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Inclusive & Accessible",
      description: "Design should be usable by everyone, regardless of their abilities or circumstances. Accessibility isn't an afterthought—it's fundamental to good design."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Technology-Informed Creativity",
      description: "My engineering background helps me understand technical constraints and possibilities, enabling more innovative and feasible design solutions."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Data-Driven Iteration",
      description: "Beautiful design must also be effective. I use research, testing, and analytics to validate designs and continuously improve user experiences."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Design Philosophy
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            My approach to design is grounded in empathy, informed by technology, 
            and driven by the belief that great design should make complex things simple.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {principles.map((principle, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 mr-6 flex-shrink-0">
                  {principle.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{principle.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{principle.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quote Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <blockquote className="text-2xl md:text-3xl font-light leading-relaxed mb-6">
            "The best interface is no interface. But when one is needed, 
            it should feel like magic—intuitive, responsive, and delightful."
          </blockquote>
          <cite className="text-indigo-200 text-lg">— My Design Mantra</cite>
        </div>

        {/* Process Overview */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">My Design Process</h3>
          <div className="grid md:grid-cols-5 gap-6">
            {[
              { step: "1", title: "Research", description: "User interviews, market analysis, technical feasibility" },
              { step: "2", title: "Define", description: "Problem framing, user personas, technical requirements" },
              { step: "3", title: "Ideate", description: "Brainstorming, sketching, exploring technical possibilities" },
              { step: "4", title: "Prototype", description: "Interactive prototypes, technical validation" },
              { step: "5", title: "Test", description: "User testing, iteration, performance optimization" }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {phase.step}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{phase.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;