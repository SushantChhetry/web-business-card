import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Title from "../components/Title";
import Projects from "../components/Projects";
import SocialMedia from "@/components/SocialMedia";
import Navbar from "@/components/Navbar";
import Contact from "@/pages/post/Contact";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function Home() {
  const [nxt, setNxt] = useState(false);

  const handleClick = () => {
    setNxt(!nxt);
  };
  return (
    <>
      <Head>
        <title>Sushant Chhetry</title>
      </Head>

      <main>
        <Navbar />
        <div className="title-wrapper">
          <Title />
        </div>
        <br />
        <br />

        <div className="body-wrapper">
          <img
            src="https://resumeworded.com/assets/images/resume-guides/financial-data-analyst.png"
            alt="resume"
          />
          <div className="next-wrapper">
            <button onClick={handleClick}>Next</button>
            <div className="next">
            {nxt ? <Projects /> : <SocialMedia />}
            </div>
            <button onClick={handleClick}>Next</button>
          </div>
          
        </div>       
        <Footer />
      </main>
    </>
  );
}
