import { Container, Grid, Paper, TextField, MenuItem, Typography, Button } from '@mui/material';
import React, {useState, useEffect} from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { updateUser } from '../../controller/updateUser';

const MySwal = withReactContent(Swal);

export default function AccountForm(props) {
    const {funcUser} = useOutletContext()
	const [changeUser, setChangeUser] = funcUser;
    const [data, setData] = useState({
        id:undefined,
        email:undefined,
        password:undefined,
        name:undefined,
        surname:undefined,
        address:undefined,
        phonenumber:undefined,
    })
    const nav = useNavigate();


    const handleAccept = async () => {
        const response = await updateUser(data);
        MySwal.fire({
            title: <strong>{response.message}!</strong>,
            showConfirmButton: true,
            confirmButtonText: "Okay",
            confirmButtonColor: "forestgreen",
          }).then(() => {
                const storeUser = JSON.stringify(response.data);
                sessionStorage.clear();
                sessionStorage.setItem("user",storeUser);
                changeUser();
                nav({
                    pathname:"/home/balance",
                })
          });
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
                title: "Changes were cancelled!",
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

    useEffect(()=>{
        setData(JSON.parse(sessionStorage.getItem("user")));
    },[])

    if(!data.email){
        return <div>Loading...</div>
    } else 
        return (
            <Grid container mt={{md:15, xs:20}} justifyContent="center">
                <Paper sx={{width:"50%"}}>
                    <Grid container justifyContent="center">
                        <Grid item container xs={12} justifyContent="center">
                            <Typography mt={2} mb={2} fontWeight="bold" fontSize={{sm:30, xs:16}}>Account details:</Typography>
                        </Grid>
                            <Grid item mt={1} xs={8}>
                                <TextField
                                    required
                                    disabled
                                    id="email"
                                    label="Email"
                                    inputProps={{style: {fontSize: 14}}}
                                    defaultValue={data.email}
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
                                    defaultValue={data.password}
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
                                    defaultValue={data.name}
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
                                        defaultValue={data.surname}
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
                                        defaultValue={data.address}
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
                                        defaultValue={data.phonenumber}
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