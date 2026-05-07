import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { C, stagger, fadeUp } from "./constants/designTokens";


import NoiseOverlay from "./components/Overlays/NoiseOverlay";
import GridLines from "./components/Overlays/GridLines";
import FollowCursor from "./components/FollowCursor";
import StatusDot from "./components/StatusDot";

import Terminal from "./components/Terminal/Terminal";
import PhotoCircle from "./components/Profile/PhotoCircle";

import ProjectsSection from "./components/Projects/ProjectsSection";

import Contact from "./components/Contact/Contact";

import "./index.css";

export default function App() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div
      style={{
        background: C.bg,
        minHeight: "100vh",
        color: C.text,
        cursor: "none",
        position: "relative",
        overflowX: "hidden",
      }}
    >
      <NoiseOverlay />
      <GridLines />
      <FollowCursor />

      {/* Ambient orbs */}
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0, overflow: "hidden" }}>
        <div
          style={{
            position: "absolute",
            top: "8%",
            left: "15%",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${C.accent}0d, transparent 65%)`,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "30%",
            right: "10%",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${C.purple}0a, transparent 60%)`,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "15%",
            left: "30%",
            width: 350,
            height: 350,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${C.accent2}08, transparent 60%)`,
          }}
        />
      </div>

      <div style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto", padding: "0 clamp(20px, 5vw, 60px)" }}>

        {/* ── NAV ── */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            background: `${C.bg}bb`,
            backdropFilter: "blur(16px)",
            borderBottom: `1px solid ${C.border}`,
            padding: "12px 0",
          }}
        >
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  background: C.surface,
                  border: `1px solid ${C.border}`,
                  padding: "6px 14px",
                  borderRadius: 30,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                }}
              >
                <div
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: "50%",
                    background: `linear-gradient(135deg, ${C.accent}, ${C.purple})`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 10,
                    color: C.text,
                    fontWeight: 900,
                  }}
                >
                  N
                </div>
                <span
                  style={{
                    fontFamily: "monospace",
                    fontSize: 13,
                    fontWeight: 700,
                    color: C.text,
                    letterSpacing: "0.02em",
                  }}
                >
                  Neel Patil
                </span>
              </div>
            </div>
            <div style={{ display: "flex", gap: 32 }}>
              {["Skills", "Projects", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  style={{
                    fontFamily: "monospace",
                    fontSize: 12,
                    color: C.mutedLight,
                    textDecoration: "none",
                    letterSpacing: "0.08em",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = C.text)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = C.mutedLight)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </motion.nav>

        {/* Spacer for fixed nav */}
        <div style={{ height: 80 }} />

        {/* ── HERO ── */}
        <motion.section
          ref={heroRef}
          style={{ opacity: heroOpacity, y: heroY }}
          id="home"
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 48,
              padding: "80px 0 60px",
              flexWrap: "wrap",
            }}
          >
            {/* Left */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              style={{ flex: "1 1 380px", minWidth: 0 }}
            >
              <motion.div
                variants={fadeUp}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: C.accent + "12",
                  border: `1px solid ${C.accent}28`,
                  borderRadius: 20,
                  padding: "6px 14px",
                  marginBottom: 28,
                  fontFamily: "monospace",
                  fontSize: 10,
                  color: C.accent,
                  letterSpacing: "0.12em",
                }}
              >
                <StatusDot color={C.accent} />
                AVAILABLE FOR INTERNSHIPS
              </motion.div>

              <motion.h1
                variants={fadeUp}
                style={{
                  fontSize: "clamp(2.4rem, 6vw, 4.2rem)",
                  fontWeight: 900,
                  letterSpacing: "-0.04em",
                  lineHeight: 1.05,
                  marginBottom: 20,
                  color: C.text,
                }}
              >
                Hi, I'm {" "}
                <span
                  style={{
                    background: `linear-gradient(135deg, ${C.accent}, ${C.purple} 50%, ${C.pink})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Neel Patil
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                style={{
                  fontSize: 15.5,
                  color: C.muted,
                  lineHeight: 1.75,
                  maxWidth: 460,
                  marginBottom: 36,
                }}
              >
                I build stuff, break stuff, debug stuff, and somehow learn from all of
                it. Mostly into backend systems, cloud, DevOps, competitive
                programming, and ideas that sound impossible initially but become side
                projects later.
              </motion.p>

              {/* CTA buttons */}
              <motion.div variants={fadeUp} style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    padding: "13px 26px",
                    borderRadius: 10,
                    background: `linear-gradient(135deg, ${C.accent}, ${C.purple})`,
                    color: C.text,
                    fontFamily: "monospace",
                    fontSize: 12,
                    fontWeight: 700,
                    textDecoration: "none",
                    letterSpacing: "0.06em",
                    boxShadow: `0 8px 32px ${C.accent}2e`,
                  }}
                >
                  View Projects ↗
                </motion.a>
                <motion.a
                  href="/resume.pdf"
                  target="_blank"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    padding: "13px 26px",
                    borderRadius: 10,
                    border: `1px solid ${C.borderLight}`,
                    background: "transparent",
                    color: C.mutedLight,
                    fontFamily: "monospace",
                    fontSize: 12,
                    textDecoration: "none",
                    letterSpacing: "0.06em",
                    transition: "all 0.2s",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = C.accent;
                    e.currentTarget.style.color = C.text;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = C.borderLight;
                    e.currentTarget.style.color = C.mutedLight;
                  }}
                >
                  Download Resume ↓
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right: photo + terminal stacked */}
            <div
              style={{
                flex: "0 0 auto",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                gap: 28,
              }}
            >
              <PhotoCircle />
              <Terminal />
            </div>
          </div>
        </motion.section>

        {/* ── ABOUT & SKILLS ── */}

        <section id="about" style={{ padding: "80px 0", borderBottom: `1px solid ${C.border}` }}>
          <div style={{ display: "flex", gap: 80, flexWrap: "wrap" }}>
            {/* Left: About & Experience */}
            <div style={{ flex: "1 1 500px" }}>
              <div style={{ marginBottom: 60 }}>
                <h2 style={{ fontSize: 42, fontWeight: 900, marginBottom: 24, color: C.text, letterSpacing: "-0.04em" }}>My Journey</h2>
                <p style={{ fontSize: 16, color: C.muted, lineHeight: 1.8, marginBottom: 20 }}>
                  I’m a Computer Science engineering student passionate about backend
                  development, DevOps, and scalable systems. I build full-stack
                  applications using the MERN stack and explore cloud-native
                  technologies, Docker, Kubernetes, and automation tools while
                  continuously sharpening my DSA and problem-solving skills.
                </p>
                <p style={{ fontSize: 15, color: C.mutedLight, lineHeight: 1.8, marginBottom: 32, fontStyle: "italic", opacity: 0.8 }}>
                  "My journey into tech started with curiosity about how systems and the
                  web work behind the scenes. Since then, I’ve built projects ranging
                  from client-server based applications to a DSA & contest tracker that
                  integrates platforms like LeetCode, Codeforces, and GFG. I enjoy
                  transforming ideas into real products while continuously exploring new
                  technologies, building larger-scale systems, and pushing myself toward
                  creating impactful software in the future."
                </p>

                <h3 style={{ fontSize: 24, fontWeight: 800, marginBottom: 20, color: C.text }}>Experience</h3>
                <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 16, padding: 24 }}>
                  <div style={{ fontWeight: 700, color: C.text, fontSize: 16, marginBottom: 4 }}>
                    Public Relation Officer (PRO) - Association of Computer Science and Engineering Students
                  </div>
                  <div style={{ fontSize: 12, color: C.muted, marginBottom: 12 }}>Aug 2025 - April 2026</div>
                  <p style={{ fontSize: 14, color: C.mutedLight, lineHeight: 1.6 }}>
                    Represented ACSES as the Public Relation Officer (PRO), managing
                    communications, event promotions, and organizational outreach.
                    Collaborated with teams to ensure smooth execution of technical and
                    non-technical events while improving student engagement and
                    coordination between students and organizing committees.
                  </p>
                </div>
              </div>

              <div style={{ marginBottom: 60 }}>
                <h3 style={{ fontSize: 24, fontWeight: 800, marginBottom: 20, color: C.text }}>Hobbies & Interests</h3>
                <div style={{ display: "flex", gap: 12 }}>
                  {["Cricket", "VolleyBall"].map(hobby => (
                    <span key={hobby} style={{ background: C.surface, border: `1px solid ${C.border}`, padding: "10px 20px", borderRadius: 12, fontSize: 14, color: C.muted }}>
                      {hobby}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 style={{ fontSize: 24, fontWeight: 800, marginBottom: 20, color: C.text }}>Certifications</h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                  {[
                    "Introduction to DevOps", "Introduction to Cloud Computing",
                    "Introduction to kubernetes", "Getting Started with Git and GitHub",
                    "Hands-on Introduction to Linux Commandsand", "Shell Scripting"
                  ].map(cert => (
                    <span key={cert} style={{ background: C.surface, border: `1px solid ${C.border}`, padding: "8px 16px", borderRadius: 10, fontSize: 12, color: C.mutedLight }}>
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Skills Tag Cloud */}
            <div id="skills" style={{ flex: "0 1 400px" }}>
              <h2 style={{ fontSize: 42, fontWeight: 900, marginBottom: 24, color: C.text, letterSpacing: "-0.04em" }}>Skills</h2>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {[
                  "CPP", "C", "React.js", "JavaScript", "Git", "GitHub", "Shell Scripting", "Linux", "Node.js", "MongoDB", "Express.js",
                  "SQL", "Docker", "Kubernetes", "Terraform", "EKS",
                  "GitLab CI/CD", "Jenkins", "AWS", "Cloud Computing", "DevOps",
                  "Ansible", "Tailwind CSS"
                ].map((s, i) => (
                  <motion.div
                    key={s}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05, background: C.surfaceHigh, borderColor: C.accent }}
                    transition={{ delay: i * 0.02 }}
                    style={{
                      background: C.surface,
                      border: `1px solid ${C.border}`,
                      padding: "12px 20px",
                      borderRadius: 12,
                      fontSize: 14,
                      fontFamily: "monospace",
                      color: C.mutedLight,
                      cursor: "default",
                      transition: "all 0.2s",
                    }}
                  >
                    {s}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── PROJECTS ── */}
        <div id="projects">
          <ProjectsSection />
        </div>

        {/* ── CONTACT ── */}
        <div id="contact">
          <Contact />
        </div>
      </div>
    </div>
  );
}