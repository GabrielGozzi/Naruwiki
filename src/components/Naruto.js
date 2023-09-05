import './styles.css';
import React from 'react';
import InfoBox from './InfoBox';
import imagem from './../fotos/naruto.png';
import { Link } from 'react-router-dom';

function Naruto() {
  return (
    <div className="Naruto">
      <h2>NaruWiki</h2>
      <InfoBox
        left 
        imagemSrc={imagem}
        titulo="Detalhes do Personagem"
        nome="Naruto"
        cla="Uzumaki"
        elemento="Vento"
        />
        <Link to="/Sasuke"> Pagina Sasuke</Link>

    </div>
  );
}
export default Naruto;