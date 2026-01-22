import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
export default function Hero() {
  const [screenSize, setScreenSize] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0,
  );

  useEffect(() => {
    const onResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", onResize);
    // ensure correct initial value (in case of hydration)
    onResize();
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <section id="home" className="main-hero-area">
      <div className="container">
        <div className="container-inner">
          <div className="row align-items-center">
            <div className="col-lg-12 col-sm-12">
              <motion.div
                className="hero-content"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }} // animate only once when visible
              >
                <h1>
                  I'm<span>GOPAL</span>
                  {screenSize < 480 ? <br /> : ""}VAGHELA
                </h1>
                <div className="job">
                  <span>Frontend Web Developer | React & AI-Powered UI</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
