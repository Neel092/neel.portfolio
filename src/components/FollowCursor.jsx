import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { C } from "../constants/designTokens";

export default function FollowCursor() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [pressing, setPressing] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const onTouchMove = (e) => {
      const t = e.touches[0];
      setPos({ x: t.clientX, y: t.clientY });
      setVisible(true);
    };
    const onDown = () => setPressing(true);
    const onUp = () => setPressing(false);
    const onLeave = () => setVisible(false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchstart", onDown, { passive: true });
    window.addEventListener("touchend", onUp);
    document.body.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchstart", onDown);
      window.removeEventListener("touchend", onUp);
      document.body.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      {/* Dot — snappy */}
      <motion.div
        animate={{ x: pos.x - 4, y: pos.y - 4, scale: pressing ? 0.5 : 1 }}
        transition={{ type: "spring", stiffness: 900, damping: 28, mass: 0.4 }}
        style={{
          position: "fixed",
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: C.accent,
          pointerEvents: "none",
          zIndex: 9999,
          mixBlendMode: "screen",
        }}
      />
      {/* Ring — lags slightly */}
      <motion.div
        animate={{
          x: pos.x - 18,
          y: pos.y - 18,
          scale: pressing ? 0.75 : 1,
          opacity: pressing ? 0.85 : 0.5,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 24, mass: 0.8 }}
        style={{
          position: "fixed",
          width: 36,
          height: 36,
          borderRadius: "50%",
          border: `1.5px solid ${C.accent}`,
          pointerEvents: "none",
          zIndex: 9998,
        }}
      />
    </>
  );
}
