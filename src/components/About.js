import React from 'react';
import '../css/About.css';
import AboutImg from "../assets/img/about.jpg";

export const About = () => {
  return (
    <section className="about" id="about">
        <h2 className="section__title">Qui suis-je ?</h2>
        <div className="about__container container grid">
            <img src={AboutImg} alt="Aboutimg"  className="about__img" />
           
            <div className="about__data">
                <span className="about__description">
                <p>Bonjour, moi c’est Elise Cigala, psychomotricienne diplômée d’Etat ! Dès le lycée, le métier de psychomotricien a fait sens pour moi et c’est tout naturellement que j’ai suivi ce beau chemin… 
                     <br/><br/>  Après avoir travaillé deux ans au sein d’un établissement pour personnes âgées dépendantes, je suis à mi-temps en IME (Institut médico-éducatifs) et je me lance dans cette belle aventure qui est le libéral directement à votre domicile. La discrétion, la confidentialité et le non jugement sont mes valeurs.  
                     <br/><br/> Même si mon expérience m’a dirigé principalement vers les séniors, je prends en charge une patientèle de tous les âges de la vie. J’ai à cœur d’accompagner mes patients toujours avec douceur, écoute, patiente et bienveillance.<br></br><br></br>  Je prends en charge les objectifs singuliers de chacun de mes patients, mais je ne perds jamais de vue, l’objectif commun et indispensable à mes yeux : leur bien-être psychocorporel.  
                     <br/><br/>  Au plaisir de vous rencontrer. 
                    </p>
                </span>

            </div>
        </div>
    </section>
  )
}