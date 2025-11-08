import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const topCompanies = [
    "InsureTech General Insurance Ltd.",
    "New India Assurance Company Ltd.",
    "National Insurance Company Ltd.",
    "United India Insurance Company Ltd.",
    "Oriental Insurance Company Ltd.",
    "HDFC ERGO General Insurance Co. Ltd",
    "SBI General Insurance Company Ltd",
    "Star Health and Allied Insurance Co. Ltd",
    "Bharti AXA General Insurance Ltd",
    "IFFCO Tokio General Insurance Company",
  ];

  // Theme colors
  const themeColor = "rgb(57, 115, 210)";
  const themeColorLight = "rgba(57, 115, 210, 0.1)";
  const themeColorDark = "rgb(45, 90, 165)";
  const whiteColor = "#fff";

  // Shared styles
  const sectionHeaderStyle = { color: themeColor, marginBottom: "1.5rem" };
  const cardStyle = {
    border: `1px solid ${themeColor}`,
    borderRadius: "0.25rem",
    padding: "1rem",
    height: "100%",
    boxShadow: `0 0 8px ${themeColor}33`,
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      {/* Hero Section - no background */}
      <section
        style={{
          backgroundColor: "transparent", // Removed background color
          color: themeColor, // Text in themeColor for visibility
          textAlign: "center",
          padding: "3rem 0",
        }}
        data-aos="fade-up"
      >
        <div className="container">
          <h1 style={{ fontWeight: "700" }}>InsureTech</h1>
          <p style={{ fontSize: "1.25rem", marginTop: "0.5rem" }}>
            Reliable Insurance Solutions for Health, Car, Bike, Travel & Home
          </p>
          <button
            style={{
              marginTop: "1.5rem",
              backgroundColor: themeColor,
              color: whiteColor,
              border: "none",
              padding: "0.75rem 2rem",
              fontSize: "1.25rem",
              borderRadius: "0.3rem",
              cursor: "pointer",
              fontWeight: "600",
              transition: "background-color 0.3s ease",
              boxShadow: `0 2px 6px ${themeColor}55`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = themeColorDark;
              e.currentTarget.style.boxShadow = `0 4px 12px ${themeColorDark}cc`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = themeColor;
              e.currentTarget.style.boxShadow = `0 2px 6px ${themeColor}55`;
            }}
          >
            Get Your Policy
          </button>
        </div>
      </section>

      {/* Overview Section */}
      <section
        style={{ padding: "3rem 0", maxWidth: 960, margin: "auto" }}
        data-aos="fade-right"
      >
        <h2 style={sectionHeaderStyle}>About InsureTech</h2>
        <p style={{ marginBottom: "1rem" }}>
          InsureTech is a modern private insurance provider in India, delivering
          innovative insurance solutions across Health, Car, Bike, Travel, and
          Home insurance. Our company combines financial expertise with
          cutting-edge digital tools to make insurance fast, easy, and reliable.
        </p>
        <p>
          Founded in 2020, InsureTech has rapidly grown to serve thousands of
          customers, offering seamless online policy purchases, renewals, and
          instant claims settlement. Our goal is to provide maximum protection
          with minimal hassle.
        </p>
      </section>

      {/* Advantages Section */}
      <section
        style={{ padding: "3rem 0", textAlign: "center", maxWidth: 960, margin: "auto" }}
        data-aos="fade-left"
      >
        <h2 style={sectionHeaderStyle}>Why Choose InsureTech?</h2>
        <div
          className="row"
          style={{
            display: "flex",
            gap: "1.5rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <div style={{ flex: "1 1 300px", ...cardStyle }}>
            <h5 style={{ color: themeColor }}>Quick Claims Settlement</h5>
            <p>
              Fast and efficient claims processing, including cashless options at
              partner hospitals.
            </p>
          </div>
          <div style={{ flex: "1 1 300px", ...cardStyle }}>
            <h5 style={{ color: themeColor }}>Affordable Premiums</h5>
            <p>Customized plans at competitive prices to suit every customer’s needs.</p>
          </div>
          <div style={{ flex: "1 1 300px", ...cardStyle }}>
            <h5 style={{ color: themeColor }}>Digital Convenience</h5>
            <p>Buy, renew, and manage your insurance policies online anytime, anywhere.</p>
          </div>
        </div>
      </section>

      {/* Insurance Plans Section */}
      <section
        style={{ padding: "3rem 0", textAlign: "center", maxWidth: 960, margin: "auto" }}
        data-aos="fade-up"
      >
        <h2 style={sectionHeaderStyle}>Our Insurance Plans</h2>
        <div
          className="row"
          style={{
            display: "flex",
            gap: "1.5rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <div style={{ flex: "1 1 200px", ...cardStyle }}>
            <h5 style={{ color: themeColor }}>Health Insurance</h5>
            <p>Coverage up to ₹50 Lakh with 5500+ network hospitals.</p>
          </div>
          <div style={{ flex: "1 1 200px", ...cardStyle }}>
            <h5 style={{ color: themeColor }}>Car Insurance</h5>
            <p>Comprehensive & Third-Party coverage for your vehicle.</p>
          </div>
          <div style={{ flex: "1 1 200px", ...cardStyle }}>
            <h5 style={{ color: themeColor }}>Bike Insurance</h5>
            <p>Protects your two-wheeler against accidents & damages.</p>
          </div>
          <div style={{ flex: "1 1 200px", ...cardStyle }}>
            <h5 style={{ color: themeColor }}>Home Insurance</h5>
            <p>Secures your home and belongings against unforeseen risks.</p>
          </div>
        </div>
      </section>

      {/* Policies & Coverage Section */}
      <section
        style={{ padding: "3rem 0", maxWidth: 960, margin: "auto" }}
        data-aos="fade-right"
      >
        <h2 style={sectionHeaderStyle}>Policies & Coverage</h2>
        <p>We offer a wide range of insurance products catering to different customer needs:</p>
        <ul style={{ paddingLeft: "1.5rem", lineHeight: 1.6 }}>
          <li>
            <b>Health Insurance:</b> Individual & family plans, critical illness coverage,
            top-up & extra care plans.
          </li>
          <li>
            <b>Car & Bike Insurance:</b> Third-party liability, comprehensive, and telematics-based usage plans.
          </li>
          <li>
            <b>Home Insurance:</b> Protection for your property, household items, and valuables.
          </li>
          <li>
            <b>Travel Insurance:</b> Domestic & international coverage for individuals,
            families, and senior citizens.
          </li>
          <li>
            <b>Cyber & Commercial Insurance:</b> Protection for personal cyber risks and
            industrial/commercial operations.
          </li>
        </ul>
      </section>

      {/* Online Services Section */}
      <section
        style={{ padding: "3rem 0", textAlign: "center", maxWidth: 960, margin: "auto" }}
        data-aos="fade-left"
      >
        <h2 style={sectionHeaderStyle}>Online Services</h2>
        <ul
          style={{
            listStyle: "none",
            paddingLeft: 0,
            marginTop: "1rem",
            lineHeight: 1.6,
            maxWidth: 500,
            margin: "1rem auto 0 auto",
            textAlign: "left",
          }}
        >
          <li>Buy and renew policies online instantly.</li>
          <li>Calculate premiums using our online tools.</li>
          <li>Download policy documents and forms digitally.</li>
          <li>24/7 customer support through website & mobile app.</li>
          <li>Get instant quotes and policy details online.</li>
        </ul>
      </section>

      {/* Top 10 Companies Section */}
      <section
        style={{ padding: "3rem 0", textAlign: "center", maxWidth: 600, margin: "auto" }}
        data-aos="fade-up"
      >
        <h2 style={sectionHeaderStyle}>Top 10 General Insurance Companies</h2>
        <ul
          style={{
            listStyleType: "none",
            paddingLeft: 0,
            marginTop: "1.5rem",
            textAlign: "left",
          }}
        >
          {topCompanies.map((company, index) => (
            <li
              key={index}
              style={{
                borderBottom: `1px solid ${themeColor}33`,
                padding: "0.5rem 0",
                fontWeight: "600",
                color: themeColorDark,
              }}
            >
              {index + 1}. {company}
            </li>
          ))}
        </ul>
      </section>

      {/* Contact Section */}
      <section
        style={{ padding: "3rem 0", textAlign: "center", maxWidth: 600, margin: "auto" }}
        data-aos="fade-right"
      >
        <h2 style={sectionHeaderStyle}>Contact Us</h2>
        <p>Email: info@insuretech.com | Phone: +91 12345 67890</p>
        <p>Address: A-4, 1st Floor, Tech Park, Newtown, Kolkata, West Bengal, India</p>
      </section>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: themeColor,
          color: whiteColor,
          textAlign: "center",
          padding: "1rem 0",
          marginTop: "2rem",
          fontWeight: "600",
        }}
      >
        <p>© 2025 InsureTech | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default AboutPage;
