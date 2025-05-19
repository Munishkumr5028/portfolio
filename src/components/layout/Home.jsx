'use client';

import React from "react";

export default function Home() {
  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        backgroundColor: '#f3f4f6', // light gray
        textAlign: 'center',
        color: '#333',
      }}
    >
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
        Welcome to Munish's Portfolio 🚀
      </h1>
      <p style={{ fontSize: '1.125rem', maxWidth: '40rem', color: '#555' }}>
        I’m a passionate full-stack developer focused on building modern web
        apps using Next.js, React, Redux, and more.
      </p>
    </section>
  );
}
