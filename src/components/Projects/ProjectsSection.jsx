import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../../constants/data";
import { C } from "../../constants/designTokens";
import SectionHeader from "../SectionHeader";
import ProjectCard from "./ProjectCard";

import useIsMobile from "../../hooks/useIsMobile";

export default function ProjectsSection() {
  const isMobile = useIsMobile();
  const [activeIdx, setActiveIdx] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    setActiveIdx((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIdx((prev) => (prev - 1 + projects.length) % projects.length);
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
      <SectionHeader num="02 ──" title="Featured Projects" />

      <div
        style={{
          position: "relative",
          maxWidth: 900,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: isMobile ? 400 : 520,
        }}
      >
        {/* Navigation Buttons */}
        {!isMobile && (
          <>
            <div style={{ position: "absolute", left: -30, zIndex: 20 }}>
              <motion.button
                whileHover={{ scale: 1.1, backgroundColor: C.surfaceHigh }}
                whileTap={{ scale: 0.9 }}
                onClick={handlePrev}
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  background: `${C.surface}ee`,
                  backdropFilter: "blur(8px)",
                  border: `1px solid ${C.border}`,
                  color: C.text,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 20,
                  boxShadow: "0 8px 30px rgba(0,0,0,0.4)",
                }}
              >
                ‹
              </motion.button>
            </div>

            <div style={{ position: "absolute", right: -30, zIndex: 20 }}>
              <motion.button
                whileHover={{ scale: 1.1, backgroundColor: C.surfaceHigh }}
                whileTap={{ scale: 0.9 }}
                onClick={handleNext}
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  background: `${C.surface}ee`,
                  backdropFilter: "blur(8px)",
                  border: `1px solid ${C.border}`,
                  color: C.text,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 20,
                  boxShadow: "0 8px 30px rgba(0,0,0,0.4)",
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
                <div style={{
                  position: "absolute",
                  inset: "20%",
                  background: projects[activeIdx].gradFrom,
                  filter: "blur(80px)",
                  opacity: 0.1,
                  zIndex: -1,
                }} />
                <ProjectCard project={projects[activeIdx]} active={true} />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>

      {/* Navigation dots */}
      <div style={{ display: "flex", gap: 10, marginTop: 30, alignItems: "center", justifyContent: "center" }}>
        {projects.map((p, i) => (
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
              background: i === activeIdx ? `linear-gradient(90deg, ${p.gradFrom}, ${p.gradTo})` : C.border,
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s ease",
              padding: 0,
              opacity: i === activeIdx ? 1 : 0.4,
            }}
          />
        ))}
      </div>
    </section>
  );
}
