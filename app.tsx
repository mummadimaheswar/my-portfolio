import React from 'react';
import { Github, Mail, Phone, MapPin, ExternalLink, Linkedin, ChevronRight, GraduationCap, Award, Code, Brain } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10"></div>
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            MUMMADI MAHESWAR REDDY
          </h1>
          <p className="text-2xl text-gray-600 mb-4">
            Aspiring AI Developer & Machine Learning Engineer
          </p>
          <div className="flex justify-center gap-4 mb-8">
            <a href="mailto:22b61a66a4@nmrec.edu.in" className="text-gray-600">📧 22b61a66a4@nmrec.edu.in</a>
            <span className="text-gray-400">|</span>
            <a href="tel:+916303863875" className="text-gray-600">📞 +91 6303863875</a>
            <span className="text-gray-400">|</span>
            <span className="text-gray-600">📍 Hyderabad, India</span>
          </div>
          <div className="flex justify-center gap-6">
            <a 
              href="#contact" 
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
            >
              Get in Touch
              <ChevronRight className="ml-2" size={20} />
            </a>
            <a 
              href="#projects" 
              className="inline-flex items-center px-6 py-3 border-2 border-gray-800 text-gray-800 rounded-full hover:bg-gray-800 hover:text-white transition-colors"
            >
              View Projects
              <ChevronRight className="ml-2" size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Career Objective */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Career Objective</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Artificial Intelligence (AI) is transforming industries, and I am passionate about leveraging AI to solve complex challenges, optimize business processes, and enhance user experiences. My ultimate goal is to become an AI Developer, contributing to the field by designing intelligent systems and implementing innovative solutions. Through continuous learning and hands-on experience, I aim to master AI technologies, develop scalable AI models, and apply them effectively in real-world applications.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mt-4">
            With expertise in machine learning, deep learning, and natural language processing (NLP), I am committed to exploring the potential of AI in various domains. Whether it is optimizing workflows, creating AI-driven automation, or developing conversational AI systems, I thrive on building intelligent applications that improve efficiency and user engagement.
          </p>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Education</h2>
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-start gap-4">
                <GraduationCap className="text-blue-600" size={24} />
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">Bachelor of Technology (B.Tech), Computer Science & Engineering</h3>
                  <p className="text-lg text-gray-600 mt-2">📍 Nalla Malla Reddy Engineering College | 2022 - 2026</p>
                  <p className="text-gray-600 mt-4">
                    As a computer science student, I have gained knowledge in programming, data structures, algorithms, artificial intelligence, and machine learning. My coursework has strengthened my analytical skills and equipped me with the technical expertise required to build AI solutions.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-start gap-4">
                <GraduationCap className="text-blue-600" size={24} />
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">Senior Secondary Education (XII), Science Stream</h3>
                  <p className="text-lg text-gray-600 mt-2">📍 Narayana Junior College, Kadapa | 2022</p>
                  <p className="text-gray-600 mt-2">📊 Percentage: 90.00%</p>
                  <p className="text-gray-600 mt-4">
                    During my higher secondary education, I focused on mathematics, physics, and computer science, which laid a strong foundation for my engineering studies.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-start gap-4">
                <GraduationCap className="text-blue-600" size={24} />
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">Secondary Education (X)</h3>
                  <p className="text-lg text-gray-600 mt-2">📍 Bhashyam High School, Kadapa | 2020</p>
                  <p className="text-gray-600 mt-2">📊 Percentage: 98.30%</p>
                  <p className="text-gray-600 mt-4">
                    Achieving outstanding academic performance in my 10th grade helped me develop strong problem-solving skills and a keen interest in technology.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Training */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Certifications & Training</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "AI Developer - IBM",
                date: "Aug 2024 - Present",
                description: [
                  "Learned to build AI models, work with data, and implement machine learning algorithms using Python.",
                  "Gained hands-on experience in AI development using industry-standard tools and frameworks."
                ]
              },
              {
                title: "Generative AI with Vertex AI - Google",
                date: "Aug 2024",
                description: [
                  "Explored the fundamentals of generative AI, including text and image generation.",
                  "Learned to implement AI models on Google Cloud's Vertex AI platform."
                ]
              },
              {
                title: "Natural Language Processing (NLP) - Microsoft",
                date: "Jul 2024 - Aug 2024",
                description: [
                  "Developed proficiency in NLP techniques and their applications in AI-powered systems.",
                  "Implemented NLP models for text processing, sentiment analysis, and chatbot development."
                ]
              },
              {
                title: "Computer Vision in Microsoft Azure",
                date: "Jul 2024",
                description: [
                  "Worked on computer vision applications using Microsoft Azure AI services.",
                  "Developed AI models for image classification and object detection."
                ]
              },
              {
                title: "Microsoft Azure Machine Learning",
                date: "Jul 2024",
                description: [
                  "Learned to train, deploy, and manage machine learning models on Azure.",
                  "Worked on hands-on projects related to predictive analytics and AI automation."
                ]
              },
              {
                title: "AI Essentials - Google",
                date: "Jun 2024",
                description: [
                  "Explored key AI concepts, real-world applications, and ethical AI practices."
                ]
              },
              {
                title: "Python for Data Science - NPTEL",
                date: "Jan 2024 - Mar 2024",
                description: [
                  "Learned Python programming for data analysis, visualization, and machine learning applications."
                ]
              }
            ].map((cert, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow border border-gray-100">
                <div className="flex items-start gap-4">
                  <Award className="text-blue-600" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{cert.title}</h3>
                    <p className="text-gray-500 mt-2">{cert.date}</p>
                    <ul className="mt-4 space-y-2">
                      {cert.description.map((desc, i) => (
                        <li key={i} className="text-gray-600">• {desc}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Image Captioning using Gradio",
                date: "Jan 2025",
                description: [
                  "Developed an AI-powered image captioning system using deep learning models.",
                  "Implemented a user-friendly interface with Gradio to generate descriptive captions for images.",
                  "Improved accessibility, storytelling, and content creation using AI-driven creativity."
                ],
                image: "https://images.unsplash.com/photo-1633412802994-5c058f151b66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                tech: ["Python", "Deep Learning", "Gradio"]
              },
              {
                title: "Chatbot with Open Source LLMs",
                date: "Dec 2024 - Jan 2025",
                description: [
                  "Built a chatbot using open-source large language models (LLMs) from Hugging Face.",
                  "Integrated the chatbot with Python-based NLP pipelines for interactive conversations.",
                  "Designed a conversational AI interface capable of answering user queries efficiently."
                ],
                image: "https://images.unsplash.com/photo-1676299081847-c0d96c53c7d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                tech: ["Python", "NLP", "Hugging Face"]
              },
              {
                title: "Sentiment Analysis",
                date: "Nov 2024",
                description: [
                  "Developed a sentiment analysis model to analyze text-based emotions.",
                  "Applied machine learning techniques to classify sentiments (positive, negative, neutral).",
                  "Helped businesses improve customer service and decision-making based on sentiment insights."
                ],
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                tech: ["Python", "Machine Learning", "NLP"]
              },
              {
                title: "Emotion Detector",
                date: "Nov 2024",
                description: [
                  "Built an AI-powered emotion detection system to analyze user emotions in text data.",
                  "Applied NLP and deep learning techniques to improve communication and user engagement.",
                  "Created an intelligent system that can be used for mental health support and user feedback analysis."
                ],
                image: "https://images.unsplash.com/photo-1576633587382-13ddf37b1fc1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                tech: ["Python", "Deep Learning", "NLP"]
              }
            ].map((project, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <div className="h-48 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-semibold text-gray-900">{project.title}</h3>
                    <span className="text-sm text-gray-500">{project.date}</span>
                  </div>
                  <ul className="text-gray-600 mb-4 space-y-2">
                    {project.description.map((desc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Technical Skills</h2>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-start gap-4">
              <Code className="text-blue-600" size={24} />
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Programming Languages</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Brain className="text-blue-600" size={20} />
                    <span className="text-gray-600">Python (Primary language for AI & ML development)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Code className="text-blue-600" size={20} />
                    <span className="text-gray-600">HTML/CSS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Get in Touch</h2>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <a href="mailto:22b61a66a4@nmrec.edu.in" className="flex items-center gap-3 text-gray-600 hover:text-blue-600">
                    <Mail size={20} />
                    22b61a66a4@nmrec.edu.in
                  </a>
                  <a href="tel:+916303863875" className="flex items-center gap-3 text-gray-600 hover:text-blue-600">
                    <Phone size={20} />
                    +91 6303863875
                  </a>
                  <div className="flex items-center gap-3 text-gray-600">
                    <MapPin size={20} />
                    Hyderabad, India
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Social Links</h3>
                <div className="space-y-4">
                  <a 
                    href="https://github.com/mummadimaheswar" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-600 hover:text-gray-900"
                  >
                    <Github size={20} />
                    GitHub
                  </a>
                  <a 
                    href="https://linkedin.com/in/mummadimaheswar" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-600 hover:text-blue-600"
                  >
                    <Linkedin size={20} />
                    LinkedIn
                  </a>
                  <a 
                    href="http://mummadimaheswar.github.io/my-portfolio/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-600 hover:text-blue-600"
                  >
                    <ExternalLink size={20} />
                    Portfolio Website
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">© 2024 Mummadi Maheswar Reddy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
