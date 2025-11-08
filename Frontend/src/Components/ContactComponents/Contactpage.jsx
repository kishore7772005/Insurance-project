import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Contact1, Contact2 } from "../../assets/asset";

const ContactUs = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    queryType: "",
    message: "",
    captcha: "",
    consent: false,
  });

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message || !form.queryType) {
      alert("Please fill required fields: Name, Email, Query Type, and Message.");
      return;
    }
    if (!form.consent) {
      alert("Please consent to receive communication from Star.");
      return;
    }

    console.log("Submitted form data:", form);
    alert("✅ Thank you! Your request has been submitted successfully.");
    setForm({
      name: "",
      phone: "",
      email: "",
      queryType: "",
      message: "",
      captcha: "",
      consent: false,
    });
  };

  return (
    <div className="container my-5 contact-page">
      {/* HERO SECTION */}
      <div className="row align-items-center mb-5">
        <div className="col-lg-6" data-aos="fade-right">
          <h2 className="fw-bold text-primary mb-3">CONTACT US</h2>
          <p className="lead text-secondary">
            Need expert assistance? We are here to help you! Reach out via call, chat, mail,
            or WhatsApp — whichever is convenient for you.
          </p>

          <div className="d-flex gap-3 flex-wrap">
            <a href="tel:18004252255" className="btn btn-outline-primary shadow-sm hover-glow">
              📞 Call Us: 1800 425 2255
            </a>

            <a
              href="https://wa.me/918000000000"
              target="_blank"
              rel="noreferrer"
              className="btn btn-success shadow-sm hover-glow"
            >
              💬 Chat on WhatsApp
            </a>

            <a
              href="mailto:support@starhealth.in"
              className="btn btn-outline-secondary shadow-sm hover-glow"
            >
              ✉️ Email Support
            </a>
          </div>

          <p className="mt-3 text-muted small">
            Chat with <strong>Twinkle</strong>, our virtual assistant, for instant services like
            claim processing, hospital locator, and more.
          </p>

          <button className="btn btn-primary mt-2 shadow-sm hover-glow">
            Chat Now (Twinkle)
          </button>
        </div>

        <div className="col-lg-6 text-center" data-aos="fade-left">
          <img
            src={Contact1}
            alt="Contact"
            className="img-fluid rounded shadow-lg contact-img"
          />
        </div>
      </div>

      {/* IMPORTANT NUMBERS */}
      <section className="mb-5">
        <h4
          className="fw-bold text-primary text-center mb-3"
          data-aos="fade-up"
        >
          IMPORTANT NUMBERS — Reach Out to Us
        </h4>
        <p className="text-center text-muted mb-4" data-aos="fade-up">
          Our team is ready to assist you — from new policies to claim support and more.
        </p>

        <div className="row gy-4">
          {[
            {
              title: "Policy",
              desc: "Get details or purchase a new policy.",
              link: "/insurance-policy",
              btn: "Go to Insurance Policy Page",
            },
            {
              title: "Claims",
              desc: "Track or start your health insurance claim.",
              link: "/claims",
              btn: "Claims Portal",
            },
            {
              title: "Call Us",
              desc: "Speak directly with our customer support.",
              link: "tel:18004252255",
              btn: "1800 425 2255",
            },
            {
              title: "Chat on WhatsApp",
              desc: "Quick responses via WhatsApp.",
              link: "https://wa.me/918000000000",
              btn: "Open WhatsApp",
            },
            {
              title: "Email",
              desc: "Send details from your registered email ID.",
              link: "mailto:support@starhealth.in",
              btn: "support@starhealth.in",
            },
            {
              title: "Find Us",
              desc: "Locate your nearest branch or network hospital.",
              dual: true,
              link1: "/branch-locator",
              link2: "/hospital-locator",
              btn1: "Nearest Branch",
              btn2: "Network Hospital",
            },
          ].map((item, i) => (
            <div
              className="col-md-4"
              key={i}
              data-aos="zoom-in"
              data-aos-delay={i * 100}
            >
              <div className="contact-card card h-100 text-center border-0 shadow-sm hover-raise">
                <div className="card-body">
                  <h5 className="text-primary fw-semibold mb-2">{item.title}</h5>
                  <p className="text-muted small mb-3">{item.desc}</p>
                  {item.dual ? (
                    <div className="d-flex justify-content-center gap-2">
                      <a href={item.link1} className="btn btn-outline-primary btn-sm">
                        {item.btn1}
                      </a>
                      <a href={item.link2} className="btn btn-outline-primary btn-sm">
                        {item.btn2}
                      </a>
                    </div>
                  ) : (
                    <a
                      href={item.link}
                      target={item.link.startsWith("http") ? "_blank" : "_self"}
                      rel="noreferrer"
                      className="btn btn-primary btn-sm"
                    >
                      {item.btn}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT FORM */}
      <section
        className="contact-form-section py-5 rounded-3"
        data-aos="fade-up"
      >
        <div className="row align-items-center g-4">
          <div className="col-lg-6" data-aos="fade-right">
            <form onSubmit={handleSubmit} className="p-4 rounded shadow bg-white border">
              <h4 className="fw-bold text-primary mb-3">Write to Us</h4>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">Name *</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Phone</label>
                  <input
                    type="tel"
                    className="form-control"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="10-digit number"
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Email *</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Registered Email ID"
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Query Type *</label>
                  <select
                    className="form-select"
                    name="queryType"
                    value={form.queryType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Query Type</option>
                    <option>Policy Purchase</option>
                    <option>Claim Status</option>
                    <option>Branch Locator</option>
                    <option>Network Hospital</option>
                    <option>Grievance</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="col-12">
                  <label className="form-label">Query *</label>
                  <textarea
                    className="form-control"
                    rows="4"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Write your query here..."
                    required
                  ></textarea>
                </div>

                <div className="col-md-6">
                  <label className="form-label">Captcha</label>
                  <div className="input-group">
                    <input
                      type="text"
                      name="captcha"
                      className="form-control"
                      value={form.captcha}
                      onChange={handleChange}
                      placeholder="Enter Captcha"
                    />
                    <span className="input-group-text bg-primary text-white">
                      [CAPTCHA]
                    </span>
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="consent"
                      checked={form.consent}
                      onChange={handleChange}
                    />
                    <label className="form-check-label">
                      I consent to receive communication from Star Health.
                    </label>
                  </div>
                </div>

                <div className="col-12 d-flex gap-2">
                  <button type="submit" className="btn btn-primary px-4">
                    Submit
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={() =>
                      setForm({
                        name: "",
                        phone: "",
                        email: "",
                        queryType: "",
                        message: "",
                        captcha: "",
                        consent: false,
                      })
                    }
                  >
                    Reset
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Contact2 image beside the form */}
          <div className="col-lg-6 text-center" data-aos="fade-left">
            <img
              src={Contact2}
              alt="Customer Service"
              className="img-fluid rounded shadow-lg contact2-img"
            />
          </div>
        </div>
      </section>

      <footer className="text-center text-muted small mt-5">
        © {new Date().getFullYear()} Star Health —{" "}
        <a href="mailto:support@starhealth.in">support@starhealth.in</a>
      </footer>
    </div>
  );
};

export default ContactUs;
