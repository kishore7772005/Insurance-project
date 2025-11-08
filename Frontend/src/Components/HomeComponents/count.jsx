import React, { useEffect } from "react";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";

const milestones = [
  { icon: "📄", value: 7160034, label: "Policies Issued" },
  { icon: "🤲", value: 3220573, label: "Claims Settled" },
  { icon: "🏭", value: 7926, label: "Cashless Workshops", link: { text: "View Garages", url: "#" } },
  { icon: "🏥", value: 4500, label: "Network Hospitals", link: { text: "View Hospitals", url: "#" } },
  { icon: "🌍", value: 1000, label: "Offices", link: { text: "View Offices", url: "#" } },
  { icon: "📊", value: 95.49, decimals: 2, label: "Settlement Ratio", suffix: "%" },
];

export default function Milestones() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section
      className="py-5"
      style={{
        background: "#f5f8ff", // soft light background for clean look
        color: "#333",
      }}
    >
      <div className="container text-center">
        <h2
          className="fw-bold mb-5"
          data-aos="fade-down"
          style={{ fontSize: "2.3rem", color: "rgb(57, 115, 210)" }}
        >
          Our Milestones &amp; The Road Ahead
        </h2>

        <div className="row justify-content-center g-4">
          {milestones.map((m, i) => (
            <div
              key={i}
              className="col-6 col-md-4 col-lg-2"
              data-aos="zoom-in"
              data-aos-delay={i * 100}
            >
              <div
                className="card border-0 h-100 rounded-4 text-center shadow-sm"
                style={{
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  background: "#fff",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 20px rgba(57, 115, 210, 0.25)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 10px rgba(0,0,0,0.08)";
                }}
              >
                <div className="card-body d-flex flex-column align-items-center justify-content-center">
                  <div
                    style={{
                      fontSize: "40px",
                      marginBottom: "12px",
                    }}
                  >
                    {m.icon}
                  </div>
                  <h4
                    className="fw-bold"
                    style={{
                      color: "rgb(57, 115, 210)",
                      marginBottom: "5px",
                    }}
                  >
                    <CountUp
                      end={m.value}
                      duration={2.5}
                      decimals={m.decimals || 0}
                      separator=","
                      suffix={m.suffix || ""}
                    />
                  </h4>
                  <p
                    className="text-muted mb-1"
                    style={{ fontWeight: 500, fontSize: "0.95rem" }}
                  >
                    {m.label}
                  </p>
                  {m.link && (
                    <a
                      href={m.link.url}
                      className="fw-semibold"
                      style={{
                        color: "rgb(57, 115, 210)",
                        textDecoration: "none",
                        fontSize: "0.9rem",
                      }}
                      onMouseEnter={(e) =>
                        (e.target.style.color = "rgb(42, 90, 180)")
                      }
                      onMouseLeave={(e) =>
                        (e.target.style.color = "rgb(57, 115, 210)")
                      }
                    >
                      {m.link.text}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
