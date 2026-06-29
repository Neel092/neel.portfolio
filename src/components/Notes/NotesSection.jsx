import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useIsMobile from '../../hooks/useIsMobile';
import { C } from '../../constants/designTokens';

const notes = [
  {
    id: 1,
    date: 'Jun 27, 2026',
    title: 'Go Backend Journey — Chapter 1 — Introduction to Go',
    excerpt: 'When I started learning Go, I thought it was just another programming language. But after exploring its design philosophy, I realized Go was created to solve specific problems...',
    content: `When I started learning Go, I thought it was just another programming language. But after exploring its design philosophy, I realized Go was created to solve specific problems in large-scale backend systems...`,
    link: 'https://gowithcompiler.hashnode.dev',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
  },
  {
    id: 2,
    date: 'Coming Soon',
    title: 'Go Backend Journey — Chapter 2: Variables, Constants, and Data Types',
    excerpt: 'The upcoming chapter in the Go Backend Journey series exploring data structures...',
    content: `This article is currently in progress.

In the next chapter, we will dive into the building blocks of Go: Variables, Constants, and Data Types. Stay tuned for a detailed exploration of how Go handles memory and data!`,
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>
  },
  {
    id: 3,
    date: 'Coming Soon',
    title: 'Implementing a Robust Thread Pool in C++',
    excerpt: 'An upcoming deep dive into implementing a highly efficient thread pool using C++...',
    content: `This article is currently in progress. 

I will be exploring the internals of multi-threading, concurrency management, synchronization primitives, and how to build a robust thread pool from scratch using C++ to optimize task execution. Stay tuned!`,
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>
  }
];

export default function NotesSection() {
  const isMobile = useIsMobile();
  const [selectedNote, setSelectedNote] = useState(null);

  return (
    <section id="notes" style={{ padding: isMobile ? "80px 0" : "120px 0", borderBottom: "1px solid #1c1c1c", maxWidth: 1200, margin: "0 auto" }}>
      <div style={{ marginBottom: 60 }}>
        <h1 style={{ fontSize: isMobile ? "2.8rem" : "clamp(3.5rem, 8vw, 6rem)", fontWeight: 900, color: "#fff", letterSpacing: "-0.02em", margin: 0, textTransform: "uppercase" }}>
          NOTES
        </h1>
        <p style={{ fontSize: 14, color: "#555", maxWidth: 500, margin: "8px 0 0" }}>
          Engineering thoughts, architecture patterns, and DevOps learnings.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: 24 }}>
        {notes.map((note, i) => (
          <motion.div
            key={note.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            onClick={() => setSelectedNote(note)}
            style={{
              background: '#0d0d0d',
              border: '1px solid #1c1c1c',
              borderRadius: 16,
              padding: 24,
              cursor: 'pointer',
              transition: 'all 0.2s',
              display: 'flex',
              flexDirection: 'column',
              gap: 12
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#ffffff';
              e.currentTarget.style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#1c1c1c';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 4 }}>
              <div style={{
                width: 44, height: 44, borderRadius: 12,
                background: '#0a0a0a', border: '1px solid #1c1c1c',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 18, fontWeight: 600, color: '#888', fontFamily: 'monospace'
              }}>
                {note.icon}
              </div>
              <div style={{ fontSize: 11, fontFamily: 'monospace', color: '#666' }}>{note.date}</div>
            </div>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: '#fff', margin: 0, lineHeight: 1.4 }}>{note.title}</h3>
            <p style={{ fontSize: 14, color: '#888', margin: 0, lineHeight: 1.6 }}>{note.excerpt}</p>
            <div style={{ marginTop: 'auto', paddingTop: 16, color: '#0099ff', fontSize: 13, fontFamily: 'monospace', fontWeight: 'bold' }}>READ MORE →</div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedNote && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedNote(null)}
            style={{
              position: 'fixed',
              top: 0, left: 0, right: 0, bottom: 0,
              background: 'rgba(0,0,0,0.8)',
              backdropFilter: 'blur(10px)',
              zIndex: 3000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 24
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              onClick={e => e.stopPropagation()}
              style={{
                background: '#0d0d0d',
                border: '1px solid #333',
                borderRadius: 16,
                padding: isMobile ? 32 : 48,
                maxWidth: 700,
                width: '100%',
                maxHeight: '80vh',
                overflowY: 'auto'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
                <div style={{ fontSize: 12, fontFamily: 'monospace', color: '#666' }}>{selectedNote.date}</div>
                <button onClick={() => setSelectedNote(null)} style={{ background: 'transparent', border: 'none', color: '#fff', fontSize: 24, cursor: 'pointer' }}>×</button>
              </div>
              <h2 style={{ fontSize: isMobile ? 24 : 32, fontWeight: 900, color: '#fff', marginBottom: 24, lineHeight: 1.3 }}>{selectedNote.title}</h2>
              <div style={{ fontSize: 15, color: '#aaaaaa', lineHeight: 1.8, whiteSpace: 'pre-wrap' }}>
                {selectedNote.content}
              </div>
              {selectedNote.link && (
                <a href={selectedNote.link} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginTop: 24, color: '#0099ff', textDecoration: 'none', fontFamily: 'monospace', fontSize: 14 }}>
                  READ FULL ARTICLE ↗
                </a>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
