import { Col, Container, Row } from "react-bootstrap";
import imgWhoami from "../assets/img/whoami.png";
import TrackVisibility from "react-on-screen";
import '../css/Whoami.css';

export const Whoami = () => {
    return(
        <section className="whoami" id="whoami">
            <TrackVisibility>
                {({ isVisible }) =>  
                    <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
            <Container>
                <Row>
                    <Col>

                    <img className="imgTaille" src={imgWhoami} alt="whoami"/>

                    
                    <h2>Qui Suis-Je ?</h2>
                    <p>Bonjour, moi c’est Elise Cigala, psychomotricienne diplômée d’Etat ! Dès le lycée, le métier de psychomotricien a fait sens pour moi et c’est tout naturellement que j’ai suivi ce beau chemin… 
                     <br></br><br></br>  Après avoir travaillé deux ans au sein d’un établissement pour personnes âgées dépendantes, je me lance dans cette belle aventure qui est le libéral directement à votre domicile (seulement pour le moment). La discrétion, la confidentialité et le non jugement sont mes valeurs.  
                     <br></br><br></br>  Même si mon expérience m’a dirigé principalement vers les séniors, je prends en charge une patientèle de tous les âges de la vie. J’ai à cœur d’accompagner mes patients toujours avec douceur, écoute, patiente et bienveillance.<br></br><br></br>  Je prends en charge les objectifs singuliers de chacun de mes patients, mais je ne perds jamais de vue, l’objectif commun et indispensable à mes yeux : leur bien-être psychocorporel.  
                     <br></br><br></br>  Au plaisir de vous rencontrer. 
                    </p>
                    </Col>
                    
                </Row>
            </Container>
            </div>}
            </TrackVisibility>
        </section>
    )
}