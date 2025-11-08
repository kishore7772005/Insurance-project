import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const videos = [
  { id: "cNOf25mHOho", title: "11 Life Insurance Mistakes & How to Avoid Them", url: "https://www.youtube.com/watch?v=cNOf25mHOho" },
  { id: "LhUjG8YUCc4", title: "How Insurance Agents Fool You | CA Rahul Malodia", url: "https://www.youtube.com/watch?v=LhUjG8YUCc4" },
  { id: "q-O4jBiOngk", title: "How to Choose the Best Car Insurance Policy in India", url: "https://www.youtube.com/watch?v=q-O4jBiOngk" },
  { id: "ZOgWWU_eFQ0", title: "Top Health Insurance Policies, Features & Benefits | Kowshik", url: "https://www.youtube.com/watch?v=ZOgWWU_eFQ0" },
  { id: "22SgGRJGCqk", title: "Top 10 Health Insurance Plans in India 2025!", url: "https://www.youtube.com/watch?v=22SgGRJGCqk" },
];

export default function InsuranceVideos() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragStart, setDragStart] = useState(null);
  const [dragEnd, setDragEnd] = useState(null);
  const carouselRef = useRef();

  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => nextSlide(), 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  // Drag & swipe handlers
  const handleDragStart = (e) => {
    setDragStart(e.clientX || e.touches[0].clientX);
  };

  const handleDragMove = (e) => {
    if (!dragStart) return;
    setDragEnd(e.clientX || e.touches[0].clientX);
  };

  const handleDragEnd = () => {
    if (!dragStart || !dragEnd) return;
    const diff = dragStart - dragEnd;
    if (diff > 50) nextSlide();
    else if (diff < -50) prevSlide();
    setDragStart(null);
    setDragEnd(null);
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "50px 20px", background: "#f7f9fc", textAlign: "center" }}>
      <h2 data-aos="fade-down" style={{ fontWeight: "bold", marginBottom: "40px", color: "#1a1a1a" }}>
        Sound of Suraksha Aur Bharosa Dono!
      </h2>

      <div
        style={{ position: "relative", maxWidth: "950px", margin: "auto", overflow: "hidden", cursor: dragStart ? "grabbing" : "grab" }}
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
        ref={carouselRef}
      >
        <div
          style={{
            display: "flex",
            transition: dragStart ? "none" : "transform 0.6s ease",
            transform: `translateX(-${currentIndex * 70}%)`,
          }}
        >
          {videos.map((video, index) => {
            const isCurrent = index === currentIndex;
            const isLeft = index === (currentIndex - 1 + videos.length) % videos.length;
            const isRight = index === (currentIndex + 1) % videos.length;

            let style = {
              flex: "0 0 70%",
              margin: "0 10px",
              transition: "all 0.5s ease",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
              transform: "scale(0.9)",
              filter: "blur(2px)",
              opacity: 0.5,
              cursor: "pointer",
            };

            if (isCurrent) {
              style.transform = "scale(1)";
              style.filter = "blur(0px)";
              style.opacity = 1;
              style.boxShadow = "0 10px 30px rgba(0,0,0,0.25)";
            } else if (isLeft || isRight) {
              style.transform = "scale(0.95)";
              style.filter = "blur(1px)";
              style.opacity = 0.7;
            }

            return (
              <div key={video.id} style={style} data-aos="zoom-in">
                <div style={{ borderRadius: "16px", overflow: "hidden", background: "#fff" }}>
                  <iframe
                    width="100%"
                    height={isCurrent ? 400 : 250}
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  {isCurrent && (
                    <div style={{ padding: "12px", background: "#fff", borderTop: "1px solid #eee" }}>
                      <a
                        href={video.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#111", fontWeight: "bold", textDecoration: "none" }}
                      >
                        {video.title}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          style={{
            position: "absolute",
            top: "50%",
            left: "5px",
            transform: "translateY(-50%)",
            background: "#fff",
            border: "none",
            borderRadius: "50%",
            width: "45px",
            height: "45px",
            cursor: "pointer",
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
            fontSize: "22px",
            color: "#333",
          }}
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          style={{
            position: "absolute",
            top: "50%",
            right: "5px",
            transform: "translateY(-50%)",
            background: "#fff",
            border: "none",
            borderRadius: "50%",
            width: "45px",
            height: "45px",
            cursor: "pointer",
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
            fontSize: "22px",
            color: "#333",
          }}
        >
          ❯
        </button>
      </div>

      {/* Dots */}
      <div style={{ marginTop: "25px" }} data-aos="fade-up">
        {videos.map((_, idx) => (
          <span
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            style={{
              height: "12px",
              width: "12px",
              margin: "0 6px",
              display: "inline-block",
              borderRadius: "50%",
              backgroundColor: idx === currentIndex ? "#333" : "#bbb",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </div>
    </div>
  );
}
