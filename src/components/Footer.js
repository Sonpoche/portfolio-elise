import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { BsFillEnvelopeFill, BsFillTelephoneFill } from "react-icons/bs";
import Memoire from "../assets/pdf/memoire.pdf";
import { Link } from "react-router-dom";
import '../css/Footer.css';


export const Footer = () => {

    return (
<footer className='footer'>
    

      <section className=''>
        <Container className='text-center text-md-start mt-5'>
          <Row className='mt-3'>
            <Col md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                Elise Cigala | Psychomotricienne 
              </h6>
              <ul className='lien__style'>
                Horaires et Jours d'ouverture : <br></br><br></br>
                  <li></li>
                  <li>Mardi : 9h-18h </li> 
                  <li>Mercredi : 9h-18h (Saint-Chamas seulement)</li> 
                  <li>Jeudi : 9h-18h</li> 
                  <li></li> 
              </ul>
            </Col>
            <Col md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Liens Utiles</h6>
              <ul className='lien__style'>
              <li>
                <a href={Memoire} download className='text-reset'>
                  Télécharger mon mémoire (PDF)
                </a>
              </li>
              <br/>
              <li>
                <a href="http://www.mdph13.fr/" className='text-reset'>
                   Mdph13
                </a>
              </li>
              <br/>
              <li>
                <a href="https://fedepsychomot.com/" className='text-reset'>
                  Fédération des psychomotriciens.
                </a>
              </li>
              <br/>
              <li>
                <a href="https://www.webdevfred.fr" className='text-reset'> 
                Site Web Crée par: https://www.webdevfred.fr
                </a>
              </li>
            </ul>
            </Col>

            <Col md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Coordonnées</h6>
              <a href="mailto:psychomot.cigala@gmail.com" className='text-reset a__footer'> <BsFillEnvelopeFill size={10} className="me-3" />psychomot.cigala@gmail.com </a>
              <br/> <br />
              <a href="tel:+33633042646" className='text-reset'> <BsFillTelephoneFill size={10} className="me-3"/>Cliquez pour m'appeler !</a>
              
            </Col>
          </Row>
        </Container>
      </section>

      <div className='text-center p-4 color__mention'>
        <Link to="/mention" className='text-reset'>Mentions Légales</Link>
        
      </div>
    </footer>
  );
}