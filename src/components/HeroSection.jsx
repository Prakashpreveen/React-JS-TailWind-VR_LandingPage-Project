import React from "react";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        VirtualR build tools{" "}
        <span className="bg-gradient-to-r from-orange-400 to-orange-800 text-transparent bg-clip-text">
          for developers
        </span>
      </h1>
      <p>
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into immersive reality!
      </p>
    </div>
  );
};

export default HeroSection;
