import React, { useEffect, useState } from 'react';
import { psychomotData } from './Data';
import { psychomotNav } from './Data';
import { FilterItem } from './FilterItem';

export const FilterFunction = () => {
    const [item, setItem] = useState({name: "Bébé"});
    const [psychomots, setpsychomots] = useState([]);
    const [active, setActive] = useState(0);

    useEffect(() => {
        if(item.name === "") {
            setpsychomots(psychomotData);
        }

        else {
            const newpsychomots = psychomotData.filter((psychomot) => {
                return psychomot.category === item.name;
            });
            setpsychomots(newpsychomots);
        }
    }, [item]);

    const handleClick = (e, index) => {
        setItem({name: e.target.textContent});
        setActive(index);
    }
  return (
    <div>
        
        <div className="psychomot__filters">
        {psychomotNav.map((item, index) => {
            return (
            <span 
                onClick={(e) => {
                handleClick(e, index);
                }} 
                className={`${active === index ? 'active-psychomot' : ''} psychomot__item`} 
                key={index}
            >
                {item.name}
            </span>
            );      
        })}
    </div>
        {psychomots.map((item) => {
            return <FilterItem  item={item} key={item.id}/>
        })}
    
    </div>
  )
}