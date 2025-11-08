import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { benifit, benifit1, benifit2 } from "../../assets/asset";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import AOS from "aos";
import "aos/dist/aos.css";

const InsuranceBenefits = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  const benefits = [
    {
      title: "Comprehensive Health Insurance",
      category: "Health Insurance",
      image: benifit,
      icon: "bi-heart-pulse",
      description:
        "Get complete protection against hospitalization costs, medical bills, and critical illness expenses.",
      gradient: "linear-gradient(135deg, #0072ff, #00c6ff)",
    },
    {
      title: "Travel Protection Plan",
      category: "Travel Insurance",
      image: benifit1,
      icon: "bi-airplane-engines",
      description:
        "Stay protected during your travels — coverage for trip cancellations, delays, and medical emergencies.",
      gradient: "linear-gradient(135deg, #f857a6, #ff5858)",
    },
    {
      title: "Personal Accident Coverage",
      category: "Accident Insurance",
      image: benifit2,
      icon: "bi-shield-check",
      description:
        "Financial protection for you and your family against accidental injuries, disability, or loss of income.",
      gradient: "linear-gradient(135deg, #43cea2, #185a9d)",
    },
  ];

  return (
    <div className="container py-5">
      {/* Section Header */}
      <div className="text-center mb-5" data-aos="fade-up">
        <small className="fw-semibold" style={{ color: "#0072ff" }}>
          BENEFITS OF HEALTH INSURANCE
        </small>
        <h2
          className="fw-bold mt-2"
          style={{ color: "#14213d", letterSpacing: "0.5px" }}
        >
          Health Insurance Holds Many Benefits For You
        </h2>
        <p className="mt-2" style={{ color: "#6c757d" }}>
          Explore different insurance plans and stay protected through life’s
          uncertainties.
        </p>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          992: { slidesPerView: 3 },
        }}
      >
        {benefits.map((benefit, index) => (
          <SwiperSlide key={index}>
            <div
              className="card h-100 border-0 text-center text-white shadow-lg rounded-4 overflow-hidden position-relative"
              style={{
                background: benefit.gradient,
                transition: "all 0.4s ease-in-out",
              }}
              data-aos="zoom-in"
            >
              {/* Image Overlay */}
              <div className="position-relative">
                <img
                  src={benefit.image}
                  alt={benefit.title}
                  className="w-100"
                  style={{
                    height: "220px",
                    objectFit: "cover",
                    filter: "brightness(0.9) contrast(1.05)",
                  }}
                />
                <div
                  className="position-absolute top-0 start-0 w-100 h-100"
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.4))",
                  }}
                ></div>
                <div
                  className="icon-container position-absolute top-50 start-50 translate-middle"
                  style={{ zIndex: 5 }}
                >
                  <i
                    className={`bi ${benefit.icon} fs-1 text-light icon-glow`}
                  ></i>
                </div>
              </div>

              {/* Card Content */}
              <div className="card-body px-4 py-4">
                <h6
                  className="fw-semibold mb-2"
                  style={{ color: "#dbeafe", opacity: 0.9 }}
                >
                  {benefit.category}
                </h6>
                <h5
                  className="fw-bold mb-3"
                  style={{
                    color: "#ffffff",
                    textShadow: "0 1px 3px rgba(0,0,0,0.3)",
                  }}
                >
                  {benefit.title}
                </h5>
                <p
                  className="small mb-4"
                  style={{ color: "#f0f8ff", opacity: 0.95 }}
                >
                  {benefit.description}
                </p>
                <button
                  className="btn fw-semibold px-4 rounded-pill"
                  style={{
                    backgroundColor: "#ffffff",
                    color: "#1e3a8a",
                    border: "none",
                    boxShadow: "0 3px 10px rgba(255,255,255,0.3)",
                  }}
                >
                  View More
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom CSS */}
      <style jsx>{`
        .icon-glow {
          animation: pulseGlow 2s infinite;
          filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.8));
        }
        @keyframes pulseGlow {
          0% {
            transform: scale(1);
            filter: drop-shadow(0 0 6px rgba(255, 255, 255, 0.6));
          }
          50% {
            transform: scale(1.15);
            filter: drop-shadow(0 0 14px rgba(255, 255, 255, 1));
          }
          100% {
            transform: scale(1);
            filter: drop-shadow(0 0 6px rgba(255, 255, 255, 0.6));
          }
        }
      `}</style>
    </div>
  );
};

export default InsuranceBenefits;
