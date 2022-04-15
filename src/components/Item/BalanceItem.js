import React, {useState} from 'react'
import { useLocation, useOutletContext, useSearchParams, useNavigate } from 'react-router-dom';
import { Grid, IconButton, Typography, Divider } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import DeleteIcon from '@mui/icons-material/Delete';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export default function BalanceItem(props) {
	const {func} = useOutletContext()
	const [searchFunction, setSearchFunction] = func;
	const nav = useNavigate();

	const handleEdit = (event) => {
		searchFunction(props.id)
	}

	const handleDelete = () => {
        MySwal.fire({ //Fires a warning before doing the deletion
            title: <strong>Are you sure?</strong>,
            html: <i>Item will be permanently deleted!</i>,
            showDenyButton: true,
            showConfirmButton: true,
            confirmButtonText: "Yes, delete!",
            confirmButtonColor: "darkred",
            denyButtonText: "No!",
            denyButtonColor: "forestgreen",
          }).then(async (result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Item was deleted!",
                showConfirmButton: true,
                confirmButtonColor: "forestgreen",
              }).then(() => {
                nav(0);
              });
            }
          });
	}

  return (
		<Grid container alignItems="center">
			<Grid item md={0.1} xs={0.5}/>
			<Grid item md={4.1} xs={7}><Typography fontSize={{md:20,xs:12}}>{props.description}</Typography></Grid>
			<Grid item md={0.3} xs={1}/>
			<Grid item md={3.1} xs={3.5}><Typography fontSize={{md:20,xs:12}}>{props.date}</Typography></Grid>
			<Grid item md={0.3} xs={0.5}/>
			<Grid item md={1.5} xs={3}>{props.type === "in" ? <Typography fontSize={{md:20,xs:12}} color="green">{props.value}</Typography> : <Typography fontSize={{md:20,xs:12}} color="firebrick">{props.value}</Typography>}</Grid>
			<Grid item md={0.2} xs={0.5}/>
			<Grid item md={1} xs={1}>{props.type === "in" ? <ArrowCircleUpIcon sx={{fontSize:30,color:"green"}}/> : <ArrowCircleUpIcon sx={{transform:"rotate(180deg)",fontSize:30,color:"firebrick"}}/>}</Grid>
			<Grid item md={0.1} xs={3}/>
			<Grid item md={0.5} xs={0.3}><IconButton onClick={handleEdit}><EditIcon/></IconButton></Grid>
			<Grid item md={0.1} xs={1.5}/>
			<Grid item md={0.5} xs={0.3}><IconButton onClick={handleDelete}><DeleteIcon/></IconButton></Grid>
			<Grid item md={0.1} xs={0.1}/>
			<Grid item xs={12}><Divider/></Grid>
		</Grid>
  )
}
