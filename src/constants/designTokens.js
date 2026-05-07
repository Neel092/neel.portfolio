export const C = {
  bg: "#050505",
  surface: "#0a0a0a",
  surfaceHigh: "#121212",
  border: "rgba(255,255,255,0.06)",
  borderLight: "rgba(255,255,255,0.12)",
  accent: "#7c6fff",
  accent2: "#2dd4a0",
  accent3: "#f4a847",
  purple: "#b872f5",
  pink: "#f06292",
  cyan: "#38bdf8",
  text: "#eef0f8",
  muted: "#484870",
  mutedLight: "#7878a8",
};

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, delay: i * 0.11, ease: [0.22, 1, 0.36, 1] },
  }),
};

export const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};
