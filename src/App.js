import { useState, useRef } from "react";

const NO_PHRASES = [
  "No vena loosu Minola💔",
  "NO kudukathadi loosy baby! 💕",
  "Summa summa no kudtha aprom iruku?",
  "Adi vaanga pore loosu baby 😭",
  "Ummmmmmmmmaaaaaaaaaaaaaaahhhhhhh tharuve 💕 ?",
];

export default function App() {
  const [noClicks, setNoClicks] = useState(0);
  const [isValentine, setIsValentine] = useState(false);
  const [musicStarted, setMusicStarted] = useState(false);
  const [noPosition, setNoPosition] = useState({ top: "0px", left: "0px" });

  const audioRef = useRef(null);
  const yesButtonSize = noClicks * 18 + 16;

  // Teddy GIFs (unchanged)
  const firstImg =
    "https://media.tenor.com/VIChDQ6ejRQAAAAj/jumping-bear-hearts-no-png.gif";
  const secondImg =
    "https://media.tenor.com/f1xnRxTRxLAAAAAj/bears-with-kisses-bg.gif";

  const playMusic = () => {
    audioRef.current.play();
    setMusicStarted(true);
  };

  const moveNoButton = () => {
    const x = Math.random() * 300 - 150;
    const y = Math.random() * 200 - 100;

    setNoPosition({
      top: `${y}px`,
      left: `${x}px`,
    });

    setNoClicks((n) => n + 1);
  };

  return (
    <>
      {/* 🌸 GLOBAL CSS */}
      <style>{`
        html, body, #root {
          margin: 0;
          padding: 0;
          width: 100%;
          min-height: 100%;
        }

        .page {
          min-height: 100svh;
          min-height: 100dvh;
          width: 100vw;
          background: linear-gradient(135deg, #fff0f5, #ffe6eb);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: "Comic Sans MS", cursive;
          overflow: hidden;
          position: relative;
        }

        .card {
          background: rgba(255, 255, 255, 0.9);
          padding: 30px;
          border-radius: 24px;
          box-shadow: 0 12px 35px rgba(255, 105, 135, 0.35);
          text-align: center;
          max-width: 420px;
          width: 90%;
          position: relative;
          z-index: 2;
        }

        .petal {
          position: absolute;
          top: -40px;
          font-size: 22px;
          animation: fall 8s linear infinite;
          opacity: 0.85;
          z-index: 1;
        }

        @keyframes fall {
          0% { transform: translateY(-40px) rotate(0deg); }
          100% { transform: translateY(110vh) rotate(360deg); }
        }
      `}</style>

      {/* 🎵 Background Music */}
      <audio
        ref={audioRef}
        loop
        src="https://www.bensound.com/bensound-music/bensound-love.mp3"
      />

      {/* 🌹 Rose Petal Shower */}
      {[...Array(18)].map((_, i) => (
        <div
          key={i}
          className="petal"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.4}s`,
          }}
        >
          🌹
        </div>
      ))}

      <div className="page">
        {!musicStarted ? (
          <button
            onClick={playMusic}
            style={{
              fontSize: "20px",
              padding: "15px 28px",
              borderRadius: "30px",
              border: "none",
              background: "hotpink",
              color: "white",
              cursor: "pointer",
              zIndex: 2,
            }}
          >
            Tap to play music 🎵💖
          </button>
        ) : !isValentine ? (
          <div className="card">
            <img src={firstImg} alt="Teddy" />

            <h1 style={{ color: "#ff4d6d" }}>
              Will you be my Valentine Baby? 😘😘😘💘
            </h1>

            <button
              onClick={() => setIsValentine(true)}
              style={{
                fontSize: yesButtonSize,
                padding: "12px 26px",
                margin: "12px",
                backgroundColor: "#ff4d6d",
                color: "white",
                border: "none",
                borderRadius: "30px",
                cursor: "pointer",
              }}
            >
              YES 💖
            </button>

            <button
              onMouseEnter={moveNoButton}
              onClick={moveNoButton}
              style={{
                position: "relative",
                top: noPosition.top,
                left: noPosition.left,
                padding: "12px 26px",
                margin: "12px",
                backgroundColor: "#ff8fab",
                color: "white",
                border: "none",
                borderRadius: "30px",
                transition: "0.2s",
                cursor: "pointer",
              }}
            >
              {NO_PHRASES[Math.min(noClicks, NO_PHRASES.length - 1)]}
            </button>
          </div>
        ) : (
          <div className="card">
            <img src={secondImg} alt="Love Teddy" />
            <h1 style={{ color: "hotpink", fontSize: "42px" }}>
              hehehehe love you Minola Rukshali 😘😘😘😘💖🎉
            </h1>
            <p style={{ fontSize: "22px", color: "#ff4d6d" }}>
              Ummmmmmmaaaaaaaaaaahhhhhh Baby 😘😘😘😘😘💋💋💋💋💋💋💋💖💖💖💖💖💖
              Ummmmmmmaaaaaaaaaaahhhhhh Baby 😘😘😘😘😘💋💋💋💋💋💋💋💋💋💖💖💖💖
            </p>
          </div>
        )}
      </div>
    </>
  );
}
