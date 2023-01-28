import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.png';
import { HashLink } from 'react-router-hash-link';
import '../css/NavBar.css';


export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
   
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <HashLink to="/#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Accueil</HashLink>
              <HashLink to="/#psychomot" className={activeLink === 'psychomot' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('psychomot')}>Psychomotricité</HashLink>
              <HashLink to="/#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>Qui suis-je?</HashLink>
              <HashLink to="/#service" className={activeLink === 'service' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('service')}>Service à domicile & Tarifs</HashLink>
              
            </Nav>
            <span className="navbar-text">
              <HashLink to='/#connect'>
                <button className="vvd"><span>Entrez en Contact</span></button> 
              </HashLink> 
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    
  )
}       