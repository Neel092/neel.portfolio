import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { C, stagger, fadeUp } from "./constants/designTokens";

import NoiseOverlay from "./components/Overlays/NoiseOverlay";
import GridLines from "./components/Overlays/GridLines";
import FollowCursor from "./components/FollowCursor";
import Particles from "./components/Overlays/Particles";


import ProfilePhoto from "./components/Profile/Profile_Photo.jpeg";
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

  const [time, setTime] = useState(() =>
    new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: false })
  );
  useEffect(() => {
    const t = setInterval(() =>
      setTime(new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: false }))
      , 1000);
    return () => clearInterval(t);
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          window.history.replaceState(null, '', `#${entry.target.id}`)
        }
      })
    }, { threshold: 0.4 })
    document.querySelectorAll('section[id]').forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [])

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
            position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
            background: "rgba(0,0,0,0.9)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid #1c1c1c",
            padding: "16px 0",
          }}
        >
          <div style={{
            maxWidth: 1400, margin: "0 auto",
            padding: isMobile ? "0 20px" : "0 48px",
            display: "flex", justifyContent: "space-between", alignItems: "center"
          }}>
            {/* Logo — plain script text only, no pill */}
            <a href="#home" style={{ textDecoration: "none" }}>
              <span style={{
                fontFamily: "'Dancing Script', 'Brush Script MT', cursive",
                fontSize: 26,
                fontWeight: 700,
                color: "#ffffff",
                letterSpacing: "0.02em",
                whiteSpace: "nowrap",
                lineHeight: 1,
              }}>
                Neel Patil
              </span>
            </a>

            {/* Center: location + clock */}
            {!isMobile && (
              <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <span style={{ fontFamily: "monospace", fontSize: 12, color: "#555", fontWeight: 600 }}>
                  Maharashtra, India
                </span>
                <span style={{ fontFamily: "monospace", fontSize: 12, color: "#555" }}>
                  {time}
                </span>
              </div>
            )}

            {/* Right: nav links + hamburger */}
            <div style={{ display: "flex", alignItems: "center", gap: isMobile ? 16 : 40 }}>
              {!isMobile && [
                ["(WORKS)", "#projects"],
                ["(ABOUT)", "#about"],
                ["(CONTACT)", "#contact"],
              ].map(([label, href]) => (
                <a key={label} href={href} style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#ffffff",
                  textDecoration: "none",
                  letterSpacing: "0.06em",
                  transition: "color 0.2s",
                  whiteSpace: "nowrap",
                }}
                  onMouseEnter={e => e.currentTarget.style.color = "#0099ff"}
                  onMouseLeave={e => e.currentTarget.style.color = "#ffffff"}
                >{label}</a>
              ))}

              {/* Hamburger icon */}
              {isMobile && (
                <div
                  onClick={() => setIsMenuOpen(true)}
                  style={{
                    width: 44, height: 44, borderRadius: "50%",
                    border: "1px solid #2a2a2a",
                    background: "#0d0d0d",
                    display: "flex", flexDirection: "column",
                    alignItems: "center", justifyContent: "center", gap: 5,
                    cursor: "pointer"
                  }}
                >
                  <span style={{ width: 16, height: 1.5, background: "#fff", borderRadius: 1, display: "block" }} />
                  <span style={{ width: 16, height: 1.5, background: "#fff", borderRadius: 1, display: "block" }} />
                  <span style={{ width: 10, height: 1.5, background: "#fff", borderRadius: 1, display: "block", alignSelf: "flex-start", marginLeft: 14 }} />
                </div>
              )}
            </div>
          </div>
        </motion.nav>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && isMobile && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              style={{
                position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
                background: "rgba(0,0,0,0.95)",
                backdropFilter: "blur(20px)",
                zIndex: 2000,
                display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center", gap: 40
              }}
            >
              <div
                onClick={() => setIsMenuOpen(false)}
                style={{
                  position: "absolute", top: 24, right: 24,
                  width: 44, height: 44, borderRadius: "50%",
                  border: "1px solid #2a2a2a", background: "#0d0d0d",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#fff", fontSize: 24, cursor: "pointer"
                }}
              >
                ×
              </div>
              {[["HOME", "#home"], ["PROJECTS", "#projects"], ["ABOUT", "#about"], ["CONTACT", "#contact"]].map(([label, href]) => (
                <a key={label} href={href}
                  onClick={() => setIsMenuOpen(false)}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 24, fontWeight: 900,
                    color: "#ffffff", textDecoration: "none",
                    letterSpacing: "0.1em"
                  }}
                >
                  {label}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Spacer for fixed nav */}
        <div style={{ height: isMobile ? 80 : 100 }} />

        {/* ── HERO ── */}
        <motion.section
          ref={heroRef}
          style={{ opacity: heroOpacity, y: heroY, position: "relative" }}
          id="home"
        >


          {/* Floating blue circle */}
          <div style={{
            position: "absolute", left: isMobile ? "55%" : "58%", top: isMobile ? 60 : 80,
            width: isMobile ? 40 : 70, height: isMobile ? 40 : 70,
            borderRadius: "50%", background: "#0099ff",
            opacity: 0.9, zIndex: 1, pointerEvents: "none",
            animation: "float-orb 6s ease-in-out infinite"
          }} />

          <Particles />

          <div style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: isMobile ? 60 : 48,
            padding: isMobile ? "60px 0 60px" : "80px 0 80px",
            textAlign: isMobile ? "center" : "left",
            position: "relative", zIndex: 2
          }}>
            {/* Left */}
            <motion.div
              initial="hidden" animate="visible" variants={stagger}
              style={{ flex: isMobile ? "1 1 auto" : "1 1 480px", minWidth: 0 }}
            >
              {/* Signature GIF / name script — reference has animated signature */}
              <motion.div variants={fadeUp} style={{ marginBottom: 8 }}>
                <span style={{
                  fontFamily: "'Dancing Script', cursive",
                  fontSize: isMobile ? 44 : 72,
                  fontWeight: 700,
                  color: "#ffffff",
                  letterSpacing: "0.02em",
                  lineHeight: 1.1,
                  display: "block"
                }}>
                  Neel Patil
                </span>
              </motion.div>

              {/* Role — big bold rotating words */}
              <motion.div variants={fadeUp} style={{ position: "relative", height: isMobile ? 70 : 100, marginBottom: 16, overflow: "hidden" }}>
                {["Problem Solver", "Backend Engineer", "DevOps"].map((role, i) => (
                  <span key={role} style={{
                    position: "absolute", left: isMobile ? "50%" : 0,
                    transform: isMobile ? "translateX(-50%)" : "none",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: isMobile ? "2rem" : "clamp(2.4rem, 5vw, 3.8rem)",
                    fontWeight: 900,
                    color: "#ffffff",
                    textTransform: "uppercase",
                    letterSpacing: "-0.03em",
                    lineHeight: 1,
                    opacity: 0,
                    whiteSpace: "nowrap",
                    animation: `rotate-text 9s ease-in-out infinite`,
                    animationDelay: `${i * 3}s`
                  }}>{role}</span>
                ))}
              </motion.div>

              <motion.p variants={fadeUp} style={{
                fontSize: 15, color: "#888", lineHeight: 1.75,
                maxWidth: isMobile ? "100%" : 440,
                marginBottom: 36,
                margin: isMobile ? "0 auto 36px" : "0 0 36px"
              }}>
                I build stuff, break stuff, debug stuff, and somehow learn from all of it.
                Mostly into backend systems, cloud, DevOps, and ideas that sound impossible initially.
              </motion.p>

              {/* CTA */}
              <motion.div variants={fadeUp} style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: isMobile ? "center" : "flex-start" }}>
                <motion.a href="#projects" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  style={{
                    padding: "13px 28px", borderRadius: 6,
                    background: "#0099ff", color: "#ffffff",
                    fontFamily: "monospace", fontSize: 12, fontWeight: 600,
                    textDecoration: "none", letterSpacing: "0.1em",
                    textTransform: "uppercase"
                  }}
                >EXPLORE</motion.a>
                <motion.a href="/resume.pdf" target="_blank" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  style={{
                    padding: "13px 28px", borderRadius: 6,
                    border: "1px solid #2a2a2a", background: "transparent",
                    color: "#888", fontFamily: "monospace", fontSize: 12,
                    textDecoration: "none", letterSpacing: "0.1em",
                    textTransform: "uppercase", transition: "all 0.2s"
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "#fff"; e.currentTarget.style.color = "#fff"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "#2a2a2a"; e.currentTarget.style.color = "#888"; }}
                >RESUME ↓</motion.a>
              </motion.div>
            </motion.div>

            {/* RIGHT COLUMN — Geometric decoration like reference */}
            {!isMobile && (
              <div
                style={{
                  flex: "0 0 auto",
                  width: 380,
                  height: 420,
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >

                {/* Main striped diamond — must be a square div for clipPath to work */}
                <div style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -52%)",
                  width: 300,
                  height: 300,           // ← must equal width exactly
                  flexShrink: 0,
                  background: `repeating-linear-gradient(
                    -45deg,
                    #ffffff 0px, #ffffff 2px,
                    transparent 2px, transparent 12px
                  )`,
                  clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                  opacity: 0.92,
                }}>
                </div>

                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                  style={{
                    position: "absolute",
                    top: 10,        // ← was 30
                    right: 0,       // ← was 20
                    width: 72,
                    height: 72,
                    borderRadius: "50%",
                    background: "#0099ff",
                    zIndex: 2,
                  }}
                />

              </div>
            )}
          </div>

          {/* Scroll indicator */}
          <div style={{
            display: "flex", justifyContent: "center", paddingBottom: 40,
            animation: "bounce 2s infinite"
          }}>
            <svg width="30" height="30" viewBox="0 0 30 30">
              <path d="M15 5v20M7 17l8 8 8-8" stroke="#fff" fill="none" strokeWidth="2" />
            </svg>
          </div>
        </motion.section>

        {/* ── ABOUT & SKILLS ── */}
        <section id="about" style={{ padding: isMobile ? "80px 0" : "120px 0", borderBottom: "1px solid #1c1c1c" }}>

          {/* WORKS / ABOUT section heading — reference style */}
          <div style={{ marginBottom: 60 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 20, marginBottom: 24 }}>
              <h1 style={{ fontSize: isMobile ? "3rem" : "clamp(4rem, 10vw, 7rem)", fontWeight: 900, color: "#fff", letterSpacing: "-0.02em", margin: 0 }}>
                ABOUT
              </h1>
              {/* Blue explore pill — top right like reference */}
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#fff" }} />
                <span style={{
                  background: "#0099ff", color: "#fff",
                  padding: "8px 24px", borderRadius: 4,
                  fontFamily: "monospace", fontSize: 11,
                  fontWeight: 600, letterSpacing: "0.12em",
                  textTransform: "uppercase"
                }}>LET'S WORK TOGETHER</span>
              </div>
            </div>
            <p style={{
              fontFamily: "monospace", fontSize: 11,
              color: "#555", textTransform: "uppercase",
              letterSpacing: "0.2em"
            }}>
              FROM CODE TO DEPLOYMENT — I BUILD END-TO-END SYSTEMS
            </p>
          </div>

          <div style={{ display: "flex", gap: isMobile ? 40 : 80, flexWrap: "wrap" }}>

            {/* Left: photo + bio + experience + hobbies + certs */}
            <div style={{ flex: isMobile ? "1 1 100%" : "1 1 500px" }}>

              {/* [ PHOTO ] */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                style={{ marginBottom: 48 }}
              >
                <div style={{
                  position: "relative",
                  width: isMobile ? "100%" : 340,
                  height: isMobile ? 300 : 420,
                  borderRadius: 16,
                  overflow: "hidden",
                  border: "1px solid #1c1c1c",
                }}>
                  <img
                    src={ProfilePhoto}
                    alt="Neel Patil"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "top center",
                      display: "block",
                    }}
                  />
                  {/* Subtle gradient overlay at bottom */}
                  <div style={{
                    position: "absolute",
                    bottom: 0, left: 0, right: 0,
                    height: "40%",
                    background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                    pointerEvents: "none",
                  }} />
                  {/* Name tag overlay at bottom */}
                  <div style={{
                    position: "absolute",
                    bottom: 20, left: 20,
                    fontFamily: "monospace",
                    fontSize: 11,
                    color: "#aaaaaa",
                    letterSpacing: "0.1em",
                  }}>
                    NEEL PATIL — BACKEND ENGINEER
                  </div>
                </div>
              </motion.div>

              {/* [ ABOUT ME ] */}
              <div style={{ marginBottom: 48 }}>
                <h3 style={{
                  fontFamily: "monospace", fontSize: 12,
                  color: "#666", letterSpacing: "0.2em",
                  textTransform: "uppercase", marginBottom: 20
                }}>[ ABOUT ME ]</h3>
                <p style={{ fontSize: 15, color: "#aaaaaa", lineHeight: 1.8, marginBottom: 16 }}>
                  I'm a backend and DevOps-focused engineering student who enjoys building systems that go beyond just code.
                  I work on APIs, system design, and deployment using tools like Docker and AWS, with a strong interest
                  in how applications scale and perform in real-world environments. I also explore low-level concepts
                  like networking and concurrency to strengthen my understanding of how systems work end-to-end.
                </p>
                <p style={{ fontSize: 14, color: "#888", lineHeight: 1.8, fontStyle: "italic", borderLeft: "2px solid #333", paddingLeft: 16 }}>
                  "I enjoy transforming ideas into real products while continuously exploring new technologies and pushing myself toward creating impactful software."
                </p>
              </div>

              {/* [ EXPERIENCE ] */}
              <div style={{ marginBottom: 48 }}>
                <h3 style={{
                  fontFamily: "monospace", fontSize: 12,
                  color: "#666", letterSpacing: "0.2em",
                  textTransform: "uppercase", marginBottom: 20
                }}>[ EXPERIENCE ]</h3>
                <div style={{
                  background: "#0d0d0d", border: "1px solid #1c1c1c",
                  borderLeft: "3px solid #ffffff",
                  borderRadius: 12, padding: isMobile ? 20 : 24
                }}>
                  <div style={{ fontWeight: 600, color: "#fff", fontSize: 15, marginBottom: 4 }}>
                    Public Relation Officer (PRO) - ACSES
                  </div>
                  <div style={{ fontSize: 11, color: "#555", marginBottom: 12, fontFamily: "monospace" }}>Aug 2025 – April 2026</div>
                  <p style={{ fontSize: 14, color: "#999", lineHeight: 1.6 }}>
                    Represented Association of Computer Science and Engineering Students, managing communications and organizational outreach.
                  </p>
                </div>
              </div>

              {/* [ MY MISSION ] */}
              <div style={{ marginBottom: 48 }}>
                <h3 style={{
                  fontFamily: "monospace", fontSize: 12,
                  color: "#666", letterSpacing: "0.2em",
                  textTransform: "uppercase", marginBottom: 20
                }}>[ MY MISSION ]</h3>
                <p style={{ fontSize: 14, color: "#999", lineHeight: 1.8 }}>
                  To build scalable and reliable systems by combining backend development with DevOps practices,
                  while continuously improving my problem-solving skills and understanding of real-world software architecture.
                </p>
              </div>

              {/* [ CERTIFICATES ] */}
              <div style={{ marginBottom: 48 }}>
                <h3 style={{
                  fontFamily: "monospace", fontSize: 12,
                  color: "#666", letterSpacing: "0.2em",
                  textTransform: "uppercase", marginBottom: 20
                }}>[ CERTIFICATES ]</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                  {[
                    ["Kubernetes", "2026"],
                    ["GitHub For DevOps Workshop", "2025"],
                    ["Linux For DevOps - Masterclass", "2026"],
                    ["Shell Scripting", "2025"],
                  ].map(([cert, year]) => (
                    <div key={cert} style={{
                      display: "flex", justifyContent: "space-between", alignItems: "center",
                      padding: "16px 0", borderBottom: "1px solid #1c1c1c"
                    }}>
                      <span style={{ fontSize: 14, color: "#aaaaaa" }}>{cert}</span>
                      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        <span style={{ fontSize: 16, color: "#555" }}>↗</span>
                        <span style={{ fontSize: 13, color: "#777", fontFamily: "monospace" }}>{year}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* [ HOBBIES ] */}
              <div style={{ marginBottom: 48 }}>
                <h3 style={{
                  fontFamily: "monospace", fontSize: 12,
                  color: "#666", letterSpacing: "0.2em",
                  textTransform: "uppercase", marginBottom: 20
                }}>[ HOBBIES ]</h3>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  {["Cricket", "VolleyBall"].map(hobby => (
                    <span key={hobby} style={{
                      background: "#0d0d0d", border: "1px solid #1c1c1c",
                      padding: "10px 20px", borderRadius: 8,
                      fontSize: 13, color: "#aaaaaa"
                    }}>{hobby}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Skills */}
            <section id="skills" style={{ flex: isMobile ? "1 1 100%" : "0 1 420px" }}>
              <h1 style={{
                fontSize: isMobile ? "3rem" : "clamp(3rem, 6vw, 5rem)",
                fontWeight: 900, color: "#fff",
                letterSpacing: "-0.02em", marginBottom: 32
              }}>SKILLS</h1>

              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { title: "Languages", skills: ["CPP", "C", "JavaScript"] },
                  { title: "Frontend", skills: ["React.js", "Tailwind CSS"] },
                  { title: "Backend", skills: ["Node.js", "Express.js", "MongoDB", "SQL"] },
                  { title: "DevOps & Cloud", skills: ["Docker", "Kubernetes", "AWS", "EKS", "Terraform", "Ansible", "Jenkins", "GitLab CI/CD"] },
                  { title: "Tools", skills: ["Git", "GitHub", "Linux", "Shell Scripting"] }
                ].map((category, catIdx) => (
                  <div key={category.title}>
                    <div style={{ fontSize: 10, textTransform: "uppercase", color: "#444", marginBottom: 12 }}>{category.title}</div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                      {category.skills.map((s, i) => (
                        <motion.div
                          key={s}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-10%" }}
                          whileHover={{
                            y: -2,
                            borderColor: "#ffffff",
                            color: "#ffffff"
                          }}
                          transition={{
                            y: { duration: 0.2 },
                            opacity: { delay: (catIdx * 0.1) + (i * 0.05), duration: 0.4 },
                            default: { duration: 0.2 }
                          }}
                          style={{
                            background: "#0d0d0d",
                            border: `1px solid #1c1c1c`,
                            padding: "12px 20px",
                            borderRadius: 12,
                            fontSize: 14,
                            fontFamily: "monospace",
                            color: "#888",
                            cursor: "default",
                            transition: "background 0.2s, color 0.2s",
                          }}
                        >
                          {s}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </section>

        {/* ── PROJECTS ── */}
        <section id="projects">
          <ProjectsSection />
        </section>

        {/* ── CONTACT ── */}
        <section id="contact">
          <Contact />
        </section>
      </div>
    </div>
  );
}