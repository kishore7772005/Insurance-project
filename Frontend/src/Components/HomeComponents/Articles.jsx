import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Article1, Article2, Article3 } from "../../assets/asset";

export default function LatestArticles() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
  }, []);

  const themeColor = "rgb(57, 115, 210)";
  const lightBg = "linear-gradient(180deg, rgba(57,115,210,0.08) 0%, #ffffff 100%)";

  const articles = [
    {
      id: 1,
      title: "Five Essential Questions to Ask Before Buying Car Insurance",
      category: "Motor Insurance",
      image: Article1,
    },
    {
      id: 2,
      title: "How to Claim Insurance for a Bike?",
      category: "Motor Insurance",
      image: Article2,
    },
    {
      id: 3,
      title:
        "Securing Your Family's Health: The Benefits of Family Floater Health Insurance",
      category: "Health Insurance",
      image: Article3,
    },
  ];

  return (
    <div
      style={{
        background: lightBg,
        padding: "60px 20px",
        fontFamily: "Poppins, sans-serif",
        color: "#1a1a1a", // modern readable dark font
      }}
    >
      <h2
        data-aos="fade-down"
        style={{
          textAlign: "center",
          fontWeight: "700",
          fontSize: "28px",
          marginBottom: "50px",
          color: themeColor,
        }}
      >
        Latest Articles on Insurance
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "30px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {articles.map((article, index) => (
          <div
            key={article.id}
            data-aos="fade-up"
            data-aos-delay={index * 200}
            style={{
              background: "#ffffff",
              borderRadius: "16px",
              border: "1px solid #e3e3e3",
              boxShadow: `0 4px 15px rgba(57, 115, 210, 0.1)`,
              overflow: "hidden",
              transition: "transform 0.4s ease, box-shadow 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.boxShadow =
                "0 8px 25px rgba(57, 115, 210, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 4px 15px rgba(57, 115, 210, 0.1)";
            }}
          >
            <div style={{ position: "relative" }}>
              <img
                src={article.image}
                alt={article.title}
                style={{
                  width: "100%",
                  height: "220px",
                  objectFit: "cover",
                }}
              />
              <span
                style={{
                  position: "absolute",
                  bottom: "10px",
                  left: "10px",
                  background: themeColor,
                  color: "#fff",
                  padding: "6px 14px",
                  borderRadius: "20px",
                  fontSize: "13px",
                  fontWeight: "600",
                }}
              >
                {article.category}
              </span>
            </div>

            <div style={{ padding: "20px" }}>
              <h4
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: themeColor,
                  marginBottom: "10px",
                }}
              >
                {article.title}
              </h4>
              <a
                href="#"
                style={{
                  fontWeight: "bold",
                  fontSize: "14px",
                  color: themeColor,
                  textDecoration: "none",
                }}
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <button
          data-aos="zoom-in"
          style={{
            background: themeColor,
            color: "#fff",
            padding: "12px 30px",
            border: "none",
            borderRadius: "25px",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
            boxShadow: "0 4px 10px rgba(57, 115, 210, 0.3)",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = "rgb(45, 95, 175)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = themeColor)
          }
        >
          View All Articles
        </button>
      </div>
    </div>
  );
}
