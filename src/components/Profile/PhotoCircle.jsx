import { motion } from "framer-motion";
import { C } from "../../constants/designTokens";
import StatusDot from "../StatusDot";

export default function PhotoCircle() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      style={{ position: "relative", flexShrink: 0 }}
    >
      {/* Spinning dashed ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 16, ease: "linear" }}
        style={{
          position: "absolute",
          inset: -10,
          borderRadius: "50%",
          border: `1.5px dashed ${C.accent}28`,
        }}
      />
      {/* Counter-spin ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
        style={{
          position: "absolute",
          inset: -22,
          borderRadius: "50%",
          border: `1px dashed ${C.purple}18`,
        }}
      />
      {/* Conic gradient border */}
      <div
        style={{
          width: 152,
          height: 152,
          borderRadius: "50%",
          padding: 3,
          background: `conic-gradient(from 0deg, ${C.accent}, ${C.purple}, ${C.accent2}, ${C.accent3}, ${C.accent})`,
          boxShadow: `0 0 60px ${C.accent}2a, 0 0 110px ${C.purple}12`,
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            background: C.surface,
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* ← Replace with: <img src="photo.jpg" style={{width:"100%",height:"100%",objectFit:"cover"}} /> */}
          <div
            style={{
              width: "100%",
              height: "100%",
              background: `radial-gradient(circle at 38% 36%, ${C.accent}22, ${C.purple}18, transparent)`,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 6,
            }}
          >
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: "50%",
                background: `linear-gradient(135deg, ${C.accent}44, ${C.purple}44)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 26,
              }}
            >
              👤
            </div>
            <span
              style={{
                fontFamily: "monospace",
                fontSize: 8,
                color: C.muted,
                letterSpacing: "0.1em",
              }}
            >
              <img src="./src/components/Profile/Profile_Photo.jpeg" style={{ width: "100%", height: "100%", objectFit: "cover" }}></img>
            </span>
          </div>
        </div>
      </div>
      {/* Open to work badge */}
      <div
        style={{
          position: "absolute",
          bottom: 4,
          right: -18,
          background: C.surfaceHigh,
          border: `1px solid ${C.borderLight}`,
          borderRadius: 20,
          padding: "5px 11px",
          display: "flex",
          alignItems: "center",
          gap: 6,
          fontFamily: "monospace",
          fontSize: 9,
          color: C.accent2,
          whiteSpace: "nowrap",
          boxShadow: `0 4px 20px ${C.accent2}18`,
        }}
      >
        <StatusDot color={C.accent2} />
        Open to Intern
      </div>
    </motion.div>
  );
}
