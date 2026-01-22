import { motion } from "framer-motion";

export default function Services() {
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section id="services" className="services-area">
      <div className="container">
        <motion.div
          className="section-title text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p>SERVICES</p>
          <h2>Quality Services</h2>
        </motion.div>

        <div className="row">
          {[
            {
              title: "Frontend & Web App Development",
              icon: (
                <svg
                  viewBox="0 0 24 24"
                  width="65"
                  height="65"
                  fill="currentColor"
                >
                  <path d="M6.93912 14.0328C6.7072 14.6563 6.51032 15.2331 6.33421 15.8155C7.29345 15.1189 8.43544 14.6767 9.75193 14.5121C12.2652 14.198 14.4976 12.5385 15.6279 10.4537L14.1721 8.99888L15.5848 7.58417C15.9185 7.25004 16.2521 6.91614 16.5858 6.58248C17.0151 6.15312 17.5 5.35849 18.0129 4.2149C12.4197 5.08182 8.99484 8.50647 6.93912 14.0328Z" />
                </svg>
              ),
              content:
                "I build modern, responsive, and user-friendly web applications using React, HTML, CSS, and JavaScript. My focus is on clean UI, fast performance, and mobile-friendly design.",
            },

            {
              title: "AI-Powered UI & API Integration",
              icon: (
                <svg
                  viewBox="0 0 24 24"
                  width="65"
                  height="65"
                  fill="currentColor"
                >
                  <path d="M4 4h16v16H4zM7 7h10v10H7z" />
                </svg>
              ),
              content:
                "I integrate AI-powered features such as chat interfaces, smart search, content generation, and API-based automation to enhance user experience in modern web applications.",
            },
            {
              title: "Backend & Firebase Solutions",
              icon: (
                <svg
                  viewBox="0 0 24 24"
                  width="65"
                  height="65"
                  fill="currentColor"
                >
                  <path d="M12 2l10 5v10l-10 5-10-5V7z" />
                </svg>
              ),
              content:
                "I provide backend support using Firebase and REST APIs, including authentication, database integration, and secure data handling for web applications.",
            },
          ].map((service, i) => (
            <div key={i} className="col-lg-4 col-md-6">
              <motion.div
                className="service-item"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={cardVariants}
              >
                {service.icon}
                <h4>{service.title}</h4>
                <p>{service.content}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
