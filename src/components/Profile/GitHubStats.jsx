import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function GitHubStats() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.github.com/users/Neel092')
      .then(res => res.json())
      .then(data => {
        setStats({
          repos: data.public_repos,
          followers: data.followers,
          following: data.following
        });
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  if (loading || !stats) {
    return (
      <div style={{ marginTop: 48 }}>
        <div style={{ fontSize: 10, textTransform: "uppercase", color: "#444", marginBottom: 12 }}>GitHub Stats</div>
        <div style={{ height: 100, background: "#0d0d0d", border: "1px solid #1c1c1c", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", color: "#555", fontFamily: "monospace" }}>Loading...</div>
      </div>
    );
  }

  return (
    <div style={{ marginTop: 48 }}>
      <div style={{ fontSize: 10, textTransform: "uppercase", color: "#444", marginBottom: 12 }}>GitHub Stats</div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ background: "#0d0d0d", border: "1px solid #1c1c1c", borderRadius: 12, padding: "16px", textAlign: "center" }}
        >
          <div style={{ fontSize: 24, fontWeight: 700, color: "#fff", marginBottom: 4 }}>{stats.repos}</div>
          <div style={{ fontSize: 10, textTransform: "uppercase", color: "#888", fontFamily: "monospace" }}>Repos</div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          style={{ background: "#0d0d0d", border: "1px solid #1c1c1c", borderRadius: 12, padding: "16px", textAlign: "center" }}
        >
          <div style={{ fontSize: 24, fontWeight: 700, color: "#fff", marginBottom: 4 }}>{stats.followers}</div>
          <div style={{ fontSize: 10, textTransform: "uppercase", color: "#888", fontFamily: "monospace" }}>Followers</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          style={{ background: "#0d0d0d", border: "1px solid #1c1c1c", borderRadius: 12, padding: "16px", textAlign: "center" }}
        >
          <div style={{ fontSize: 24, fontWeight: 700, color: "#fff", marginBottom: 4 }}>{stats.following}</div>
          <div style={{ fontSize: 10, textTransform: "uppercase", color: "#888", fontFamily: "monospace" }}>Following</div>
        </motion.div>
      </div>
    </div>
  );
}
