import { useEffect, useRef, useState } from "react";
import audioUrl from "@/assets/raag-sitar.mp3";

/**
 * Floating background-music player. Browsers block autoplay, so the raga
 * starts on the visitor's first interaction anywhere on the page and can be
 * toggled from the floating disc control.
 */
export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const kickOff = () => {
      audio
        .play()
        .then(() => {
          setPlaying(true);
          setStarted(true);
        })
        .catch(() => {
          setPlaying(false);
          setStarted(true);
        });
    };

    const onFirstGesture = () => {
      kickOff();
      window.removeEventListener("pointerdown", onFirstGesture);
      window.removeEventListener("keydown", onFirstGesture);
    };

    window.addEventListener("pointerdown", onFirstGesture, { once: true });
    window.addEventListener("keydown", onFirstGesture, { once: true });
    return () => {
      window.removeEventListener("pointerdown", onFirstGesture);
      window.removeEventListener("keydown", onFirstGesture);
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play().catch(() => setPlaying(false));
      setPlaying(true);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2">
      <audio ref={audioRef} src={audioUrl} loop preload="auto" />
      <span
        className={`rounded-full bg-maroon-deep/85 px-3 py-1 text-[11px] text-gold-soft shadow-lg transition-opacity duration-700 ${
          started ? "opacity-0" : "opacity-100"
        }`}
      >
        Tap anywhere for the raga
      </span>
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Pause music" : "Play music"}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-maroon-deep text-gold shadow-xl ring-1 ring-gold/60 transition hover:scale-105"
      >
        <span
          className={`absolute inset-0 rounded-full border border-dashed border-gold/50 ${
            playing ? "animate-spin-slow" : ""
          }`}
        />
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
          {playing ? (
            <>
              <rect x="6" y="5" width="4" height="14" rx="1" />
              <rect x="14" y="5" width="4" height="14" rx="1" />
            </>
          ) : (
            <path d="M8 5.5v13l11-6.5z" />
          )}
        </svg>
      </button>
    </div>
  );
}
