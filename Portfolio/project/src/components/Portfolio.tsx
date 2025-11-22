import React, { useState } from 'react';
import { ExternalLink, Github, ChevronRight } from 'lucide-react';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(0);

  const projects = [
    {
      title: "SmartHome IoT Dashboard",
      category: "IoT Interface Design",
      description: "Comprehensive dashboard for managing smart home devices with real-time monitoring and AI-powered automation suggestions.",
      problem: "Users struggled with managing multiple IoT devices across different platforms, leading to poor adoption rates.",
      solution: "Created a unified, intuitive interface with predictive controls and simplified device management.",
      technologies: ["React", "IoT APIs", "Machine Learning", "Figma"],
      results: "40% increase in user engagement, 60% reduction in support tickets",
      image: "https://images.pexels.com/photos/7562313/pexels-photo-7562313.jpeg?auto=compress&cs=tinysrgb&w=800",
      mockups: [
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=600"
      ]
    },
    {
      title: "MedTech AI Diagnostic Tool",
      category: "Healthcare AI Interface",
      description: "Medical diagnostic interface that assists doctors in analyzing patient data using machine learning algorithms.",
      problem: "Medical professionals needed faster, more accurate ways to interpret complex diagnostic data.",
      solution: "Designed an AI-assisted interface that highlights critical findings while maintaining doctor oversight.",
      technologies: ["AI/ML", "Healthcare APIs", "Data Visualization", "Adobe XD"],
      results: "25% faster diagnosis time, 95% user satisfaction rate",
      image: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=800",
      mockups: [
        "https://images.pexels.com/photos/3825539/pexels-photo-3825539.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600"
      ]
    },
    {
      title: "Industrial Sensor Network",
      category: "Industrial IoT",
      description: "Monitoring system for industrial sensors with predictive maintenance capabilities and real-time alerts.",
      problem: "Factory managers lacked visibility into equipment health, leading to unexpected downtime.",
      solution: "Developed a comprehensive monitoring interface with predictive analytics and mobile alerts.",
      technologies: ["Industrial IoT", "Predictive Analytics", "Mobile Design", "Sketch"],
      results: "30% reduction in unplanned downtime, $2M cost savings",
      image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800",
      mockups: [
        "https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/236722/pexels-photo-236722.jpeg?auto=compress&cs=tinysrgb&w=600"
      ]
    },
    {
      title: "EduTech Learning Platform",
      category: "Educational Technology",
      description: "Adaptive learning platform that personalizes education content based on student performance and learning patterns.",
      problem: "Students had different learning paces and styles, leading to poor engagement in traditional e-learning.",
      solution: "Created an adaptive interface that adjusts content difficulty and presentation based on AI analysis.",
      technologies: ["Educational AI", "Learning Analytics", "Responsive Design", "Figma"],
      results: "50% improvement in learning outcomes, 80% completion rate",
      image: "https://images.pexels.com/photos/3862627/pexels-photo-3862627.jpeg?auto=compress&cs=tinysrgb&w=800",
      mockups: [
        "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600"
      ]
    },
    {
      title: "FinTech Mobile Banking",
      category: "Financial Technology",
      description: "Next-generation mobile banking app with AI-powered financial insights and biometric security integration.",
      problem: "Traditional banking apps lacked personalized insights and had complex security processes.",
      solution: "Designed an intuitive app with AI-driven financial advice and seamless biometric authentication.",
      technologies: ["FinTech APIs", "Biometric Integration", "AI Analytics", "Mobile Design"],
      results: "45% increase in mobile transactions, 4.8/5 app store rating",
      image: "https://images.pexels.com/photos/3943723/pexels-photo-3943723.jpeg?auto=compress&cs=tinysrgb&w=800",
      mockups: [
        "https://images.pexels.com/photos/4386373/pexels-photo-4386373.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/3943717/pexels-photo-3943717.jpeg?auto=compress&cs=tinysrgb&w=600"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Portfolio Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Showcasing my expertise in designing user-centered interfaces that bridge 
            technology and human needs across various domains.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Project Navigation */}
          <div className="lg:col-span-1">
            <div className="space-y-4">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                    selectedProject === index
                      ? 'bg-indigo-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => setSelectedProject(index)}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-sm">{project.title}</h3>
                      <p className={`text-xs mt-1 ${
                        selectedProject === index ? 'text-indigo-200' : 'text-gray-500'
                      }`}>
                        {project.category}
                      </p>
                    </div>
                    <ChevronRight size={16} className={`${
                      selectedProject === index ? 'text-white' : 'text-gray-400'
                    }`} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Project Details */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-64 bg-gradient-to-r from-gray-200 to-gray-300">
                <img
                  src={projects[selectedProject].image}
                  alt={projects[selectedProject].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3 py-1 bg-white bg-opacity-90 text-gray-800 text-sm font-medium rounded-full">
                    {projects[selectedProject].category}
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {projects[selectedProject].title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {projects[selectedProject].description}
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Problem</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {projects[selectedProject].problem}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {projects[selectedProject].solution}
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {projects[selectedProject].technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Results</h4>
                  <p className="text-emerald-600 font-medium">
                    {projects[selectedProject].results}
                  </p>
                </div>

                <div className="flex space-x-4">
                  <button className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300">
                    <ExternalLink size={16} />
                    <span>View Live</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                    <Github size={16} />
                    <span>Source Code</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;