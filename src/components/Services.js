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
                        <div className="secteur">
                        <strong>Secteurs géographiques (13): </strong> <br/> 
                        <ul className="service__ul1">
                        <li>Marseille 5ème arrondissement</li> 
                        <li>la Penne sur Huveaune</li> 
                        <li>Aubagne</li>
                        <li>Roquefort la Bédoule</li> 
                        <li>Carnoux en Provence </li>
                        <li>Saint-Chamas (seulement le Mercredi).</li> <br></br> <br></br>
                        </ul>
                        </div>
                        <h3 className="prescription__title">
                            Vous avez une prescription médicale d’un médecin pour des
                            séances de psychomotricité, mais comment cela se passe ?
                        </h3>

                        <div className="entretien">
                            <span>
                                <strong>Etape 1 : l'entretien</strong> <br/> <br/>
                                Un entretien précède le bilan lors du premier rendez-vous. Il y a un temps 
                                d’anamnèse entre le patient et/ou sa famille et le psychomotricien. Il est 
                                nécessaire pour mieux comprendre l’indication en psychomotricité. Ce temps 
                                d’échange permet également de faire le point sur les étapes de développement. 
                                A la suite de cette conversation débute le bilan sur le temps restant.
                            </span>
                        </div>

                        <div className="bilan"> 
                        <strong>Etape 2 : le bilan psychomoteur</strong> <br/> <br/>
                        <span>
                        Le bilan se déroule sur 3 rendez-vous d’une heure. (2 heures pour l’entretien + 
                        passation et 1 heure pour le compte rendu)
                        Le bilan psychomoteur est indispensable avant toute prise en charge pour 
                        élaborer un axe de travail. Il permet grâce à des tests standardisés et étalonnés 
                        de pouvoir évaluer les compétences de l’individu sur différents domaines :
                        </span>
                        <ul className="service__ul">
                           <li> Motricité (coordination, équilibre, mouvement…)</li>
                           <li> Motricité fine (dextérité manuel, coordination oculo-manuelle, bi-manuelle, praxies fines..)</li>
                           <li> Schéma corporel (connaissance et représentation des parties de son corps)</li>
                           <li> Latéralité (utilisation préférentiel d’une main, d’un pied, d’un œil)</li>
                           <li> Organisation Spatio-Temporelle (orientation et repérage dans le temps)</li>
                           <li> Tonus (régulation tonico-postural et expression tonico-émotionnelle)</li>
                           <li> Fonctions exécutives (mémorisation, planification, attention, inhibition..)</li> 
                           <li> Emotion (gestion et adaptation) et interaction (avec l’autre et dans l’environnement) </li> <br></br>
                        </ul>
                        </div>

                        <div className="bilanres">
                        <strong>Etape 3 : restitution du bilan</strong> <br/> <br/>
                        <span>
                        Quelques jours après la rédaction du bilan, il y a une restitution en présentiel avec un 
                        compte rendu écrit et oral. C’est un échange sur les points forts et les points faibles mise 
                        en lumière par les épreuves de bilan. Lors du suivi, on peut venir réévalue la personne.
                        </span>
                        </div>
                        <div className="suivi">   
                        <strong>Etape 4 : le suivi</strong> <br/> <br/>
                        <span>
                        En fonction des résultats du bilan, une prise en charge sera engagée ou non. Les 
                        séances durent 45 minutes et se répètent globalement de manière hebdomadaire sur un 
                        nombre de séance à définir selon l’évolution de la personne.
                        </span>   
                        </div> 

                    </div>
                </Col>
            </Row>
        </Container>
        <br></br><br></br><br></br><br></br>
        <Container>
            <Row>
                <Col>
                    <div className="service-bx2">
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
                <b>
            Le temps de la séance est variable au choix entre 45 ou 30 mn en fonction de la fatigabilité et de l’attention de la personne.
                Les tarifs comprennent une majoration par rapport à des séances classiques en cabinet, le déplacement à domicile demandant plus de frais annexes. Les tarifs indiqués incluent les frais de déplacement, aucun supplément ne vous sera demandé au sein du secteur indiqué plus haut. <br></br>
            </b></p>
            <p>
           <strong>Moyens de paiement :</strong>  
            <li>Chèques, espèces ou virement bancaire.</li>
            <li>Carte vitale non acceptée.</li>
            </p>
            <p>
               <strong>Remboursement :</strong> <br></br> Actuellement, les actes de psychomotricité ne sont pas remboursés par la sécurité sociale. Néanmoins, il existe dans certains cas des aides de la part de certaines mutuelles ou via la MDPH (Maison Départementale de Personnes Handicapées).
            </p>
                    </div>
                    
                </Col>
            </Row>
        </Container>
        
    </section>
       
    )
   
}