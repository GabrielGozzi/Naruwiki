import React from 'react';
import './styles.css'
function InfoBox(props) {
    return (
      <div className={`info-box ${props.left ? 'left' : ''}`}>
        <div className="info-image">
          <img src={props.imagemSrc} alt="Imagem" />
        </div>
        <div className="info-details">
          <h3>{props.titulo}</h3>
          <p>Nome: {props.nome}</p>
          <p>Clã: {props.cla}</p>
          <p>Elemento: {props.elemento}</p>
        </div>
      </div>
    );
  }
  export default InfoBox;