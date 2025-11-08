import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import AOS from "aos";
import "aos/dist/aos.css";

import { Slide1, Slide2, Slide3 } from "../../assets/asset";

const slides = [
  {
    image: Slide1,
    title: "Slice of Health",
    description:
      "Fitness, Nutrition and Health care - all of these contribute to our overall health. Prioritize good health one slice at a time with InsureTech.",
  },
  {
    image: Slide2,
    title: "Life on Wheels",
    description:
      "From safety tips and etiquettes to rules and norms, we have it all here for you! Make your #LifeOnWheels safer and better-informed with InsureTech.",
  },
  {
    image: Slide3,
    title: "Home Safe Home",
    description:
      "Our homes are our safe haven, so let’s do our bit to keep them safe! Simple tips to make your space a #HomeSafeHome with InsureTech.",
  },
];

export default function TopSwiper() {
  const swiperRef = useRef(null);
  const themeColor = "rgb(57, 115, 210)";
  const lightBg = "linear-gradient(180deg, rgba(57,115,210,0.08) 0%, #ffffff 100%)";

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });

    const swiper = swiperRef.current.swiper;
    swiper.slides.forEach((slide) => {
      const img = slide.querySelector("img");
      if (img) img.classList.remove("zoom");
    });
    const activeImg = swiper.slides[swiper.activeIndex]?.querySelector("img");
    if (activeImg) activeImg.classList.add("zoom");

    swiper.on("slideChangeTransitionStart", () => {
      swiper.slides.forEach((slide) => {
        const img = slide.querySelector("img");
        if (img) img.classList.remove("zoom");
      });
      const currentImg =
        swiper.slides[swiper.activeIndex]?.querySelector("img");
      if (currentImg) currentImg.classList.add("zoom");
    });
  }, []);

  return (
    <div
      style={{
        width: "100%",
        padding: "40px 0",
        background: lightBg, // 💠 theme-matched background
        overflow: "hidden",
      }}
    >
      <Swiper
        ref={swiperRef}
        spaceBetween={32}
        slidesPerView={1}
        loop
        navigation
        pagination={{ clickable: true }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        modules={[Navigation, Pagination, EffectFade, Autoplay]}
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                background: "#ffffff",
                borderRadius: "18px",
                overflow: "hidden",
                margin: "0 auto",
                width: "90%",
                maxWidth: "1000px",
                boxShadow: "0 8px 24px rgba(57,115,210,0.15)",
              }}
              data-aos="fade-up"
              data-aos-delay={idx * 150}
            >
              <img
                src={slide.image}
                alt={slide.title}
                style={{
                  width: "45%",
                  height: "260px",
                  objectFit: "cover",
                  transition: "transform 1.2s ease",
                  flexShrink: 0,
                }}
              />
              <div
                style={{
                  padding: "36px",
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  textAlign: "left",
                }}
                data-aos="fade-left"
                data-aos-delay={300}
              >
                <h2
                  style={{
                    marginBottom: "16px",
                    color: themeColor,
                    fontWeight: 700,
                    fontSize: "1.6rem",
                    letterSpacing: "0.5px",
                  }}
                >
                  {slide.title}
                </h2>
                <p
                  style={{
                    fontSize: "1.05rem",
                    color: "#1a1a1a",
                    lineHeight: 1.6,
                    opacity: 0.9,
                  }}
                >
                  {slide.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx="true">{`
        img.zoom {
          transform: scale(1.08);
        }

        .swiper-pagination-bullet {
          background-color: rgb(57, 115, 210) !important;
          opacity: 0.7;
        }

        .swiper-button-prev,
        .swiper-button-next {
          color: rgb(57, 115, 210) !important;
          transition: 0.3s;
        }

        .swiper-button-prev:hover,
        .swiper-button-next:hover {
          color: #0a58ca !important;
        }

        @media (max-width: 768px) {
          .swiper-slide div {
            flex-direction: column !important;
          }
          .swiper-slide img {
            width: 100% !important;
            height: 220px !important;
          }
          .swiper-slide div > div {
            padding: 20px !important;
            text-align: center !important;
          }
          h2 {
            font-size: 1.3rem !important;
          }
        }
      `}</style>
    </div>
  );
}
