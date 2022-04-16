import React, {useEffect, useState} from 'react';
import { Outlet, useNavigate, createSearchParams } from 'react-router-dom';
import HomeBar from '../../components/Menu/HomeBar';

const balanceObj = [{
	id: "33",
	description: "Compra de agua",
	category: "Food",
	date: "11/06/22",
	value: 512.05,
	type: "out",
},{
	id: "32",
	description: "Compra de comida",
	category: "Food",
	date: "10/06/22",
	value: 450.05,
	type: "out",
},{
	id: "31",
	description: "Ingreso de pelvis",
	category: "Other",
	date: "09/06/22",
	value: 6000.00,
	type: "in",
},{
	id: "30",
	description: "Pago de luz",
	category: "Expenses",
	date: "06/06/22",
	value: 3542.50,
	type: "out",
},{
	id: "29",
	description: "Pago de gas",
	category: "Expenses",
	date: "05/06/22",
	value: 1523.40,
	type: "out",
},{
	id: "28",
	description: "Pago de alquiler",
	category: "Expenses",
	date: "01/06/22",
	value: 45820.00,
	type: "out",
},{
	id: "27",
	description: "Ingreso de sueldo",
	category: "Salary",
	date: "01/06/22",
	value: 35640.50,
	type: "in",
},{
	id: "26",
	description: "Gastos supermercado",
	category: "Food",
	date: "30/05/22",
	value: 2120.05,
	type: "out",
},{
	id: "25",
	description: "Pago pizza",
	category: "Food",
	date: "29/05/22",
	value: 1235.05,
	type: "out",
},{
	id: "24",
	description: "Cobro de llaveros",
	category: "Other",
	date: "27/05/22",
	value: 600.00,
	type: "in",
},{
	id: "23",
	description: "Compra de agua",
	category: "Food",
	date: "26/05/22",
	value: 450.89,
	type: "out",
},{
	id: "22",
	description: "Compra de agua",
	category: "Food",
	date: "11/06/22",
	value: 512.05,
	type: "out",
},{
	id: "21",
	description: "Compra de comida",
	category: "Food",
	date: "10/06/22",
	value: 450.05,
	type: "out",
},{
	id: "20",
	description: "Ingreso de pelvis",
	category: "Other",
	date: "09/06/22",
	value: 6000.00,
	type: "in",
},{
	id: "19",
	description: "Pago de luz",
	category: "Expenses",
	date: "06/06/22",
	value: 3542.50,
	type: "out",
},{
	id: "18",
	description: "Pago de gas",
	category: "Expenses",
	date: "05/06/22",
	value: 1523.40,
	type: "out",
},{
	id: "17",
	description: "Pago de alquiler",
	category: "Expenses",
	date: "01/06/22",
	value: 45820.00,
	type: "out",
},{
	id: "16",
	description: "Ingreso de sueldo",
	category: "Salary",
	date: "01/06/22",
	value: 35640.50,
	type: "in",
},{
	id: "15",
	description: "Gastos supermercado",
	category: "Food",
	date: "30/05/22",
	value: 2120.05,
	type: "out",
},{
	id: "14",
	description: "Pago pizza",
	category: "Food",
	date: "29/05/22",
	value: 1235.05,
	type: "out",
},{
	id: "13",
	description: "Cobro de llaveros",
	category: "Other",
	date: "27/05/22",
	value: 600.00,
	type: "in",
},{
	id: "12",
	description: "Compra de agua",
	category: "Food",
	date: "26/05/22",
	value: 450.89,
	type: "out",
},{
	id: "11",
	description: "Compra de agua",
	category: "Food",
	date: "11/06/22",
	value: 512.05,
	type: "out",
},{
	id: "10",
	description: "Compra de comida",
	category: "Food",
	date: "10/06/22",
	value: 450.05,
	type: "out",
},{
	id: "9",
	description: "Ingreso de pelvis",
	category: "Other",
	date: "09/06/22",
	value: 6000.00,
	type: "in",
},{
	id: "8",
	description: "Pago de luz",
	category: "Expenses",
	date: "06/06/22",
	value: 3542.50,
	type: "out",
},{
	id: "7",
	description: "Pago de gas",
	category: "Expenses",
	date: "05/06/22",
	value: 1523.40,
	type: "out",
},{
	id: "6",
	description: "Pago de alquiler",
	category: "Expenses",
	date: "01/06/22",
	value: 45820.00,
	type: "out",
},{
	id: "5",
	description: "Ingreso de sueldo",
	category: "Salary",
	date: "01/06/22",
	value: 35640.50,
	type: "in",
},{
	id: "4",
	description: "Gastos supermercado",
	category: "Food",
	date: "30/05/22",
	value: 2120.05,
	type: "out",
},{
	id: "3",
	description: "Pago pizza",
	category: "Food",
	date: "29/05/22",
	value: 1235.05,
	type: "out",
},{
	id: "2",
	description: "Cobro de llaveros",
	category: "Other",
	date: "27/05/22",
	value: 600.00,
	type: "in",
},{
	id: "1",
	description: "Compra de agua",
	category: "Food",
	date: "26/05/22",
	value: 450.89,
	type: "out",
},]


export default function Home() {
	const [balance, setBalance] = useState(balanceObj);
	const [srch, setSrch] = useState("");
	const [total, setTotal] = useState();
	const [user, setUser] = useState({});
	const nav = useNavigate()

	useEffect(()=>{
		setTotal(balance.reduce(getSum, 0).toFixed(2));
	},[balance])

	useEffect(()=>{
		const currentUser = JSON.parse(sessionStorage.getItem("user"))
		setUser(currentUser);
	},[])

	const set_user = () => {
		setUser(JSON.parse(sessionStorage.getItem("user")))
	}

	const get_srch = (data) => {
		setSrch(data);
	}

	const singleItem = (data) => {
		nav({
			pathname: "/home/item",
			search: `?${createSearchParams({id:data})}`,
		})
	}

	function getSum(total, el){
		return total + (el.type === "in" ? el.value : (-el.value))
	}

	if(!user.id){
		return <div>loading...</div>
	} else	return (
		 <div>
			<HomeBar func={get_srch} totalBalance={total} user={user}/>	
			<Outlet context={{obj:[balanceObj],searchString:[srch],func:[singleItem],funcUser:[set_user]}}/>
		 </div>
  )
}
