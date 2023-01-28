import React from 'react';



export const FilterItem = ({item}) => {
  return (
    <div className="psychomot__container container grid" key={item.id}>
        <img src={item.image} alt="psychomot"  className="psychomot__imgfilter" />  
        <span className="psychomot__description2">
            {item.description}    
            <br/><br/>
        </span> 
    </div>
  )
}