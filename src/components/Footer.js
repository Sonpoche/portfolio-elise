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
              <p>
                Horaires et Jours d'ouverture : <br></br><br></br>
                  <li>Lundi (Saint-Chamas) : 9h-18h </li>
                  <li>Mardi : 9h-18h</li> 
                  <li>Mercredi : 9h-18h</li> 
                  <li>Jeudi : 9h-18h</li> 
                  <li>Vendredi : 9h-18h</li> 
              </p>
            </Col>
            <Col md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Liens Utiles</h6>
              <p>
                <a href={Memoire} download className='text-reset'>
                  Télécharger mon mémoire (PDF)
                </a>
              </p>
              <p>
                <a href="http://www.mdph13.fr/" className='text-reset'>
                   Mdph13
                </a>
              </p>
              <p>
                <a href="https://fedepsychomot.com/" className='text-reset'>
                  Fédération des psychomotriciens.
                </a>
              </p>

            </Col>

            <Col md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Coordonnées</h6>
              <a href="mailto:psychomot.cigala@gmail.com" className='text-reset'> <BsFillEnvelopeFill size={10} className="me-3" />psychomot.cigala@gmail.com </a>
              <p> <BsFillTelephoneFill size={10} className="me-3"/> 06 33 04 26 46</p>
              
            </Col>
          </Row>
        </Container>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        <Link to="/mention" className='text-reset'>Mentions Légales</Link>
      </div>
    </footer>
  );
}