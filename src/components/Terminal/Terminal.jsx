import { motion } from "framer-motion";
import { C } from "../../constants/designTokens";
import StatusDot from "../StatusDot";

export default function Terminal() {
  const lines = [
    { prompt: true, text: "docker ps" },

    {
      prompt: false,
      text: "CONTAINER   ID         NAME                STATUS",
      color: C.muted,
    },

    {
      prompt: false,
      text: "7f3a91          dreams               running",
      color: C.accent2,
    },

    {
      prompt: false,
      text: "2bc91d         dsa_grind            running",
      color: C.accent,
    },

    {
      prompt: false,
      text: "91af21         sleep_schedule       exited (137)",
      color: "#ff6b6b",
    },

    {
      prompt: true,
      text: "ssh future@neel",
    },

    {
      prompt: false,
      text: "password: ********",
      color: C.muted,
    },

    {
      prompt: false,
      text: "access granted.",
      color: C.accent2,
    },

    {
      prompt: false,
      text: "still far from the final version of yourself.",
      color: C.accent,
    },

    {
      prompt: true,
      text: "continue building...",
      cursor: true,
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.1, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
      style={{
        background: C.surface,
        border: `1px solid ${C.border}`,
        borderRadius: 14,
        overflow: "hidden",
        width: "min(420px, 100%)",
        flexShrink: 0,
        boxShadow: `0 40px 100px rgba(0,0,0,0.7), 0 0 0 1px ${C.accent}0c`,
      }}
    >
      {/* Title bar */}
      <div
        style={{
          background: "#06061460",
          padding: "10px 16px",
          borderBottom: `1px solid ${C.border}`,
          display: "flex",
          alignItems: "center",
          gap: 7,
        }}
      >
        {["#ff5f57", "#ffbd2e", "#28ca41"].map((c, i) => (
          <div
            key={i}
            style={{ width: 10, height: 10, borderRadius: "50%", background: c }}
          />
        ))}
        <span
          style={{
            marginLeft: 10,
            fontFamily: "monospace",
            fontSize: 11,
            color: C.muted,
          }}
        >
          bash — production
        </span>
        <div style={{ flex: 1 }} />
        <StatusDot color={C.accent2} />
      </div>
      {/* Lines */}
      <div
        style={{
          padding: "18px 20px",
          fontFamily: "monospace",
          fontSize: 12.5,
          lineHeight: 2.1,
        }}
      >
        {lines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4 + i * 0.18, duration: 0.38 }}
            style={{ display: "flex", gap: 10 }}
          >
            {line.prompt ? (
              <span style={{ color: C.accent, userSelect: "none" }}>❯</span>
            ) : (
              <span style={{ width: 14 }} />
            )}
            <span
              style={{
                color: line.prompt ? C.text : line.color || C.mutedLight,
              }}
            >
              {line.text}
              {line.cursor && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.75 }}
                  style={{
                    display: "inline-block",
                    width: 7,
                    height: 14,
                    background: C.accent,
                    marginLeft: 4,
                    verticalAlign: "middle",
                    borderRadius: 1,
                  }}
                />
              )}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
