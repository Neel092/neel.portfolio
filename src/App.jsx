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

import useIsMobile from "./hooks/useIsMobile";
import "./index.css";

export default function App() {
  const isMobile = useIsMobile();
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
        cursor: isMobile ? "default" : "none",
        position: "relative",
        overflowX: "hidden",
      }}
    >
      <NoiseOverlay />
      <GridLines />
      {!isMobile && <FollowCursor />}

      {/* Ambient orbs */}
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0, overflow: "hidden" }}>
        <div
          style={{
            position: "absolute",
            top: isMobile ? "10%" : "8%",
            left: isMobile ? "5%" : "15%",
            width: isMobile ? 350 : 500,
            height: isMobile ? 350 : 500,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${C.accent}${isMobile ? "1a" : "0d"}, transparent 70%)`,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: isMobile ? "40%" : "30%",
            right: isMobile ? "-5%" : "10%",
            width: isMobile ? 300 : 400,
            height: isMobile ? 300 : 400,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${C.purple}${isMobile ? "18" : "0a"}, transparent 65%)`,
          }}
        />
        {isMobile && (
          <div
            style={{
              position: "absolute",
              bottom: "20%",
              left: "10%",
              width: 250,
              height: 250,
              borderRadius: "50%",
              background: `radial-gradient(circle, ${C.accent2}12, transparent 60%)`,
            }}
          />
        )}
      </div>

      <div style={{ 
        position: "relative", 
        zIndex: 2, 
        maxWidth: 1200, 
        margin: "0 auto", 
        padding: isMobile ? "0 24px" : "0 clamp(20px, 5vw, 60px)" 
      }}>

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
          <div style={{ 
            maxWidth: 1200, 
            margin: "0 auto", 
            padding: isMobile ? "0 20px" : "0 40px", 
            display: "flex", 
            justifyContent: "space-between", 
            alignItems: "center" 
          }}>
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
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: `1px solid ${C.borderLight}`,
                    background: C.surfaceHigh,
                    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                  }}
                >
                  <img src="/logo.svg" alt="NP" style={{ width: "70%", height: "70%" }} />
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
                  {isMobile ? "Neel" : "Neel Patil"}
                </span>
              </div>
            </div>
            <div style={{ display: "flex", gap: isMobile ? 16 : 32 }}>
              {["Skills", "Projects", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  style={{
                    fontFamily: "monospace",
                    fontSize: isMobile ? 11 : 12,
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
        <div style={{ height: isMobile ? 80 : 40 }} />

        {/* ── HERO ── */}
        <motion.section
          ref={heroRef}
          style={{ opacity: heroOpacity, y: heroY }}
          id="home"
        >
          <div
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              alignItems: isMobile ? "center" : "center",
              justifyContent: "space-between",
              gap: isMobile ? 60 : 48,
              padding: isMobile ? "40px 0 60px" : "40px 0 60px",
              textAlign: isMobile ? "center" : "left",
            }}
          >
            {/* Left */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              style={{ flex: isMobile ? "1 1 auto" : "1 1 500px", minWidth: 0, width: isMobile ? "100%" : "auto" }}
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
                  fontSize: isMobile ? "2.6rem" : "clamp(2.4rem, 6vw, 4.2rem)",
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
                  maxWidth: isMobile ? "100%" : 460,
                  marginBottom: 36,
                  margin: isMobile ? "0 auto 36px" : "0 0 36px",
                }}
              >
                I build stuff, break stuff, debug stuff, and somehow learn from all of
                it. Mostly into backend systems, cloud, DevOps, and ideas that sound impossible initially.
              </motion.p>

              {/* CTA buttons */}
              <motion.div variants={fadeUp} style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: isMobile ? "center" : "flex-start" }}>
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
                    flex: isMobile ? 1 : "initial",
                    textAlign: "center"
                  }}
                >
                  Projects ↗
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
                    justifyContent: "center",
                    gap: 8,
                    flex: isMobile ? 1 : "initial"
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
                  Resume ↓
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right: photo + terminal stacked */}
            <div
              style={{
                flex: "0 0 auto",
                display: "flex",
                flexDirection: "column",
                alignItems: isMobile ? "center" : "flex-end",
                gap: 28,
                width: isMobile ? "100%" : "auto"
              }}
            >
              <PhotoCircle />
              <Terminal />
            </div>
          </div>
        </motion.section>

        {/* ── ABOUT & SKILLS ── */}

        <section id="about" style={{ padding: isMobile ? "60px 0" : "80px 0", borderBottom: `1px solid ${C.border}` }}>
          <div style={{ display: "flex", gap: isMobile ? 40 : 80, flexWrap: "wrap" }}>
            {/* Left: About & Experience */}
            <div style={{ flex: isMobile ? "1 1 100%" : "1 1 500px" }}>
              <div style={{ marginBottom: 60 }}>
                <h2 style={{ fontSize: isMobile ? 32 : 42, fontWeight: 900, marginBottom: 24, color: C.text, letterSpacing: "-0.04em" }}>My Journey</h2>
                <p style={{ fontSize: 16, color: C.muted, lineHeight: 1.8, marginBottom: 20 }}>
                  I’m a Computer Science engineering student passionate about backend
                  development, DevOps, and scalable systems. I build full-stack
                  applications using the MERN stack and explore cloud-native
                  technologies while sharpening my DSA skills.
                </p>
                <p style={{ fontSize: 15, color: C.mutedLight, lineHeight: 1.8, marginBottom: 32, fontStyle: "italic", opacity: 0.8 }}>
                  "I enjoy transforming ideas into real products while continuously exploring new technologies and pushing myself toward creating impactful software."
                </p>

                <h3 style={{ fontSize: 24, fontWeight: 800, marginBottom: 20, color: C.text }}>Experience</h3>
                <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 16, padding: isMobile ? 20 : 24 }}>
                  <div style={{ fontWeight: 700, color: C.text, fontSize: 16, marginBottom: 4 }}>
                    Public Relation Officer (PRO) - ACSES
                  </div>
                  <div style={{ fontSize: 12, color: C.muted, marginBottom: 12 }}>Aug 2025 - April 2026</div>
                  <p style={{ fontSize: 14, color: C.mutedLight, lineHeight: 1.6 }}>
                    Represented Association of Computer Science and Engineering Students, managing
                    communications and organizational outreach.
                  </p>
                </div>
              </div>

              <div style={{ marginBottom: 60 }}>
                <h3 style={{ fontSize: 24, fontWeight: 800, marginBottom: 20, color: C.text }}>Hobbies</h3>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  {["Cricket", "VolleyBall"].map(hobby => (
                    <span key={hobby} style={{ background: C.surface, border: `1px solid ${C.border}`, padding: "10px 20px", borderRadius: 12, fontSize: 14, color: C.muted }}>
                      {hobby}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: 60 }}>
                <h3 style={{ fontSize: 24, fontWeight: 800, marginBottom: 20, color: C.text }}>Certifications</h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                  {[
                    "DevOps", "Cloud Computing",
                    "Kubernetes", "Git & GitHub",
                    "Linux", "Shell Scripting"
                  ].map(cert => (
                    <span key={cert} style={{ background: C.surface, border: `1px solid ${C.border}`, padding: "8px 16px", borderRadius: 10, fontSize: 12, color: C.mutedLight }}>
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Skills Tag Cloud */}
            <div id="skills" style={{ flex: isMobile ? "1 1 100%" : "0 1 400px" }}>
              <h2 style={{ fontSize: isMobile ? 32 : 42, fontWeight: 900, marginBottom: 24, color: C.text, letterSpacing: "-0.04em" }}>Skills</h2>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {[
                  "CPP", "C", "React.js", "JavaScript", "Git", "GitHub", "Shell Scripting", "Linux", "Node.js", "MongoDB", "Express.js",
                  "SQL", "Docker", "Kubernetes", "Terraform", "EKS",
                  "GitLab CI/CD", "Jenkins", "AWS", "Ansible", "Tailwind CSS"
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