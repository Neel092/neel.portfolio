import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { C } from "../../constants/designTokens";
import StatusDot from "../StatusDot";
import useIsMobile from "../../hooks/useIsMobile";

export default function ProjectCard({ project, active }) {
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!active) setOpen(false);
  }, [active]);

  return (
    <motion.div
      whileHover={{ 
        scale: 1.02, 
        borderColor: "#ffffff",
        background: `linear-gradient(165deg, #141414 0%, #0d0d0d 100%)`
      }}
      animate={{
        scale: isMobile ? 1 : (active ? 1 : 0.9),
        opacity: isMobile ? 1 : (active ? 1 : 0.35)
      }}
      transition={{ duration: 0.3 }}
      style={{
        width: "100%",
        minHeight: isMobile ? 400 : 480,
        background: `linear-gradient(165deg, #0d0d0d 0%, #000 100%)`,
        borderRadius: isMobile ? 16 : 24,
        border: active ? "1px solid rgba(255,255,255,0.15)" : "1px solid #1c1c1c",
        borderTop: active ? "1px solid rgba(255,255,255,0.4)" : "1px solid #1c1c1c",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      {/* Large background number for depth */}
      {!isMobile && (
        <div
          style={{
            position: "absolute",
            top: -20,
            right: 20,
            fontSize: "16rem",
            fontWeight: 900,
            color: "#ffffff",
            opacity: 0.03,
            pointerEvents: "none",
            userSelect: "none",
            lineHeight: 1,
          }}
        >
          {project.num}
        </div>
      )}

      {/* Gradient header strip */}
      <div
        style={{
          height: 4,
          background: "#ffffff",
        }}
      />

      {/* Body */}
      <div style={{
        padding: isMobile ? "24px 20px" : "48px 48px 40px",
        flex: 1,
        display: "flex",
        flexDirection: "column",
        position: "relative",
        zIndex: 1
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 20,
              padding: "4px 14px",
            }}
          >
            <StatusDot color={project.statusColor} />
            <span
              style={{
                fontFamily: "monospace",
                fontSize: 10,
                color: "#888",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              {project.status}
            </span>
          </div>
          <span
            style={{
              fontFamily: "monospace",
              fontSize: 12,
              color: "#333",
              letterSpacing: "0.2em",
            }}
          >
            PRJ // {project.num}
          </span>
        </div>

        <h3
          style={{
            fontSize: isMobile ? "1.8rem" : "clamp(2rem, 5vw, 3rem)",
            fontWeight: 900,
            color: "#fff",
            letterSpacing: "-0.04em",
            marginBottom: 8,
            lineHeight: 1.1,
          }}
        >
          {project.name}
        </h3>
        <p
          style={{
            fontFamily: "monospace",
            fontSize: 13,
            color: "#555",
            marginBottom: 24,
            letterSpacing: "0.05em",
            opacity: 0.8,
          }}
        >
          {project.subtitle}
        </p>

        <div style={{
          display: "flex",
          gap: isMobile ? 32 : 60,
          flexWrap: "wrap",
          marginBottom: isMobile ? 24 : 40
        }}>
          <div style={{ flex: "1 1 300px" }}>
            <p style={{ fontSize: isMobile ? 14 : 16, color: C.mutedLight, lineHeight: 1.7, marginBottom: 24 }}>
              {project.desc}
            </p>
            {/* Expand detail */}
            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  style={{
                    overflow: "hidden",
                    background: "#0d0d0d",
                    borderLeft: `2px solid #fff`,
                    padding: "16px 20px",
                    marginBottom: 24,
                    fontSize: 14,
                    color: C.muted,
                    lineHeight: 1.8,
                  }}
                >
                  {project.detail}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div style={{ flex: isMobile ? "1 1 100%" : "0 0 240px" }}>
            <div style={{ marginBottom: 24 }}>
              <div style={{ fontSize: 10, color: C.muted, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 12 }}>Highlights</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {project.highlights.map((h) => (
                  <span key={h} style={{ fontSize: 11, color: C.text, display: "flex", alignItems: "center", gap: 6 }}>
                    <span style={{ color: "#fff" }}>•</span> {h}
                  </span>
                ))}
              </div>
            </div>

            {project.futureGoals && (
              <div style={{ marginBottom: 24 }}>
                <div style={{ fontSize: 10, color: C.muted, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 12 }}>Roadmap</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {project.futureGoals.map((goal) => (
                    <span key={goal} style={{ fontSize: 11, color: "#555", display: "flex", alignItems: "center", gap: 6, fontWeight: 500 }}>
                      <span style={{ opacity: 0.5 }}>→</span> {goal}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div>
              <div style={{ fontSize: 10, color: C.muted, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 12 }}>Tech</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {project.tech.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontFamily: "monospace",
                      fontSize: 11,
                      padding: "4px 10px",
                      background: "transparent",
                      border: "none",
                      borderBottom: `1px solid #2a2a2a`,
                      borderRadius: 0,
                      color: "#555",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", gap: 12, marginTop: "auto", flexWrap: "wrap", justifyContent: isMobile ? "stretch" : "center" }}>
          <button
            onClick={() => setOpen((v) => !v)}
            style={{
              padding: isMobile ? "10px 16px" : "12px 24px",
              borderRadius: 12,
              border: `1px solid #1c1c1c`,
              background: "#0d0d0d",
              color: "#888",
              fontFamily: "monospace",
              fontSize: 11,
              cursor: "pointer",
              transition: "all 0.2s",
              flex: isMobile ? 1 : "initial"
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#ffffff")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#1c1c1c")}
          >
            {open ? "[-] Close" : "[+] Details"}
          </button>
          <a
            href={project.github}
            style={{
              padding: isMobile ? "10px 16px" : "12px 24px",
              borderRadius: 12,
              background: "#ffffff",
              color: "#000000",
              fontFamily: "monospace",
              fontSize: 11,
              fontWeight: 500,
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              flex: isMobile ? 1 : "initial"
            }}
          >
            ⌥ Code
          </a>
          {project.live && (
            <a
              href={project.live}
              style={{
                padding: isMobile ? "10px 16px" : "12px 24px",
                borderRadius: 12,
                border: `1px solid #2a2a2a`,
                background: "transparent",
                color: "#888",
                fontFamily: "monospace",
                fontSize: 11,
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                flex: isMobile ? "1 1 100%" : "initial"
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#fff"; e.currentTarget.style.color = "#fff"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#2a2a2a"; e.currentTarget.style.color = "#888"; }}
            >
              ↗ Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
