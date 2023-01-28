import React from 'react';
import { Banniere } from "../components/Banniere";
import { Psychomot } from "../components/Psychomot";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Service } from "../components/Services";


  
export const Home = () => {
  return (
    <div>

      <Banniere />
      <Psychomot />
      <About />
      <Service />
      <Contact />
      
    </div>
  );
};
  
