import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import AOS from "aos";
import "aos/dist/aos.css";

const InsureTechPlans = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const themeColor = "rgb(57, 115, 210)"; // 💙 Your theme color

  const plans = [
    {
      title: "InsureTech Health Shield (Family Floater)",
      description:
        "Share a single sum insured across family members under one policy for simple and cost-effective protection.",
      icon: "bi-shield-check",
    },
    {
      title: "InsureTech Advance Care",
      description:
        "Flexible plan with benefits including 24/7 teleconsultation and critical illness cover.",
      icon: "bi-heart-pulse",
    },
    {
      title: "InsureTech Essential Care",
      description:
        "Standard health insurance with hospitalisation coverage & lifelong renewability.",
      icon: "bi-hospital",
    },
  ];

  const coverageDetails = [
    ["Hospitalisation Expenses", "Doctor fees, room charges, medical bills for stays over 24 hours."],
    ["Pre and Post Hospitalisation", "Expenses up to 180 days before and after hospitalisation."],
    ["Day Care Treatments", "Chemotherapy, dialysis, radiotherapy, and more."],
    ["AYUSH Treatment", "Treatment at recognised government/accredited AYUSH hospitals."],
    ["Wellness Programs", "Earn and redeem wellness points for OPD, diagnostics, medicines."],
    ["Emergency Ambulance", "Air and road ambulance coverage up to sum insured."],
    ["Organ Donor Expenses", "Reimbursement for organ donor surgery costs."],
  ];

  const benefits = [
    "Save on Premiums – Cover spouse, children, parents under one plan.",
    "Tax Savings – Premiums eligible for tax deduction under Section 80D.",
    "Lifelong Renewability without any age restrictions.",
    "Cashless Hospitalisation at 10,000+ network hospitals.",
    "Simplified Claim Process with 24/7 support.",
  ];

  const addOns = [
    "Maternity Benefit – Coverage for childbirth and pregnancy complications.",
    "Claim Protector – Extend coverage for otherwise excluded expenses.",
    "Co-payment Options – Choose 10% or 20% co-pay to reduce premium.",
    "Unlimited Teleconsultations – Connect with healthcare professionals anytime.",
  ];

  const getGradient = (idx) => {
    const gradients = [
      { start: "#6a11cb", end: "#2575fc" },
      { start: "#ff416c", end: "#ff4b2b" },
      { start: "#43cea2", end: "#185a9d" },
    ];
    return gradients[idx % gradients.length];
  };

  return (
    <div className="container my-5" style={{ color: themeColor }}>
      {/* Hero Section */}
      <section className="text-center mb-5">
        <h1 className="display-5 fw-bold" data-aos="fade-down" style={{ color: themeColor }}>
          InsureTech Health Insurance Plans
        </h1>
        <p className="lead" data-aos="fade-up" style={{ color: "black" }}>
          Reliable Protection,{" "}
          <span className="fw-bold" style={{ color: themeColor }}>
            Zero Worries
          </span>
        </p>
        <button
          className="btn btn-lg mt-3 fw-semibold"
          data-aos="zoom-in"
          style={{
            backgroundColor: themeColor,
            color: "#fff",
            border: "none",
            transition: "0.3s",
          }}
        >
          Get a Quote
        </button>
      </section>

      {/* Why Choose */}
      <section className="mb-5" data-aos="fade-up">
        <h2
          className="h3 border-bottom pb-2 mb-3 fw-bold"
          style={{
            borderColor: themeColor,
            color: themeColor,
          }}
        >
          Why Choose InsureTech Family Health Insurance?
        </h2>
        <ul className="list-group list-group-flush">
          {[
            "Affordable Premiums for the Entire Family",
            "Comprehensive Coverage Including Wellness Benefits",
            "Flexible Add-ons Tailored for Your Lifestyle",
            "Instant Policy Issuance & Hassle-free Documentation",
            "No GST on Health Plans for Additional Savings",
          ].map((item, idx) => (
            <li key={idx} className="list-group-item">
              <i className="bi bi-check-circle-fill me-2" style={{ color: themeColor }}></i> {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Popular Plans */}
      <section className="mb-5">
        <h2
          className="h3 border-bottom pb-2 mb-4 fw-bold"
          data-aos="fade-up"
          style={{ borderColor: themeColor, color: themeColor }}
        >
          Our Popular Health Plans
        </h2>
        <div className="row g-4">
          {plans.map((plan, idx) => (
            <div className="col-md-4" key={idx}>
              <div
                className="card h-100 text-center p-4 text-white"
                style={{
                  background: `linear-gradient(135deg, ${getGradient(idx).start}, ${getGradient(idx).end})`,
                  border: "none",
                  borderRadius: "15px",
                }}
                data-aos="zoom-in"
              >
                <i className={`bi ${plan.icon} fs-1 mb-3`}></i>
                <h5 className="card-title">{plan.title}</h5>
                <p className="card-text">{plan.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Coverage Table */}
      <section className="mb-5" data-aos="fade-up">
        <h2 className="h3 border-bottom pb-2 mb-3 fw-bold" style={{ borderColor: themeColor, color: themeColor }}>
          Coverage Details
        </h2>
        <div className="table-responsive">
          <table className="table table-bordered align-middle">
            <thead style={{ backgroundColor: themeColor, color: "white" }}>
              <tr>
                <th scope="col">Coverage Component</th>
                <th scope="col">Details</th>
              </tr>
            </thead>
            <tbody>
              {coverageDetails.map((row, idx) => (
                <tr key={idx}>
                  <td>{row[0]}</td>
                  <td>{row[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Benefits */}
      <section className="mb-5" data-aos="fade-up">
        <h2 className="h3 border-bottom pb-2 mb-3 fw-bold" style={{ borderColor: themeColor, color: themeColor }}>
          Benefits of Buying from InsureTech
        </h2>
        <ul className="list-group list-group-flush">
          {benefits.map((item, idx) => (
            <li key={idx} className="list-group-item">
              <i className="bi bi-check2-circle me-2" style={{ color: themeColor }}></i> {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Add-Ons */}
      <section className="mb-5" data-aos="fade-up">
        <h2 className="h3 border-bottom pb-2 mb-3 fw-bold" style={{ borderColor: themeColor, color: themeColor }}>
          Customize Your Policy with Add-Ons
        </h2>
        <ul className="list-group list-group-flush">
          {addOns.map((item, idx) => (
            <li key={idx} className="list-group-item">
              <i className="bi bi-plus-circle me-2" style={{ color: themeColor }}></i> {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Footer */}
      <footer className="text-center pt-4 border-top" data-aos="fade-up">
        <p>
          Need Assistance? Call us anytime at{" "}
          <strong style={{ color: themeColor }}>1800 123 4567</strong> (24/7 Support)
        </p>
        <p>
          Email:{" "}
          <a href="mailto:support@insuretech.com" className="text-decoration-none" style={{ color: themeColor }}>
            support@insuretech.com
          </a>
        </p>
      </footer>
    </div>
  );
};

export default InsureTechPlans;
