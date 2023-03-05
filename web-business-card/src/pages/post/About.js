import Navbar from "@/components/Navbar";
import React from "react";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="about-wrapper">
        <p className="about">
          Hi, I'm Sushant! I am a self-motivated web developer with 3 years of
          experience in creating responsive, user-friendly websites. I have a
          strong foundation in HTML, CSS, and JavaScript, and I am always
          looking to learn new technologies and improve my skills. Currently, I
          work at FAST Enterpises where I collaborate with designers and
          developers to build and maintain websites. I have experience in both
          front-end and back-end development, including React, Springboot, and
          SQL. In my spare time, I enjoy working on personal projects, writing
          articles, and contributing to open-source projects. I am passionate
          about creating accessible and inclusive web experiences that make a
          positive impact on people's lives. If you're interested in connecting,
          feel free to send me a message.
        </p>
        <div className="icons">
          <ul>
            <li>Java</li>
            <li>JavaScript</li>
            <li>SQL</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
