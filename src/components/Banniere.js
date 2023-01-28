import React, { useState, useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap";
import Logo from "../assets/img/logo.png";
import 'animate.css';
import TrackVisibility from "react-on-screen";
import '../css/Banniere.css';
import { ScrollDown } from "./component/ScrollDown";


export const Banniere = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [ "lise Cigala" ];
    const [text , setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
    
        let ticker = setInterval(() => {
            tick();
        }, delta);
        
        return () => { clearInterval(ticker) };

        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta /2)

        }
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if(isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
     }

    return (
        <section className="banniere" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                       <TrackVisibility>
                       {({ isVisible }) =>  
                        <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                        <span className="tagline">Votre Psychomotricienne à Domicile</span>
                        <h1><span className="wrap">E{text}</span></h1>
                        <p>"Il faut penser le corps. Le penser, certes, mais aussi et peut-être avant tout le connaître, le sentir, l'apprivoiser, le mettre au travail..." B.LESAGE</p>
                        <ScrollDown />
                       </div> }
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={Logo} alt="logo" className="banniere__img"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}