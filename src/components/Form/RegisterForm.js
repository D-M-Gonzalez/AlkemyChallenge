import { Grid, Paper, TextField, Typography, Button } from '@mui/material';
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { registerUser } from '../../controller/registerUser';

const MySwal = withReactContent(Swal);

//Form used in the modification of an item

export default function SingleItem() {
    const [data, setData] = useState({
        email:"",
        password:"",
        name:"",
        surname:"",
        address:"",
        phonenumber:"",
    })
    const nav = useNavigate();

    const handleAccept = async () => {
        const response = await registerUser(data);
        console.log("Status: " + response.status)
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

    const handleReject = () => {
        MySwal.fire({ //Fires a warning before doing the deletion
            title: <strong>Are you sure?</strong>,
            html: <i>Changes won't be saved!</i>,
            showDenyButton: true,
            showConfirmButton: true,
            confirmButtonText: "Yes, cancel!",
            confirmButtonColor: "darkred",
            denyButtonText: "No, go back!",
            denyButtonColor: "forestgreen",
          }).then(async (result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Account creation cancelled!",
                showConfirmButton: true,
                confirmButtonColor: "forestgreen",
              }).then(() => {
                nav(-1);
              });
            }
          });
    }

    const handleChanges = (event) => {
        setData({...data,[event.target.id]:event.target.value,})
    }

    return (
        <Grid container mt={2} justifyContent="center">
            <Paper sx={{width:"50%"}}>
                <Grid container justifyContent="center">
                    <Grid item container xs={12} justifyContent="center">
                        <Typography mt={2} mb={2} fontWeight="bold" fontSize={{sm:30, xs:16}}>Register new account:</Typography>
                    </Grid>
                        <Grid item mt={1} xs={8}>
                            <TextField
                                required
                                id="email"
                                label="Email"
                                inputProps={{style: {fontSize: 14}}}
                                onChange={handleChanges}
                                sx={{width:"100%"}}
                            />
                        </Grid>
                        <Grid item mt={1} xs={6.5}>
                            <TextField
                                required
                                id="password"
                                label="Password"
                                sx={{width:"100%"}}
                                inputProps={{style: {fontSize: 14}}}
                                onChange={handleChanges}
                            />
                        </Grid>
                        <Grid item mt={1} xs={6.5}>
                            <TextField
                                required
                                id="name"
                                label="Name"
                                sx={{width:"100%"}}
                                inputProps={{style: {fontSize: 14}}}
                                onChange={handleChanges}
                            />
                        </Grid>
                            <Grid item mt={1} xs={6}>
                                <TextField
                                    required
                                    id="surname"
                                    label="Surname"
                                    sx={{width:"100%"}}
                                    inputProps={{style: {fontSize: 14}}}
                                    onChange={handleChanges}
                                />
                            </Grid>
                            <Grid item mt={1} xs={10}>
                                <TextField
                                    required
                                    id="address"
                                    label="Address"
                                    sx={{width:"100%"}}
                                    inputProps={{style: {fontSize: 14}}}
                                    onChange={handleChanges}
                                />
                            </Grid>
                            <Grid item mt={1} xs={8}>
                                <TextField
                                    required
                                    id="phonenumber"
                                    label="Phone Number"
                                    sx={{width:"100%"}}
                                    inputProps={{style: {fontSize: 14}}}
                                    onChange={handleChanges}
                                />
                            </Grid>
                    <Grid item container mt={4} mb={4} xs={12}>
                        <Grid item xs/>
                        <Grid item container xs={4} justifyContent="center">
                            <Button variant="contained" color="success" onClick={handleAccept}><Typography fontSize={{sm:16,xs:10}}>Accept Changes</Typography></Button>
                        </Grid>
                        <Grid item xs/>
                        <Grid item container xs={4} justifyContent="center">
                            <Button variant="contained" color="error" onClick={handleReject}><Typography fontSize={{sm:16,xs:10}}>Discard Changes</Typography></Button>
                        </Grid>
                        <Grid item xs/>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    )
}