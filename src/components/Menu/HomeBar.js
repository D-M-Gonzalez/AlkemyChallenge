import React, {useState, useEffect} from 'react';
import { AppBar, Container, Grid, Typography, Tooltip, Avatar, MenuItem, Menu, Divider } from '@mui/material';
import { InputBase } from '@mui/material';
import { IconButton } from '@mui/material';
import { Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

//Barra de navegación principal, con funcionalidad de buscar, muestra el balance total
//y nos permite acceder a las opciones de la cuenta

export default function HomeBar(props) {
	const [search, setSearch] = useState();
	const [anchorEl, setAnchorEl] = useState(null);
	const [avatar, setAvatar] = useState();
	const open = Boolean(anchorEl);
	const nav = useNavigate();


	const handleClick = (event) => {
	  setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
	  setAnchorEl(null);
	};
	const handleChange = (event) => {
		setSearch(event.target.value);
	}
	const handleAccount = () => {
		nav({
			pathname:"/home/account",
		})
	}
	const handleLogout = () => {
		MySwal.fire({ //Fires a warning before doing the deletion
            title: <strong>Are you sure?</strong>,
            html: <i>You will be logged out!</i>,
            showDenyButton: true,
            showConfirmButton: true,
            confirmButtonText: "Yes, log-out!",
            confirmButtonColor: "darkred",
            denyButtonText: "No, go back!",
            denyButtonColor: "forestgreen",
          }).then(async (result) => {
            if (result.isConfirmed) {
				sessionStorage.clear();
				nav({
					pathname:"/",
				})
            }
          });
	}

	useEffect(()=>{
		const name = props.user.name.toString();
		const surname = props.user.surname.toString();
		setAvatar(name[0].toUpperCase() + surname[0].toUpperCase())
	},[props.user])

	useEffect(()=>{
    	props.func(search)
  	},[search])


	if ( !avatar ){
		return <div>Loading...</div>
	} else {
		return (
		   <AppBar sx={{backgroundColor:"forestgreen"}}>
			   <Container>
				   <Grid mb={{md:2,sm:1}} mt={{md:2,sm:1}} container sx={{height:"auto"}} alignItems="center">
					   <Grid item container md={1} xs={2} justifyContent="center">
						   <Tooltip title="Account settings">
							   <IconButton
								   onClick={handleClick}
								   size="small"
								   sx={{ ml: 2 }}
								   aria-controls={open ? 'account-menu' : undefined}
								   aria-haspopup="true"
								   aria-expanded={open ? 'true' : undefined}
								   >
								   <Avatar sx={{ width: 40, height: 40, backgroundColor:"rgb(240, 240, 240)", color:"black", fontSize:18, fontWeight:"bold" }}>
									   {avatar}
								   </Avatar>
							   </IconButton>
						   </Tooltip>
					   </Grid>
					   <Menu
						   anchorEl={anchorEl}
						   id="account-menu"
						   open={open}
						   onClose={handleClose}
						   onClick={handleClose}
						   PaperProps={{
						   elevation: 0,
						   sx: {
							   overflow: 'visible',
							   filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
							   mt: 1.5,
							   '& .MuiAvatar-root': {
							   width: 32,
							   height: 32,
							   ml: -0.5,
							   mr: 1,
							   },
							   '&:before': {
							   content: '""',
							   display: 'block',
							   position: 'absolute',
							   top: 0,
							   right: 14,
							   width: 10,
							   height: 10,
							   bgcolor: 'background.paper',
							   zIndex: 0,
							   },
						   },
						   }}
						   transformOrigin={{ horizontal: 'right', vertical: 'top' }}
						   anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
					   >
						   <MenuItem onClick={handleAccount}>
							   <Avatar /> My account
						   </MenuItem>
						   <Divider />
						   <MenuItem onClick={handleLogout}>
							   Logout
						   </MenuItem>
					   </Menu>
					   <Grid container item md={3} xs={10}>
						   <Typography fontSize={{lg:25, md:20, sm:25, xs:20}} fontWeight="bold">Welcome {props.user.name}</Typography>
					   </Grid>
					   <Grid item md/>
					   <Grid container item md={3.5} xs={12} justifyContent="center">
						   <Paper sx={{backgroundColor:"darkseagreen", width:"260px"}}>
						   <InputBase
							   sx={{ ml: 1, flex: 1}}
							   placeholder="Search"
							   inputProps={{ 'aria-label': 'search' }}
							   value={search}
							   onChange={handleChange}
						   />
						   <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
							   <SearchIcon />
						   </IconButton>
						   </Paper>
					   </Grid>
					   <Grid item md/>
					   <Grid item container md={4.5} xs={12} alignItems="center">
						   <Grid item md sm={2.5} xs/>
						   <Grid item md={6.5} sm={5} xs={6.5}>
							   <Typography fontSize={{lg:25, md:20, sm:25, xs:15}} fontWeight="bold">Account balance:</Typography>
						   </Grid>
						   <Grid item md={3} sm={3} xs={3.5}>
							   {props.totalBalance > 0 ? <Typography fontSize={{lg:25, md:20, sm:25, xs:15}} color="lawngreen">{props.totalBalance}</Typography> : <Typography fontSize={{lg:25, md:20, sm:25, xs:15}} color="firebrick">{props.totalBalance}</Typography>}
						   </Grid>
						   <Grid item md sm xs={0.5}/>
						   <Grid item md={1} sm={0.5} xs={1}>
							   {props.totalBalance > 0 ? <ArrowCircleUpIcon sx={{fontSize:30,color:"lawngreen"}}/> : <ArrowCircleUpIcon sx={{transform:"rotate(180deg)",fontSize:30,color:"firebrick"}}/>}
						   </Grid>
						   <Grid item md sm={2.5} xs/>
					   </Grid>
				   </Grid>
			   </Container>
		   </AppBar>
	 )
	}
}
