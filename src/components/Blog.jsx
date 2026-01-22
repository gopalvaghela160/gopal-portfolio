import { motion } from "framer-motion";

export default function Blog() {
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 + i * 0.25,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section id="blog" className="blog-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <motion.div
              className="section-title text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }} // animate only once when visible
            >
              <p>Check My Latest Blog Post</p>
              <h2>Latest Blog Post</h2>
            </motion.div>
          </div>
        </div>
        <div className="row">
          {[
            {
              id: 1,
              image: "/src/assets/images/b1.jpg",
              date: "January 15, 2024",
              name: "How to Make Money Online as a Freelancer",
              description:
                "Nidia Dias is a 3D designer based in the Portugal with an incredible portfolio...",
            },
            {
              id: 2,
              image: "/src/assets/images/b2.jpg",
              date: "February 10, 2023",
              name: "How to Make Money Online as a Freelancer",
              description:
                "Looking for inspiration to kick it off, I stumbled across the work of Shane...",
            },
            {
              id: 3,
              image: "/src/assets/images/b3.jpg",
              date: "February 10, 2023",
              name: "How to Make Money Online as a Freelancer",
              description:
                "Nidia Dias is a 3D designer based in the Portugal with an incredible portfolio...",
            },
          ].map((e, i) => {
            return (
              <div key={i} className="col-lg-4 col-md-6 ">
                <div className="blog-space">
                  <motion.div
                    custom={i}
                    className="blog-item"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={cardVariants}
                  >
                    <div className="blog-banner">
                      <img src={e.image} alt={e.name} />
                    </div>
                    <div className="blog-content">
                      <span className="date">{e.date}</span>
                      <h5>{e.name}</h5>
                      <p>{e.description}</p>
                      <button type="button" className="theme-btn">
                        Read More
                        <i className="ms-2">
                          <svg
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                          >
                            <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path>
                          </svg>
                        </i>
                      </button>
                    </div>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
