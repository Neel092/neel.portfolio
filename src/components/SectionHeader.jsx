import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { C, fadeUp, stagger } from "../constants/designTokens";

export default function SectionHeader({ num, title }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={stagger}
      style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 56 }}
    >
      <motion.span
        variants={fadeUp}
        style={{
          fontFamily: "monospace",
          fontSize: 11,
          color: C.accent,
          letterSpacing: "0.18em",
          opacity: 0.65,
        }}
      >
        {num}
      </motion.span>
      <motion.h2
        variants={fadeUp}
        style={{
          fontSize: "clamp(1.7rem, 4vw, 2.5rem)",
          fontWeight: 900,
          letterSpacing: "-0.03em",
          color: C.text,
          margin: 0,
        }}
      >
        {title}
      </motion.h2>
      <motion.div
        variants={fadeUp}
        style={{
          flex: 1,
          height: 1,
          background: `linear-gradient(90deg, ${C.borderLight}, transparent)`,
          maxWidth: 180,
        }}
      />
    </motion.div>
  );
}
