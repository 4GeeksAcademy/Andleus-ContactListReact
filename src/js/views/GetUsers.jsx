import React, { useState, useEffect, useContext } from "react";

import "../../styles/demo.css";
import { useResolvedPath } from "react-router";







export const GetTasks = () => {

	const [users, setUsers] = useState([]);
	let base_url = "https://playground.4geeks.com/apis/fake/todos";
	
	
	const getUsers = async () => {
		const url = base_url + '/user'
		const options = {
			method: 'GET'
		}
		const response = await fetch(url, options);
		console.log(response);
		if(response.ok){
			const data = await response.json();
			setUsers(data);
		}else{
			console.log("ERROR -> ", response.status, response.statusText);
		}
	}



	useEffect(() => {
		getContacts();
	}, []);



	return (
		<div className="d-flex justify-content-center">{users.map((user, i )=> (
			<div className="card" key={i}>
				<p>{user}</p>
			</div>
		))}</div>
	);
};
