import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <section style={{ padding: "50px 20px", textAlign: "center" }}>
        <h1>👋 Hello, I'm Viet</h1>
        <p style={{ fontSize: "1.2rem", maxWidth: "600px", margin: "20px auto" }}>
          I'm a passionate Front-End Developer with a love for crafting beautiful and interactive web experiences using <strong>ReactJS</strong>.
        </p>
        <Link to="/projects">
          <button style={{ padding: "10px 20px", fontSize: "1rem", cursor: "pointer" }}>
            View My Projects
          </button>
        </Link>
      </section>

      <section style={{ marginTop: "40px", backgroundColor: "#f7f7f7", padding: "40px 20px" }}>
        <h2>🌱 Currently Learning</h2>
        <p>React Hooks, Tailwind CSS, and Git best practices</p>

        <h2>🚀 Goal</h2>
        <p>Build scalable, maintainable UIs and contribute to real-world projects</p>
      </section>
    </div>
  );
}

export default Home;
