import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { plan1, plan2, plan3, plan4, plan5 } from "../../assets/asset";

const plans = [
  {
    image: plan1,
    tag: "Tax Saving",
    name: "IndiaFirst Life Elite Term Plan",
    description:
      "With IndiaFirst Life Elite Term Plan, you not only fulfil your commitment, but also ensure that money is the last thing your family has to worry about. IndiaFirst Life Elite Term Plan is a pure protection plan that ticks everything off your checklist.",
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
    name: "IndiaFirst Life Radiance Smart Invest Plan",
    description:
      "Have you heard of a plan that not only gives you a life cover but also helps in wealth creation? Enjoy 2 benefits in 1 plan with IndiaFirst Life Radiance Smart Invest Plan.",
    features: [
      "Zero Fund allocation charges",
      "10 different funds to choose from",
      "3 Plan Options",
      "100% money invested for higher returns",
      "Life Cover",
    ],
  },
  {
    image: plan3,
    tag: "Investment",
    name: "IndiaFirst Life Money Balance Plan",
    description:
      "A unit linked individual savings life insurance policy that helps you save for the future, while limiting your exposure to market fluctuations. The policy is designed to offer market-linked returns along with the security of a life cover.",
    features: [
      "Optimized Investment Strategy",
      "Investment Diversification",
      "Wealth Creation",
      "Life Cover Protection",
    ],
  },
  {
    image: plan4,
    tag: "Term Plan",
    name: "IndiaFirst Life Super Protection Plan",
    description:
      "Protect your family’s happiness & future with our most flexible term plan. Buy term life insurance and give your loved ones the financial security they deserve.",
    features: [
      "Option to get your money back (Return of Premium-ROP)",
      "Flexibility to pay premiums at your convenience",
      "Lifetime protection till age 99 years",
      "Sum Assured as lumpsum or monthly installments",
    ],
  },
  {
    image: plan5,
    tag: "Retirement",
    name: "IndiaFirst Life Smart Retirement Plan",
    description:
      "IndiaFirst Life Smart Retirement Plan is a low-cost retirement solution for those looking to lock-in their retirement savings and maximize market-linked returns by leveraging the dynamic Indian economy.",
    features: [
      "Market-linked returns, with 3 new funds",
      "ZERO allocation on entry charges",
      "Guaranteed Additions of up to 5% in 1st year",
      "Retirement tax benefits under 80CCC",
    ],
  },
];

export default function PlansSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const themeColor = "rgb(57, 115, 210)";

  return (
    <div style={{ background: "#f5f8ff", padding: "50px 10vw" }}>
      <h2
        style={{
          fontSize: "1.8rem",
          fontWeight: 700,
          color: themeColor,
          textAlign: "center",
          marginBottom: 40,
        }}
        data-aos="fade-up"
      >
        Plans That Will Interest You
      </h2>

      {plans.map((plan, idx) => (
        <div
          key={idx}
          data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-start",
            gap: 24,
            background: "#fff",
            borderRadius: 12,
            boxShadow: "0 4px 15px rgba(0,0,0,0.06)",
            marginBottom: 30,
            padding: "25px 35px",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-6px)";
            e.currentTarget.style.boxShadow = `0 8px 20px rgba(57,115,210,0.3)`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.06)";
          }}
        >
          <img
            src={plan.image}
            alt={plan.name}
            style={{
              width: 150,
              height: 130,
              objectFit: "cover",
              borderRadius: 12,
            }}
          />

          <div style={{ flex: 2 }}>
            <span
              style={{
                background: "rgba(57,115,210,0.1)",
                color: themeColor,
                fontWeight: 600,
                fontSize: "0.9rem",
                padding: "3px 14px",
                borderRadius: 10,
                marginBottom: 10,
                display: "inline-block",
              }}
            >
              {plan.tag}
            </span>
            <div
              style={{
                fontWeight: 700,
                fontSize: "1.2rem",
                marginBottom: 10,
                color: themeColor,
              }}
            >
              {plan.name}
            </div>
            <div
              style={{
                fontSize: "0.95rem",
                color: "#555",
                marginBottom: 10,
              }}
            >
              {plan.description}
            </div>
          </div>

          <ul
            style={{
              flex: 1.5,
              margin: 0,
              paddingLeft: 18,
              fontSize: "0.95rem",
              color: themeColor,
            }}
          >
            {plan.features.map((feature, i) => (
              <li key={i} style={{ margin: "5px 0" }}>
                {feature}
              </li>
            ))}
          </ul>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              alignItems: "center",
            }}
          >
            <button
              style={{
                background: themeColor,
                color: "#fff",
                padding: "7px 20px",
                borderRadius: "20px",
                border: "none",
                fontWeight: 600,
                fontSize: "1rem",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(57,115,210,0.85)";
                e.currentTarget.style.boxShadow =
                  "0 0 10px rgba(57,115,210,0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = themeColor;
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Get Quote
            </button>
            <button
              style={{
                background: "#fff",
                color: themeColor,
                border: `2px solid ${themeColor}`,
                padding: "7px 20px",
                borderRadius: "20px",
                fontWeight: 600,
                fontSize: "0.95rem",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = themeColor;
                e.currentTarget.style.color = "#fff";
                e.currentTarget.style.boxShadow =
                  "0 0 10px rgba(57,115,210,0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#fff";
                e.currentTarget.style.color = themeColor;
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Learn More
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
