import React, {useEffect, useState} from 'react'
import { Grid, Container, Paper, Typography, Divider, Button } from '@mui/material'
import { useLocation, useOutletContext, useSearchParams, useNavigate} from 'react-router-dom';
import BalanceItem from '../../components/Item/BalanceItem';
import LastItemsTextField from '../../components/TextField/LastItemsTextField';
import CategoryTextField from '../../components/TextField/CategoryTextField';
import searchItem from '../../modules/search';
import { Box } from '@mui/system';
import TypeTextField from '../../components/TextField/TypeTextField';

export default function Balance() {
	const {obj, searchString} = useOutletContext()
	const [items, setItems] = obj;
	const [srch, setSrch] = searchString;
	const [srchItems, setSrchItems] = useState([]);
	const [qty, setQty] = useState(10);
	const [cat, setCat] = useState("ALL");
	const [type, setType] = useState("ALL");
	const [searchParams, setSearchParams] = useSearchParams();
	const loc = useLocation();
	const nav = useNavigate();

	const get_qty = (data) => {
		setQty(data)
		setSearchParams({quantity: data,category: cat,type:type, search:srch})
	}

	const get_cat = (data) => {
		setCat(data)
		setSearchParams({quantity: qty,category: data,type:type, search:srch})
	}

	const get_type = (data) => {
		setType(data)
		setSearchParams({quantity: qty,category: cat,type:data, search:srch})
	}

	const handleClick = () => {
		nav("/home/createnewitem")
	}

	useEffect(()=>{
		setSearchParams({quantity: qty,category: cat,type:type, search:srch})
	},[srch])

	useEffect(()=>{
		setSrchItems(searchItem(items,searchParams))
	},[loc])

  return (
	  <Container>
			<Paper sx={{width:"100%"}}>
				<Grid container mt={{md:15, xs:20}} alignItems="center">
					<Grid item container m={2} xs={12} alignItems="center">
						<Grid item container xs={12} justifyContent="center">
							<Typography fontSize={{sm:30, sx:20}} fontWeight="bold">Account balance details:</Typography>
						</Grid>
						<Grid item container md={3} sm={5} xs={12} alignItems="center">
							<Grid item container xs={6} justifyContent="flex-start">
								<Typography fontSize={{sm:20, sx:14}} fontWeight="bold">Category:</Typography>
							</Grid>
							<Grid item container xs={6} justifyContent="flex-end">
								<CategoryTextField func={get_cat}/>
							</Grid>
							<Grid item lg md={4.2}/>
						</Grid>
						<Grid item xs/>
						<Grid item container md={3} sm={5} xs={12} alignItems="center">
							<Grid item container xs={6} justifyContent="flex-start">
								<Typography fontSize={{sm:20, sx:14}} fontWeight="bold">Type:</Typography>
							</Grid>
							<Grid item container xs={6} justifyContent="flex-end">
								<TypeTextField func={get_type}/>
							</Grid>
							<Grid item lg md={4.2}/>
						</Grid>
						<Grid item xs/>
						<Grid item container md={3} sm={5} xs={12} alignItems="center">
							<Grid item container xs={6} justifyContent="flex-start">
								<Typography fontSize={{sm:20, sx:14}} fontWeight="bold">View last:</Typography>
							</Grid>
							<Grid item container xs={6} justifyContent="flex-end">
								<LastItemsTextField func={get_qty}/>
							</Grid>
							<Grid item lg={0.1} md={0.2} sm={0.2} xs={0.2}/>
						</Grid>
						{Array.from(srchItems).map((el)=>{
							return ((el !== "") && (<Grid key={el.id} item xs={12}><BalanceItem id={el.id} description={el.description} date={el.date} value={el.value} type={el.type}/></Grid>))
						})}
					</Grid>
						<Grid item xs={12}><Divider/></Grid>
				</Grid>
			</Paper>
			<Box mt={2} mb={2}>
				<Button variant="contained" color="success" onClick={handleClick}><Typography>Add new item</Typography></Button>		
			</Box>
		</Container>
	)
}