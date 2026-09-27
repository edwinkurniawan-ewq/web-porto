"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // Reveal animation
    const revealEls = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach((el) => io.observe(el));

    // Restore Saved Theme
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    }

    return () => io.disconnect();
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("theme", nextTheme);
  };

  return (
    <>
      <div className="announce">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8z" />
        </svg>
        <span>Sekarang online: halaman intro pertamaku.</span>
        <a href="#projek">Lihat projeknya →</a>
      </div>

      <nav className="nav">
        <div className="nav-inner">
          <div className="nav-logo">
            <svg viewBox="0 0 40 40" fill="none">
              <path d="M20 2 L36 14 L20 38 L4 14 Z" fill="var(--navy)" />
              <path d="M20 2 L36 14 L20 20 Z" fill="#39E29B" />
              <path d="M4 14 L20 2 L20 20 Z" fill="#1FB87C" />
            </svg>
            <span>EKEJ.</span>
          </div>

          <ul className="nav-links">
            <li>
              <a href="#projek">PROJEK</a>
            </li>
            <li>
              <a href="#organisasi">ORGANISASI</a>
            </li>
            <li>
              <a href="#stack">STACK</a>
            </li>
            <li>
              <a href="#kontak">KONTAK</a>
            </li>
          </ul>

          <div className="nav-cta">
            {/* Dark Mode Toggle Button */}
            <button 
              onClick={toggleTheme} 
              className="theme-btn chamfer-sm mono"
              title="Toggle Dark Mode"
            >
              {theme === "light" ? "🌙 Dark" : "☀️ Light"}
            </button>
            <a href="#kontak" className="btn-dark chamfer-sm">
              Hubungi
            </a>
          </div>
        </div>
      </nav>

      <header className="hero">
        <div className="wrap hero-grid">
          <div>
            <h1>
              Informatics Student,
              <br />
              <span style={{ color: "var(--mint-deep)" }}>Class of 2025.</span>
            </h1>
            <p className="lede">
              Hi, I'm <strong>Edwin Kurniawan Eka Julianda</strong>. Mahasiswa Informatika ITK (2025) yang berfokus membangun aplikasi web modern, terstruktur, dan enak dipakai.
            </p>
            <div className="cta-row">
              <a href="#kontak" className="btn btn-dark chamfer">
                Hubungi Saya
              </a>
              <a href="#projek" className="btn btn-primary chamfer">
                Lihat Projek
              </a>
            </div>
            <a href="#stack" className="sublink">
              lihat tools yang dipakai →
            </a>
          </div>

          <div className="gem-wrap">
            <svg viewBox="0 0 500 620" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="14" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <pattern id="dotsA" width="9" height="9" patternUnits="userSpaceOnUse">
                  <circle cx="4.5" cy="4.5" r="3.1" fill="var(--navy)" fillOpacity=".82" />
                </pattern>
                <pattern id="dotsB" width="9" height="9" patternUnits="userSpaceOnUse">
                  <circle cx="4.5" cy="4.5" r="2.0" fill="var(--navy)" fillOpacity=".55" />
                </pattern>
                <pattern id="dotsC" width="10" height="10" patternUnits="userSpaceOnUse">
                  <circle cx="5" cy="5" r="1.2" fill="var(--navy)" fillOpacity=".3" />
                </pattern>
                <clipPath id="facetTL">
                  <polygon points="250,30 40,300 250,300" />
                </clipPath>
                <clipPath id="facetTR">
                  <polygon points="250,30 250,300 560,300" />
                </clipPath>
                <clipPath id="facetBL">
                  <polygon points="40,300 250,650 250,300" />
                </clipPath>
                <clipPath id="facetBR">
                  <polygon points="250,300 250,650 560,300" />
                </clipPath>
              </defs>

              <polygon
                points="250,30 560,300 250,650 40,300"
                fill="none"
                stroke="#39E29B"
                strokeWidth={10}
                opacity={0.55}
                filter="url(#glow)"
              />

              <g clipPath="url(#facetTL)">
                <rect x="0" y="0" width="500" height="620" fill="url(#dotsC)" />
              </g>
              <g clipPath="url(#facetTR)">
                <rect x="0" y="0" width="500" height="620" fill="url(#dotsB)" />
              </g>
              <g clipPath="url(#facetBL)">
                <rect x="0" y="0" width="500" height="620" fill="url(#dotsB)" />
              </g>
              <g clipPath="url(#facetBR)">
                <rect x="0" y="0" width="500" height="620" fill="url(#dotsA)" />
              </g>

              <polygon
                points="250,30 560,300 250,650 40,300"
                fill="none"
                stroke="var(--navy)"
                strokeWidth={2.5}
              />
              <line x1="250" y1="30" x2="250" y2="650" stroke="var(--navy)" strokeWidth={1.5} opacity={0.6} />
              <line x1="40" y1="300" x2="560" y2="300" stroke="var(--navy)" strokeWidth={1.5} opacity={0.6} />

              <text
                x="250"
                y="300"
                textAnchor="middle"
                dominantBaseline="middle"
                fontFamily="var(--font-mono)"
                fontWeight={600}
                fontSize={34}
                fill="var(--surface)"
              >
                EK
              </text>
            </svg>
          </div>
        </div>
      </header>

      <div className="strip">
        <div className="wrap">
          <div className="strip-label mono">EKOSISTEM DEVELOPMENT</div>
          <div className="strip-row">
            <span className="strip-item">Next.js</span>
            <span className="strip-item">React</span>
            <span className="strip-item">TypeScript</span>
            <span className="strip-item">Tailwind CSS</span>
            <span className="strip-item">VS Code</span>
          </div>
        </div>
      </div>

      {/* PROJEK SHOWCASE SECTION */}
      <section className="block" id="projek">
        <div className="wrap">
          <div className="eyebrow reveal">PROJEK DIBANGUN</div>
          <h2 className="reveal">Beberapa Karya &amp; Eksperimen</h2>

          <div className="project-grid reveal">
            {/* Proyek 1: MBAG */}
            <div className="project-card">
              <div>
                <span className="badge badge-dev">IN DEVELOPMENT</span>
                <h3>MABG (My Assisten Belajar Gwej)</h3>
                <p style={{ color: "var(--text-body)", fontSize: "14px", margin: "10px 0 16px" }}>
                  Aplikasi web asisten belajar tergamifikasi (*PWA*). Dikembangkan menggunakan arsitektur modular dengan estetika futuristik RPG yang interaktif.
                </p>
              </div>
              <div className="mono" style={{ fontSize: "12px", color: "var(--text-muted)" }}>
                Tech: Next.js · TypeScript · OOP Logic
              </div>
            </div>

            {/* Proyek 2: Automatic Temp Controller */}
            <div className="project-card">
              <div>
                <span className="badge badge-[#00d384]">COMPLETED</span>
                <h3>Automatic Temp Controller</h3>
                <p style={{ color: "var(--text-body)", fontSize: "14px", margin: "10px 0 16px" }}>
                  Prototipe perangkat keras pendeteksi dan pengatur suhu otomatis. Mengintegrasikan sensor fisik dengan logika pemrograman C++.
                </p>
              </div>
              <div className="mono" style={{ fontSize: "12px", color: "var(--text-muted)" }}>
                Tech: Embedded System · C++ Hardware
              </div>
            </div>

            {/* Proyek 3: Personal Web Intro */}
            <div className="project-card">
              <div>
                <span className="badge badge-[#00d384]">STABLE</span>
                <h3>Personal Intro Page</h3>
                <p style={{ color: "var(--text-body)", fontSize: "14px", margin: "10px 0 16px" }}>
                  Halaman kartu nama digital ini sendiri. Dirancang dengan pola *dot-grid*, tombol berbentuk *chamfered*, serta dukungan tema gelap interaktif.
                </p>
              </div>
              <div className="mono" style={{ fontSize: "12px", color: "var(--text-muted)" }}>
                Tech: Next.js · CSS Variables · Vercel
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ORGANISASI & PENDIDIKAN */}
      <section className="block" id="organisasi">
        <div className="wrap">
          <div className="eyebrow reveal">LATAR BELAKANG</div>
          <h2 className="reveal">Pendidikan &amp; Aktivitas Kampus</h2>
          
          <div className="stack-grid reveal" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
            <div className="stack-item" style={{ padding: "20px" }}>
              <div className="mono" style={{ color: "var(--mint-deep)", fontSize: "12px", marginBottom: "6px" }}>INSTITUSI</div>
              <h3 style={{ fontSize: "16px", fontWeight: "700" }}>Institut Teknologi Kalimantan</h3>
              <p style={{ fontSize: "13px", color: "var(--text-body)", marginTop: "4px" }}>
                S1 Informatika — Fakultas Sains dan Teknologi Informasi (FSTI)<br />
                <span className="mono" style={{ fontSize: "12px", opacity: 0.8 }}>NIM: 11251082 | Angkatan 2025</span>
              </p>
            </div>

            <div className="stack-item" style={{ padding: "20px" }}>
              <div className="mono" style={{ color: "var(--mint-deep)", fontSize: "12px", marginBottom: "6px" }}>KETERLIBATAN KAMPUS</div>
              <ul style={{ listStyle: "none", fontSize: "13px", color: "var(--text-body)" }} className="mono">
                <li>▹ BUMH IF ITK Kabinet Source</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="block" id="stack">
        <div className="wrap">
          <div className="eyebrow reveal">STACK</div>
          <h2 className="reveal">Tools &amp; Teknologi</h2>
          <div className="stack-grid reveal">
            <div className="stack-item">
              <span className="kw">◆</span>Next.js &amp; React
            </div>
            <div className="stack-item">
              <span className="kw">◆</span>TypeScript
            </div>
            <div className="stack-item">
              <span className="kw">◆</span>JavaScript
            </div>
            <div className="stack-item">
              <span className="kw">◆</span>HTML5 &amp; CSS3
            </div>
            <div className="stack-item">
              <span className="kw">◆</span>Tailwind CSS
            </div>
            <div className="stack-item">
              <span className="kw">◆</span>Git &amp; GitHub
            </div>
          </div>
        </div>
      </section>

      <section className="block no-border" id="kontak">
        <div className="wrap contact-inner">
          <div className="reveal">
            <div className="eyebrow">KONTAK</div>
            <h2>Yuk terhubung</h2>
            <p>
              Terbuka buat ngobrol soal projek, kolaborasi, atau sekadar sapa-sapa.
            </p>
          </div>
          <div className="contact-links reveal">
          <a href="mailto:edwinkurniawan9326@gmail.com">
            edwinkurniawan9326@gmail.com
          </a>
           <a href="https://github.com/edwinkurniawan-ewq" target="_blank" rel="noopener noreferrer">
           github.com/edwinkurniawan-ewq
           </a>
          <a href="https://www.instagram.com/fang_sanz?stkn=b3FoMmpicjRscDlz" target="_blank" rel="noopener noreferrer">
           instagram.com/fang.sanz
      </a>
      </div>
      </div>
      </section>

      <footer>
        <div className="foot-brand">EKEJ.</div>
        <div>Dibuat oleh Edwin Kurniawan Eka Julianda</div>
        <div className="foot-muted">© 2026</div>
      </footer>
    </>
  );
}