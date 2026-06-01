export const C = {
  bg: "#000000",
  surface: "#0d0d0d",
  border: "#1c1c1c",
  borderLight: "#2a2a2a",
  accent: "#ffffff",
  cyan: "#0099ff",        // blue accent — used for status dots, explore btn, section-label pill only
  text: "#ffffff",
  muted: "#888888",
  mutedLight: "#555555",
};

export const fadeUp = {
  hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
  visible: (i = 0) => ({
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { duration: 0.8, delay: i * 0.1, ease: "easeOut" },
  }),
};

export const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};
