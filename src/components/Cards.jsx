import React from 'react';
import "./Cardsv.css";

const Cards = ({ characters = [] }) => {
  return (
    <div>
      {characters.map((item) => (
        <div key={item.id || item.name} className='col'>
          <div className="Cardsv">
            <img 
              src={item.image || "url_de_imagen_predeterminada.jpg"} 
              alt={`Imagen de ${item.name}`} 
            />
            <div className="card-content">
              <h2 className="card-title">{item.name}</h2>
              <p className="card-subtitle">Raza: {item.race} | Género: {item.gender}</p>
              <p className="card-info"><strong>Afiliación:</strong> {item.affiliation}</p>
              <p className="card-info"><strong>Ki:</strong> {item.ki} / <strong>Max Ki:</strong> {item.maxki}</p>
              <p className="card-description">
                {item.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;