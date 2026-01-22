import React from "react";
import { Pagination } from "react-bootstrap";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { motion } from "framer-motion";

export default function Testimonial() {
  const testimonials = [
    {
      id: 1,
      image: "/assets/images/t1.jpg",
      text: "Publishing news, managing categories, and uploading media is extremely easy now. The admin dashboard is powerful yet simple to use.",

      name: "Arjun Virani - Diamondtimes Web and Application",
      role: "CEO & Founder",
    },
    {
      id: 2,
      image: "/assets/images/t2.jpg",
      text: "CinInfo solved a big problem in our industry. Now we can find suitable artists and technicians within minutes. The search, filters, and portfolio viewing system work perfectly.",
      name: "Sanjay Jayani - Cininfo Application",
      role: "Lead Developer",
    },
    {
      id: 3,
      image: "/assets/images/t1.jpg",
      text: "The UI is simple, fast, and very user-friendly. Our staff adapted to the system immediately, and accuracy has been excellent..",
      name: "Paras Chopra - Elevorce Application",
      role: "CEO & Founder",
    },
    {
      id: 4,
      image: "/assets/images/t1.jpg",
      text: "Their design team understands trends deeply, and their ability to produce high-quality apparel on tight timelines is impressive.",
      name: "Dhaval Ahir - HypeHy Website",
      role: "CEO & Founder",
    },
    {
      id: 5,
      image: "/assets/images/t1.jpg",
      text: "Modern UI, smooth performance, instant photo delivery, and excellent support—ICONFISYS exceeded expectations.",
      name: "Aayushi Kakadia - Wedding Application",
      role: "CEO & Founder",
    },
  ];
  return (
    <section id="testimonial" className="testimonial-area">
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
              <p>Testimonials</p>
              <h2>What Clients Say !</h2>
            </motion.div>
          </div>
        </div>
        <div className="row">
          <motion.div
            className="col-lg-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }} // animate only once when visible
          >
            <Swiper
              modules={[Navigation]}
              spaceBetween={50}
              slidesPerView={2}
              autoplay={{ delay: 3000 }}
              navigation={{
                prevEl: ".custom-prev",
                nextEl: ".custom-next",
                enabled: true,
              }}
              loop={true}
              breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
              }}
              pagination={{ clickable: true }}
              className="testimonial-swiper"
            >
              {testimonials.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="testimonial-item">
                    <div className=" ">
                      {/* <img src={item.image} alt={item.name} /> */}
                    </div>
                    <p className="text">{item.text}</p>
                    <div className="testi-des">
                      <h5>{item.name}</h5>
                      <span>{item.role}</span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              {/* <div className="navigation-wrapper">
                                <div className="swiper-button-prev"></div>
                                <div className="swiper-button-next"></div>
                            </div> */}
              <div className="custom-navigation">
                <button className="custom-prev">
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                  </svg>
                </button>
                <button className="custom-next">
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                  </svg>
                </button>
              </div>
            </Swiper>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
