import React from 'react';
import './App.css';
import Dreamschool from './Dreamschool.js';

function Sections (props){
    return (

        <div className='classRoll'>
            <h1 className='classMain'> Dream Valley School Class-Wise Roll</h1>
            <h1 className='classBg'>In Class 8th we have {props.class8th}</h1>

            <h1 className='classBg'>In Class 7th we have {props.class7th}</h1>

            <h1 className='classBg'>In Class 6th we have {props.class6th}</h1>
        </div>
    )
}
export default Sections;