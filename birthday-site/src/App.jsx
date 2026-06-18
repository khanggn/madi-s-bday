import { useState, useRef, useEffect } from "react";
import bgImage from "./assets/landing-bg.jpg";
import snoopyGif from "./assets/snoopy-btn.gif";
import messages from "../../assets/messages.json";

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
            color: "#2B5748",
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
            color: "#2a2a2a",
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
            color: "#5a7a5a",
            lineHeight: 1.1,
            textAlign: "center",
            opacity: 0,
            animation: "fadeInLine 1s ease forwards 2.5s",
          }}>
            surprise
          </h1>

          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            color: "#2B5748",
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

const DOT_COLORS = ["#F9C74F", "#F28482", "#90BE6D"];

function MessageDot({ message, index }) {
  const [hovered, setHovered] = useState(false);
  const [canScroll, setCanScroll] = useState(false);
  const bubbleRef = useRef(null);
  const color = DOT_COLORS[index % DOT_COLORS.length];

  useEffect(() => {
    if (hovered && bubbleRef.current) {
      const el = bubbleRef.current;
      setCanScroll(el.scrollHeight > el.clientHeight);
    }
  }, [hovered]);

  return (
    <div
      style={{ position: "relative", display: "inline-block" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          width: "clamp(36px, 5vw, 52px)",
          height: "clamp(36px, 5vw, 52px)",
          borderRadius: "50%",
          backgroundColor: color,
          cursor: "pointer",
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
          transform: hovered ? "scale(1.25)" : "scale(1)",
          boxShadow: hovered
            ? `0 0 16px ${color}88`
            : `0 2px 6px rgba(0,0,0,0.2)`,
        }}
      />

      {hovered && (
        <div style={{
          position: "absolute",
          bottom: "100%",
          left: "50%",
          transform: "translateX(-50%)",
          paddingBottom: "12px",
          zIndex: 100,
        }}>
        <div ref={bubbleRef} className="message-bubble" style={{
          backgroundColor: "#FFFFFF",
          color: "#2a2a2a",
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "1.05rem",
          lineHeight: 1.6,
          padding: "1.4rem 1.5rem",
          borderRadius: "14px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
          width: "max(300px, min(400px, 80vw))",
          maxHeight: "280px",
          overflowY: "auto",
          whiteSpace: "pre-wrap",
          position: "relative",
        }}>
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
            bottom: "22px",
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
        <div style={{
          position: "absolute",
          bottom: "6px",
          left: "50%",
          transform: "translateX(-50%) rotate(45deg)",
          width: "12px",
          height: "12px",
          backgroundColor: "#FFFFFF",
          boxShadow: "2px 2px 4px rgba(0,0,0,0.05)",
        }} />
        </div>
      )}
    </div>
  );
}

function MainPage() {
  return (
    <div style={{
      position: "fixed", inset: 0,
      background: "#618764",
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      animation: "fadeIn 1s ease both",
      overflow: "hidden",
    }}>
      <div style={{ textAlign: "center", zIndex: 10, padding: "2rem" }}>
        <div style={{ fontSize: "4.5rem", marginBottom: "1.5rem", lineHeight: 1 }}>🎂</div>
        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(2.5rem, 7vw, 5rem)",
          fontWeight: 700, color: "#FFFFFF", marginBottom: "1rem",
          textShadow: "0 0 60px rgba(249,199,79,0.2)",
        }}>
          Happy Birthday!
        </h1>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          color: "rgba(255,255,255,0.7)", fontSize: "1rem",
          letterSpacing: "0.08em",
          marginBottom: "2rem",
        }}>
          hover over a dot to read a message
        </p>
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "clamp(12px, 3vw, 24px)",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "500px",
          margin: "0 auto",
        }}>
          {messages.map((msg, i) => (
            <MessageDot key={i} message={msg} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState("landing");
  const [isExiting, setIsExiting] = useState(false);

  const goToMain = () => {
    setIsExiting(true);
    setTimeout(() => setPage("main"), 900);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@300;400;500&display=swap');
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

      {page === "landing"
        ? <LandingPage onEnter={goToMain} isExiting={isExiting} />
        : <MainPage />
      }
    </>
  );
}
