import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { benifit, benifit1, benifit2 } from "../../assets/asset";

const InsuranceBenefits = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
  }, []);

  const themeColor = "rgb(57, 115, 210)"; // 💠 your exact color

  const benefits = [
    {
      title: "What is Health Insurance?",
      category: "Health Insurance",
      image: benifit,
      animation: "fade-up",
    },
    {
      title: "What is Travel Insurance?",
      category: "Travel Insurance",
      image: benifit1,
      animation: "fade-up",
    },
    {
      title: "What is Personal Accident Insurance?",
      category: "Accident Insurance",
      image: benifit2,
      animation: "fade-up",
    },
  ];

  return (
    <section
      style={{
        background: "linear-gradient(180deg, rgba(57,115,210,0.1), #ffffff)",
        padding: "80px 0",
      }}
    >
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-5" data-aos="fade-down">
          <small className="fw-semibold" style={{ color: themeColor }}>
            BENEFITS OF HEALTH INSURANCE
          </small>
          <h2 className="fw-bold mt-2 text-dark">
            Health Insurance Holds Many Benefits For You
          </h2>
          <p className="text-muted mx-auto" style={{ maxWidth: "600px" }}>
            People’s needs vary, so explore the different types of insurance to
            stay protected through life’s uncertainties.
          </p>
        </div>

        {/* Cards Section */}
        <div className="row justify-content-center">
          {benefits.map((benefit, index) => (
            <div
              className="col-md-4 mb-4"
              key={index}
              data-aos={benefit.animation}
              data-aos-delay={index * 200}
            >
              <div
                className="card h-100 shadow-sm border-0 rounded-4"
                style={{
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  cursor: "pointer",
                  backgroundColor: "#ffffff",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow = `0 8px 25px rgba(57, 115, 210, 0.25)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 10px rgba(0, 0, 0, 0.1)";
                }}
              >
                <img
                  src={benefit.image}
                  className="card-img-top rounded-top-4"
                  alt={benefit.title}
                  style={{ height: "220px", objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <h6 className="fw-semibold" style={{ color: themeColor }}>
                    {benefit.category}
                  </h6>
                  <h5 className="card-title fw-bold mt-2 text-dark">
                    {benefit.title}
                  </h5>
                  <button
                    className="btn mt-3 px-4 fw-semibold"
                    style={{
                      borderWidth: "2px",
                      borderColor: themeColor,
                      color: themeColor,
                      transition: "all 0.3s ease",
                      backgroundColor: "transparent",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = themeColor;
                      e.currentTarget.style.color = "#fff";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.color = themeColor;
                    }}
                  >
                    View More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsuranceBenefits;
