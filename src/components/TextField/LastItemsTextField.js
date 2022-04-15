import React, {useEffect, useState} from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const currencies = [10,20,50,100,"ALL"];

export default function LastItemsTextField(props) {
  	const [currency, setCurrency] = useState(10);

  	const handleChange = async (event) => {
    	setCurrency(event.target.value);
  	};

  	useEffect(()=>{
    	props.func(currency)
  	},[currency])

  	return (
    	<TextField
    	id="filled-select-currency"
    	select
    	value={currency}
    	onChange={handleChange}
    	sx={{width:100}}
  		>
    		{currencies.map((option) => (
      		<MenuItem key={option} value={option}>
        	{option}
      		</MenuItem>
    	))}
  		</TextField>
  );
}