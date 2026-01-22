import React from "react";
import { motion } from "framer-motion";
export default function Resume() {
  return (
    <>
      <section id="resume" className="resume-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <motion.div
                className="section-title text-center "
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }} // animate only once when visible
              >
                <p>Experience</p>
                <h2>Professional Resume</h2>
              </motion.div>
            </div>
          </div>
          <motion.div
            className="row"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="col-xl-6 col-md-6">
              <div className="experience-list">
                {/* React Developer */}
                <div className="resume-item">
                  <div className="icon">
                    <i>⚛️</i>
                  </div>
                  <div className="content">
                    <span className="years">1.6 Months (Professional)</span>
                    <h4>React Frontend Developer</h4>
                    <span className="company">
                      React.js • UI Development • API Integration
                    </span>
                  </div>
                </div>

                {/* Project Deployment */}
                <div className="resume-item">
                  <div className="icon">
                    <i>🚀</i>
                  </div>
                  <div className="content">
                    <span className="years">Live Project Experience</span>
                    <h4>Project Deployment & Hosting</h4>
                    <span className="company">
                      Linux Server • Nginx • Build & Deployment
                    </span>
                  </div>
                </div>

                {/* Firebase / Backend Support */}
                <div className="resume-item">
                  <div className="icon">
                    <i>🔥</i>
                  </div>
                  <div className="content">
                    <span className="years">Hands-on Experience</span>
                    <h4>Backend & Authentication Support</h4>
                    <span className="company">
                      Firebase Auth • REST APIs • Database
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-6 col-md-6">
              <div className="experience-list">
                {/* AI UI */}
                <div className="resume-item">
                  <div className="icon">
                    <i>🤖</i>
                  </div>
                  <div className="content">
                    <span className="years">Practical Implementation</span>
                    <h4>AI-Powered UI Integration</h4>
                    <span className="company">
                      Chat UI • Smart Search • API-Based AI Features
                    </span>
                  </div>
                </div>

                {/* Freelance Ready */}
                <div className="resume-item">
                  <div className="icon">
                    <i>💼</i>
                  </div>
                  <div className="content">
                    <span className="years">Freelance Ready</span>
                    <h4>Frontend Web Developer</h4>
                    <span className="company">
                      Responsive Design • Clean Code • Client Work
                    </span>
                  </div>
                </div>

                {/* Learning & Growth */}
                <div className="resume-item">
                  <div className="icon">
                    <i>📈</i>
                  </div>
                  <div className="content">
                    <span className="years">Continuous Learning</span>
                    <h4>Modern Web Technologies</h4>
                    <span className="company">
                      React • JavaScript • Performance Optimization
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
