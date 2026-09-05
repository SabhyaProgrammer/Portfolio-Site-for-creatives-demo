import { useState, useRef, useEffect, useCallback } from 'react';

function formatTime(seconds) {
  if (!Number.isFinite(seconds) || seconds < 0) return '0:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// Static waveform bars for visual polish (not real audio analysis)
const WAVEFORM_BARS = [
  0.3, 0.5, 0.7, 0.4, 0.9, 0.6, 0.8, 0.3, 0.7, 0.5, 0.9, 0.4, 0.6, 0.8, 0.5,
  0.7, 0.3, 0.6, 0.9, 0.4, 0.7, 0.5, 0.8, 0.6, 0.3, 0.7, 0.5, 0.9, 0.4, 0.6,
];

export default function AudioPlayer({ src, title = 'Audio track' }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const togglePlay = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  }, []);

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (!audio) return;
    setCurrentTime(audio.currentTime);
    setProgress((audio.currentTime / audio.duration) * 100 || 0);
  };

  const handleLoadedMetadata = () => {
    const audio = audioRef.current;
    if (audio) setDuration(audio.duration);
  };

  const handleSeek = (e) => {
    const audio = audioRef.current;
    if (!audio) return;
    const time = Number(e.target.value);
    audio.currentTime = time;
    setCurrentTime(time);
    setProgress((time / audio.duration) * 100 || 0);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onEnded = () => setIsPlaying(false);
    audio.addEventListener('ended', onEnded);
    return () => audio.removeEventListener('ended', onEnded);
  }, []);

  return (
    <div className="border border-ink/10 bg-paper p-6 md:p-8" role="group" aria-label={`Audio player: ${title}`}>
      {/* Hidden native audio — no default controls exposed */}
      <audio
        ref={audioRef}
        src={src}
        preload="metadata"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      />

      <p className="mb-4 font-serif text-lg text-ink">{title}</p>

      {/* Static waveform visualization */}
      <div className="mb-6 flex h-12 items-end gap-0.5" aria-hidden="true">
        {WAVEFORM_BARS.map((height, i) => {
          const barProgress = (i / WAVEFORM_BARS.length) * 100;
          const isActive = barProgress <= progress;
          return (
            <div
              key={i}
              className={`w-1 transition-colors duration-150 ${isActive ? 'bg-accent' : 'bg-mist/30'}`}
              style={{ height: `${height * 100}%` }}
            />
          );
        })}
      </div>

      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={togglePlay}
          className="flex h-12 w-12 shrink-0 items-center justify-center border border-ink/20 text-ink transition-colors duration-reveal hover:border-accent hover:text-accent focus-ring"
          aria-label={isPlaying ? 'Pause audio' : 'Play audio'}
        >
          {isPlaying ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <rect x="6" y="4" width="4" height="16" />
              <rect x="14" y="4" width="4" height="16" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>

        <div className="flex flex-1 flex-col gap-1">
          <input
            type="range"
            min="0"
            max={duration || 0}
            step="0.1"
            value={currentTime}
            onChange={handleSeek}
            className="h-1.5 w-full cursor-pointer accent-accent focus-ring"
            aria-label="Seek audio"
          />
          <div className="flex justify-between text-xs text-mist">
            <span aria-live="polite">{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
