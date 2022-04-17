import React, {useState} from 'react'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Paper from '@mui/material/Paper'
import image from "../../img/dollar.png"
import Button from '@mui/material/Button'
import { Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { logInUser } from '../../controller/logInUser'
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);


const background = {
	height: "100vh",
	backgroundImage:`url(${image})`,
}

//Contenedor de la sección de login, que contiene el form para el mismo

export default function Login() {
	const [user, setUser] = useState({
		email:"",
		password:"",
	})
	const nav = useNavigate();

	const handleClick = (event) => {
		event.target.id === "login" && login();
		event.target.id === "register" && nav("/register");
	}

	const handleChange = (event) => {
		setUser({...user,[event.target.id]:event.target.value})
	}

	const login = async () => {
		const response = await logInUser(user);
        if (response.status === 200) {
            MySwal.fire({
                title: <strong>{response.message}!</strong>,
                showConfirmButton: true,
                confirmButtonText: "Okay",
                confirmButtonColor: "forestgreen",
              }).then(() => {
                    const storeUser = JSON.stringify(response.data);
                    sessionStorage.clear();
                    sessionStorage.setItem("user",storeUser);
                    nav("/home/balance");
              });
        } else {
            MySwal.fire({
                title: <strong>{response.message}!</strong>,
                showConfirmButton: true,
                confirmButtonText: "Okay",
                confirmButtonColor: "forestgreen",
              }).then(() => {
                nav("/");
              });           
        }
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
									<TextField 
										id="email" 
										label="Email" 
										variant="outlined"
										onChange={handleChange}
										sx={{marginTop:3,width:"100%"}}
										/>
								</Grid>
								<Grid item md={2} xs={1}/>
								<Grid item md={2} xs={1}/>
								<Grid item md={8} xs={10}>
									<TextField 
										id="password" 
										label="Password" 
										type="password"
										variant="outlined"
										onChange={handleChange}
										sx={{marginTop:3,width:"100%"}}
									/>
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