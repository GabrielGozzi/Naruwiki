
import './styles.css';
import React from 'react';
import InfoBox from './InfoBox';
import imagem from './../fotos/sasuke.png'
import { Link } from 'react-router-dom';

function Sasuke() {
  return (
    <div className="Sasuke">
      <h2>NaruWiki</h2>
      <InfoBox
        left 
        imagemSrc={imagem}
        titulo="Detalhes do Personagem"
        nome="Sasuke"
        cla="Uchiha"
        elemento="Raio"
      />
      <Link to="/Naruto"> Pagina Naruto</Link>
    </div>
  );
}
export default Sasuke;