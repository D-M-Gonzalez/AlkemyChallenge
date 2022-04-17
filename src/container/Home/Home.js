import React, {useEffect, useState} from 'react';
import { Outlet, useNavigate, createSearchParams } from 'react-router-dom';
import HomeBar from '../../components/Menu/HomeBar';
import { findItemsbyUser } from '../../controller/findItemsByUser';

//Layout de la página principal de balance, contiene la barra de navegación
//y el outlet de los diferentes contenedores que son balance general, forms de usuario
//creación de item y modificación de item
//Pasa toda la lógica por medio de context y pasa funciones para generar refreshes

export default function Home() {
	const [itemsList, setItemsList] = useState([]);
	const [srch, setSrch] = useState("");
	const [total, setTotal] = useState();
	const [user, setUser] = useState({});
	const nav = useNavigate()

	useEffect(()=>{
		setTotal(itemsList.reduce(getSum, 0).toFixed(2));
	},[itemsList])

	useEffect(()=>{
		fetchData().catch(console.error);
	},[])
	
	const fetchData = async () => {
		const currentUser = JSON.parse(sessionStorage.getItem("user"));
		const response = await findItemsbyUser(currentUser);
		let sortedItems;
		if ( response.data.items ){
			sortedItems = response.data.items.sort((a,b)=>
			new Date(b.date) - new Date(a.date))
		} else {
			sortedItems = [];
		}
		setItemsList(sortedItems);
		setUser(currentUser);
	}

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
			<Outlet context={{obj:[itemsList],searchString:[srch],func:[singleItem],funcUser:[set_user],funcFetch:[fetchData]}}/>
		 </div>
  )
}
