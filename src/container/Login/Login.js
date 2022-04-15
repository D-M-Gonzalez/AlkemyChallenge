import React from 'react'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Paper from '@mui/material/Paper'
import image from "../../img/dollar.png"
import Button from '@mui/material/Button'
import { Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'


const background = {
	height: "100vh",
	backgroundImage:`url(${image})`,
}

export default function Login() {
	const nav = useNavigate();

	const handleClick = (event) => {
		event.target.id === "login" && nav("/home/balance");
		event.target.id === "register" && nav("/register");
	}

  return (
    <Grid container >
        <Grid item xs={12}>
            <div style={background}>
				<Grid container>
					<Grid item md={2} xs={1}/>
					<Grid item mt={15} md={8} xs={10}>
						<Paper elevation={4}>
							<Typography fontSize={{md:30,xs:20}} fontWeight="bolder" color="black" ml={5} pt={2}>Login to Your Account</Typography>
							<Grid container>
								<Grid item md={2} xs={1}/>
								<Grid item md={8} xs={10}>
									<TextField id="email" label="Email" variant="outlined" sx={{marginTop:3,width:"100%"}}/>
								</Grid>
								<Grid item md={2} xs={1}/>
								<Grid item md={2} xs={1}/>
								<Grid item md={8} xs={10}>
									<TextField id="password" label="Password" variant="outlined" sx={{marginTop:3,width:"100%"}}/>
								</Grid>
								<Grid item md={2} xs={1}/>
								<Grid item md={2} xs={1}/>
								<Grid item md={3} xs={4.5}>
									<Button variant="contained" id="login" sx={{width:"100%", marginTop:5,marginBottom:5, backgroundColor:"darkseagreen", color:"white"}} onClick={handleClick}>Login</Button>
								</Grid>
								<Grid item md={2} xs={1}/>
								<Grid item md={3} xs={4.5}>
									<Button variant="contained" id="register" sx={{width:"100%", marginTop:5,marginBottom:5, backgroundColor:"darkseagreen", color:"white"}} onClick={handleClick}>Register</Button>
								</Grid>
								<Grid item md={2} xs={1}/>
							</Grid>
						</Paper>
					</Grid>
					<Grid item md={2} xs={1}/>
				</Grid>
			</div>
        </Grid>
    </Grid>
  )
}