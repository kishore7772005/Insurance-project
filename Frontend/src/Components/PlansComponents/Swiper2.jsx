import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "bootstrap/dist/css/bootstrap.min.css";

import { plan1, plan2, plan3, plan4, plan5 } from "../../assets/asset";

const plans = [
  {
    image: plan1,
    tag: "Tax Saving",
    name: "InsureTech Elite Term Plan",
    description:
      "Secure your family's future with InsureTech Elite Term Plan – offering lifetime protection and peace of mind at an affordable cost.",
    features: [
      "High cover at affordable cost",
      "Lifetime protection till age 99 years",
      "10% discount on 1st Premium on online buy",
      "Tax benefits as per applicable tax laws",
    ],
  },
  {
    image: plan2,
    tag: "Investment",
    name: "InsureTech Radiance Smart Invest",
    description:
      "Get life cover + wealth creation in one plan. With 10 fund options, enjoy growth and protection together.",
    features: [
      "Zero fund allocation charges",
      "10 different funds to choose from",
      "3 plan options for flexibility",
      "100% money invested for higher returns",
    ],
  },
  {
    image: plan3,
    tag: "Savings",
    name: "InsureTech Money Balance Plan",
    description:
      "A unit-linked policy that helps you save for the future while minimizing market fluctuation risks.",
    features: [
      "Optimized investment strategy",
      "Investment diversification",
      "Wealth creation + life cover",
      "Stable returns",
    ],
  },
  {
    image: plan4,
    tag: "Term Plan",
    name: "InsureTech Super Protection Plan",
    description:
      "Protect your family's happiness with flexible premium payment and optional return of premium feature.",
    features: [
      "Option to get your money back (ROP)",
      "Flexible premium payment options",
      "Lifetime protection till age 99 years",
      "Sum assured as lumpsum or installments",
    ],
  },
  {
    image: plan5,
    tag: "Retirement",
    name: "InsureTech Smart Retirement Plan",
    description:
      "A market-linked retirement plan that secures your post-retirement life with guaranteed additions.",
    features: [
      "Market-linked returns with 3 funds",
      "ZERO allocation charges",
      "Guaranteed Additions up to 5%",
      "Tax benefits under Section 80CCC",
    ],
  },
];

const PlansSection = () => {
  return (
    <div className="py-5" style={{ background: "#f5f8ff" }}>
      {/* Section Header */}
      <div className="container text-center mb-4">
        <h2
          className="fw-bold mb-3"
          style={{ color: "#002b5b", fontSize: "1.9rem" }}
        >
          InsureTech Plans That Will Interest You
        </h2>
        <p style={{ color: "#5a5a5a", fontSize: "0.95rem" }}>
          Explore our most trusted and popular insurance plans designed for every need.
        </p>
      </div>

      <div className="container">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          breakpoints={{
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
        >
          {plans.map((plan, idx) => (
            <SwiperSlide key={idx}>
              <motion.div
                className="card shadow-sm border-0 h-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                style={{
                  borderRadius: "20px",
                  overflow: "hidden",
                  background: "#ffffff",
                }}
              >
                {/* Image */}
                <motion.img
                  src={plan.image}
                  alt={plan.name}
                  className="card-img-top"
                  style={{
                    height: "180px",
                    objectFit: "cover",
                    borderBottom: "3px solid #19497b",
                    transition: "transform 0.4s ease",
                  }}
                  whileHover={{ scale: 1.08 }}
                />

                {/* Card Body */}
                <div className="card-body text-start">
                  <span
                    className="badge mb-2"
                    style={{
                      backgroundColor: "#e8f0ff",
                      color: "#19497b",
                      fontWeight: 600,
                    }}
                  >
                    {plan.tag}
                  </span>
                  <h5
                    className="fw-bold mb-2"
                    style={{ color: "#002b5b", fontSize: "1.05rem" }}
                  >
                    {plan.name}
                  </h5>
                  <p
                    style={{
                      color: "#5a5a5a",
                      fontSize: "0.9rem",
                      marginBottom: "10px",
                    }}
                  >
                    {plan.description}
                  </p>
                  <ul style={{ color: "#6c757d", fontSize: "0.9rem" }}>
                    {plan.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>

                {/* Card Footer Buttons */}
                <div className="card-footer bg-white text-center pb-3">
                  <motion.button
                    className="btn btn-primary btn-sm me-2"
                    style={{
                      borderRadius: "20px",
                      backgroundColor: "#19497b",
                      border: "none",
                      fontWeight: 600,
                      color: "#fff",
                    }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    Get Quote
                  </motion.button>
                  <motion.button
                    className="btn btn-outline-primary btn-sm"
                    style={{
                      borderRadius: "20px",
                      borderColor: "#19497b",
                      color: "#19497b",
                      fontWeight: 600,
                    }}
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "#19497b",
                      color: "#fff",
                    }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    Learn More
                  </motion.button>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PlansSection;
