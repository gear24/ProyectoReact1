import React, { useState } from "react";
import MainContainer from "../../MicroComponents/MainContainer";
import PlayerControls from "../../MicroComponents/PlayerControls";
import PlayList from "../../MicroComponents/PlayList";
import { useLocation } from "react-router-dom";

export const Player = () => {
  const location = useLocation();
  const { selectedSong } = location.state || {}; // Recibe la canción seleccionada desde la MiniCard o nada si no hay selección
  const [currentTrack, setCurrentTrack] = useState(selectedSong || null); // Usa la canción seleccionada si está disponible

  return (
    <>
      <MainContainer>
        {/* Si no hay canción seleccionada, muestra un mensaje */}
        {currentTrack ? (
          <>
            <PlayerControls
              image={currentTrack.image}
              title={currentTrack.title}
              artist={currentTrack.artist}
              duration={currentTrack.duration}
            />

          </>
        ) : (
          <p>Select a song to play</p>
        )}

        <div className="large-space"></div>

        {/* PlayList recibe la función para actualizar la canción seleccionada */}
        <PlayList setCurrentTrack={setCurrentTrack} />
      </MainContainer>
    </>
  );
};
