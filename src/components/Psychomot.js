import { Row, Container, Col } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import imgBebe from "../assets/img/imgbebe.png";
import imgEnfant from "../assets/img/imgenfant.png";
import imgAdulte from "../assets/img/imgadulte.png";
import imgVieux from "../assets/img/imgvieux.png";
import '../css/Psychomot.css';

export const Psychomot = () => { 
    const responsive = {
            superLargeDesktop: {
                breakpoint: { max: 4000, min: 3000},
                items: 5
            },
            desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items:3
            },
            tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 2
            },
            mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1
            }
        };
        return(
        <section className="psychomot" id="psychomot">
            <Container>
                <Row>
                    <Col>
                        <div className="psychomot-bx">
                            <h3>
                                Quel est le rôle de la Psychomotricité ?
                            </h3>
                            <br></br>
                            <p> La psychomotricité prend en charge la personne dans sa globalité.<br></br><br></br>
                                Elle met en lien les composantes motrices (pouvoir-faire), cognitives (savoir-faire) et psycho-affectives (vouloir-faire) à travers l’individu lui-même, avec les autres et dans son environnement, tout au long de sa vie.<br></br> <br></br>
                                Le but de la prise en charge en psychomotricité est d’améliorer ou retrouver une harmonie psychocorporelle globale qui a été entravée ou retardée par des facteurs biologiques, traumatiques et/ou environnementales.<br></br> <br></br> 
                                Le psychomotricien est un professionnel paramédical qui exerce sur prescription médicale en étroite collaboration avec: médecins, orthophonistes, ergothérapeutes, psychologues, kinésithérapeute, psychiatres, ...
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <br></br><br></br><br></br><br></br>
            <Container>
                <Row>
                    <Col>
                        <Carousel responsive={responsive} className="psychomot-carousel" interval={null} touch={false}>
                        
                            <Carousel.Item>
                                
                                <div className="psychomot-bx1">
                                    <br></br>
                                    <br></br>
                                    <h3>
                                        Bébé
                                    </h3>
                                        <ul>
                                        <li> Guidance parentale</li> 
                                        <li>Retard de développement</li> 
                                        <li>Prématurité</li> 
                                        <li>Difficultés d’interactions, etc...</li> 
                                        </ul>
                                </div>
                                <img className="d-block w-100" src={imgBebe} alt="Bebe"/>
                            </Carousel.Item>
                            <Carousel.Item>
                                    
                                    <div className="psychomot-bx2">
                                        <br></br>
                                        <br></br>
                                    <h3>
                                        Enfant
                                    </h3>
                                        <p> <li>Trouble déficitaire de l’attention avec ou sans hyperactivité (TDA/H)</li>
                                           <li>Trouble du spectre autistique (TSA)</li> 
                                           <li>Trouble des apprentissages (dyspraxique, dysgraphique..)</li>  
                                           <li>Trouble moteur (Trouble acquisition des coordinations TAC…) </li> 
                                           <li>Trouble des conduites alimentaires (TCA)</li> 
                                           <li>Troubles anxieux</li>  
                                           <li>Trouble du schéma corporel</li>  
                                           <li>Troubles perturbateurs du contrôle, des émotions et des conduites.</li>  
                                           <li>Retard de développement psychomoteur</li>  
                                           <li>Difficulté d’orientation spatio-temporel</li>  
                                           <li>Difficulté graphique ou de motricité fine</li> 
                                           <li>Stress post traumatique </li>  
                                           <li>Maladie génétique</li>  
                                           <li>Handicape moteur et/ou intellectuel et/ou sensoriel, etc...</li>  
                                           
                                        </p>
                                    </div><img className="d-block w-100" src={imgEnfant} alt="Enfant"/>
                                </Carousel.Item>
                                <Carousel.Item>
                                    
                                    <div className="psychomot-bx3">
                                        <br></br>
                                        <br></br>
                                    <h3>
                                        Adolescent | Adulte
                                    </h3>
                                        <p> 
                                            <li>Anxiété</li> 
                                            <li>AVC, sclérose en plaques, traumatisme crânien, ...</li> 
                                            <li>Stress post-traumatique</li> 
                                            <li>Trouble psychiatrique</li> 
                                            <li>Dépression postpartum et lien avec la grossesse  ... </li> 
                                            <li>Handicaps moteurs et/ou intellectuels et/ou sensoriels</li> 
                                            <li>Burn out (travail ou épuisement de l’aidant)</li>
                                            <li>Diverses pathologies</li>
                                            <li>L’évolution des troubles de l’enfance qui parasite la vie professionnelle ou personnelle (exemple : un déficit de l’attention peut entrainer des difficultés à l’obtention du permis de conduire), etc ...</li>
                                        </p>
                                    </div><img className="d-block w-100" src={imgAdulte} alt="Adulte"/>
                                </Carousel.Item>
                                <Carousel.Item>
                                    
                                    <div className="psychomot-bx4">
                                        <br></br>
                                        <br></br>
                                    <h3>
                                        Personne Agée
                                    </h3>
                                        <p> Lors du vieillissement pathologique avec la présence de maladies neurologiques :
                                            <li>Démence Alzheimer </li>
                                            <li>Corps de Lewy </li>
                                            <li>Démence frontale </li>
                                            <li>Démence cardio-vasculaire </li>
                                            <li>Parkinson </li> 
                                            <li>Accident vasculaire cérébral (AVC), ...</li> <br></br>
                                            Lors du vieillissement naturel de la personne âgée : 
                                            <li>Trouble de la marche </li>
                                            <li>Trouble de l’équilibre</li> 
                                            <li>Trouble de la mémoire </li>
                                            <li>L’anxiété, l’inhibition </li>
                                            <li>Des difficultés spatio-temporelles</li> 
                                            <li>Déficiences visuelles et auditives </li>
                                            <li>Affections rhumatologiques, dépression </li>
                                            <li>Une perte de l’estime de soi</li> 
                                            <li>Le syndrome post-chute </li>
                                            <li>Douleur chronique</li>
                                            <li>Accompagnement soin palliatif, etc...</li> <br></br>
                                        </p>
                                    </div><img className="d-block w-100" src={imgVieux} alt="Vieux"/>
                            </Carousel.Item>
                        </Carousel>
                        
                    </Col>
                </Row>
            </Container>        
        </section>
    )
}
