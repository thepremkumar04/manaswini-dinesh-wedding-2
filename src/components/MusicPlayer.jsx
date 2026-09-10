import { useState } from "react";
import { Music, Volume2, VolumeX } from "lucide-react";

export default function MusicPlayer({ audioRef }) {
  const [playing, setPlaying] = useState(false);

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
      return;
    }

    try {
      await audioRef.current.play();
      setPlaying(true);
    } catch (error) {
      console.log("Music could not start:", error);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/music/wedding-music.mp3"
        preload="auto"
        loop
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />

      <button
        onClick={toggleMusic}
        aria-label={playing ? "Pause music" : "Play music"}
        className="fixed bottom-5 right-5 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 bg-maroon text-gold shadow-xl backdrop-blur-sm transition-transform hover:scale-105"
      >
        {playing ? (
          <Volume2 size={17} strokeWidth={1.5} />
        ) : (
          <VolumeX size={17} strokeWidth={1.5} />
        )}
      </button>
    </>
  );
}