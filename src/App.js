import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./container/Layout/Layout";
import Home from "./container/Home/Home";
import Balance from "./container/Balance/Balance";
import SingleItem from "./components/Item/SingleItem";
import AccountForm from "./components/Form/AccountForm";
import RegisterForm from "./components/Form/RegisterForm";
import CreateNewItem from "./components/Form/NewItemForm";

function App() {
  return (
    <Routes>
      	<Route path="/" element={<Layout />}/>
		<Route path="register" element={<RegisterForm/>}/>
        <Route path="home/" element={<Home/>}>
			<Route path="balance" element={<Balance/>}/>
			<Route path="item" element={<SingleItem/>}/>
			<Route path="account" element={<AccountForm/>}/>
			<Route path="createnewitem" element={<CreateNewItem/>}/>
      	</Route>
    </Routes>
  );
}

export default App;
