import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function FollowCursor() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [pressing, setPressing] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
      
      const target = e.target;
      const isClickable = target.closest("a") || target.closest("button") || target.tagName.toLowerCase() === "button";
      setHovering(!!isClickable);
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
        animate={{ 
          x: pos.x - 4, 
          y: pos.y - 4, 
          scale: pressing ? 0.5 : (hovering ? 0 : 1),
          opacity: hovering ? 0 : 1
        }}
        transition={{ type: "spring", stiffness: 900, damping: 28, mass: 0.4 }}
        style={{
          position: "fixed",
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: "#fff",
          pointerEvents: "none",
          zIndex: 9999,
          mixBlendMode: "screen",
        }}
      />
      {/* Ring — lags slightly */}
      <motion.div
        animate={{
          x: pos.x - (hovering ? 24 : 18),
          y: pos.y - (hovering ? 24 : 18),
          scale: pressing ? 0.75 : 1,
          opacity: pressing ? 0.85 : 0.5,
          borderColor: hovering ? "#0099ff" : "#fff",
          background: hovering ? "rgba(0,153,255,0.1)" : "transparent"
        }}
        transition={{ type: "spring", stiffness: 150, damping: 20, mass: 0.6 }}
        style={{
          position: "fixed",
          width: hovering ? 48 : 36,
          height: hovering ? 48 : 36,
          borderRadius: "50%",
          border: "1.5px solid #ffffff",
          pointerEvents: "none",
          zIndex: 9998,
        }}
      />
    </>
  );
}
