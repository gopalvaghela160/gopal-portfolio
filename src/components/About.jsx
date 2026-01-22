import profile from "/assets/images/gopal.jpeg";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { GoDownload } from "react-icons/go";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="about-area">
      <div className="container">
        <motion.div
          className="row"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }} // animate only once when visible
        >
          <div className="col-lg-5">
            <div className="about-image-part">
              <img src={profile} alt="about" className="about-img" />
              <h2 className="about-name">Gopal Vaghela</h2>
              {/* <h2 className="about-name">Jigar Parsana</h2> */}
              <div className="about-btn">
                <h6>Available for Work</h6> <span className="status-dot"></span>
              </div>
              <div className="about-social">
                <ul>
                  {/* <li>
                    <a href="#">
                      <FaFacebook className="about-icons" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaXTwitter className="about-icons" />
                    </a>
                  </li> */}
                  <li>
                    <a
                      href="https://in.linkedin.com/in/vaghelagopal"
                      target="_blank"
                    >
                      <FaLinkedinIn className="about-icons" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/gopalvaghela160"
                      target="_blank"
                    >
                      <FiGithub className="about-icons" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about-content-part">
              <h2 className="about-title">
                Hello, I’m Gopal Vaghela,
                <br />
                <span>Frontend Web Developer</span> specializing in
                <span> React & AI-Powered Web Interfaces</span>, based in India.
              </h2>

              {/* <div className="hero-btn">
                <button className="theme-btn">
                  Download CV
                  <GoDownload className="ms-1 fs-6" />
                </button>
              </div> */}

              <div className="skills-list">
                <span>➜ React.js Frontend Development</span>
                <span>
                  ➜ AI-Integrated UI (Chat UI, Smart Search, API-Based Features)
                </span>
                <span>➜ HTML5, CSS3, JavaScript (Responsive Design)</span>
                <span>➜ Firebase Authentication & Database</span>
                <span>➜ REST API Integration</span>
                <span>➜ Clean UI & Performance Optimization</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
