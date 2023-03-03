import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Title from "../components/Title";
import Projects from "../components/Projects";
import SocialMedia from "@/components/SocialMedia";
import Navbar from "@/components/Navbar";

export default function Home() {
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
        <div className="body-wrapper">
          <h2>Resume</h2>
          <div className="body">
            <Projects />
            <SocialMedia />
          </div>
        </div>
      </main>
    </>
  );
}
