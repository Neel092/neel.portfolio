import { motion } from "framer-motion";

export default function StatusDot({ color }) {
  return (
    <motion.span
      animate={{ opacity: [1, 0.25, 1] }}
      transition={{ repeat: Infinity, duration: 2.2 }}
      style={{
        width: 6,
        height: 6,
        borderRadius: "50%",
        background: color,
        display: "inline-block",
        flexShrink: 0,
      }}
    />
  );
}
