import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { Card, CardMedia } from '@mui/material'

//Contenedor de la página de inicio, solo muestra datos por ahora

export default function Intro() {
  return (
    <Grid container>
        <Grid item xs={12} sx={{height:"100vh", backgroundColor:"darkseagreen"}}>
            <Grid mt={5} container>
				<Grid item xs={1}/>
                <Grid item xs={10}>
                    <Grid container alignContent="center" justifyContent="center" alignItems="center" justifyItems="center">
                        <Typography fontSize={{xl:50, md:40, sm:40, xs:30}} fontWeight="bolder" color="white" sx={{textShadow:"2px 2px 4px dimgray"}}>FinancyAPP</Typography>
                    </Grid>
                </Grid>
				<Grid item xs={1}/>
				<Grid item xs={1}/>
				<Grid mt={2} item xs={10}>
                    <Typography fontSize={20} fontWeight="bold" color="white">It has never been so easy to access your balance and manage your records. FinancyAPP
					is the ultimate solution to never miss any cent again.</Typography>
                </Grid>
				<Grid item xs={1}/>
				<Grid item xs={1}/>
				<Grid mt={2} item xs={10}>
                    <Typography fontSize={20} fontWeight="bold" color="white">Check your balance from any device. Access your information with ease and get the
					daily/monthly/yearly details.</Typography>
                </Grid>
				<Grid item xs={1}/>
                <Grid item xs={1.5}/>
                <Grid item mt={2} xs={9}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="auto"
                            image="./assets/intro.png"
                            alt="green iguana"
                        />
                    </Card>
                </Grid>
                <Grid item xs={1.5}/>
            </Grid>
        </Grid>
    </Grid>
  )
}
