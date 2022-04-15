import React, {useEffect, useState} from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const categories = ["Food","Expenses","Salary","Other","ALL"];

export default function CategoryTextField(props) {
  	const [category, setCategory] = useState("ALL");

  	const handleChange = async (event) => {
    	setCategory(event.target.value);
  	};
      
    useEffect(()=>{
    	props.func(category)
  	},[category])

  	return (
    	<TextField
    	id="filled-select-category"
    	select
    	value={category}
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