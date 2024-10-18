import React from 'react';

// Importar imagen
import chloe from "../assets/img/chloe.jpg";

const PlayerControls = () => {
    return (
        <div className="player-controls">
            {/* Imagen del reproductor */}
            <img className="responsive medium-height top-round" src={chloe} alt="Chloe Moriondo" />

            <div className="small-space"></div>
            
            {/* Controles de tiempo */}
            <nav className="slider-container">
                <p>3:00</p>
                <label className="slider">
                    <input type="range" />
                    <span></span>
                </label>
                <p>5:00</p>
            </nav>
            <div className="small-space"></div>

            {/* Botones de control */}
            <nav className="padding center-align">
                <button className="transparent small"><i>shuffle</i></button>
                <button className="transparent circle large"><i>skip_previous</i></button>
                <button className="fill extra"><i>play_arrow</i></button>
                <button className="transparent circle large"><i>skip_next</i></button>
                <button className="transparent small"><i>repeat</i></button>
            </nav>

            {/* Información de la canción */}
            <a className="row no-padding round">
                <img className="circle extra" src={chloe} alt="Chloe Moriondo" />
                <div className="max">
                    <h6 className="small">Buttercup</h6>
                    <p>Chloe Moriondo</p>
                </div>
                <div className="center-align"></div>
                <label className="padding">5 min</label>
                <label className="checkbox icon">
                    <input type="checkbox" />
                    <span>
                        <i>favorite</i>
                        <i>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#CEA8BC">
                                <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Z" />
                            </svg>
                        </i>
                    </span>
                </label>
            </a>
        </div>
    );
};

export default PlayerControls;
