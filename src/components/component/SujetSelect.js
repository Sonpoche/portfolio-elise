import React from 'react';
import '../../css/Contact.css';

export const SujetSelect = (props) => {
    const { label, handleChange, name } = props;
  return (
    <div className='mb-5'>
        <label className='text-gray-500 text-sm' htmlFor={name}>{label}</label>
        <select required onChange={handleChange} defaultValue="" name={name} 
        className="w-full border-b-2 py-2 outline-none form-control" >
            <option value="" disabled>Selectionnez votre motif...</option>
            <option value="demande d'information" className="py-1 ">Demande d'information</option>
            <option value="demande de bilan" className="py-1 ">Demande de Bilan</option>
            <option value="demande de suivi" className="py-1 ">Demande de Suivi</option>
            <option value="autre" className="py-1 ">Autre</option>
        </select>
    </div>
  )
}
