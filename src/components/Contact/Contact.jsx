import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { C, fadeUp, stagger } from "../../constants/designTokens";
import useIsMobile from "../../hooks/useIsMobile";

export default function Contact() {
  const isMobile = useIsMobile();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.section
      ref={ref}
      id="contact"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={stagger}
      style={{
        padding: isMobile ? "80px 0 40px" : "120px 0 60px",
        maxWidth: 1200,
        margin: "0 auto"
      }}
    >
      <div style={{ textAlign: "center", marginBottom: isMobile ? 40 : 80 }}>
        <motion.h2 variants={fadeUp} style={{
          fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
          fontWeight: 900,
          color: "#ffffff",
          letterSpacing: "-0.03em",
          marginBottom: 20,
          textTransform: "uppercase",
        }}>
          LET'S{" "}
          <span style={{ color: "#555555" }}>CONNECT</span>
        </motion.h2>
        <motion.p variants={fadeUp} style={{ color: C.muted, maxWidth: 600, margin: "0 auto", fontSize: isMobile ? 15 : 17, lineHeight: 1.6, opacity: 0.8 }}>
          “Let’s architect something robust together — building scalable backend systems and reliable deployments.”
        </motion.p>
      </div>

      <div style={{
        display: isMobile ? "flex" : "grid",
        flexDirection: isMobile ? "column" : "row",
        gridTemplateColumns: isMobile ? "1fr" : "1fr 1.2fr 1fr",
        gap: isMobile ? 40 : 48,
        alignItems: "flex-start"
      }}>

        {/* Left Column: Bio & Navigation */}
        <motion.div variants={fadeUp} style={{ display: "flex", flexDirection: "column", gap: 32, width: "100%" }}>
          <div>
            <h3 style={{ fontSize: isMobile ? 24 : 28, fontWeight: 900, color: C.text, marginBottom: 12, letterSpacing: "-0.02em" }}>Neel Patil</h3>
            <p style={{ color: C.mutedLight, fontSize: 14, lineHeight: 1.6, marginBottom: 20 }}>
              Backend & DevOps engineer focused on building high-performance, scalable distributed systems.
            </p>
          </div>

          <div>
            <div style={{ fontSize: 12, color: C.muted, textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: 20, display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ width: 30, height: 1, background: "#fff" }}></span> NAVIGATION
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {["Home", "Skills", "Projects"].map(link => (
                <a key={link} href={`#${link.toLowerCase()}`} style={{ color: "#555", textDecoration: "none", fontSize: 16, display: "flex", alignItems: "center", gap: 16, transition: "color 0.2s" }} onMouseEnter={e => e.currentTarget.style.color = "#fff"} onMouseLeave={e => e.currentTarget.style.color = "#555"}>
                  <span style={{ fontSize: 12, opacity: 0.3 }}>——</span> {link}
                </a>
              ))}
            </div>
          </div>


          <div>
            <div
              style={{
                fontSize: 12,
                color: C.muted,
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                marginBottom: 20,
                marginTop: 20,
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <span
                style={{
                  width: 30,
                  height: 1,
                  background: "#fff",
                }}
              ></span>
              CONNECT
            </div>

            <div>
              <div style={{ display: "flex", gap: 10 }}>
                {[
                  {
                    name: "github",
                    link: "https://github.com/Neel092",
                    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  },
                  {
                    name: "linkedin",
                    link: "https://www.linkedin.com/in/neel-patil-56bbb6334/",
                    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  },
                  {
                    name: "instagram",
                    link: "https://www.instagram.com/_neelpatil_07/",
                    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      height: 52,
                      width: 52,
                      borderRadius: 14,
                      background: "#0d0d0d",
                      border: `1px solid #1c1c1c`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#555",
                      transition: "all 0.2s",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "#fff";
                      e.currentTarget.style.color = "#fff";
                      e.currentTarget.style.transform = "scale(1.15)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "#1c1c1c";
                      e.currentTarget.style.color = "#555";
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Center: Message Form Card */}
        <motion.div variants={fadeUp} style={{ width: "100%", background: "#0d0d0d", borderRadius: 16, padding: isMobile ? "32px 24px" : "36px 40px", border: `1px solid #1c1c1c` }}>
          <h3 style={{ fontSize: 24, fontWeight: 800, marginBottom: 8, color: C.text }}>Send a Message</h3>
          <p style={{ color: C.muted, fontSize: 13, marginBottom: 32, opacity: 0.7 }}>I'll get back to you within 24 hours</p>

          <style>
            {`
              .contact-input::placeholder { color: #444; }
            `}
          </style>

          <motion.form
            action="https://formsubmit.co/neelpatil092@gmail.com"
            method="POST"
            variants={stagger}
            initial="hidden"
            animate="visible"
            style={{ display: "flex", flexDirection: "column", gap: 20 }}
          >
            {/* FormSubmit Honeypot/Config */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="New Portfolio Message!" />

            <motion.div variants={fadeUp}>
              <label style={{ display: "block", fontSize: 10, color: C.muted, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8, fontWeight: 500 }}>Your Name</label>
              <input
                className="contact-input"
                type="text"
                name="name"
                placeholder="Name"
                required
                style={{ width: "100%", background: "#000", border: `1px solid #1c1c1c`, borderRadius: 12, padding: "14px 18px", color: "#fff", outline: "none", fontSize: 13, transition: "border-color 0.2s" }}
                onFocus={e => e.currentTarget.style.borderColor = "#ffffff"}
                onBlur={e => e.currentTarget.style.borderColor = "#1c1c1c"}
              />
            </motion.div>
            <motion.div variants={fadeUp}>
              <label style={{ display: "block", fontSize: 10, color: C.muted, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8, fontWeight: 500 }}>Email Address</label>
              <input
                className="contact-input"
                type="email"
                name="email"
                placeholder="[EMAIL_ADDRESS]"
                required
                style={{ width: "100%", background: "#000", border: `1px solid #1c1c1c`, borderRadius: 12, padding: "14px 18px", color: "#fff", outline: "none", fontSize: 13, transition: "border-color 0.2s" }}
                onFocus={e => e.currentTarget.style.borderColor = "#ffffff"}
                onBlur={e => e.currentTarget.style.borderColor = "#1c1c1c"}
              />
            </motion.div>
            <motion.div variants={fadeUp}>
              <label style={{ display: "block", fontSize: 10, color: C.muted, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8, fontWeight: 500 }}>Message</label>
              <textarea
                className="contact-input"
                name="message"
                placeholder="Your message here..."
                rows={4}
                required
                style={{ width: "100%", background: "#000", border: `1px solid #1c1c1c`, borderRadius: 12, padding: "14px 18px", color: "#fff", outline: "none", resize: "none", fontSize: 13, transition: "border-color 0.2s" }}
                onFocus={e => e.currentTarget.style.borderColor = "#ffffff"}
                onBlur={e => e.currentTarget.style.borderColor = "#1c1c1c"}
              />
            </motion.div>
            <motion.button
              type="submit"
              variants={fadeUp}
              style={{
                background: "#ffffff",
                color: "#000000",
                padding: "16px",
                borderRadius: 8,
                border: "none",
                fontSize: 14,
                fontWeight: 700,
                cursor: "pointer",
                transition: "background 0.2s",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                width: "100%",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "#e0e0e0";
                e.currentTarget.querySelector("span").style.transform = "translateX(4px)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "#ffffff";
                e.currentTarget.querySelector("span").style.transform = "translateX(0)";
              }}
            >
              Send Message <span style={{ transition: "transform 0.3s ease" }}>—→</span>
            </motion.button>
          </motion.form>
        </motion.div>

        {/* Right Column: Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24, width: "100%" }}>
          <motion.div variants={fadeUp} style={{ background: "#0d0d0d", borderRadius: 20, padding: 32, border: `1px solid #1c1c1c` }}>
            <div style={{ fontSize: 10, color: C.muted, textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: 20, display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ width: 12, height: 1, background: "#fff" }}></span> CONTACT INFO
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: "#000", display: "flex", alignItems: "center", justifyContent: "center", border: `1px solid #1c1c1c`, fontFamily: "monospace", fontSize: 13, color: "#888", letterSpacing: 0 }}>@</div>
                <div>
                  <div style={{ fontSize: 11, color: C.muted, marginBottom: 2 }}>Email</div>
                  <div style={{ fontSize: 14, color: C.text, fontWeight: 500 }}>neelpatil092@gmail.com</div>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: "#000", display: "flex", alignItems: "center", justifyContent: "center", border: `1px solid #1c1c1c`, fontFamily: "monospace", fontSize: 13, color: "#888" }}>IN</div>
                <div>
                  <div style={{ fontSize: 11, color: C.muted, marginBottom: 2 }}>Location</div>
                  <div style={{ fontSize: 14, color: C.text, fontWeight: 500 }}>Mumbai, India</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} style={{ background: "#0d0d0d", borderRadius: 20, padding: 32, border: `1px solid #1c1c1c` }}>
            <div style={{ fontSize: 10, color: C.muted, textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: 20, display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ width: 12, height: 1, background: "#fff" }}></span> AVAILABILITY
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#fff", fontSize: 14, fontWeight: 500, marginBottom: 12 }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#0099ff" }}></span>
              Open to opportunities
            </div>
            <p style={{ fontSize: 13, color: C.mutedLight, lineHeight: 1.6 }}>Available for internship and full-time roles starting soon.</p>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.footer variants={fadeUp} style={{ marginTop: isMobile ? 80 : 120 }}>
        {/* NEEL watermark + green dot together */}
        <div style={{
          position: "relative",
          overflow: "hidden",
          marginBottom: 0,
        }}>
          <span style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(60px, 18vw, 200px)",
            fontWeight: 900,
            color: "#ffffff",
            opacity: 0.05,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            userSelect: "none",
            display: "block",
            textAlign: "center",
            lineHeight: 0.85,
          }}>
            NEEL
          </span>

          {/* Green dot — bottom right of NEEL, like reference */}
          <motion.div
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ repeat: Infinity, duration: 3 }}
            style={{
              position: "absolute",
              bottom: isMobile ? 4 : 8,
              right: isMobile ? "8%" : "18%",
              width: isMobile ? 28 : 48,
              height: isMobile ? 28 : 48,
              borderRadius: "50%",
              background: "#7FFF00",
            }}
          />
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: "1px solid #1c1c1c",
          paddingTop: 20,
          paddingBottom: 20,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
        }}>
          <div style={{ fontSize: 11, color: "#333", fontFamily: "monospace" }}>
            © 2026 ARCHITECTED BY NEEL PATIL
          </div>
          <div style={{ fontSize: 11, color: "#333", fontFamily: "monospace" }}>
            MAHARASHTRA, INDIA
          </div>
        </div>
      </motion.footer>
    </motion.section>
  );
}
