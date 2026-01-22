import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projectsData = [
  {
    id: 1,
    category: ["WebSites", "Applications"],
    title: "NetflixGPT – AI Powered Movie Recommendation App",
    subtitle: "React + Firebase + AI Integration",
    image: "/assets/images/child.webp",
    role: "React Frontend Developer",
    duration: "Completed",
    liveUrl: "https://netflixgpt-1cd85.web.app",
    overview:
      "Built a Netflix-style web application using React with AI-powered movie recommendations. Implemented authentication, dynamic UI components, and API-based data fetching. The application is fully responsive and deployed live using Firebase hosting.",
    technologies: [
      "React.js",
      "JavaScript",
      "Firebase Authentication",
      "Firebase Hosting",
      "TMDB API",
      "AI API Integration",
      "Responsive UI",
    ],
  },

  {
    id: 2,
    category: ["WebSites"],
    title: "Swiggy Clone – Food Ordering UI",
    subtitle: "React Frontend Clone Project",
    image: "/assets/images/child.webp",
    role: "React Frontend Developer",
    duration: "Completed",
    overview:
      "Developed a Swiggy-inspired food ordering frontend using React. Implemented restaurant listings, dynamic menus, cart flow, and responsive UI. Focused on component-based architecture and API-driven content rendering.",
    technologies: [
      "React.js",
      "JavaScript",
      "API Integration",
      "CSS / Tailwind",
      "Responsive Design",
    ],
  },

  {
    id: 3,
    category: ["WebSites"],
    title: "The United Frontline – Digital News Portal",
    subtitle: "News Website Development",
    image: "/assets/images/tuf.webp",
    role: "Frontend Web Developer",
    duration: "Live Project",
    liveUrl: "https://theunitedfrontline.com/",
    overview:
      "Worked on the frontend development of a live digital news portal. Built responsive pages, integrated APIs for news content, and ensured smooth performance across devices. Contributed to UI improvements and production deployment.",
    technologies: [
      "React.js",
      "HTML",
      "CSS",
      "JavaScript",
      "REST API Integration",
      "Responsive Design",
      "Linux Server Deployment",
    ],
  },

  {
    id: 4,
    category: ["WebSites"],
    title: "Diamond Times – Digital News Website",
    subtitle: "Live News Platform",
    image: "/assets/images/diamondtimes.png",
    role: "Frontend Web Developer",
    duration: "Live Project",
    liveUrl: "https://www.diamondtimes.in/",
    overview:
      "Contributed to the frontend development of a real-time digital news website. Implemented responsive layouts, integrated backend APIs, and worked on deployment and performance optimization for production use.",
    technologies: [
      "React.js",
      "JavaScript",
      "REST APIs",
      "Firebase",
      "Responsive UI",
      "Linux Server Deployment",
    ],
  },
];

export default function Project() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selected, setSelected] = useState(null);
  console.log(activeCategory, "activeCategory");

  const categories = ["All"];
  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : // : projectsData.filter((item) => item.category === activeCategory);
        projectsData.filter((item) => item.category.includes(activeCategory));
  console.log(filteredProjects, "filteredProjects");

  return (
    <section id="project" className="project-area">
      <div className="container">
        {/* Section Title */}
        <motion.div
          className="section-title text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p>Here are some of my projects</p>
          <h2>My Projects</h2>
        </motion.div>

        {/* Tabs */}
        <div className="tab-menu">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`tab-btn ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="row">
          {filteredProjects.map((item) => (
            <motion.div
              key={item.id}
              className="col-lg-4 col-md-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              // whileHover={{ scale: 1.02 }}
              // transition={{ duration: 0.4 }}
            >
              <div className="project-card" onClick={() => setSelected(item)}>
                <div className="project-image">
                  <img src={item.image} alt={item.title} />
                  <motion.div
                    className="overlay"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="overlay-content">
                      {/* <p>{item.overview}</p> */}
                      <p>
                        {item.overview.length > 300
                          ? item.overview.substring(0, 300) + "..."
                          : item.overview}
                      </p>
                      <div className="tags">
                        {item.technologies.map((tech, i) => (
                          <span key={i}>{tech}</span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
                <div className="project-info">
                  <p className="category">{item.subtitle}</p>
                  <h3>{item.title}</h3>
                  <div className="overlay-content">
                    <div className="tags">
                      {item.technologies.map((tech, i) => (
                        <span key={i}>{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            style={{ background: "white" }}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3>{selected.title}</h3>
              <div className="modal-image">
                <img src={selected.image} alt={selected.title} />
              </div>
              <p>{selected.overview}</p>
              <div className="tags">
                {selected.technologies.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>
              <button className="close-btn" onClick={() => setSelected(null)}>
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
