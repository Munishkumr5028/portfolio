"use client";

import React from "react";
import { ReactTyped } from "react-typed";
import "../../styles/Home.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">CodeX</div>
        <ul className="nav-links">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <button className="hire-btn">Hire Me</button>
      </nav>

      <section className="hero">
        <div className="hero-left">
          <img src="/computer.png" alt="Computer" className="hero-image" />
        </div>
        <div className="hero-right">
          <h1>Munish Kumar</h1>
          <ReactTyped
            strings={[
              // "MERN Stack Developer",
              "Frontend Developer",
              "React JS Developer",
            ]}
            typeSpeed={60}
            backSpeed={40}
            loop
            className="typed-text"
          />
          <div className="hero-buttons">
            <button className="btn resume">Resume</button>
            <button className="btn contact">Contact</button>
          </div>
        </div>
      </section>
    </div>
  );
}
