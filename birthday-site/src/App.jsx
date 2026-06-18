import { useState, useRef, useEffect } from "react";
import bgImage from "./assets/landing-bg.jpg";
import snoopyGif from "./assets/snoopy-btn.gif";
import mainBg from "./assets/landing-mainpage.png";
import birthdayMusic from "./assets/birthday-music.mp3";
import snoopyCake from "./assets/snoopy-cake.svg";
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

import lig1 from "./assets/quad/lig.svg";
import lig2 from "./assets/quad/lig2.svg";
import lig3 from "./assets/quad/lig3.svg";
import lig4 from "./assets/quad/lig4.svg";

import flower1 from "./assets/flowers/flower 1.svg";
import flower2 from "./assets/flowers/flower 2.svg";
import flower3 from "./assets/flowers/flower 3.svg";
import flower4 from "./assets/flowers/flower 4.svg";
import flower5 from "./assets/flowers/flower 5.svg";
import flower6 from "./assets/flowers/flower 6.svg";
import scrapbookBg from "./assets/scrapbookbg.jpg";
import ellipse from "./assets/Ellipse 3.svg";
import rockclimbing from "./assets/rockclimbing.svg";
import funnyImg from "./assets/funny.svg";
import envelope from "./assets/envelope.svg";
import lostInDreams from "./assets/lostindreams.jpg";
import spaImg from "./assets/spa.webp";

const FLOWERS = [flower1, flower2, flower3, flower4, flower5, flower6];

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
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              color: "rgba(255,255,255,0.6)",
              fontSize: "clamp(0.65rem, 1.2vw, 0.8rem)",
              marginTop: "1.5rem",
              letterSpacing: "0.05em",
              textShadow: "0 1px 4px rgba(0,0,0,0.2)",
            }}>
              have volume on for a better experience
            </p>
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

function MessageButterfly({ message, index, position, side, onOpenChange }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    onOpenChange?.(open);
  }, [open]);
  const [canScroll, setCanScroll] = useState(false);
  const bubbleRef = useRef(null);
  const wrapperRef = useRef(null);
  const butterflySrc = BUTTERFLY_IMAGES[index % BUTTERFLY_IMAGES.length];

  useEffect(() => {
    if (open && bubbleRef.current) {
      const el = bubbleRef.current;
      setCanScroll(el.scrollHeight > el.clientHeight);

      const handleScroll = () => {
        const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 5;
        if (atBottom) setCanScroll(false);
      };
      el.addEventListener("scroll", handleScroll);
      return () => el.removeEventListener("scroll", handleScroll);
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
          position: "relative",
          zIndex: 1,
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
            position: "relative",
            zIndex: 2,
            backgroundColor: "#FFFFFF",
            color: "#2a2a2a",
            fontFamily: "'Gaegu', cursive",
            fontSize: "1.15rem",
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
          {canScroll && (
            <div style={{
              position: "sticky",
              bottom: "0",
              width: "fit-content",
              margin: "8px auto 0",
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

function Sparkle({ size = 16, top, left, right, bottom, delay = 0, color = "#fff", rotate = 0 }) {
  return (
    <div style={{
      position: "absolute", top, left, right, bottom,
      opacity: 0,
      animation: `fadeIn 0.8s ease forwards ${delay}s`,
    }}>
      <svg
        width={size} height={size} viewBox="0 0 24 24"
        style={{ transform: `rotate(${rotate}deg)` }}
      >
        <path
          d="M12 0 L13.5 9.5 L24 12 L13.5 14.5 L12 24 L10.5 14.5 L0 12 L10.5 9.5 Z"
          fill={color}
        />
      </svg>
    </div>
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

function Polaroid({ src, altSrc, caption, rotate, top, left, delay = 0, zIndex = 1 }) {
  const [hovered, setHovered] = useState(false);
  const [flashing, setFlashing] = useState(false);

  useEffect(() => {
    if (!altSrc) return;
    const timer = setTimeout(() => {
      setFlashing(true);
      setTimeout(() => setFlashing(false), 800);
    }, 3000);
    return () => clearTimeout(timer);
  }, [altSrc]);

  const showAlt = altSrc && (hovered || flashing);

  return (
    <div
      onMouseEnter={() => altSrc && setHovered(true)}
      onMouseLeave={() => altSrc && setHovered(false)}
      style={{
        position: "absolute", top, left,
        transform: `rotate(${rotate}deg)`,
        background: "#fff",
        padding: "10px 10px 40px 10px",
        boxShadow: "0 8px 30px rgba(0,0,0,0.4)",
        zIndex,
        opacity: 0,
        animation: `fadeInLine 1s ease forwards ${delay}s`,
        cursor: altSrc ? "pointer" : "default",
      }}
    >
      <div style={{ position: "relative", width: "clamp(180px, 22vw, 280px)", height: "clamp(220px, 28vw, 340px)" }}>
        <img src={src} alt={caption} style={{
          position: "absolute", inset: 0,
          width: "100%", height: "100%",
          objectFit: "cover",
          display: "block",
          transition: "opacity 0.5s ease",
          opacity: showAlt ? 0 : 1,
        }} />
        {altSrc && <img src={altSrc} alt={caption} style={{
          position: "absolute", inset: 0,
          width: "100%", height: "100%",
          objectFit: "cover",
          display: "block",
          transition: "opacity 0.5s ease",
          opacity: showAlt ? 1 : 0,
        }} />}
      </div>
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

function Section2() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [uncHovered, setUncHovered] = useState(false);
  const [snoopyHovered, setSnoopyHovered] = useState(false);
  const [snoopyFlashing, setSnoopyFlashing] = useState(false);

  useEffect(() => {
    if (!visible) return;
    const timer = setTimeout(() => {
      setSnoopyFlashing(true);
      setTimeout(() => setSnoopyFlashing(false), 800);
    }, 3000);
    return () => clearTimeout(timer);
  }, [visible]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} style={{
      width: "100%",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(to bottom, #F4BCBC 0%, #FEDFDA 46%, #B8BB88 100%)",
      padding: "4rem 6%",
      position: "relative",
      zIndex: 1,
    }}>
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        maxWidth: "1100px",
        gap: "3rem",
      }}>
        <div style={{ flex: 1 }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 400,
            color: "#fff",
            lineHeight: 1.2,
            marginBottom: "0.3rem",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}>
            Have an amazing<br />22nd birthday!{" "}
            <span
              onMouseEnter={() => setUncHovered(true)}
              onMouseLeave={() => setUncHovered(false)}
              style={{
                fontStyle: "normal", fontWeight: 700,
                opacity: uncHovered ? 1 : 0.15,
                transition: "opacity 0.3s ease",
                cursor: "default",
              }}
            >{uncHovered ? "so young!" : "unc"}</span>
          </h2>
          <p style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1.8rem, 4.5vw, 3rem)",
            fontWeight: 400,
            color: "#fff",
            lineHeight: 1.2,
            marginTop: "1.5rem",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s",
          }}>
            Let's take a scroll down<br /><em>memory lane</em> and hear<br />from your friends!
          </p>
        </div>
        <div
          onMouseEnter={() => setSnoopyHovered(true)}
          onMouseLeave={() => setSnoopyHovered(false)}
          style={{
            position: "relative",
            width: "clamp(180px, 25vw, 320px)",
            flexShrink: 0,
            cursor: "pointer",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(30px)",
            transition: "opacity 0.8s ease 0.6s, transform 0.8s ease 0.6s",
          }}
        >
          <img src={snoopyCake} alt="Snoopy with cake" style={{
            width: "100%", height: "auto", borderRadius: "16px",
            transition: "opacity 0.4s ease",
            opacity: (snoopyHovered || snoopyFlashing) ? 0 : 1,
          }} />
          <img src={funnyImg} alt="" style={{
            position: "absolute", inset: 0,
            width: "100%", height: "100%",
            objectFit: "cover", borderRadius: "16px",
            transition: "opacity 0.4s ease",
            opacity: (snoopyHovered || snoopyFlashing) ? 1 : 0,
          }} />
        </div>
      </div>

      <Sparkle size={32} top="12%" right="8%" delay={0.3} color="#fff" rotate={15} />
      <Sparkle size={28} top="25%" left="5%" delay={0.5} color="#fff" rotate={-30} />
      <Sparkle size={38} bottom="18%" right="12%" delay={0.7} color="#fff" rotate={45} />
      <Sparkle size={24} top="15%" right="35%" delay={0.9} color="#fff" rotate={-12} />
      <Sparkle size={30} bottom="30%" left="10%" delay={1.1} color="#fff" rotate={60} />

      <Dot size={8} top="10%" left="15%" delay={0.4} color="#fff" />
      <Dot size={6} top="35%" right="6%" delay={0.6} color="#fff" />
      <Dot size={10} bottom="12%" left="25%" delay={0.8} color="#fff" />
      <Dot size={5} bottom="25%" right="20%" delay={1.0} color="#fff" />
      <Dot size={7} top="50%" left="3%" delay={1.2} color="#fff" />

      <img src={ellipse} alt="" style={{
        position: "absolute",
        width: "clamp(350px, 40vw, 550px)",
        height: "auto",
        left: "-20%",
        top: "50%",
        opacity: 0.4,
        pointerEvents: "none",
        animation: "fadeIn 1s ease forwards 0.6s",
      }} />
      <img src={ellipse} alt="" style={{
        position: "absolute",
        width: "clamp(350px, 40vw, 550px)",
        height: "auto",
        left: "-17%",
        top: "53%",
        opacity: 0.4,
        pointerEvents: "none",
        animation: "fadeIn 1s ease forwards 0.8s",
      }} />
    </section>
  );
}

const QUADS = [
  { label: "ligma cookie", images: [lig1, lig2, lig3, lig4] },
];

const ALL_MEMORIES = [
  ...DOUBLES.map((pair) => ({ images: pair.images, label: pair.label })),
  ...SINGLES.map((item) => ({ images: [item.image], label: item.label })),
  ...QUADS.map((q) => ({ images: q.images, label: q.label })),
];

function MemoryLane({ containerRef }) {
  const sectionRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayIndex, setDisplayIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const allSrcs = ALL_MEMORIES.flatMap((m) => m.images);
    let loaded = 0;
    allSrcs.forEach((src) => {
      const img = new Image();
      img.onload = img.onerror = () => {
        loaded++;
        if (loaded >= allSrcs.length) setImagesLoaded(true);
      };
      img.src = src;
    });
  }, []);

  useEffect(() => {
    if (currentIndex !== displayIndex) {
      setFade(false);
      const timer = setTimeout(() => {
        setDisplayIndex(currentIndex);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, displayIndex]);

  useEffect(() => {
    // content swapped while hidden, now fade in on next frame
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setFade(true);
      });
    });
  }, [displayIndex]);

  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
  const currentIndexRef = useRef(0);
  const scrollAccum = useRef(0);
  const isTransitioning = useRef(false);
  const SCROLL_THRESHOLD = 500;
  const COOLDOWN_MS = 650;

  useEffect(() => {
    currentIndexRef.current = currentIndex;
  }, [currentIndex]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const inView = rect.top <= 5 && rect.bottom >= window.innerHeight - 5;

      if (!inView) return;

      const atEnd = currentIndexRef.current >= ALL_MEMORIES.length - 1;
      const atStart = currentIndexRef.current <= 0;

      if ((e.deltaY > 0 && !atEnd) || (e.deltaY < 0 && !atStart)) {
        e.preventDefault();
        if (isTransitioning.current) return;
        scrollAccum.current += e.deltaY;
        if (Math.abs(scrollAccum.current) >= SCROLL_THRESHOLD) {
          const dir = scrollAccum.current > 0 ? 1 : -1;
          scrollAccum.current = 0;
          isTransitioning.current = true;
          setDirection(dir);
          setCurrentIndex((prev) =>
            Math.max(0, Math.min(prev + dir, ALL_MEMORIES.length - 1))
          );
          setTimeout(() => { isTransitioning.current = false; }, COOLDOWN_MS);
        }
      }
    };

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const idx = currentIndexRef.current;
      if (idx < ALL_MEMORIES.length - 1) {
        const rect = sectionRef.current.getBoundingClientRect();
        if (rect.top < 0) {
          sectionRef.current.scrollIntoView({ behavior: "instant" });
        }
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    container.addEventListener("scroll", handleScroll);
    return () => {
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("scroll", handleScroll);
    };
  }, [containerRef]);

  const memory = ALL_MEMORIES[displayIndex];

  return (
    <section
      ref={sectionRef}
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url(${scrapbookBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{
        position: "absolute",
        inset: 0,
        background: "rgba(255,255,255,0.35)",
        zIndex: 0,
      }} />
      <h2 style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: "clamp(2rem, 5vw, 3.5rem)",
        fontWeight: 700,
        color: "#5a7a5a",
        marginBottom: "2.5rem",
        position: "absolute",
        top: "3rem",
        zIndex: 1,
      }}>
        memory lane
      </h2>

      {currentIndex < ALL_MEMORIES.length - 1 && (
        <p style={{
          position: "absolute",
          top: "8rem",
          fontFamily: "'Gaegu', cursive",
          color: "#4a6a4a",
          fontSize: "0.95rem",
          zIndex: 1,
          animation: "fadeIn 1s ease infinite alternate",
        }}>
          scroll for more ↓
        </p>
      )}

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          transition: "opacity 0.3s ease",
          opacity: imagesLoaded && fade ? 1 : 0,
          zIndex: 1,
        }}
      >
        {memory.images.length === 4 ? (() => {
          const seed = displayIndex * 7;
          const flowerSrc = FLOWERS[seed % FLOWERS.length];
          const corners = [
            { top: "-40px", left: "-35px", rotate: "-23deg" },
            { top: "-40px", right: "-35px", rotate: "23deg" },
            { bottom: "-5px", right: "-35px", rotate: "23deg" },
            { bottom: "-5px", left: "-35px", rotate: "-23deg" },
          ];
          const corner = corners[seed % corners.length];
          return (
            <div style={{
              background: "#fff",
              padding: "12px 12px 50px 12px",
              boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
              position: "relative",
            }}>
              <img src={flowerSrc} alt="" style={{
                position: "absolute",
                width: "100px",
                height: "100px",
                transform: `rotate(${corner.rotate})`,
                zIndex: 2,
                pointerEvents: "none",
                ...corner,
              }} />
              <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "6px",
              }}>
                {memory.images.map((src, i) => (
                  <img key={i} src={src} alt="" style={{
                    width: "min(160px, 20vw)",
                    height: "min(160px, 20vh)",
                    objectFit: "cover",
                    display: "block",
                  }} />
                ))}
              </div>
            </div>
          );
        })() : (
        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          {memory.images.map((src, i) => {
            const seed = displayIndex * 7 + i * 13;
            const flowerSrc = FLOWERS[seed % FLOWERS.length];
            const corners = [
              { top: "-40px", left: "-35px", rotate: "-23deg" },
              { top: "-40px", right: "-35px", rotate: "23deg" },
              { bottom: "-5px", right: "-35px", rotate: "23deg" },
              { bottom: "-5px", left: "-35px", rotate: "-23deg" },
            ];
            const corner = corners[(seed + i * 3) % corners.length];
            const showFlower = memory.images.length === 1 || i === 0;
            return (
            <div key={i} style={{
              background: "#fff",
              padding: "12px 12px 50px 12px",
              boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
              position: "relative",
            }}>
              {showFlower && <img src={flowerSrc} alt="" style={{
                position: "absolute",
                width: "100px",
                height: "100px",
                transform: `rotate(${corner.rotate})`,
                zIndex: 2,
                pointerEvents: "none",
                ...corner,
              }} />}
              <img src={src} alt="" style={{
                maxHeight: memory.images.length > 1 ? "min(250px, 30vh)" : "min(280px, 35vh)",
                maxWidth: memory.images.length > 1 ? "min(220px, 30vw)" : "min(280px, 35vw)",
                display: "block",
              }} />
            </div>
            );
          })}
        </div>
        )}
        <p style={{
          fontFamily: "'Gamja Flower', cursive",
          color: "#5a7a5a",
          fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
          letterSpacing: "0.02em",
          textAlign: "center",
          marginTop: "2.5rem",
        }}>
          {memory.label}
        </p>
      </div>

      <p style={{
        position: "absolute",
        bottom: "2rem",
        fontFamily: "'DM Sans', sans-serif",
        color: "rgba(90,122,90,0.6)",
        fontSize: "0.85rem",
        zIndex: 1,
      }}>
        {displayIndex + 1} / {ALL_MEMORIES.length}
      </p>

    </section>
  );
}

function MainPage() {
  const [revealCount, setRevealCount] = useState(1);
  const [openIndex, setOpenIndex] = useState(null);
  const [envelopeOpen, setEnvelopeOpen] = useState(false);
  const [envelopeShaking, setEnvelopeShaking] = useState(false);
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
      {/* Section 1 — Polaroid landing */}
      <section style={{
        width: "100%",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
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
          altSrc={rockclimbing}
          caption="ur so cool"
          rotate={4}
          top="28%"
          left="28%"
          delay={0.9}
          zIndex={1}
        />

        {/* Faint circle arc */}
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

        {/* Sparkles - far left edge */}
        <Sparkle size={28} top="8%" left="3%" delay={1.5} />
        <Sparkle size={20} top="40%" left="2%" delay={1.8} />
        <Sparkle size={32} top="70%" left="4%" delay={2.0} />
        <Sparkle size={18} top="90%" left="8%" delay={2.3} />

        {/* Sparkles - far right edge */}
        <Sparkle size={30} top="5%" right="3%" delay={1.6} color="#e8c97a" />
        <Sparkle size={22} top="88%" right="4%" delay={2.1} />
        <Sparkle size={26} top="92%" right="15%" delay={1.9} />

        {/* Sparkles - top & bottom edges */}
        <Sparkle size={24} top="3%" left="25%" delay={1.7} color="#e8c97a" />
        <Sparkle size={18} top="4%" left="45%" delay={2.0} />
        <Sparkle size={20} top="93%" left="40%" delay={2.2} />
        <Sparkle size={28} top="92%" left="60%" delay={1.8} color="#e8c97a" />

        {/* Dots */}
        <Dot size={4} top="25%" left="45%" delay={2.0} />
        <Dot size={6} top="15%" right="25%" delay={2.2} />
        <Dot size={3} top="60%" left="50%" delay={2.4} />
        <Dot size={5} top="85%" left="20%" delay={2.1} />
        <Dot size={4} top="45%" right="30%" delay={2.3} />
        <Dot size={3} top="80%" right="25%" delay={2.5} />
        <Dot size={5} top="12%" left="32%" delay={1.8} />

        <img src={ellipse} alt="" style={{
          position: "absolute",
          width: "clamp(400px, 45vw, 650px)",
          height: "auto",
          right: "25%",
          bottom: "-35%",
          opacity: 0,
          animation: "fadeIn 1.2s ease forwards 1.4s",
          pointerEvents: "none",
        }} />
      </section>

      {/* Section 2 — Birthday message with Snoopy */}
      <Section2 />

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
                zIndex: openIndex === i ? 9999 : 30,
                opacity: i < revealCount ? 1 : 0,
                pointerEvents: i < revealCount ? "auto" : "none",
                transition: "opacity 0.6s ease",
              }}
            >
              <MessageButterfly
                message={msg}
                index={i}
                position={{ rotate: pos.rotate }}
                side={pos.left ? "left" : "right"}
                onOpenChange={(isOpen) => setOpenIndex(isOpen ? i : null)}
              />
            </div>
          );
        })}
      </section>

      {/* Section 4 — From Spwicee */}
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
      }}>
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          fontWeight: 700,
          color: "#2a2a2a",
          position: "absolute",
          top: "3rem",
        }}>
          a gift
        </h2>

        {!envelopeOpen && (
          <>
            <div
              onClick={() => {
                setEnvelopeShaking(true);
                setTimeout(() => {
                  setEnvelopeShaking(false);
                  setEnvelopeOpen(true);
                }, 600);
              }}
              style={{
                width: "clamp(200px, 30vw, 350px)",
                marginTop: "0",
                overflow: "hidden",
                cursor: "pointer",
                animation: envelopeShaking ? "envelopeShake 0.6s ease" : "none",
              }}
            >
              <img src={envelope} alt="envelope" style={{
                width: "140%",
                height: "auto",
                display: "block",
                margin: "-25% 0 -15% -25%",
              }} />
            </div>
            <p style={{
              fontFamily: "'Gaegu', cursive",
              color: "#5a7a5a",
              fontSize: "1.2rem",
              marginTop: "-0.5rem",
            }}>
              click me!
            </p>
          </>
        )}

        {envelopeOpen && (
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            animation: "memoryFade 0.8s ease both",
            marginTop: "2rem",
          }}>
            <div style={{
              display: "flex",
              gap: "2rem",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
            }}>
              <img src={lostInDreams} alt="Lost in Dreams" style={{
                width: "min(280px, 35vw)",
                height: "min(300px, 35vh)",
                objectFit: "cover",
                display: "block",
                borderRadius: "8px",
                boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
              }} />
              <img src={spaImg} alt="Spa" style={{
                width: "min(280px, 35vw)",
                height: "min(300px, 35vh)",
                objectFit: "cover",
                display: "block",
                borderRadius: "8px",
                boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
              }} />
            </div>
            <p style={{
              fontFamily: "'Gaegu', cursive",
              color: "#5a7a5a",
              fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
              textAlign: "center",
              marginTop: "1.5rem",
              lineHeight: 1.6,
            }}>
              lost in dreams ticket and $30 for self care &lt;3<br />you deserve it<br />from spwicee
            </p>
          </div>
        )}

        <Sparkle size={30} top="8%" left="6%" delay={0.2} color="#5a7a5a" rotate={20} />
        <Sparkle size={22} top="15%" right="10%" delay={0.5} color="#c9a8a0" rotate={-15} />
        <Sparkle size={26} bottom="20%" left="12%" delay={0.8} color="#5a7a5a" rotate={35} />
        <Sparkle size={18} bottom="12%" right="8%" delay={1.0} color="#c9a8a0" rotate={-25} />
        <Sparkle size={24} top="40%" right="5%" delay={0.6} color="#5a7a5a" rotate={10} />
        <Sparkle size={20} bottom="35%" left="4%" delay={1.2} color="#c9a8a0" rotate={45} />

        <Dot size={8} top="12%" left="20%" delay={0.3} color="#5a7a5a" />
        <Dot size={6} top="22%" right="15%" delay={0.7} color="#c9a8a0" />
        <Dot size={10} bottom="18%" right="22%" delay={0.9} color="#5a7a5a" />
        <Dot size={7} bottom="28%" left="18%" delay={1.1} color="#c9a8a0" />
        <Dot size={5} top="50%" left="8%" delay={0.4} color="#5a7a5a" />

        <img src={FLOWERS[0]} alt="" style={{ position: "absolute", top: "10%", right: "3%", width: "80px", opacity: 0, animation: "fadeIn 0.8s ease forwards 0.4s", transform: "rotate(15deg)" }} />
        <img src={FLOWERS[2]} alt="" style={{ position: "absolute", bottom: "8%", left: "5%", width: "70px", opacity: 0, animation: "fadeIn 0.8s ease forwards 0.8s", transform: "rotate(-20deg)" }} />
        <img src={FLOWERS[4]} alt="" style={{ position: "absolute", top: "5%", left: "3%", width: "60px", opacity: 0, animation: "fadeIn 0.8s ease forwards 0.6s", transform: "rotate(30deg)" }} />
        <img src={FLOWERS[1]} alt="" style={{ position: "absolute", bottom: "10%", right: "6%", width: "75px", opacity: 0, animation: "fadeIn 0.8s ease forwards 1.0s", transform: "rotate(-10deg)" }} />
        <img src={FLOWERS[3]} alt="" style={{ position: "absolute", top: "55%", right: "12%", width: "50px", opacity: 0, animation: "fadeIn 0.8s ease forwards 1.2s", transform: "rotate(25deg)" }} />
        <img src={FLOWERS[5]} alt="" style={{ position: "absolute", bottom: "40%", left: "2%", width: "55px", opacity: 0, animation: "fadeIn 0.8s ease forwards 0.9s", transform: "rotate(-35deg)" }} />
      </section>

      {/* Section 5 — Memory lane */}
      <MemoryLane containerRef={containerRef} />
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
        @import url('https://fonts.googleapis.com/css2?family=Gaegu&family=Gamja+Flower&family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@300;400;500&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }

        @keyframes fadeInLine {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes memorySlideIn {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes memorySlideInReverse {
          from { opacity: 0; transform: translateY(-40px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes memoryFade {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes envelopeShake {
          0%, 100% { transform: rotate(0deg); }
          15% { transform: rotate(-5deg); }
          30% { transform: rotate(5deg); }
          45% { transform: rotate(-4deg); }
          60% { transform: rotate(4deg); }
          75% { transform: rotate(-2deg); }
          90% { transform: rotate(2deg); }
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
