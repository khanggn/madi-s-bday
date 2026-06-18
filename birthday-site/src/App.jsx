import { useState, useRef, useEffect } from "react";
import bgImage from "./assets/landing-bg.jpg";
import snoopyGif from "./assets/snoopy-btn.gif";
import mainBg from "./assets/landing-mainpage.png";
import birthdayMusic from "./assets/birthday-music.mp3";

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

function Sparkle({ size = 16, top, left, right, bottom, delay = 0, color = "rgba(255,255,255,0.7)" }) {
  return (
    <svg
      width={size} height={size} viewBox="0 0 24 24"
      style={{
        position: "absolute", top, left, right, bottom,
        opacity: 0,
        animation: `fadeInLine 0.8s ease forwards ${delay}s`,
      }}
    >
      <path
        d="M12 0 L13.5 9.5 L24 12 L13.5 14.5 L12 24 L10.5 14.5 L0 12 L10.5 9.5 Z"
        fill={color}
      />
    </svg>
  );
}

function Dot({ size = 5, top, left, right, bottom, delay = 0, color = "rgba(255,255,255,0.35)" }) {
  return (
    <div style={{
      position: "absolute", top, left, right, bottom,
      width: size, height: size, borderRadius: "50%",
      background: color,
      opacity: 0,
      animation: `fadeInLine 0.8s ease forwards ${delay}s`,
    }} />
  );
}

function Polaroid({ src, caption, rotate, top, left, delay = 0, zIndex = 1 }) {
  return (
    <div style={{
      position: "absolute", top, left,
      transform: `rotate(${rotate}deg)`,
      background: "#fff",
      padding: "10px 10px 40px 10px",
      boxShadow: "0 8px 30px rgba(0,0,0,0.4)",
      zIndex,
      opacity: 0,
      animation: `fadeInLine 1s ease forwards ${delay}s`,
    }}>
      <img src={src} alt={caption} style={{
        width: "clamp(180px, 22vw, 280px)",
        height: "clamp(220px, 28vw, 340px)",
        objectFit: "cover",
        display: "block",
      }} />
      <p style={{
        fontFamily: "'Gamja Flower', cursive",
        fontSize: "clamp(1rem, 1.8vw, 1.4rem)",
        color: "#333",
        textAlign: "center",
        marginTop: "8px",
      }}>
        {caption}
      </p>
    </div>
  );
}

function MainPage() {
  return (
    <div style={{
      position: "fixed", inset: 0,
      overflow: "hidden",
      animation: "fadeIn 1s ease both",
    }}>
      <img
        src={mainBg}
        alt=""
        style={{
          position: "absolute", inset: 0,
          width: "100%", height: "100%",
          objectFit: "cover",
          opacity: 0.8,
        }}
      />
      {/* Polaroid photos - left side */}
      <Polaroid
        src="/photos/photo1.svg"
        caption="yayy"
        rotate={-6}
        top="18%"
        left="8%"
        delay={0.5}
        zIndex={2}
      />
      <Polaroid
        src="/photos/photo2.svg"
        caption="ur so cool"
        rotate={4}
        top="28%"
        left="28%"
        delay={0.9}
        zIndex={1}
      />

      {/* Faint circle arc near polaroids */}
      <svg
        width="300" height="300"
        viewBox="0 0 300 300"
        style={{
          position: "absolute", top: "10%", left: "5%",
          opacity: 0,
          animation: "fadeInLine 1.2s ease forwards 1.2s",
        }}
      >
        <circle
          cx="150" cy="150" r="130"
          fill="none"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="1"
          strokeDasharray="40 60 80 40"
        />
      </svg>

      {/* Right side - Happy Birthday text */}
      <div style={{
        position: "absolute",
        right: "8%",
        top: "50%",
        transform: "translateY(-50%)",
        textAlign: "right",
        opacity: 0,
        animation: "fadeInLine 1.2s ease forwards 1.4s",
      }}>
        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
          fontWeight: 400,
          color: "#FFFFFF",
          lineHeight: 1.1,
          textShadow: "0 2px 40px rgba(0,0,0,0.3)",
        }}>
          Happy<br />Birthday<br />
          <span style={{ fontStyle: "italic" }}>Madi!</span>
        </h1>
      </div>

      {/* Sparkles - left side */}
      <Sparkle size={14} top="14%" left="6%" delay={1.6} />
      <Sparkle size={10} top="65%" left="12%" delay={2.0} />
      <Sparkle size={18} top="30%" left="38%" delay={1.8} color="rgba(232,201,122,0.5)" />
      <Sparkle size={8} top="75%" left="30%" delay={2.2} />

      {/* Sparkles - right side */}
      <Sparkle size={20} top="20%" right="12%" delay={1.7} color="rgba(232,201,122,0.6)" />
      <Sparkle size={12} top="35%" right="5%" delay={2.1} />
      <Sparkle size={15} top="70%" right="15%" delay={1.9} />
      <Sparkle size={10} top="80%" right="8%" delay={2.3} color="rgba(232,201,122,0.4)" />

      {/* Dots scattered */}
      <Dot size={4} top="25%" left="45%" delay={2.0} />
      <Dot size={6} top="15%" right="25%" delay={2.2} />
      <Dot size={3} top="60%" left="50%" delay={2.4} />
      <Dot size={5} top="85%" left="20%" delay={2.1} />
      <Dot size={4} top="45%" right="30%" delay={2.3} />
      <Dot size={3} top="80%" right="25%" delay={2.5} />
      <Dot size={5} top="12%" left="32%" delay={1.8} />
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
