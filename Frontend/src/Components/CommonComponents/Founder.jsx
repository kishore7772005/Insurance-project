import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Founder } from "../../assets/asset";

const FounderSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-5 bg-light">
      <div className="container">
        {/* Section Heading */}
        <div
          className="text-center mb-5"
          data-aos="fade-up"
        >
          <h2 className="fw-bold text-primary">Meet Our Founder</h2>
          <p className="text-muted mt-2">
            Vision, leadership, and innovation that drive <strong>InsureTech</strong> forward.
          </p>
        </div>

        {/* Founder Row */}
        <div className="row align-items-center justify-content-center g-4">
          {/* Left: Founder Info */}
          <div
            className="col-lg-6 col-md-10 text-center text-lg-start"
            data-aos="fade-right"
          >
            <h3 className="fw-bold mb-2">Kishore Kishore</h3>
            <h6 className="text-muted mb-3">Founder & CEO — InsureTech</h6>
            <p className="text-secondary" style={{ fontSize: "16px", lineHeight: "1.8" }}>
              Kishore is the driving force behind <strong>InsureTech</strong>, a visionary leader
              who combines actuarial expertise with cutting-edge technology to revolutionize
              insurance. With a mission to make insurance simpler, smarter, and transparent,
              he leads with innovation, ethics, and customer-first principles.
              <br /><br />
              Under his leadership, InsureTech has grown into a trusted platform
              empowering individuals and businesses to secure their futures confidently.
            </p>

            {/* Buttons */}
            <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3 mt-4">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary px-4 rounded-pill shadow-sm"
              >
                Connect on LinkedIn
              </a>
              <a
                href="mailto:contact@insuretech.com"
                className="btn btn-outline-secondary px-4 rounded-pill shadow-sm"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Right: Founder Image */}
          <div
            className="col-lg-5 col-md-8"
            data-aos="fade-left"
          >
            <div
              className="shadow-lg rounded-4 overflow-hidden"
              style={{
                transform: "scale(1)",
                transition: "transform 0.3s ease",
              }}
            >
              <img
                src={Founder}
                alt="Founder"
                className="img-fluid w-100"
                style={{
                  borderRadius: "20px",
                  objectFit: "cover",
                  height: "420px",
                }}
                onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
                onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
