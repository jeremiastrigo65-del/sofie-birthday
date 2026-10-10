import { useEffect, useMemo, useRef, useState } from "react";
import "./App.css";

/* ===== EDIT THESE ===== */
const HER_NAME = "Sofie";
const FROM_NAME = "Jem";
const MESSAGE =
 "Happy birthday sof I wish u all the best in life, more happiness, success, love, and blessings. I hope u achieve all ur dreams and get everything that ur heart wishes for. Always take care of urself. Enjoy ur day 💗";
// Your memory photos (put them in the public folder). Edit the captions!
const SLIDES = [
  { src: "/white.jpg", caption: "" },
  { src: "/us.jpg", caption: "happy birthday HAHHAHAHA" },
  { src: "/us3.jpg", caption: "My favorite day with you" },
  { src: "/us4.jpg", caption: "Always you" },
];
/* ====================== */

const SONG1 = "/song.mp3";
const SONG2 = "/song2.mp3";
const VIDEO = "/vide.mp4"; // put your video in the public folder (use "" to turn it off)

const css = (v) => v;
const rnd = (a, b) => a + Math.random() * (b - a);

const FLOWERS = [
  { x: 5, h: 120, s: 70, c: "#f48fb1", i: "#ffd9e4" },
  { x: 15, h: 80, s: 56, c: "#fff1f5", i: "#ffd0dc" },
  { x: 25, h: 150, s: 80, c: "#e8668f", i: "#f9b4c9" },
  { x: 36, h: 95, s: 60, c: "#f7b79a", i: "#ffe0d0" },
  { x: 47, h: 60, s: 48, c: "#c3a9f0", i: "#e6dcfb" },
  { x: 58, h: 105, s: 62, c: "#fff1f5", i: "#ffd0dc" },
  { x: 69, h: 150, s: 80, c: "#f48fb1", i: "#ffd9e4" },
  { x: 80, h: 85, s: 58, c: "#f7b79a", i: "#ffe0d0" },
  { x: 90, h: 125, s: 72, c: "#e8668f", i: "#f9b4c9" },
  { x: 97, h: 75, s: 54, c: "#c3a9f0", i: "#e6dcfb" },
];

function Bloom({ c, i }) {
  const ring = (n, off) => Array.from({ length: n }, (_, k) => k * (360 / n) + off);
  return (
    <svg className="bloom" viewBox="-50 -50 100 100" aria-hidden="true">
      {ring(8, 0).map((a) => (
        <ellipse key={a} cy="-24" rx="12" ry="23" fill={c} stroke="rgba(0,0,0,.12)" transform={`rotate(${a})`} />
      ))}
      {ring(8, 22.5).map((a) => (
        <ellipse key={a} cy="-15" rx="8" ry="15" fill={i} fillOpacity=".9" transform={`rotate(${a})`} />
      ))}
      <circle r="8" fill="#e9a93f" />
      {ring(6, 0).map((a) => (
        <circle key={a} r="1.3" cx="0" cy="-4" fill="#fff1c4" transform={`rotate(${a})`} />
      ))}
    </svg>
  );
}

function Cake({ lit }) {
  const dripsA = [52, 78, 104, 131, 160, 188, 214, 238];
  const dripsB = [88, 112, 140, 166, 192, 208];
  const hA = [22, 34, 18, 30, 24, 36, 20, 28];
  const hB = [20, 30, 16, 28, 22, 18];
  return (
    <svg className="cake" viewBox="0 0 300 310" aria-label="Birthday cake">
      <defs>
        <linearGradient id="shade" x1="0" x2="1">
          <stop offset="0" stopColor="#000" stopOpacity=".14" />
          <stop offset=".45" stopColor="#fff" stopOpacity=".1" />
          <stop offset="1" stopColor="#000" stopOpacity=".12" />
        </linearGradient>
        <radialGradient id="glow">
          <stop offset="0" stopColor="#ffd98a" stopOpacity=".9" />
          <stop offset="1" stopColor="#ffd98a" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="150" cy="296" rx="140" ry="12" fill="rgba(0,0,0,.35)" />
      <ellipse cx="150" cy="288" rx="135" ry="14" fill="#efdfe5" />
      <ellipse cx="150" cy="284" rx="125" ry="11" fill="#fff4f7" />

      <rect x="40" y="200" width="220" height="84" rx="10" fill="#f9c9d8" />
      <rect x="40" y="200" width="220" height="14" rx="7" fill="#fff4f7" />
      {dripsA.map((x, n) => (
        <rect key={x} x={x} y="206" width="14" height={hA[n]} rx="7" fill="#fff4f7" />
      ))}
      <rect x="40" y="200" width="220" height="84" rx="10" fill="url(#shade)" />
      {Array.from({ length: 9 }, (_, n) => (
        <circle key={n} cx={56 + n * 23} cy="272" r="4.5" fill="#fff" />
      ))}

      <rect x="75" y="135" width="150" height="66" rx="10" fill="#fff0f4" />
      <rect x="75" y="135" width="150" height="13" rx="6" fill="#f06292" />
      {dripsB.map((x, n) => (
        <rect key={x} x={x} y="141" width="12" height={hB[n]} rx="6" fill="#f06292" />
      ))}
      <rect x="75" y="135" width="150" height="66" rx="10" fill="url(#shade)" />
      {Array.from({ length: 7 }, (_, n) => (
        <circle key={n} cx={92 + n * 19} cy="189" r="3.8" fill="#f9c9d8" />
      ))}

      {[92, 208].map((x) => (
        <g key={x} transform={`translate(${x} 132)`}>
          <ellipse cx="-9" cy="2" rx="8" ry="3.5" fill="#5a8f5e" transform="rotate(-20 -9 2)" />
          <ellipse cx="9" cy="2" rx="8" ry="3.5" fill="#5a8f5e" transform="rotate(20 9 2)" />
          {[0, 72, 144, 216, 288].map((a) => (
            <ellipse key={a} cy="-6" rx="4.5" ry="7" fill="#f48fb1" transform={`rotate(${a})`} />
          ))}
          <circle r="3" fill="#ffcf7a" />
        </g>
      ))}

      {[128, 150, 172].map((x, n) => (
        <g key={x} transform={`translate(${x} 98)`}>
          <rect x="-4" y="0" width="8" height="37" rx="2" fill="#fff0d6" />
          <rect x="-4" y="9" width="8" height="4" fill="#f48fb1" />
          <rect x="-4" y="21" width="8" height="4" fill="#f48fb1" />
          <line y1="0" y2="-5" stroke="#5b4636" strokeWidth="1.5" />
          <g className={`flame ${lit ? "" : "out"}`} style={css({ "--fd": `${n * 0.35}s` })}>
            <circle cy="-18" r="26" fill="url(#glow)" />
            <path d="M0 -4 C-7 -13 -4 -24 0 -33 C4 -24 7 -13 0 -4Z" fill="#ffb347" />
            <path d="M0 -4 C-3 -10 -2 -17 0 -22 C2 -17 3 -10 0 -4Z" fill="#fff3c4" />
          </g>
          {!lit && <path className="smoke" d="M0 -6 C-6 -16 6 -24 0 -34 C-5 -42 4 -50 0 -58" />}
        </g>
      ))}
    </svg>
  );
}

function Garden({ base, step }) {
  return (
    <div className="garden" aria-hidden="true">
      {FLOWERS.map((f, n) => (
        <div key={n} className="stem-wrap" style={css({ left: `${f.x}%`, "--h": `${f.h}px`, "--s": `${f.s}px`, "--d": `${base + n * step}s` })}>
          <div className="stem" />
          <div className="leaf l" />
          <div className="leaf r" />
          <Bloom c={f.c} i={f.i} />
        </div>
      ))}
    </div>
  );
}

const HEADS = [
  { x: 150, y: 58, s: 92, c: "#f48fb1", i: "#ffd9e4" },
  { x: 96, y: 80, s: 80, c: "#c3a9f0", i: "#e6dcfb" },
  { x: 204, y: 80, s: 80, c: "#f7b79a", i: "#ffe0d0" },
  { x: 62, y: 118, s: 66, c: "#fff1f5", i: "#ffd0dc" },
  { x: 238, y: 118, s: 66, c: "#e8668f", i: "#f9b4c9" },
  { x: 122, y: 106, s: 84, c: "#e8668f", i: "#f9b4c9" },
  { x: 180, y: 108, s: 84, c: "#fff1f5", i: "#ffd0dc" },
  { x: 150, y: 138, s: 70, c: "#f48fb1", i: "#ffd9e4" },
];

function Bouquet() {
  return (
    <div className="bouquet" aria-hidden="true">
      <svg className="bq-leaves" viewBox="0 0 300 300">
        <g transform="translate(150 165)">
          {[-64, -40, -16, 16, 40, 64].map((a, n) => (
            <ellipse key={a} cy="-98" rx="15" ry="50" fill={n % 2 ? "#3f7a4d" : "#4f8a5b"} transform={`rotate(${a})`} />
          ))}
        </g>
      </svg>
      {HEADS.map((h, n) => (
        <div key={n} className="bq-head" style={css({ "--x": `${h.x}px`, "--y": `${h.y}px`, "--s": `${h.s}px`, "--d": `${2.5 + n * 0.5}s` })}>
          <Bloom c={h.c} i={h.i} />
        </div>
      ))}
      <svg className="bq-paper" viewBox="0 0 300 300">
        <path d="M62 142 Q80 124 100 138 Q120 122 140 136 Q160 122 180 136 Q200 122 220 138 Q240 124 240 144 C246 196 196 252 176 292 L124 292 C104 252 54 196 62 142Z" fill="#f9c9d8" />
        <path d="M96 150 Q150 128 204 150 C216 200 186 252 170 292 L130 292 C114 252 84 200 96 150Z" fill="#fff4f7" />
        <path d="M96 150 Q150 128 204 150" stroke="#f48fb1" strokeWidth="3" fill="none" />
        <path d="M104 214 Q150 228 196 214 L192 232 Q150 246 108 232Z" fill="#e8668f" />
        <path d="M146 232 L130 270 L146 262Z" fill="#c2335f" />
        <path d="M154 232 L170 270 L154 262Z" fill="#c2335f" />
        <ellipse cx="127" cy="222" rx="23" ry="11" transform="rotate(-18 127 222)" fill="#e8668f" />
        <ellipse cx="173" cy="222" rx="23" ry="11" transform="rotate(18 173 222)" fill="#e8668f" />
        <circle cx="150" cy="226" r="8" fill="#c2335f" />
      </svg>
    </div>
  );
}

function Slideshow({ slides, children }) {
  const [i, setI] = useState(0);
  const [failed, setFailed] = useState([]);
  const list = slides.map((s, n) => ({ ...s, n })).filter((s) => !failed.includes(s.n));
  const last = list.length - 1;
  const cur = Math.min(i, last);

  useEffect(() => {
    if (cur >= last) return;
    const t = window.setTimeout(() => setI(cur + 1), 5200);
    return () => clearTimeout(t);
  }, [cur, last]);

  return (
    <div className="show">
      <div className="slides" onClick={() => setI(Math.min(cur + 1, last))}>
        {list.map((s, k) => (
          <figure key={s.n} className={`slide ${k === cur ? "on" : ""}`}>
            <div className="ph">
              <img src={s.src} alt="" onError={() => setFailed((f) => [...f, s.n])} />
            </div>
            <figcaption>{s.caption}</figcaption>
          </figure>
        ))}
      </div>
      <div className="dots" aria-hidden="true">
        {list.map((s, k) => (
          <i key={s.n} className={k === cur ? "on" : ""} />
        ))}
      </div>
      {cur >= last && children}
    </div>
  );
}

function useTypewriter(text, active) {
  const [out, setOut] = useState("");
  useEffect(() => {
    if (!active) return;
    let n = 0;
    let id;
    const start = window.setTimeout(() => {
      id = window.setInterval(() => {
        n++;
        setOut(text.slice(0, n));
        if (n >= text.length) clearInterval(id);
      }, 120);
    }, 5500);
    return () => {
      clearTimeout(start);
      clearInterval(id);
    };
  }, [text, active]);
  return out;
}

export default function App() {
  const [leaving, setLeaving] = useState(false);
  const [opened, setOpened] = useState(false);
  const [lit, setLit] = useState(true);
  const [muted, setMuted] = useState(false);
  const [burst, setBurst] = useState(0);
  const audioRef = useRef(null);
  const micRef = useRef(null);
  const sceneRef = useRef(null);
  const [listening, setListening] = useState(false);
  const [finale, setFinale] = useState(false);
  const [claimed, setClaimed] = useState(false);
  const [playing, setPlaying] = useState(false);
  const finaleTimer = useRef(null);
  const typed = useTypewriter(MESSAGE, opened);

  const petals = useMemo(
    () =>
      Array.from({ length: 26 }, (_, n) => ({
        left: rnd(0, 100), size: rnd(8, 20), dur: rnd(9, 18), delay: -rnd(0, 18), drift: rnd(-90, 90),
        color: ["#ffb3cb", "#f48fb1", "#ffd9e4", "#ffffff", "#f7b79a"][n % 5],
      })),
    []
  );
  const stars = useMemo(
    () => Array.from({ length: 40 }, () => ({ x: rnd(0, 100), y: rnd(0, 70), d: rnd(2, 5), s: rnd(1, 2.5) })),
    []
  );
  const hearts = useMemo(
    () =>
      Array.from({ length: 90 }, (_, n) => {
        const a = rnd(0, Math.PI * 2), r = rnd(120, 520);
        return {
          tx: Math.cos(a) * r,
          ty: Math.sin(a) * r - 80,
          size: rnd(22, 56),
          delay: rnd(0, 1.2),
          color: ["#ff5c8a", "#f48fb1", "#ffd9e4", "#ff8fab", "#ffffff"][n % 5],
        };
      }),
    []
  );

  const openSurprise = () => {
    setLeaving(true);
    audioRef.current?.play().catch(() => {});
    window.setTimeout(() => setOpened(true), 2500);
  };
  const toggleMute = () => {
    if (audioRef.current) audioRef.current.muted = !muted;
    setMuted(!muted);
  };
  const playSong = (src) => {
    const a = audioRef.current;
    if (!a) return;
    a.src = src;
    a.loop = true;
    a.volume = 1;
    a.play().catch(() => {});
  };
  const startVideo = () => {
    audioRef.current?.pause();
    setPlaying(true);
  };
  const stopVideo = () => {
    setPlaying(false);
    audioRef.current?.play().catch(() => {});
  };
  const resumeMusic = () => {
    const a = audioRef.current;
    if (!a) return;
    a.volume = 1;
    if (a.paused) a.play().catch(() => {});
  };
  useEffect(() => () => { micRef.current?.stop(); clearTimeout(finaleTimer.current); }, []);

  const stopMic = () => {
    micRef.current?.stop();
    micRef.current = null;
    setListening(false);
    resumeMusic();
    window.setTimeout(resumeMusic, 600);
  };
  const blowOut = () => {
    stopMic();
    sceneRef.current?.style.setProperty("--breath", "0");
    setLit(false);
    setBurst((b) => b + 1);
    clearTimeout(finaleTimer.current);
    finaleTimer.current = window.setTimeout(() => {
      setFinale(true);
      playSong(SONG2);
    }, 6000);
  };
  const startListening = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: { echoCancellation: true, noiseSuppression: false, autoGainControl: false },
      });
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const analyser = ctx.createAnalyser();
      analyser.fftSize = 1024;
      ctx.createMediaStreamSource(stream).connect(analyser);
      const data = new Uint8Array(analyser.fftSize);
      let raf, strong = 0, base = 0, frames = 0;
      const tick = () => {
        analyser.getByteTimeDomainData(data);
        let sum = 0;
        for (const v of data) {
          const x = (v - 128) / 128;
          sum += x * x;
        }
        const rms = Math.sqrt(sum / data.length);
        if (frames < 30) {
          base = Math.max(base, rms);
          frames++;
        } else {
          const limit = base * 2.5 + 0.08;
          const level = Math.min(1, Math.max(0, (rms - base) / (limit - base)));
          sceneRef.current?.style.setProperty("--breath", level.toFixed(2));
          strong = rms > limit ? strong + 1 : 0;
          if (strong > 10) return blowOut();
        }
        raf = requestAnimationFrame(tick);
      };
      micRef.current = {
        stop: () => {
          cancelAnimationFrame(raf);
          stream.getTracks().forEach((t) => t.stop());
          ctx.close();
        },
      };
      if (audioRef.current) audioRef.current.volume = 0.2;
      setListening(true);
      tick();
    } catch {
      blowOut(); // no microphone allowed: just blow them out
    }
  };
  const wish = () => {
    if (!lit) {
      clearTimeout(finaleTimer.current);
      setFinale(false);
      setClaimed(false);
      setLit(true);
      resumeMusic();
    }
    else if (listening) blowOut();
    else startListening();
  };

  return (
    <>
      <audio ref={audioRef} src={SONG1} loop preload="auto" />

      {!opened && (
        <div className={`gate ${leaving ? "leaving" : ""}`}>
          <p className="gate-for">For {HER_NAME}</p>
          <button className="seal" onClick={openSurprise} aria-label="Open your surprise">
            <span className="seal-ring" />
            <svg viewBox="0 0 24 24" width="44" height="44" fill="#fff4f0" aria-hidden="true">
              <path d="M12 21s-7.5-4.6-9.6-9.3C.9 8.3 2.8 5 6 5c2.1 0 3.6 1.1 4.6 2.6.5.7 1.4.7 1.9 0C13.4 6.1 14.9 5 17 5c3.2 0 5.1 3.3 3.6 6.7C19.5 16.4 12 21 12 21z" />
            </svg>
          </button>
          <p className="gate-hint">Tap to open</p>
        </div>
      )}

      {opened && (
        <main ref={sceneRef} className={`scene ${lit ? "lit" : "dim"}`}>
          <div className="glow" />
          {stars.map((s, n) => (
            <i key={n} className="star" style={css({ left: `${s.x}%`, top: `${s.y}%`, "--d": `${s.d}s`, width: s.s, height: s.s })} />
          ))}
          {petals.map((p, n) => (
            <i key={n} className="petal" style={css({ left: `${p.left}%`, "--size": `${p.size}px`, "--dur": `${p.dur}s`, "--delay": `${p.delay}s`, "--drift": `${p.drift}px`, "--c": p.color })} />
          ))}

          <button className="mute" onClick={toggleMute} aria-label={muted ? "Unmute music" : "Mute music"}>
            {muted ? "Sound off" : "Sound on"}
          </button>

          <section className="content">
            <h1 className="title">
              <span className="hb">Happy Birthday</span>
              <span className="name">{HER_NAME}</span>
            </h1>
            <div className="cake-wrap">
              <Cake lit={lit} />
            </div>
            <p className="message">{typed}</p>
            {typed.length >= MESSAGE.length && (
              <button className="wish" onClick={wish}>
                {!lit ? "" : listening ? "Blow the candle after Wish" : "Make a wish"}
              </button>
            )}
            {!lit && (
              <p className="from">
                Your wish is safe with me.
                <br />
                Sincerity, {FROM_NAME}
              </p>
            )}
          </section>

          <Garden base={2} step={1.5} />

          {finale && (
            <div className={`finale ${claimed ? "claimed" : ""}`}>
              <Garden base={1} step={0.5} />
              <Bouquet />
              {!claimed ? (
                <button className="claim" onClick={() => { setClaimed(true); resumeMusic(); }}>Claim </button>
              ) : (
                <Slideshow slides={SLIDES}>
                  {VIDEO && <button className="claim vid-btn" onClick={startVideo}>V</button>}
                  <button className="f-back" onClick={() => { setFinale(false); setClaimed(false); playSong(SONG1); }}>Back to the cake</button>
                </Slideshow>
              )}
            </div>
          )}

          {playing && (
            <div className="vid-overlay">
              <video src={VIDEO} controls autoPlay playsInline onEnded={stopVideo} onError={stopVideo} />
              <button className="f-back" onClick={stopVideo}>Close</button>
            </div>
          )}

          {burst > 0 && (
            <div key={burst} className="burst" aria-hidden="true">
              {hearts.map((h, n) => (
                <span key={n} style={css({ "--tx": `${h.tx}px`, "--ty": `${h.ty}px`, fontSize: h.size, color: h.color, animationDelay: `${h.delay}s` })}>
                  ♥
                </span>
              ))}
            </div>
          )}
        </main>
      )}
    </>
  );
}