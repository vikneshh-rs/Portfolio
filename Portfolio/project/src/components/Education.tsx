import React from 'react';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Electronics Engineering",
      institution: "Tech University",
      status: "Currently 3rd Year",
      period: "2022 - 2026",
      description: "Specializing in Digital Signal Processing, Embedded Systems, and IoT applications. Current GPA: 3.8/4.0",
      courses: ["Digital Signal Processing", "Embedded Systems", "IoT Architecture", "Control Systems", "VLSI Design"],
      current: true
    },
    {
      degree: "UI/UX Design Bootcamp",
      institution: "Design Institute Pro",
      status: "Completed",
      period: "2023",
      description: "Intensive 6-month program covering user research, design thinking, prototyping, and industry best practices.",
      courses: ["User Research Methods", "Design Thinking", "Prototyping", "Design Systems", "Usability Testing"]
    }
  ];

  const certifications = [
    {
      title: "Google UX Design Certificate",
      issuer: "Google",
      date: "2023",
      skills: ["User Experience", "Figma", "User Research", "Prototyping"]
    },
    {
      title: "Machine Learning for Designers",
      issuer: "MIT xPRO",
      date: "2023",
      skills: ["AI/ML Basics", "Data Visualization", "Human-AI Interaction"]
    },
    {
      title: "IoT System Design",
      issuer: "IEEE",
      date: "2024",
      skills: ["IoT Architecture", "Sensor Networks", "Edge Computing"]
    },
    {
      title: "Advanced Figma Certification",
      issuer: "Figma",
      date: "2023",
      skills: ["Advanced Prototyping", "Design Systems", "Component Libraries"]
    }
  ];

  const courses = [
    {
      title: "Human-Computer Interaction",
      provider: "Stanford Online",
      completion: "2023",
      description: "Comprehensive study of HCI principles and their application in modern interface design."
    },
    {
      title: "Deep Learning Specialization",
      provider: "Coursera (Andrew Ng)",
      completion: "2024",
      description: "Five-course specialization covering neural networks, CNN, RNN, and practical AI applications."
    },
    {
      title: "Design Thinking for Innovation",
      provider: "IDEO U",
      completion: "2023",
      description: "Human-centered design methodology and innovation frameworks."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Education & Learning
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Continuous learning and formal education that bridges design and technology, 
            building expertise in both creative and technical domains.
          </p>
        </div>

        {/* Formal Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <GraduationCap className="w-6 h-6 mr-3 text-indigo-600" />
            Formal Education
          </h3>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className={`bg-white rounded-xl p-8 shadow-lg ${edu.current ? 'border-l-4 border-indigo-600' : ''}`}>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{edu.degree}</h4>
                    <p className="text-lg text-gray-600 mb-2">{edu.institution}</p>
                    <p className="text-gray-500 mb-4">{edu.description}</p>
                  </div>
                  <div className="text-right">
                    <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-2 ${
                      edu.current ? 'bg-indigo-100 text-indigo-700' : 'bg-emerald-100 text-emerald-700'
                    }`}>
                      {edu.status}
                    </div>
                    <div className="flex items-center text-gray-500">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-800 mb-3">Key Courses:</h5>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course, courseIndex) => (
                      <span key={courseIndex} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <Award className="w-6 h-6 mr-3 text-emerald-600" />
            Professional Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">{cert.title}</h4>
                    <p className="text-gray-600">{cert.issuer}</p>
                  </div>
                  <span className="text-sm text-gray-500">{cert.date}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Courses */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Additional Learning</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{course.title}</h4>
                <p className="text-indigo-600 font-medium mb-2">{course.provider}</p>
                <p className="text-sm text-gray-500 mb-3">Completed: {course.completion}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{course.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;