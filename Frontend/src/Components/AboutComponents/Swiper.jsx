import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Article1, Article2, Article3 } from "../../assets/asset";

const articles = [
  {
    id: 1,
    category: "Motor Insurance",
    date: "October 2, 2025",
    title: "Five Essential Questions to Ask Before Buying Car Insurance",
    description:
      "Considering the rising incidents of traffic accidents and auto thefts, having a solid car insurance policy is essential...",
    image: Article1,
    link: "#",
  },
  {
    id: 2,
    category: "Motor Insurance",
    date: "October 3, 2025",
    title: "How to Claim Insurance for a Bike?",
    description:
      "In India, having bike insurance is essential for responsible and safe riding. Learn how to file a claim efficiently...",
    image: Article2,
    link: "#",
  },
  {
    id: 3,
    category: "Health Insurance",
    date: "October 1, 2025",
    title:
      "Securing Your Family's Health: The Benefits of Family Floater Health Insurance",
    description:
      "Sudden illnesses or accidents are unpredictable. Family floater health insurance helps safeguard your loved ones...",
    image: Article3,
    link: "#",
  },
];

export default function LatestArticles() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  // Set responsive cards per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setCardsPerView(3);
      else if (window.innerWidth >= 768) setCardsPerView(2);
      else setCardsPerView(1);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? articles.length - cardsPerView : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev >= articles.length - cardsPerView ? 0 : prev + 1
    );
  };

  return (
    <div style={{ background: "#f9f9f9", padding: "50px 20px", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ textAlign: "center", fontWeight: "bold", marginBottom: "40px" }}>
        Latest Articles On Insurance
      </h2>

      <div style={{ position: "relative", maxWidth: "1200px", margin: "auto", overflow: "hidden" }}>
        <div
          style={{
            display: "flex",
            transition: "transform 0.5s ease",
            transform: `translateX(-${(100 / cardsPerView) * currentIndex}%)`,
          }}
        >
          {articles.map((article) => (
            <div
              key={article.id}
              data-aos="fade-up"
              style={{
                flex: `0 0 ${100 / cardsPerView}%`,
                boxSizing: "border-box",
                padding: "0 15px",
                cursor: "pointer",
              }}
              onClick={() => window.location.href = article.link}
            >
              <div
                style={{
                  borderRadius: "16px",
                  overflow: "hidden",
                  background: "#fff",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
                  transition: "all 0.3s ease",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <img
                  src={article.image}
                  alt={article.title}
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
                <div style={{ padding: "20px", flexGrow: 1 }}>
                  <span style={{ fontSize: "14px", fontWeight: "bold", color: "#555" }}>
                    {article.category}
                  </span>
                  <p style={{ fontSize: "14px", color: "#555", margin: "5px 0" }}>
                    {article.date}
                  </p>
                  <h3 style={{ fontSize: "18px", fontWeight: "bold", margin: "10px 0" }}>
                    {article.title}
                  </h3>
                  <p style={{ fontSize: "15px", color: "#444", flexGrow: 1 }}>
                    {article.description}
                  </p>
                  <a
                    href={article.link}
                    style={{ fontWeight: "bold", color: "#800080", textDecoration: "underline" }}
                  >
                    View More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          style={{
            position: "absolute",
            top: "50%",
            left: "10px",
            transform: "translateY(-50%)",
            background: "#fff",
            border: "none",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            cursor: "pointer",
            boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
            fontSize: "20px",
          }}
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          style={{
            position: "absolute",
            top: "50%",
            right: "10px",
            transform: "translateY(-50%)",
            background: "#fff",
            border: "none",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            cursor: "pointer",
            boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
            fontSize: "20px",
          }}
        >
          ❯
        </button>
      </div>

      {/* Dots */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        {Array.from({ length: articles.length - cardsPerView + 1 }).map((_, idx) => (
          <span
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            style={{
              height: "10px",
              width: "10px",
              margin: "0 5px",
              display: "inline-block",
              borderRadius: "50%",
              backgroundColor: idx === currentIndex ? "#800080" : "#bbb",
              cursor: "pointer",
            }}
          />
        ))}
      </div>
    </div>
  );
}
