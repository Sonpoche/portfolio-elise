import '../css/Psychomot.css';
import { FilterFunction } from "../components/filter/FilterFunction";


export const Psychomot = () => { 
        return(
        <section className="psychomot" id="psychomot">
            
                            <h3>
                                Quel est le rôle de la Psychomotricité ?
                            </h3>
                        <div className="psychomot__container container container grid">
                            
                                <video className="psychomot__img" alt=""></video> 
                            
                            <p> La psychomotricité prend en charge la personne dans sa globalité.<br></br><br></br>
                                Elle met en lien les composantes motrices (pouvoir-faire), cognitives (savoir-faire) et psycho-affectives (vouloir-faire) à travers l’individu lui-même, avec les autres et dans son environnement, tout au long de sa vie.<br></br> <br></br>
                                Le but de la prise en charge en psychomotricité est d’améliorer ou retrouver une harmonie psychocorporelle globale qui a été entravée ou retardée par des facteurs biologiques, traumatiques et/ou environnementales.<br></br> <br></br> 
                                Le psychomotricien est un professionnel paramédical qui exerce sur prescription médicale en étroite collaboration avec: médecins, orthophonistes, ergothérapeutes, psychologues, kinésithérapeute, psychiatres, ...
                                <br/><br/> Chaque psychomotricien par son savoir-faire, ses formations, ses outils personnels va utiliser les médiations qui lui sont spécifiques. La médiation est un intermédiaire entre le psychomotricien et la personne. C’est un support qui va orienter de manière spécifique l’axe de travail mais toujours dans un objectif de soin. <br></br> <br></br>
                           On retrouve diverses médiations thérapeutiques : relaxation, jeux moteurs, parcours de motricité, l’expression corporelle, stimulation sensorielle , théâtre, ateliers rythmiques, danse, art plastique, des jeux sous toutes les formes comme méthodes de rééducation…
                            </p>
                            
                        </div>
                        
            <br/><br/><br/><br/>
            
            <section className="psychomot2" id="psychomotsection2">
        <h3 className="section__subtitle psychomot__subtitle">Pour Qui ?</h3>
                        <FilterFunction />
                    
            </section>            
                        
        </section>
    )
}

