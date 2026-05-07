import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { C } from "../../constants/designTokens";
import StatusDot from "../StatusDot";

export default function ProjectCard({ project, active }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!active) setOpen(false);
  }, [active]);

  return (
    <motion.div
      animate={{ scale: active ? 1 : 0.9, opacity: active ? 1 : 0.35 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      style={{
        width: "100%",
        minHeight: 480,
        background: C.surface,
        borderRadius: 24,
        border: `1px solid ${active ? project.gradFrom + "40" : C.border}`,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        boxShadow: active ? `0 24px 80px ${project.gradFrom}15` : "none",
        transition: "border-color 0.4s, box-shadow 0.4s",
      }}
    >
      {/* Large background number for depth */}
      <div
        style={{
          position: "absolute",
          top: -20,
          right: 20,
          fontSize: "16rem",
          fontWeight: 900,
          color: project.gradFrom,
          opacity: 0.04,
          pointerEvents: "none",
          userSelect: "none",
          lineHeight: 1,
        }}
      >
        {project.num}
      </div>

      {/* Gradient header strip */}
      <div
        style={{
          height: 4,
          background: `linear-gradient(90deg, ${project.gradFrom}, ${project.gradTo})`,
        }}
      />

      {/* Body */}
      <div style={{ padding: "48px 48px 40px", flex: 1, display: "flex", flexDirection: "column", position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              background: project.statusColor + "14",
              border: `1px solid ${project.statusColor}30`,
              borderRadius: 20,
              padding: "4px 14px",
            }}
          >
            <StatusDot color={project.statusColor} />
            <span
              style={{
                fontFamily: "monospace",
                fontSize: 10,
                color: project.statusColor,
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
              color: C.muted,
              letterSpacing: "0.2em",
            }}
          >
            PROJECT // {project.num}
          </span>
        </div>

        <h3
          style={{
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 900,
            color: C.text,
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
            color: project.gradFrom,
            marginBottom: 24,
            letterSpacing: "0.05em",
            opacity: 0.8,
          }}
        >
          {project.subtitle}
        </p>

        <div style={{ display: "flex", gap: 60, flexWrap: "wrap", marginBottom: 40 }}>
          <div style={{ flex: "1 1 300px" }}>
            <p style={{ fontSize: 16, color: C.mutedLight, lineHeight: 1.7, marginBottom: 24 }}>
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
                    background: C.surfaceHigh,
                    borderLeft: `2px solid ${project.gradFrom}`,
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

          <div style={{ flex: "0 0 240px" }}>
            <div style={{ marginBottom: 24 }}>
              <div style={{ fontSize: 10, color: C.muted, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 12 }}>Highlights</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {project.highlights.map((h) => (
                  <span key={h} style={{ fontSize: 11, color: C.text, display: "flex", alignItems: "center", gap: 6 }}>
                    <span style={{ color: project.gradFrom }}>•</span> {h}
                  </span>
                ))}
              </div>
            </div>

            {project.futureGoals && (
              <div style={{ marginBottom: 24 }}>
                <div style={{ fontSize: 10, color: C.muted, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 12 }}>Future Roadmap</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {project.futureGoals.map((goal) => (
                    <span key={goal} style={{ fontSize: 11, color: project.gradFrom, display: "flex", alignItems: "center", gap: 6, fontWeight: 600 }}>
                      <span style={{ opacity: 0.5 }}>→</span> {goal}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div>
              <div style={{ fontSize: 10, color: C.muted, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 12 }}>Tech Stack</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {project.tech.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontFamily: "monospace",
                      fontSize: 11,
                      padding: "4px 10px",
                      background: C.bg,
                      border: `1px solid ${C.borderLight}`,
                      borderRadius: 6,
                      color: C.muted,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", gap: 16, marginTop: "auto" }}>
          <button
            onClick={() => setOpen((v) => !v)}
            style={{
              padding: "12px 24px",
              borderRadius: 12,
              border: `1px solid ${C.border}`,
              background: C.surfaceHigh,
              color: C.text,
              fontFamily: "monospace",
              fontSize: 12,
              cursor: "pointer",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = project.gradFrom)}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = C.border)}
          >
            {open ? "[-] Close Details" : "[+] Full Documentation"}
          </button>
          <a
            href={project.github}
            style={{
              padding: "12px 24px",
              borderRadius: 12,
              background: `linear-gradient(135deg, ${project.gradFrom}, ${project.gradTo})`,
              color: C.text,
              fontFamily: "monospace",
              fontSize: 12,
              fontWeight: 700,
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: 8,
              boxShadow: `0 8px 24px ${project.gradFrom}33`,
            }}
          >
            ⌥ Source Code
          </a>
          {project.live && (
            <a
              href={project.live}
              style={{
                padding: "12px 24px",
                borderRadius: 12,
                border: `1px solid ${project.gradTo}40`,
                background: "transparent",
                color: project.gradTo,
                fontFamily: "monospace",
                fontSize: 12,
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              ↗ View Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
