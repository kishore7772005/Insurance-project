import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const slides = [
    {
      image: "/src/assets/CompanyImages/Logo.png",
      title: "InsureTech Insurance",
      subtitle: "Innovating the Future of Protection",
    },
    {
      image: "/src/assets/CompanyImages/Logo1.png",
      title: "Your Trust, Our Technology",
      subtitle: "We Secure Lives with Smart Insurance Solutions",
    },
  ];

  const themeColor = "rgb(57, 115, 210)";

  const styles = {
    section: {
      background: "linear-gradient(180deg, rgba(57,115,210,0.1), #ffffff)",
      padding: "60px 0",
    },
    container: {
      width: "85%",
      maxWidth: "1000px",
      margin: "auto",
      borderRadius: "20px",
      boxShadow: "0 4px 25px rgba(0,0,0,0.1)",
      overflow: "hidden",
      background: "linear-gradient(135deg, #f9f9ff, #ffffff)",
      position: "relative",
      transition: "all 0.4s ease-in-out",
    },
    slide: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: "400px",
      padding: "40px 50px",
    },
    imageBox: {
      flex: "0 0 45%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    image: {
      width: "100%",
      maxWidth: "350px",
      height: "auto",
      objectFit: "contain",
      borderRadius: "10px",
      border: `2px solid ${themeColor}`,
      backgroundColor: "#fff",
      transition: "transform 0.4s ease, box-shadow 0.4s ease",
    },
    textBox: {
      flex: "0 0 50%",
      textAlign: "left",
    },
    title: {
      fontSize: "2rem",
      fontWeight: "700",
      color: themeColor,
    },
    subtitle: {
      fontSize: "1.1rem",
      color: "#4a4a4a",
      marginTop: "10px",
      lineHeight: "1.5",
    },
    arrow: {
      filter: "invert(0.5)",
    },
  };

  return (
    <section style={styles.section}>
      <div
        id="aboutCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="5000"
        style={styles.container}
      >
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              key={index}
            >
              <div style={styles.slide} className="about-slide">
                <div data-aos="fade-right" style={styles.imageBox}>
                  <img
                    src={slide.image}
                    alt={slide.title}
                    style={styles.image}
                    className="about-img"
                  />
                </div>
                <div data-aos="fade-left" style={styles.textBox}>
                  <h2 style={styles.title}>{slide.title}</h2>
                  <p style={styles.subtitle}>{slide.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#aboutCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
            style={styles.arrow}
          ></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#aboutCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
            style={styles.arrow}
          ></span>
        </button>

        <style>
          {`
            .about-slide:hover .about-img {
              transform: scale(1.05);
              box-shadow: 0 8px 20px rgba(57,115,210,0.3);
            }

            .about-slide:hover h2 {
              color: ${themeColor};
              text-shadow: 0 0 8px rgba(57,115,210,0.3);
            }

            .carousel-control-prev-icon,
            .carousel-control-next-icon {
              background-color: ${themeColor};
              border-radius: 50%;
              padding: 15px;
              transition: all 0.3s ease;
            }

            .carousel-control-prev-icon:hover,
            .carousel-control-next-icon:hover {
              background-color: rgba(57,115,210,0.8);
              box-shadow: 0 0 12px rgba(57,115,210,0.5);
            }
          `}
        </style>
      </div>
    </section>
  );
};

export default About;
