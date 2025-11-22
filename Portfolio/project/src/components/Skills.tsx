import React from 'react';
import { Palette, Code, Cpu, Brain, Smartphone, Database } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Palette className="w-6 h-6" />,
      title: "UI/UX Design Tools",
      color: "bg-pink-100 text-pink-600",
      skills: [
        { name: "Figma", level: 95 },
        { name: "Adobe XD", level: 90 },
        { name: "Sketch", level: 85 },
        { name: "Adobe Creative Suite", level: 88 },
        { name: "Principle", level: 80 },
        { name: "InVision", level: 85 }
      ]
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Programming Languages",
      color: "bg-blue-100 text-blue-600",
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Python", level: 88 },
        { name: "C++", level: 82 },
        { name: "HTML/CSS", level: 95 },
        { name: "React", level: 87 }
      ]
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Electronics & IoT",
      color: "bg-orange-100 text-orange-600",
      skills: [
        { name: "Arduino", level: 92 },
        { name: "Raspberry Pi", level: 88 },
        { name: "PCB Design", level: 85 },
        { name: "Circuit Analysis", level: 90 },
        { name: "Embedded Systems", level: 83 },
        { name: "Sensor Integration", level: 87 }
      ]
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI/ML Frameworks",
      color: "bg-purple-100 text-purple-600",
      skills: [
        { name: "TensorFlow", level: 85 },
        { name: "PyTorch", level: 80 },
        { name: "Scikit-learn", level: 88 },
        { name: "OpenCV", level: 82 },
        { name: "Keras", level: 85 },
        { name: "Natural Language Processing", level: 78 }
      ]
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Design Specializations",
      color: "bg-emerald-100 text-emerald-600",
      skills: [
        { name: "User Research", level: 92 },
        { name: "Prototyping", level: 95 },
        { name: "Wireframing", level: 93 },
        { name: "Interaction Design", level: 90 },
        { name: "Responsive Design", level: 88 },
        { name: "Accessibility", level: 85 }
      ]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Technical Integration",
      color: "bg-indigo-100 text-indigo-600",
      skills: [
        { name: "RESTful APIs", level: 87 },
        { name: "GraphQL", level: 80 },
        { name: "Database Design", level: 83 },
        { name: "Cloud Platforms", level: 85 },
        { name: "Version Control (Git)", level: 90 },
        { name: "Agile Methodology", level: 88 }
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A comprehensive skill set that combines creative design thinking with 
            technical engineering expertise across multiple domains.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${category.color} mr-4`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Key Competencies */}
        <div className="mt-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-6 text-center">Key Competencies</h3>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">UX Research</div>
              <div className="text-indigo-200">User interviews, surveys, usability testing</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">Prototyping</div>
              <div className="text-indigo-200">Interactive prototypes, design systems</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">Technical Integration</div>
              <div className="text-indigo-200">API design, hardware interfaces</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">AI/IoT Design</div>
              <div className="text-indigo-200">Smart interfaces, predictive UX</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;