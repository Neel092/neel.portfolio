import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { C, fadeUp, stagger } from "../../constants/designTokens";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.section
      ref={ref}
      id="contact"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={stagger}
      style={{ padding: "120px 0 60px", maxWidth: 1200, margin: "0 auto" }}
    >
      <div style={{ textAlign: "center", marginBottom: 80 }}>
        <motion.h2
          variants={fadeUp}
          style={{
            fontSize: "clamp(2.4rem, 7vw, 4.8rem)",
            fontWeight: 900,
            color: C.text,
            letterSpacing: "-0.04em",
            marginBottom: 20,
          }}
        >
          Let's{" "}
          <span style={{
            background: `linear-gradient(135deg, ${C.accent}, ${C.purple})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>Connect</span>
        </motion.h2>
        <motion.p variants={fadeUp} style={{ color: C.muted, maxWidth: 600, margin: "0 auto", fontSize: 17, lineHeight: 1.6, opacity: 0.8 }}>
          Whether you have a project in mind, a question, or just want to say hello — I'm always happy to connect.
        </motion.p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr 1fr", gap: 48, alignItems: "flex-start" }}>

        {/* Left Column: Bio & Navigation */}
        <motion.div variants={fadeUp} style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          <div>
            <h3 style={{ fontSize: 28, fontWeight: 900, color: C.text, marginBottom: 12, letterSpacing: "-0.02em" }}>Neel Patil</h3>
            <p style={{ color: C.mutedLight, fontSize: 14, lineHeight: 1.6, marginBottom: 20 }}>
              Backend & DevOps engineer focused on building high-performance, scalable distributed systems.
            </p>
          </div>

          <div>
            <div style={{ fontSize: 10, color: C.muted, textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: 16, display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ width: 20, height: 1, background: C.accent }}></span> NAVIGATION
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {["Home", "Skills", "Projects"].map(link => (
                <a key={link} href={`#${link.toLowerCase()}`} style={{ color: C.muted, textDecoration: "none", fontSize: 13, display: "flex", alignItems: "center", gap: 12, transition: "color 0.2s" }} onMouseEnter={e => e.currentTarget.style.color = C.text} onMouseLeave={e => e.currentTarget.style.color = C.muted}>
                  <span style={{ fontSize: 10, opacity: 0.3 }}>——</span> {link}
                </a>
              ))}
            </div>
          </div>


          <div>
            <div
              style={{
                fontSize: 10,
                color: C.muted,
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                marginBottom: 16,
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <span
                style={{
                  width: 20,
                  height: 1,
                  background: C.purple,
                }}
              ></span>
              CONNECT
            </div>

            <div>
              <div
                style={{
                  fontSize: 10,
                  color: C.muted,
                  textTransform: "uppercase",
                  letterSpacing: "0.2em",
                  marginBottom: 16,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
              </div>
              <div style={{ display: "flex", gap: 10 }}>
                {[
                  {
                    name: "github",
                    link: "https://github.com/Neel092",
                  },
                  {
                    name: "linkedin",
                    link: "https://www.linkedin.com/in/neel-patil-56bbb6334/",
                  },
                  {
                    name: "instagram",
                    link: "https://www.instagram.com/_neelpatil_07/",
                  },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 10,
                      background: C.surface,
                      border: `1px solid ${C.border}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 16,
                      color: C.muted,
                      transition: "all 0.2s",
                      textDecoration: "none",
                      fontFamily: "monospace",
                      fontWeight: 700,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = C.accent;
                      e.currentTarget.style.color = C.text;
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = C.border;
                      e.currentTarget.style.color = C.muted;
                      e.currentTarget.style.transform = "translateY(0px)";
                    }}
                  >
                    {social.name[0].toUpperCase()}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Center: Message Form Card */}
        <motion.div variants={fadeUp} style={{ background: C.surface, borderRadius: 24, padding: "36px 40px", border: `1px solid ${C.border}`, boxShadow: "0 20px 80px rgba(0,0,0,0.3)" }}>
          <h3 style={{ fontSize: 24, fontWeight: 800, marginBottom: 8, color: C.text }}>Send a Message</h3>
          <p style={{ color: C.muted, fontSize: 13, marginBottom: 32, opacity: 0.7 }}>I'll get back to you within 24 hours</p>

          <form
            action="https://formsubmit.co/neelpatil092@gmail.com"
            method="POST"
            style={{ display: "flex", flexDirection: "column", gap: 20 }}
          >
            {/* FormSubmit Honeypot/Config */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="New Portfolio Message!" />

            <div>
              <label style={{ display: "block", fontSize: 10, color: C.muted, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8, fontWeight: 700 }}>Your Name</label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                required
                style={{ width: "100%", background: C.bg, border: `1px solid ${C.border}`, borderRadius: 12, padding: "14px 18px", color: C.text, outline: "none", fontSize: 13 }}
              />
            </div>
            <div>
              <label style={{ display: "block", fontSize: 10, color: C.muted, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8, fontWeight: 700 }}>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="john@example.com"
                required
                style={{ width: "100%", background: C.bg, border: `1px solid ${C.border}`, borderRadius: 12, padding: "14px 18px", color: C.text, outline: "none", fontSize: 13 }}
              />
            </div>
            <div>
              <label style={{ display: "block", fontSize: 10, color: C.muted, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8, fontWeight: 700 }}>Message</label>
              <textarea
                name="message"
                placeholder="Your message here..."
                rows={4}
                required
                style={{ width: "100%", background: C.bg, border: `1px solid ${C.border}`, borderRadius: 12, padding: "14px 18px", color: C.text, outline: "none", resize: "none", fontSize: 13 }}
              />
            </div>
            <button
              type="submit"
              style={{
                background: `linear-gradient(135deg, ${C.accent}, ${C.purple})`,
                color: C.text,
                padding: "16px",
                borderRadius: 12,
                border: "none",
                fontSize: 14,
                fontWeight: 800,
                cursor: "pointer",
                boxShadow: `0 10px 40px ${C.accent}44`,
                transition: "transform 0.2s"
              }}
              onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
              onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
            >
              Send Message —→
            </button>
          </form>
        </motion.div>

        {/* Right Column: Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <motion.div variants={fadeUp} style={{ background: C.surface, borderRadius: 20, padding: 32, border: `1px solid ${C.border}` }}>
            <div style={{ fontSize: 10, color: C.muted, textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: 20, display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ width: 12, height: 1, background: C.accent }}></span> CONTACT INFO
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: C.bg, display: "flex", alignItems: "center", justifyContent: "center", border: `1px solid ${C.border}`, fontSize: 20 }}>✉</div>
                <div>
                  <div style={{ fontSize: 11, color: C.muted, marginBottom: 2 }}>Email</div>
                  <div style={{ fontSize: 14, color: C.text, fontWeight: 500 }}>neelpatil092@gmail.com</div>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: C.bg, display: "flex", alignItems: "center", justifyContent: "center", border: `1px solid ${C.border}`, fontSize: 20 }}>📍</div>
                <div>
                  <div style={{ fontSize: 11, color: C.muted, marginBottom: 2 }}>Location</div>
                  <div style={{ fontSize: 14, color: C.text, fontWeight: 500 }}>Mumbai, India</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} style={{ background: C.surface, borderRadius: 20, padding: 32, border: `1px solid ${C.border}` }}>
            <div style={{ fontSize: 10, color: C.muted, textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: 20, display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ width: 12, height: 1, background: C.purple }}></span> AVAILABILITY
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, color: C.accent, fontSize: 14, fontWeight: 700, marginBottom: 12 }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: C.accent, boxShadow: `0 0 10px ${C.accent}` }}></span>
              Open to opportunities
            </div>
            <p style={{ fontSize: 13, color: C.mutedLight, lineHeight: 1.6 }}>Available for internship and full-time roles starting soon.</p>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.footer variants={fadeUp} style={{ marginTop: 120, paddingTop: 40, borderTop: `1px solid ${C.border}`, display: "flex", justifyContent: "space-between", alignItems: "center", opacity: 0.6 }}>
        <div style={{ fontSize: 12, color: C.muted, fontFamily: "monospace" }}>
          © 2026 Neel Patil.   // still building.
        </div>
        <div style={{ display: "flex", gap: 20, fontSize: 11, fontFamily: "monospace", color: C.muted }}>
          <span style={{ color: C.accent }}>v2.0.0</span>
          <span>•</span>
          <span>build • break • learn • repeat</span>
        </div>
      </motion.footer>
    </motion.section>
  );
}
