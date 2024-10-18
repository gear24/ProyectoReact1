import React from 'react';
import { useNavigate } from 'react-router-dom';


const MiniCard = ({ image, title, visibility, size, date, color, icon, updateColors,redirectTo  }) => {
    const navigate = useNavigate(); // Crea la instancia

    const handleClick = () => {
        updateColors(color); // Ahora updateColors estará definido
        console.log("si se fue");
        navigate(redirectTo); // Redirige a la página deseada

    };

    return (
        <div className="s12 m6 l4">
            <article className="no-padding round wave no-elevate" onClick={handleClick}>
                <img className="responsive small-height" src={image} alt={title} />
                <div className="absolute left right bottom bottom-shadow padding white-text">
                    <div className="row">
                        <div className="max truncate">
                            <h6>{title}</h6>
                            <div className="row no-margin">
                                <label>{visibility}<i>{icon}</i></label>
                                <label>{size}</label>
                                <label>{date}</label>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default MiniCard;
