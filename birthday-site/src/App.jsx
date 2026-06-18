import { useState, useRef, useEffect } from "react";
import bgImage from "./assets/landing-bg.jpg";
import snoopyGif from "./assets/snoopy-btn.gif";
import mainBg from "./assets/landing-mainpage.png";
import birthdayMusic from "./assets/birthday-music.mp3";
import messages from "../../assets/messages.json";

import butterflyBlue from "./assets/butterflies/blue.svg";
import butterflyBrightYellow from "./assets/butterflies/bright yellow.svg";
import butterflyOrange from "./assets/butterflies/orange.svg";
import butterflyPurple from "./assets/butterflies/purple.svg";
import butterflyWhitePurple from "./assets/butterflies/white-purple.svg";
import butterflyYellow from "./assets/butterflies/yellow.svg";

import vine1 from "./assets/vines/vine 1.svg";
import vine2 from "./assets/vines/vine 2.svg";

import kat from "./assets/doubles/kat.svg";
import kat2 from "./assets/doubles/kat-2.svg";
import beyond from "./assets/doubles/beyond.svg";
import beyond2 from "./assets/doubles/beyond-2.svg";
import friendsg from "./assets/doubles/friendsg.svg";
import friendsg2 from "./assets/doubles/friendsg-2.svg";
import bigbear from "./assets/doubles/bigbear.svg";
import bigbear2 from "./assets/doubles/bigbear-2.svg";
import acmproj from "./assets/doubles/acmproj.svg";
import acmproj2 from "./assets/doubles/acmproj-2.svg";
import icecream from "./assets/doubles/icecream.svg";
import icecream2 from "./assets/doubles/icecream-2.svg";

import manubday from "./assets/singles/manubday.svg";
import drugs from "./assets/singles/drugs.svg";
import photobooth from "./assets/singles/photobooth.svg";
import homecafe from "./assets/singles/homecafe.svg";
import figbuild from "./assets/singles/figbuild.svg";
import kevinsbday from "./assets/singles/kevinsbday.svg";

const SINGLES = [
  { label: "manu's bday", image: manubday },
  { label: "drugs?", image: drugs },
  { label: "photo booth time", image: photobooth },
  { label: "you successfully hosted a home cafe, yum!", image: homecafe },
  { label: "figbuild '26 but we know you were there for the food", image: figbuild },
  { label: "kevin's bday", image: kevinsbday },
];

const DOUBLES = [
  { label: "'25 katseye concert", images: [kat, kat2] },
  { label: "beyond for your first rave, kinda crazy", images: [beyond, beyond2] },
  { label: "friendsgiving + food coma", images: [friendsg, friendsg2] },
  { label: "stuck at big bear with the gang", images: [bigbear, bigbear2] },
  { label: "acm projects social", images: [acmproj, acmproj2] },
  { label: "ice cream", images: [icecream, icecream2] },
];

const BUTTERFLY_IMAGES = [
  butterflyBlue,
  butterflyOrange,
  butterflyPurple,
  butterflyBrightYellow,
  butterflyWhitePurple,
  butterflyYellow,
];

function LandingPage({ onEnter, isExiting }) {
  const [hovered, setHovered] = useState(false);
  const canvasRef = useRef(null);
  const [firstFrame, setFirstFrame] = useState(null);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      canvas.getContext("2d").drawImage(img, 0, 0);
      setFirstFrame(canvas.toDataURL());
    };
    img.src = snoopyGif;
  }, []);

  return (
    <div style={{
      position: "fixed", inset: 0,
      overflow: "hidden",
      opacity: isExiting ? 0 : 1,
      transition: "opacity 0.9s ease",
    }}>
      <img
        src={bgImage}
        alt=""
        style={{
          position: "absolute", inset: 0,
          width: "100%", height: "100%",
          objectFit: "cover",
          objectPosition: "center 60%",
        }}
      />

      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
      }}>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            color: "#304E06",
            letterSpacing: "0.15em",
            fontSize: "clamp(0.85rem, 2vw, 1.1rem)",
            marginBottom: "0.5rem",
            opacity: 0,
            animation: "fadeInLine 1s ease forwards 0.5s",
          }}>
            psst · this is for you
          </p>

          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2.5rem, 7vw, 4.5rem)",
            fontWeight: 700,
            color: "#FFFFFF",
            lineHeight: 1.1,
            textAlign: "center",
            marginBottom: "0.2rem",
            opacity: 0,
            animation: "fadeInLine 1s ease forwards 1.5s",
          }}>
            A little
          </h1>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2.5rem, 7vw, 4.5rem)",
            fontWeight: 400,
            fontStyle: "italic",
            color: "#FFFFFF",
            lineHeight: 1.1,
            textAlign: "center",
            opacity: 0,
            animation: "fadeInLine 1s ease forwards 2.5s",
          }}>
            surprise
          </h1>

          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            color: "#304E06",
            fontSize: "clamp(0.85rem, 2vw, 1.1rem)",
            marginTop: "1rem",
            letterSpacing: "0.04em",
            opacity: 0,
            animation: "fadeInLine 1s ease forwards 3.5s",
          }}>
            when you are ready...
          </p>

          <div
            style={{
              marginTop: "1.5rem",
              position: "relative",
              display: "flex", flexDirection: "column", alignItems: "center",
              opacity: 0,
              animation: "fadeInLine 1s ease forwards 4.5s",
            }}
          >
            <img
              onClick={onEnter}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              src={hovered ? snoopyGif : (firstFrame || snoopyGif)}
              alt="Click me"
              style={{
                width: "clamp(70px, 10vw, 100px)",
                height: "auto",
                cursor: "pointer",
                filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.15))",
              }}
            />
            <div style={{ position: "absolute", right: "-9rem", top: "0.5rem" }}>
              <span style={{
                fontFamily: "'DM Sans', sans-serif",
                color: "rgba(255,255,255,0.9)",
                fontSize: "clamp(0.75rem, 1.5vw, 0.95rem)",
                fontWeight: 400,
                letterSpacing: "0.02em",
                textShadow: "0 1px 4px rgba(0,0,0,0.3)",
              }}>
                click me queen
              </span>
              <svg
                width="120" height="40"
                viewBox="0 0 120 40"
                fill="none"
                style={{ position: "absolute", left: "-2rem", top: "1.5rem" }}
              >
                <path
                  d="M75 2 C75 30, 30 35, 2 35"
                  stroke="rgba(255,255,255,0.85)"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </div>
          </div>
      </div>
    </div>
  );
}

const BUTTERFLY_POSITIONS = [
  { top: "12%", left: "8%", rotate: "-10deg" },
  { top: "28%", left: "20%", rotate: "5deg" },
  { top: "52%", left: "5%", rotate: "-15deg" },
  { top: "75%", left: "18%", rotate: "8deg" },
  { top: "15%", right: "10%", rotate: "12deg" },
  { top: "42%", right: "7%", rotate: "-8deg" },
  { top: "68%", right: "15%", rotate: "5deg" },
];

function MessageButterfly({ message, index, position, side }) {
  const [open, setOpen] = useState(false);
  const [canScroll, setCanScroll] = useState(false);
  const bubbleRef = useRef(null);
  const wrapperRef = useRef(null);
  const butterflySrc = BUTTERFLY_IMAGES[index % BUTTERFLY_IMAGES.length];

  useEffect(() => {
    if (open && bubbleRef.current) {
      const el = bubbleRef.current;
      setCanScroll(el.scrollHeight > el.clientHeight);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  const bubbleOnRight = side === "left";

  return (
    <div
      ref={wrapperRef}
      style={{
        position: "relative",
        zIndex: open ? 9999 : 10,
      }}
    >
      <img
        src={butterflySrc}
        alt={message.name}
        onClick={() => setOpen((prev) => !prev)}
        style={{
          width: "clamp(60px, 8vw, 90px)",
          height: "auto",
          cursor: "pointer",
          transition: "transform 0.3s ease, filter 0.3s ease",
          transform: `rotate(${position.rotate}) ${open ? "scale(1.2)" : "scale(1)"}`,
          filter: open
            ? "drop-shadow(0 4px 12px rgba(0,0,0,0.2)) drop-shadow(0 0 8px rgba(249,199,79,0.6))"
            : "drop-shadow(0 2px 4px rgba(0,0,0,0.1)) drop-shadow(0 0 6px rgba(249,199,79,0.4))",
        }}
      />

      {open && (
        <div style={{
          position: "absolute",
          ...(bubbleOnRight
            ? { left: "100%", top: "50%", transform: "translateY(-50%)", paddingLeft: "12px" }
            : { right: "100%", top: "50%", transform: "translateY(-50%)", paddingRight: "12px" }
          ),
          zIndex: 9999,
        }}>
        <div
          ref={bubbleRef}
          className="message-bubble"
          onWheel={(e) => e.stopPropagation()}
          style={{
            backgroundColor: "#FFFFFF",
            color: "#2a2a2a",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "1.05rem",
            lineHeight: 1.6,
            padding: "1.4rem 1.5rem",
            borderRadius: "14px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
            width: "min(320px, 60vw)",
            maxHeight: "280px",
            overflowY: "auto",
            whiteSpace: "pre-wrap",
            position: "relative",
          }}
        >
          <p style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: "1.15rem",
            color: "#5a7a5a",
            marginBottom: "0.5rem",
          }}>
            {message.name}
          </p>
          <p style={{ margin: 0 }}>{message.message}</p>
        </div>
        {canScroll && (
          <div style={{
            position: "absolute",
            bottom: "4px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            alignItems: "center",
            gap: "4px",
            backgroundColor: "rgba(90,122,90,0.85)",
            color: "#fff",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.75rem",
            padding: "3px 10px",
            borderRadius: "10px",
          }}>
            <span>scroll</span>
            <span style={{ fontSize: "0.85rem" }}>↓</span>
          </div>
        )}
        </div>
      )}
    </div>
  );
}

function DoublePair({ pair }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: "opacity 0.8s ease, transform 0.8s ease",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
        marginBottom: "4rem",
      }}
    >
      <div style={{
        display: "flex",
        gap: "1rem",
        justifyContent: "center",
        flexWrap: "wrap",
      }}>
        <img src={pair.images[0]} alt="" style={{
          width: "min(280px, 40vw)",
          height: "auto",
          borderRadius: "12px",
          boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
        }} />
        <img src={pair.images[1]} alt="" style={{
          width: "min(280px, 40vw)",
          height: "auto",
          borderRadius: "12px",
          boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
        }} />
      </div>
      <p style={{
        fontFamily: "'DM Sans', sans-serif",
        color: "#2a2a2a",
        fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
        textAlign: "center",
        fontStyle: "italic",
        letterSpacing: "0.02em",
      }}>
        {pair.label}
      </p>
    </div>
  );
}

function SinglePhoto({ item }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: "opacity 0.8s ease, transform 0.8s ease",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
        marginBottom: "4rem",
      }}
    >
      <img src={item.image} alt="" style={{
        width: "min(280px, 60vw)",
        height: "auto",
        borderRadius: "12px",
        boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
      }} />
      <p style={{
        fontFamily: "'DM Sans', sans-serif",
        color: "#2a2a2a",
        fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
        textAlign: "center",
        fontStyle: "italic",
        letterSpacing: "0.02em",
      }}>
        {item.label}
      </p>
    </div>
  );
}

function MainPage() {
  const [revealCount, setRevealCount] = useState(0);
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const revealCountRef = useRef(0);
  const scrollAccum = useRef(0);
  const SCROLL_THRESHOLD = 150;

  useEffect(() => {
    revealCountRef.current = revealCount;
  }, [revealCount]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionReached = rect.top <= 5;

      if (sectionReached && e.deltaY > 0 && revealCountRef.current < messages.length) {
        e.preventDefault();
        scrollAccum.current += e.deltaY;
        if (scrollAccum.current >= SCROLL_THRESHOLD) {
          scrollAccum.current = 0;
          setRevealCount((prev) => Math.min(prev + 1, messages.length));
        }
      }
    };

    const handleScroll = () => {
      if (!sectionRef.current) return;
      if (revealCountRef.current >= messages.length) return;
      const sectionTop = sectionRef.current.offsetTop;
      if (container.scrollTop > sectionTop) {
        container.scrollTop = sectionTop;
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    container.addEventListener("scroll", handleScroll);
    return () => {
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={containerRef} style={{
      position: "fixed", inset: 0,
      background: "#faf9f7",
      overflowY: "auto",
      animation: "fadeIn 1s ease both",
    }}>
      {/* Section 1 — placeholder */}
      <section style={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#618764",
        padding: "2rem",
      }}>
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          fontWeight: 700,
          color: "#fff",
        }}>
          Section 1
        </h2>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          color: "rgba(255,255,255,0.7)",
          fontSize: "1rem",
          marginTop: "0.5rem",
        }}>
          placeholder
        </p>
      </section>

      {/* Section 2 — placeholder */}
      <section style={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#f5ede4",
        padding: "2rem",
        position: "relative",
        zIndex: 1,
      }}>
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          fontWeight: 700,
          color: "#2a2a2a",
        }}>
          Section 2
        </h2>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          color: "#5a7a5a",
          fontSize: "1rem",
          marginTop: "0.5rem",
        }}>
          placeholder
        </p>
      </section>

      {/* Section 3 — Butterflies with vines */}
      <section ref={sectionRef} style={{
        width: "100%",
        minHeight: "100vh",
        position: "relative",
        background: "#faf9f7",
      }}>
        {/* Vine on the left */}
        <img src={vine1} alt="" style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "auto",
          opacity: 0.85,
          pointerEvents: "none",
          zIndex: 1,
        }} />

        {/* Vine on the right */}
        <img src={vine2} alt="" style={{
          position: "absolute",
          top: 0,
          right: 0,
          height: "100%",
          width: "auto",
          opacity: 0.85,
          pointerEvents: "none",
          zIndex: 1,
        }} />

        {/* Center text */}
        <div style={{
          textAlign: "center", zIndex: 20, position: "relative",
          paddingTop: "3rem",
        }}>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 700, color: "#2a2a2a", marginBottom: "0.5rem",
          }}>
            Happy Birthday!
          </h1>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            color: "#5a7a5a", fontSize: "1rem",
            letterSpacing: "0.06em",
          }}>
            click a butterfly to read a message
          </p>
          {revealCount < messages.length && (
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              color: "#999", fontSize: "0.85rem",
              marginTop: "1.5rem",
            }}>
              ↓ scroll to reveal ↓
            </p>
          )}
        </div>

        {/* Butterflies positioned around the vines */}
        {messages.map((msg, i) => {
          const pos = BUTTERFLY_POSITIONS[i % BUTTERFLY_POSITIONS.length];
          return (
            <div
              key={i}
              style={{
                position: "absolute",
                top: pos.top,
                left: pos.left,
                right: pos.right,
                opacity: i < revealCount ? 1 : 0,
                transition: "opacity 0.6s ease",
              }}
            >
              <MessageButterfly
                message={msg}
                index={i}
                position={{ rotate: pos.rotate }}
                side={pos.left ? "left" : "right"}
              />
            </div>
          );
        })}
      </section>

      {/* Section 4 — Doubles gallery */}
      <section style={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "#618764",
        padding: "4rem 2rem",
      }}>
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          fontWeight: 700,
          color: "#fff",
          marginBottom: "3rem",
        }}>
          some of my fav memories
        </h2>
        {DOUBLES.map((pair, i) => (
          <DoublePair key={i} pair={pair} />
        ))}
        {SINGLES.map((item, i) => (
          <SinglePhoto key={i} item={item} />
        ))}
      </section>
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState("landing");
  const [isExiting, setIsExiting] = useState(false);
  const audioRef = useRef(null);

  const goToMain = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
    setIsExiting(true);
    setTimeout(() => setPage("main"), 900);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Gamja+Flower&family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@300;400;500&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }

        @keyframes fadeInLine {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        button:focus-visible { outline: 2px solid #5a7a5a; outline-offset: 3px; }
        .message-bubble { overflow-y: auto; scrollbar-width: thin; scrollbar-color: #bbb transparent; }
        .message-bubble::-webkit-scrollbar { width: 6px; -webkit-appearance: none; }
        .message-bubble::-webkit-scrollbar-track { background: transparent; border-radius: 3px; }
        .message-bubble::-webkit-scrollbar-thumb { background: #bbb; border-radius: 3px; min-height: 20px; }
        .message-bubble::-webkit-scrollbar-thumb:hover { background: #999; }
        @media (prefers-reduced-motion: reduce) { * { animation-duration: 0.01ms !important; } }
      `}</style>

      <audio ref={el => { audioRef.current = el; if (el) el.volume = 0.3; }} src={birthdayMusic} loop />

      {page === "landing"
        ? <LandingPage onEnter={goToMain} isExiting={isExiting} />
        : <MainPage />
      }
    </>
  );
}
