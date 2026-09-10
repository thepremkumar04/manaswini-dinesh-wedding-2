import { useRef, useState } from "react";
import OpeningInvitation from "./components/OpeningInvitation";
import Hero from "./components/Hero";
import FamilySection from "./components/FamilySection";
import WeddingDetails from "./components/WeddingDetails";
import Venue from "./components/Venue";
import Countdown from "./components/Countdown";
import Blessing from "./components/Blessing";
import Finale from "./components/Finale";
import MusicPlayer from "./components/MusicPlayer";
import FallingPetals from "./components/FallingPetals";
import StudioSignature from "./components/StudioSignature";

export default function App() {
  const [invitationOpened, setInvitationOpened] = useState(false);
  const audioRef = useRef(null);

  const openInvitation = async () => {
    try {
      if (audioRef.current) {
        audioRef.current.volume = 0.45;
        await audioRef.current.play();
      }
    } catch (error) {
      console.log("Music could not start:", error);
    }

    setInvitationOpened(true);
  };

  return (
    <main>
  <FallingPetals />

  <MusicPlayer audioRef={audioRef} />

  {!invitationOpened ? (
    <OpeningInvitation onOpen={openInvitation} />
  ) : (
    <>
      <Hero />
      <FamilySection />
      <WeddingDetails />
      <Venue />
      <Countdown />
      <Blessing />
      <StudioSignature />
      <Finale />
    </>
  )}
</main>
  );
}