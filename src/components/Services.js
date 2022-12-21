import { Row, Container, Col } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import '../css/Services.css';
import React from "react";

export const Service = () => { 
    return(
    <section className="service" id="service">
        <Container>
            <Row>
                <Col>
                    <div className="service-bx">
                        <h3> Mes Services à Domicile </h3>
                        <br></br>
                        <p> <strong>Psychomotricienne à Domicile dans les Bouches-du-Rhône (13) Voici mes secteurs géographiques : </strong> <br></br> 
                        <li>Marseille 5ème arrondissement</li> 
                        <li>la Penne sur Huveaune</li> 
                        <li>Aubagne</li>
                        <li>Roquefort-la-Bédoule</li> 
                        <li>Carnoux en Provence </li>
                        <li>Saint-Chamas (seulement le lundi).</li> <br></br> <br></br>

                            <strong>Le Bilan :</strong> <br></br>
                            Un entretien précède le bilan. Il y a un temps d’anamnèse entre le patient avec ou sans sa famille et le psychomotricien. Le bilan se déroule sur trois rendez-vous d’une heure. (dont 2 pour l’entretien + passation et 1 compte rendue)  <br></br>
                            Ensuite, le bilan psychomoteur est indispensable avant toute prise en charge pour élaborer un axe de travail. Il permet grâce à des tests standardisés et étalonner de pouvoir évaluer les compétences de l’individu sur différents domaines :<br></br><br></br>

                           <li> Motricité (coordination, équilibre, mouvement…)</li>
                           <li> Motricité fine (dextérité manuel, coordination oculo-manuelle, bi-manuelle, praxies fines..)</li>
                           <li> Schéma corporel (connaissance et représentation des parties de son corps)</li>
                           <li> Latéralité (utilisation préférentiel d’une main, d’un pied, d’un œil)</li>
                           <li> Organisation Spatio-Temporelle (orientation et repérage dans le temps)</li>
                           <li> Tonus (régulation tonico-postural et expression tonico-émotionnelle)</li>
                           <li> Fonctions exécutives (mémorisation, planification, attention, inhibition..)</li> 
                           <li> Emotion (gestion et adaptation) et interaction (avec l’autre et dans l’environnement) </li> <br></br>

                            Quelques jours après la rédaction du bilan, il y a une restitution en présentiel avec un compte rendu écrit + oral.Lors du suivi, on peut venir réévalue la personne sur des items de bilan pour voir son évolution. <br></br><br></br>
                           <strong>Le Suivie :</strong><br></br>  En fonction des résultats du bilan, une prise en charge sera engagée ou non. Les séances durent 45 minutes et se répètent globalement de manière hebdomadaire. <br></br><br></br>
                           <strong>La Médiation :</strong><br></br> Chaque psychomotricien par son savoir-faire, ses formations, ses outils personnels va utiliser les médiations qui lui sont spécifiques. La médiation est un intermédiaire entre le psychomotricien et la personne. C’est un support qui va orienter de manière spécifique l’axe de travail mais toujours dans un objectif de soin. <br></br> <br></br>
                           On retrouve diverses médiations thérapeutiques : relaxation, jeux moteurs, parcours de motricité, l’expression corporelle, théâtre, ateliers rythmiques, danse, art plastique, des jeux sous toutes les formes comme méthodes de rééducation…

                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
        <br></br><br></br><br></br><br></br>
        <Container>
            <Row>
                <Col>
                    <div className="service-bx">
                        <h3>
                            Mes tarifs
                        </h3>
            <Table responsive>
            <thead>
                <tr>
                   
    
                    <th>Prestation sur rendez-vous uniquement</th> 
                    <th>Durée</th>
                    <th>Tarifs</th>
                </tr>
                
            </thead>
            <tbody>
                <tr>
                   
                       <td>Bilan (entretien + passation + rédaction)</td>
                       <td>Sur 3 rendez-vous de 1 heure</td>
                       <td>150€</td>
                </tr>
                <tr>
                   
                        <td>Séance individuelle</td>
                        <td>45 Minutes</td>
                        <td>50€</td>
                </tr>
                <tr>
                
                        <td>Séance individuelle</td>
                        <td>30 Minutes</td>
                        <td>40€</td>
                </tr>
            </tbody>
            </Table>
            <p>
            Le temps de la séance est variable au choix entre 45 ou 30 mn en fonction de la fatigabilité et de l’attention de la personne.
                Les tarifs comprennent une majoration par rapport à des séances classiques en cabinet, le déplacement à domicile demandant plus de frais annexes. Les tarifs indiqués incluent les frais de déplacement, aucun supplément ne vous sera demandé au sein du secteur indiqué plus haut. <br></br>
            </p>
            <p>
           <strong>Moyens de paiement :</strong>  
            <li>Chèques ou espèces.</li>
            <li>Carte vitale non acceptée.</li>
            </p>
            <p>
               <strong>Remboursement :</strong> <br></br> Actuellement les actes de psychomotricité ne sont pas remboursés par la sécurité sociale. Néanmoins, il existe dans certains cas des aides de la part de certaines mutuelles ou via la MDPH (Maison Départementale de Personnes Handicapées).
            </p>
                    </div>
                    
                </Col>
            </Row>
        </Container>
        
    </section>
       
    )
   
}