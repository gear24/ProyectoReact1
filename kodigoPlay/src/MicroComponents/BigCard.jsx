import React from 'react';

const BigCard = ({ image, title, visibility, size, date, color }) => {
    const handleClick = () => {
        updateColors(color); // Asegúrate de tener esta función definida en el componente padre o pasarla como prop
    };

    return (
        <div className="s12 l6">
            <article className="no-padding round wave no-elevate" onClick={handleClick}>
                <img className="responsive medium-height" src={image} alt={title} />
                <div className="row">
                    <i>globe</i>
                    <div className="max truncate">
                        <h6>{title}</h6>
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
