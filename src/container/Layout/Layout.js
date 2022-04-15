import React from 'react'
import Grid from '@mui/material/Grid'
import Intro from '../Intro/Intro'
import Login from '../Login/Login'

export default function Layout() {
  	return (
    	<Grid container>
			<Grid item md={0.4} xs={0.1}/>
			<Grid item md={5.5} xs={11.8}><Intro/></Grid>
			<Grid item md={0.1} xs={0.1}/>
			<Grid item md={0.1} xs={0.1}/>
			<Grid item md={5.5} xs={11.8}><Login/></Grid>
			<Grid item md={0.4} xs={0.1}/>
    	</Grid>
  	)
}
