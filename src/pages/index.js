import React from 'react';
import { Banniere } from "../components/Banniere";
import { Psychomot } from "../components/Psychomot";
import { Whoami } from "../components/Whoami";
import { Contact } from "../components/Contact";
import { Service } from "../components/Services";


  
export const Home = () => {
  return (
    <div>

      <Banniere />
      <Psychomot />
      <Whoami />
      <Service />
      <Contact />
      
    </div>
  );
};
  
