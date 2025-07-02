import React from "react";

const HeroBanner = ({ title, description, image }) => {
  return (
    <section
      className="hero-banner mb-4"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
        padding: "4rem 0"
      }}
    >
      <div className="container">
        <h1 className="display-4">{title}</h1>
        <p className="lead">{description}</p>
      </div>
    </section>
  );
};

export default HeroBanner;
