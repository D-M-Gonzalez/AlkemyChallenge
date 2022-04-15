import { Container, Grid, Paper, TextField, MenuItem, Typography, Button } from '@mui/material';
import React, {useState, useEffect} from 'react'
import { useOutletContext, useSearchParams, useNavigate } from 'react-router-dom';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const categories = [
    {
      value: 'Food',
      label: 'Food',
    },
    {
      value: 'Expenses',
      label: 'Expenses',
    },
    {
      value: 'Salary',
      label: 'Salary',

    },
    {
      value: 'Other',
      label: 'Other',
    },
];

const types = [
    {
      value: 'in',
      label: 'in',
    },
    {
      value: 'out',
      label: 'out',
    },
];

const MySwal = withReactContent(Swal);

export default function CreateNewItem() {
    const [selectedItem, setSelectedItem] = useState({
        id:"",
        description:"",
        category:"Other",
        date:new Date(),
        value:"",
        type:"in",

    });

    const nav = useNavigate();

    const handleCatChange = (event) => {
        setSelectedItem({category:event.target.value});
    };

    const handleTypeChange = (event) => {
        setSelectedItem({type:event.target.value});
    };

    const handleChanges = (event) => {
        setSelectedItem({...selectedItem,[event.target.id]:event.target.value,})
    }

    const handleAccept = () => {
        MySwal.fire({
            title: <strong>New element created succesfully!</strong>,
            showConfirmButton: true,
            confirmButtonText: "Okay",
            confirmButtonColor: "forestgreen",
          }).then(() => {
            nav(-1);
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

    return (
        <Container>
            <Paper sx={{width:"100%"}}>
                <Grid container mt={{md:15, xs:20}}>
                    <Grid item container xs={12} justifyContent="center">
                        <Typography mt={2} mb={2} fontWeight="bold" fontSize={{sm:30, xs:16}}>Create new item:</Typography>
                    </Grid>
                    <Grid item container xs={12}>
                        <Grid item xs={1}/>
                        <Grid item container mt={2} sm={3} xs={10} justifyContent="center">
                            <TextField
                                required
                                id="description"
                                label="Description"
                                inputProps={{style: {fontSize: 14}}}
                                onChange={handleChanges}
                            />
                        </Grid>
                        <Grid item sm={0.5} xs={1}/>
                        <Grid item sm={0.5} xs={1}/>
                        <Grid item container mt={2} sm={3} xs={10} justifyContent="center">
                            <TextField
                                required
                                id="value"
                                label="Value"
                                type="number"
                                inputProps={{style: {fontSize: 14}}}
                                onChange={handleChanges}
                            />
                        </Grid>
                        <Grid item sm={0.5} xs={1}/>
                        <Grid item sm={0.5} xs={1}/>
                        <Grid item container mt={2} sm={2} xs={10} justifyContent="center">
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                disableFuture
                                label="Responsive"
                                openTo="year"
                                views={['year', 'month', 'day']}
                                value={selectedItem.date}
                                inputProps={{style: {fontSize: 14}}}
                                onChange={(newValue) => {
                                    setSelectedItem({...selectedItem,date:newValue,});
                                }}
                                renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider>
                        </Grid>
                        <Grid item xs={1}/>
                    </Grid>
                    <Grid item container mt={4} xs={12}>
                        <Grid item xs={1}/>
                        <Grid item container sm={4.5} xs={10} justifyContent="center">
                            <TextField
                                select
                                label="Select"
                                onChange={handleCatChange}
                                inputProps={{style: {fontSize: 14}}}
                                helperText="Please select the category"
                                value={selectedItem.category}
                                >
                                {categories.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item sm={0.5} xs={1}/>
                        <Grid item sm={0.5} xs={1}/>
                        <Grid item container sm={4.5} xs={10} justifyContent="center">
                            <TextField
                                id="type"
                                select
                                label="Select"
                                onChange={handleTypeChange}
                                inputProps={{style: {fontSize: 14}}}
                                helperText="Please select the type of movement"
                                value={selectedItem.type}
                                >
                                {types.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item xs={1}/>
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
        </Container>
    )
}
