import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Title from "../components/Title";
import Projects from "../components/Projects";
import SocialMedia from "@/components/SocialMedia";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sushant Chhetry</title>
      </Head>

      <main>
        <Title />
        <div className="resume">
          <Link href="/post/resume">Click me</Link>
        </div>
        <Projects />
        <SocialMedia />
      </main>
    </>
  );
}
