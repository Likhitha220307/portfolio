import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight, Github, Linkedin, Mail, Menu, X, Download,
  Code2, Database, BrainCircuit, Globe, GraduationCap, Briefcase,
  ExternalLink, ChevronDown
} from "lucide-react";
import "./styles.css";

const profile = {
  name: "Muthyala Likhitha Bhavani",
  shortName: "Likhitha",
  location: "Guntur, Andhra Pradesh",
  phone: "+91-9573192446",
  role: "Aspiring Software Developer • AI & ML Student",
  email: "likithabhavanimuthy@gmail.com",
  github: "https://github.com/Likhitha220307",
  linkedin: "https://www.linkedin.com/in/likhitha-bhavani-muthyala-2455a43b7",
  resume: "/resume.pdf"
};

const skills = [
  { name: "Java", level: "Core Java • OOP • Collections • JDBC", icon: Code2 },
  { name: "Python", level: "Programming fundamentals", icon: Code2 },
  { name: "DSA", level: "Basic Data Structures & Problem Solving", icon: BrainCircuit },
  { name: "Web Technologies", level: "HTML • CSS • JavaScript", icon: Globe },
  { name: "SQL", level: "SQL • Database basics", icon: Database },
  { name: "Developer Tools", level: "VS Code • Git • GitHub", icon: Code2 }
];

const projects = [
  {
    title: "Movie Booking System",
    type: "Core Java Application",
    description: "Developed a console-based Movie Booking System using Core Java, enabling users to view movies, book tickets, cancel bookings, and manage seat availability.",
    tags: ["Core Java", "OOP", "Collections", "Exception Handling", "File Handling", "JDBC"],
    github: "#", demo: "#"
  },
  {
    title: "Events India",
    type: "Event Discovery Web Application",
    description: "Developed a responsive web application to help users discover and explore events across different cities in India, with a mobile-friendly interface and seamless navigation.",
    tags: ["Java", "HTML", "CSS", "JavaScript", "MySQL", "Git"],
    github: "#", demo: "#"
  }
];

const education = [
  { year: "2024 — 2028", title: "B.Tech in Artificial Intelligence & Machine Learning", place: "Tirumala Engineering College, Narasaraopeta", detail: "CGPA: 8.6 (current)" },
  { year: "2022 — 2024", title: "Intermediate", place: "Sri Chaitanya Junior College, Chilakaluripeta", detail: "91.7%" },
  { year: "2021 — 2022", title: "Secondary School", place: "Sai Vikas Educational Institutions, Chilakaluripeta", detail: "90.5%" }
];

const certificates = [
  "NPTEL Certification — Programming in Java",
  "Completed 8-Level Hindi Language Certification Program",
  "Successfully Earned 12 Certifications from Infosys Springboard",
  "Advanced Relational Database",
  "Database Creation and Modeling using MySQL Workbench"
];

function App() {
  const [open, setOpen] = useState(false);

  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="app">
      <header className="nav">
        <button className="brand" onClick={() => go("home")}>
          LB<span>.</span>
        </button>
        <nav className={open ? "nav-links open" : "nav-links"}>
          {["about", "skills", "projects", "education", "contact"].map((id) => (
            <button key={id} onClick={() => go(id)}>{id}</button>
          ))}
        </nav>
        <button className="menu" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy">
            <div className="eyebrow"><span className="dot" /> Available for internships & opportunities</div>
            <h1>Hi, I'm <span>Likhitha.</span><br />I build things with <em>code.</em></h1>
            <p className="hero-text">
              {profile.role}. Passionate about developing efficient software solutions, solving real-world problems, and continuously learning emerging technologies.
            </p>
            <div className="hero-meta"><span>{profile.location}</span><span>{profile.phone}</span></div>
            <div className="hero-actions">
              <button className="primary" onClick={() => go("projects")}>View my work <ArrowUpRight size={18} /></button>
              <a className="secondary" href={profile.resume} download>Download resume <Download size={17} /></a>
            </div>
            <div className="socials">
              <a href={profile.github} target="_blank" rel="noreferrer"><Github size={19} /></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={19} /></a>
              <a href={`mailto:${profile.email}`}><Mail size={19} /></a>
            </div>
          </div>
          <div className="hero-art">
            <div className="orb orb-a" />
            <div className="orb orb-b" />
            <div className="code-card">
              <div className="window"><i /><i /><i /></div>
              <pre>{`public class Likhitha {
  public static void main(String[] args) {
    String goal = "Keep learning";
    System.out.println(goal);
  }
}`}</pre>
            </div>
            <div className="floating-card"><BrainCircuit size={18} /> AI & ML</div>
          </div>
        </section>

        <section id="about" className="section about">
          <div className="section-label">01 / About</div>
          <div className="two-col">
            <div>
              <h2>Curious mind.<br /><span>Practical builder.</span></h2>
            </div>
            <div>
              <p className="large">
                I'm an aspiring Software Developer with knowledge of Java, Python, SQL, and modern web technologies.
                I'm passionate about developing efficient software solutions, solving real-world problems, and continuously learning emerging technologies.
              </p>
              <p>
                I enjoy turning technical concepts into practical software. My projects include a Core Java Movie Booking System
                and a responsive Events India web application. I'm focused on contributing effectively to software engineering
                projects while continuously strengthening my development and problem-solving skills.
              </p>
              <div className="stats">
                <div><strong>8.6</strong><span>Current CGPA</span></div>
                <div><strong>2028</strong><span>Graduation</span></div>
                <div><strong>12+</strong><span>Certifications</span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-label">02 / Skills</div>
          <div className="section-heading">
            <h2>Tools I use to <span>build.</span></h2>
            <p>Focused on fundamentals first, with a growing interest in AI-powered applications.</p>
          </div>
          <div className="skill-grid">
            {skills.map(({ name, level, icon: Icon }) => (
              <article className="skill-card" key={name}>
                <div className="icon-box"><Icon size={21} /></div>
                <h3>{name}</h3>
                <p>{level}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section projects">
          <div className="section-label">03 / Selected work</div>
          <div className="section-heading">
            <h2>Projects that <span>matter.</span></h2>
            <p>A small collection of projects that show how I learn and apply technology.</p>
          </div>
          <div className="project-list">
            {projects.map((p, i) => (
              <article className="project-card" key={p.title}>
                <div className="project-number">0{i + 1}</div>
                <div className="project-main">
                  <div className="project-top"><span>{p.type}</span><ArrowUpRight size={18} /></div>
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                  <div className="tags">{p.tags.map(t => <span key={t}>{t}</span>)}</div>
                  <div className="project-links">
                    <a href={p.github}>GitHub <Github size={15} /></a>
                    <a href={p.demo}>Live demo <ExternalLink size={15} /></a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="section">
          <div className="section-label">04 / Journey</div>
          <div className="two-col">
            <div>
              <h2>Education &<br /><span>certifications.</span></h2>
              <p className="muted">A snapshot of my academic journey and continued learning.</p>
            </div>
            <div className="timeline">
              {education.map(e => (
                <article className="timeline-item" key={e.year}>
                  <div className="timeline-dot" />
                  <span>{e.year}</span>
                  <h3>{e.title}</h3>
                  <p>{e.place}</p>
                  <strong>{e.detail}</strong>
                </article>
              ))}
            </div>
          </div>
          <div className="cert-box">
            <div className="cert-icon"><GraduationCap size={22} /></div>
            <div><h3>Continuous learning</h3><p>{certificates.join("  •  ")}</p></div>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="contact-inner">
            <div className="section-label">05 / Contact</div>
            <h2>Let's build something<br /><span>useful together.</span></h2>
            <p>I'm open to internships, student opportunities, collaborations and interesting projects.</p>
            <a className="primary big" href={`mailto:${profile.email}`}>Say hello <Mail size={18} /></a>
            <div className="contact-links">
              <a href={profile.github} target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a>
              <a href={`mailto:${profile.email}`}><Mail size={17} /> {profile.email}</a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>© 2026 {profile.name}</span>
        <span>Built with React & curiosity.</span>
      </footer>
      <button className="to-top" onClick={() => go("home")} aria-label="Back to top"><ChevronDown size={18} /></button>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
