import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Container, Row, Col } from "react-bootstrap";
import { Envelope } from "react-bootstrap-icons";
import '../css/Contact.css';
import { SujetSelect } from "./component/SujetSelect";
import Alert from 'react-bootstrap/Alert';

const Result = () => {
    return (
        <>
        {[
          'success',

        ].map((variant) => (
          <Alert key={variant} variant={variant} className= "alert__style">
            Message bien envoyé je vous recontacterai dans les plus brefs délais.
          </Alert>
        ))}
      </>
    )
  }

export const Contact = () => {
    const form = useRef();
    const [result,showResult] = useState(false);
    const initialFormState = {
        name: "",
        email: "",
        message: "",
        tel: "",
        motif: "",
    };

    const [contactData, setContactData] = useState({ ...initialFormState });

    const handleChange = ({ target }) => {
        setContactData({
            ...contactData,
            [target.name]: target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm( "service_fyhvz7m", "template_5l6g7qp", form.current, "_7NeAFxYA0MiGGDYI", )
            

        //reset the form after submission
        setContactData({ ...initialFormState });
        showResult(true);
    };

    setTimeout(() => {
        showResult(false)
      }, 10000);

    return (
        <section className="contact" id="connect">
            <Container>
             <Row className="align-items-center">
              <Col md={12}>
              <Envelope size={35} className="enveloppe"/>
                <h2> Me joindre</h2>
                <form onSubmit={handleSubmit} ref={form}>
                    <Row>
                        <div className="row">
                                {
                                    result ? <Result /> : null
                                }
                            </div>
                    <SujetSelect name="motif" label="Motif" value={contactData.motif} onChange={handleChange}/>
                     
                        <Col sm={6}>
                            <input type="text" className="form-control" name="name" placeholder= "Nom & Prénom" value={contactData.name} onChange={handleChange} required />
                        </Col>
                        <Col sm={6}>
                            <input type="tel" className="form-control" name="tel" pattern="[0-9]+" minLength="10" maxLength="10"  placeholder="Numéro de téléphone" value={contactData.tel} onChange={handleChange} required /> 
                        </Col>
                        <Col sm={6}>
                            <input type="email" className="form-control" name="email" placeholder="Adresse e-mail" value={contactData.email} onChange={handleChange} required /> 
                        </Col>
                        <Col>
                            <textarea className="form-control" type="text" name="message" maxLength="6000" row="6" placeholder="Entrez votre message..." value={contactData.message} onChange={handleChange} required ></textarea>
                            <button type="submit"><span>Envoyez le message</span></button>
                        </Col>
                        
                    </Row>
                </form>
             </Col>
            </Row>
          </Container>
        </section>
    )
}