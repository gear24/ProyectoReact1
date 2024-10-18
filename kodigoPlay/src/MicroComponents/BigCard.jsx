import React from 'react';
import { useNavigate } from 'react-router-dom';

const BigCard = ({ image, title, visibility, size, date, color,updateColors, redirectTo, artist,duration}) => {
    
    const navigate = useNavigate();
    
    const handleClick = () => {
        updateColors(color); // Asegúrate de tener esta función definida en el componente padre o pasarla como prop
        navigate(redirectTo, { state: { selectedSong: { image, title, artist, duration } } }); // Pasar la canción con datos predeterminados o reales
    };

    return (
        <div className="s12 l6">
            <article className="no-padding round wave no-elevate" onClick={handleClick}>
                <img className="responsive medium-height" src={image} alt={title} />
                <div className="row">
                    <i>globe</i>
                    <div className="max truncate">
                        <h6>{title} - {artist}</h6>
                        <div className="row no-margin">
                            <label>{visibility}<i>visibility</i></label>
                            <label>{size}</label>
                            <label>{date}</label>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default BigCard;
