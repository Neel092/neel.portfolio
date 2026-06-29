import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../../constants/data";
import { C } from "../../constants/designTokens";

import ProjectCard from "./ProjectCard";

import useIsMobile from "../../hooks/useIsMobile";

export default function ProjectsSection() {
  const isMobile = useIsMobile();
  const [activeIdx, setActiveIdx] = useState(0);
  const [direction, setDirection] = useState(0);
  const [filter, setFilter] = useState("All");

  const filteredProjects = projects.filter(p => filter === "All" || p.category === filter);

  useEffect(() => {
    setActiveIdx(0);
    setDirection(0);
  }, [filter]);

  const handleNext = () => {
    if (filteredProjects.length === 0) return;
    setDirection(1);
    setActiveIdx((prev) => (prev + 1) % filteredProjects.length);
  };

  const handlePrev = () => {
    if (filteredProjects.length === 0) return;
    setDirection(-1);
    setActiveIdx((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      filter: "blur(10px)",
      scale: 0.95,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
      scale: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      filter: "blur(10px)",
      scale: 0.95,
    }),
  };

  return (
    <section style={{ marginBottom: isMobile ? 80 : 160, position: "relative" }}>
      <div style={{ marginBottom: 56 }}>
        <div style={{
          display: "flex", alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap", gap: 20, marginBottom: 8
        }}>
          <h1 style={{
            fontSize: isMobile ? "2.8rem" : "clamp(3.5rem, 8vw, 6rem)",
            fontWeight: 900, color: "#ffffff",
            letterSpacing: "-0.02em", margin: 0,
            textTransform: "uppercase"
          }}>
            WORKS
          </h1>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ffffff" }} />
            <span style={{
              background: "#0099ff", color: "#ffffff",
              padding: "8px 24px", borderRadius: 4,
              fontFamily: "monospace", fontSize: 11,
              fontWeight: 600, letterSpacing: "0.12em",
              textTransform: "uppercase"
            }}>EXPLORE</span>
          </div>
        </div>
        <p style={{ fontSize: 14, color: "#555", maxWidth: 500, margin: 0 }}>
          Robust architecture. Scalable deployments. High-performance systems. The proof is in our projects.
        </p>

        {/* Filter Bar */}
        <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
          {["All", "Backend", "Frontend", "Fullstack", "Mobile"].map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                background: filter === cat ? "#ffffff" : "transparent",
                color: filter === cat ? "#000000" : "#aaaaaa",
                border: `1px solid ${filter === cat ? "#ffffff" : "#333333"}`,
                padding: "8px 20px",
                borderRadius: 20,
                fontSize: 12,
                fontFamily: "monospace",
                textTransform: "uppercase",
                cursor: "pointer",
                transition: "all 0.2s"
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div
        style={{
          position: "relative",
          maxWidth: 900,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: isMobile ? 600 : 520,
        }}
      >
        {/* Navigation Buttons */}
        {!isMobile && (
          <>
            <div style={{ position: "absolute", left: -30, zIndex: 20, top: "50%", transform: "translateY(-50%)" }}>
              <motion.button
                whileHover={{ scale: 1.1, backgroundColor: "#1a1a1a" }}
                whileTap={{ scale: 0.9 }}
                onClick={handlePrev}
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  background: "#0d0d0d",
                  backdropFilter: "blur(8px)",
                  border: "1px solid #1c1c1c",
                  color: "#fff",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 20,
                }}
              >
                ‹
              </motion.button>
            </div>

            <div style={{ position: "absolute", right: -30, zIndex: 20, top: "50%", transform: "translateY(-50%)" }}>
              <motion.button
                whileHover={{ scale: 1.1, backgroundColor: "#1a1a1a" }}
                whileTap={{ scale: 0.9 }}
                onClick={handleNext}
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  background: "#0d0d0d",
                  backdropFilter: "blur(8px)",
                  border: "1px solid #1c1c1c",
                  color: "#fff",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 20,
                }}
              >
                ›
              </motion.button>
            </div>
          </>
        )}

        {/* Card Container */}
        <div style={{
          width: "100%",
          maxWidth: 840,
          position: "relative",
          touchAction: isMobile ? "pan-y" : "none"
        }}>

          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={activeIdx}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = offset.x;
                if (swipe < -100) {
                  handleNext();
                } else if (swipe > 100) {
                  handlePrev();
                }
              }}
              transition={{
                x: { type: "spring", stiffness: 260, damping: 28 },
                opacity: { duration: 0.25 },
                filter: { duration: 0.25 }
              }}
              style={{ width: "100%", cursor: isMobile ? "default" : "grab" }}
              whileTap={{ cursor: isMobile ? "default" : "grabbing" }}
            >
              <div style={{ position: "relative", padding: isMobile ? "0" : "10px" }}>
                {filteredProjects.length > 0 ? (
                  <ProjectCard project={filteredProjects[activeIdx] || filteredProjects[0]} active={true} />
                ) : (
                  <div style={{ padding: 40, textAlign: "center", color: "#888", border: "1px dashed #333", borderRadius: 16 }}>
                    No projects found for this category.
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>

      {/* Navigation for Mobile & Dots */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 20,
        marginTop: 40
      }}>
        {isMobile && (
          <div style={{ display: "flex", gap: 16 }}>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={handlePrev}
              style={{
                padding: "12px 24px",
                borderRadius: 12,
                background: "#1a1a1a",
                border: "1px solid #1c1c1c",
                color: C.text,
                fontSize: 14,
                fontFamily: "monospace"
              }}
            >
              ← Prev
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
              style={{
                padding: "12px 24px",
                borderRadius: 12,
                background: "#ffffff",
                border: "none",
                color: "#000000",
                fontSize: 14,
                fontFamily: "monospace",
                fontWeight: "bold",
              }}
            >
              Next →
            </motion.button>
          </div>
        )}

        <div style={{ display: "flex", gap: 10, alignItems: "center", justifyContent: "center", height: 20 }}>
          {filteredProjects.map((p, i) => (
            <button
              key={p.id}
              onClick={() => {
                setDirection(i > activeIdx ? 1 : -1);
                setActiveIdx(i);
              }}
              style={{
                width: i === activeIdx ? 32 : 8,
                height: 6,
                borderRadius: 3,
                background: i === activeIdx ? "#ffffff" : "#2a2a2a",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                padding: 0,
                opacity: i === activeIdx ? 1 : 0.4,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
