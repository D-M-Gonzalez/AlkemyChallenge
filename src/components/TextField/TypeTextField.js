import React, {useEffect, useState} from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const categories = ["in","out","ALL"];

//Componente de opciones para el filtrado por tipo

export default function TypeTextField(props) {
  	const [type, setType] = useState("ALL");

  	const handleChange = async (event) => {
    	setType(event.target.value);
  	};
      
    useEffect(()=>{
    	props.func(type)
  	},[type])

  	return (
    	<TextField
    	id="filled-select-category"
    	select
    	value={type}
    	onChange={handleChange}
    	sx={{width:120}}
  		>
    		{categories.map((option) => (
      		<MenuItem key={option} value={option}>
        	{option}
      		</MenuItem>
    	))}
  		</TextField>
  );
}