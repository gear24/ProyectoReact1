import React, { useState } from "react";
import MainContainer from "../../MicroComponents/MainContainer";
import MiniCard from "../../MicroComponents/MiniCard";
import HeaderConBuscador from "../../MicroComponents/HeaderConBuscador";
import BigCard from "../../MicroComponents/BigCard";
import { Player } from "../Components/Player";
// Importar las imágenes
import song2 from "../../assets/img/song2.jpg";
import chloe from "../../assets/img/chloe.jpg";
import song1 from "../../assets/img/song1.jpg";
import song3 from "../../assets/img/song3.jpg";
import song4 from "../../assets/img/song4.jpg";
import song5 from "../../assets/img/song5.jpg";
import blablabla from "../../assets/img/blablabla.jpg";
import song6 from "../../assets/img/song6.jpg";
import chloe2 from "../../assets/img/chloe2.jpg";

export const Home = () => {
    const [mode, setMode] = useState("dark");

  
    // Función para actualizar el tema
    const updateTheme = () => {
        const newMode = mode === "dark" ? "light" : "dark";
        setMode(newMode);
        document.body.className = newMode; // Cambia la clase del body, creo que no sirve pa na, pero si lo quito deja de funcionar

        const elementLight = document.getElementById("light");
        const elementDark = document.getElementById("dark");

        if (newMode === "dark") {
            elementLight.style.display = 'none';
            elementDark.style.display = '';
        } else {
            elementLight.style.display = '';
            elementDark.style.display = 'none';
        }

        ui("mode", newMode); 
    };

    // funcion para actualizar colores de beer
    const updateColors = (url) => {
        setTimeout(() => {
            ui("theme", url); 
        }, 360);
    };

    // funcion para refrescar la página
    const refresh = () => {
        document.body.style.display = 'none';
        setTimeout(() => {
            document.body.style.display = 'block';
        }, 180);
    };


    const songs = [
        { image: chloe, title: "Buttercup - Chloe Moriondo", color: '#e32f2f', size: "10.1 MB", date: "31/10/2023", visibility: "100 M", icon: "favorite" },
        { image: song1, title: 'Y si veo tu mamá', color: '#cdb598', size: '10.1 MB', date: '31/10/2023', visibility: '100 M', icon: 'play_arrow' },
        { image: song3, title: 'Zoe - Sombras', color: '#6c3333', size: '10.1 MB', date: '31/10/2023', visibility: '100 M', icon: 'music_note' },
        { image: song4, title: 'Paparazzi', color: '#523866', size: '10.1 MB', date: '31/10/2023', visibility: '100 M', icon: 'skull' },
        { image: song5, title: "It's boy", color: '#181212', size: '10.1 MB', date: '31/10/2023', visibility: '100 M', icon: 'boy' },
        { image: blablabla, title: 'Bla bla bla', color: '#395646', size: '10.1 MB', date: '31/10/2023', visibility: '100 M', icon: 'star' },
        { image: song6, title: 'Engravings', color: '#2e5c20', size: '10.1 MB', date: '31/10/2023', visibility: '100 M', icon: 'skeleton' },
        { image: chloe2, title: 'Slow dancing in the dark', color: '#8c322c', size: '10.1 MB', date: '31/10/2023', visibility: '100 M', icon: 'favorite' },
    ];


    return (
        <>
            <MainContainer>

                <HeaderConBuscador
                    updateTheme={updateTheme}
                    refresh={refresh}
                />
                <div className="page right active">

                    <div className="grid large-space">
                        <BigCard
                            image={chloe2}
                            title="Buttercup - Chloe Moriondo"
                            visibility="100 M"
                            size="10.1 MB"
                            date="31/10/2023"
                            color="#e32f2f"
                        />
                        <BigCard
                            image={song2}
                            title="Nevermind - Nirvana"
                            visibility="100 M"
                            size="10.1 MB"
                            date="31/10/2023"
                            color="#4fd8ea"
                        />
                    </div>
                </div>

                <div className="space"></div>
                <div className="grid large-space">
                    {songs.map((song, index) => (
                        <MiniCard
                            key={index}
                            image={song.image}
                            title={song.title}
                            visibility={song.visibility}
                            size={song.size}
                            date={song.date}
                            color={song.color}
                            icon={song.icon} 
                            updateColors={updateColors}
                            redirectTo={'/player'} 


                        />
                    ))}
                </div>


            </MainContainer>
        </>
    );
};
