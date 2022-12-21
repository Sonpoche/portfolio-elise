import React from 'react';
import '../css/pagenotfound.css';
import { Row, Container, Col } from "react-bootstrap";
import Licorne from "../assets/img/licorne.png"

  
export const PageNotFound = () => {
  
  return (
    <div className="pagenotfound" id="pagenotfound">
      <Container>
                <Row>
                    <Col>
                        <div className="pagenotfound-bx">
                            <h3>Oups ! Cette page n'existe pas</h3>
                            <p> Veuillez cliquer sur un des liens de la barre de navigation pour retourner sur le site... </p>
                            <img src={Licorne} alt="licorne"/>
                        </div>
                    </Col>
                </Row>
            </Container>
    </div>
  );
}
  