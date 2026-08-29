import { useEffect, useState } from "react";
import { finishIntro } from "@/lib/intro-ready";
import { profile } from "@/lib/site-data";
import "./LoadingScreen.css";

const CHARSET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ<>/|{}[]_;:!?@#$%&*+-=";

const randomChar = () => CHARSET[Math.floor(Math.random() * CHARSET.length)] ?? "A";

const deterministicChar = (index: number) => CHARSET[(index * 7 + 3) % CHARSET.length] ?? "A";

const scrambleText = (text: string) =>
  text
    .split("")
    .map((char) => (char === " " ? " " : randomChar()))
    .join("");

const initialScramble = (text: string) =>
  text
    .split("")
    .map((char, index) => (char === " " ? " " : deterministicChar(index)))
    .join("");

const buildBuffer = (text: string, resolved: number) =>
  text.slice(0, resolved) + scrambleText(text.slice(resolved));

interface LoadingScreenProps {
  resolveInterval?: number;
  caption?: string;
}

const LoadingScreen = ({ resolveInterval = 100, caption = "Cargando" }: LoadingScreenProps) => {
  const text = profile.shortName.toUpperCase();
  const [resolved, setResolved] = useState(0);
  const [buffer, setBuffer] = useState(() => initialScramble(text));
  const [phase, setPhase] = useState<"loading" | "done">("loading");
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, []);

  useEffect(() => {
    if (resolved >= text.length) {
      const timeout = setTimeout(() => setPhase("done"), 600);
      return () => clearTimeout(timeout);
    }
    const timeout = setTimeout(() => {
      setResolved((prev) => prev + 1);
    }, resolveInterval);
    return () => clearTimeout(timeout);
  }, [resolved, text.length, resolveInterval]);

  useEffect(() => {
    if (resolved >= text.length) return;
    const interval = setInterval(() => {
      setBuffer(buildBuffer(text, resolved));
    }, 60);
    return () => clearInterval(interval);
  }, [resolved, text]);

  useEffect(() => {
    setBuffer(buildBuffer(text, resolved));
  }, [resolved, text]);

  useEffect(() => {
    if (phase !== "done") return;
    finishIntro();
    const timeout = setTimeout(() => setHidden(true), 750);
    return () => clearTimeout(timeout);
  }, [phase]);

  useEffect(() => {
    if (phase === "done") return;
    const safety = setTimeout(() => finishIntro(), 6000);
    return () => clearTimeout(safety);
  }, [phase]);

  if (hidden) {
    return null;
  }

  return (
    <div
      className={`loading-screen ${phase === "done" ? "loading-screen--done" : ""}`}
      aria-hidden="true"
    >
      <div className="loading-screen__content">
        <div className="loading-screen__text" data-text={buffer}>
          {buffer}
        </div>
        <div className="loading-screen__bar" />
        <div className="loading-screen__caption">{caption}</div>
      </div>
    </div>
  );
};

export default LoadingScreen;
