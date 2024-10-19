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
        {
            title: "Slow Dancing in the Dark",
            artist: "Chloe Moriondo",
            image: chloe2,
            duration: "5 min",
            color: '#8c322c',
            size: "10.1 MB",
            date: "31/10/2023",
            visibility: "100 M",
            icon: "favorite"
        },
        {
            title: "Buttercup",
            artist: "Chloe Moriondo",
            image: chloe,
            duration: "4 min",
            color: '#e32f2f',
            size: "10.1 MB",
            date: "31/10/2023",
            visibility: "100 M",
            icon: "favorite"
        },
        {
            title: "Y si veo tu mamá",
            artist: "Bad Bunny",
            image: song1,
            duration: "3 min",
            color: '#cdb598',
            size: "10.1 MB",
            date: "31/10/2023",
            visibility: "100 M",
            icon: "play_arrow"
        },
        {
            title: "Nevermind",
            artist: "Nirvana",
            image: song2,
            duration: "3 min",
            color: '#1a749a', 
            size: '3.04 MB',
            date: '23/5/2000',
            visibility: '400M',
            icon: 'price_change'
        },
        {
            title: "Sombras",
            artist: "Zoe",
            image: song3,
            duration: "3 min",
            color: '#6c3333',
            size: "10.1 MB",
            date: "31/10/2023",
            visibility: "100 M",
            icon: "music_note"
        },
        {
            title: "Paparazzi",
            artist: "Kim Dracula",
            image: song4,
            duration: "3 min",
            color: '#523866',
            size: "10.1 MB",
            date: "31/10/2023",
            visibility: "100 M",
            icon: "skull"
        },
        {
            title: "It's boy",
            artist: "BBNO$",
            image: song5,
            duration: "3 min",
            color: '#181212',
            size: "10.1 MB",
            date: "31/10/2023",
            visibility: "100 M",
            icon: "boy"
        },
        {
            title: "Engravings",
            artist: "Ethan Bortnick",
            image: song6,
            duration: "3 min",
            color: '#2e5c20',
            size: "10.1 MB",
            date: "31/10/2023",
            visibility: "100 M",
            icon: "skeleton"
        },
        {
            title: "Blablabla",
            artist: "Maneskin",
            image: blablabla,
            duration: "4 min",
            color: '#395646',
            size: "10.1 MB",
            date: "31/10/2023",
            visibility: "100 M",
            icon: "star"
        }
    ];
    //Puede que sea una mala practica pero solo necesito 2
    // Obtiene las canciones específicas para mostrar en el BigCard
    const buttercup = songs.find(song => song.title === "Buttercup");
    const Nevermind = songs.find(song => song.title === "Nevermind");



    return (
        <>
            <MainContainer>

                <HeaderConBuscador
                    updateTheme={updateTheme}
                    refresh={refresh}
                />
                <div className="page right active">

                    <div className="grid large-space">
                        
                    {buttercup && (
                            <BigCard
                                image={buttercup.image}
                                title={buttercup.title}
                                visibility={buttercup.visibility}
                                size={buttercup.size}
                                date={buttercup.date}
                                color={buttercup.color}
                                updateColors={updateColors}
                                redirectTo={'/player'} 
                                artist={buttercup.artist}
                                duration={buttercup.duration}
                                
                            />
                        )}
                    {Nevermind && (
                            <BigCard
                                image={Nevermind.image}
                                title={Nevermind.title}
                                visibility={Nevermind.visibility}
                                size={Nevermind.size}
                                date={Nevermind.date}
                                color={Nevermind.color}
                                updateColors={updateColors}
                                redirectTo={'/player'} 
                                artist={Nevermind.artist}
                                duration={Nevermind.duration}
                                
                            />
                        )}
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
                            
                            artist={song.artist}
                            duration={song.duration}


                        />
                    ))}
                </div>


            </MainContainer>
        </>
    );
};
