const getState = ({ getStore, getActions, setStore }) => {


	const url_base = "https://playground.4geeks.com/apis/fake/contact";


	return {

		store:{
				yesto: "BUENAS",
				mioAgenda: []
		},
		actions: {

			createContact : async (newUser) => {
				const options = {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(newUser)

				};
				console.log(options.body);
				const response = await fetch(url_base, options);
				if(response.ok) {
					const data = await response.json();
					console.log(data);
					const contacts = await getActions().getContacts();
					setStore({"mioAgenda": contacts});
					console.log("My contacts -> ",getStore().mioAgenda);
					localStorage.setItem("contactLocal", JSON.stringify(contacts))
				}else{
					console.log("ERROR -> ", response.status, response.statusText);
				} 
			},

			// createUserTEST : async (newUser) => {
			// 	console.log("TEST CREATE USER");
			// 	console.log(newUser);
			// 	newUser.forEach(user => () => {
			// 		console.log(user);
			// 		console.log("USER");
			// 	});
			// 	await newUser.forEach(async (user) => {
			// 		console.log(user);
			// 		const options = {
			// 			method: "POST",
			// 			headers: {
			// 				"Content-Type": "application/json"
			// 			},
			// 			body: JSON.stringify(user)
			// 		};
			// 		console.log(options.body);
			// 		const response = await fetch(url_base, options);
			// 		if(response.ok) {
			// 			const data = response.json();
			// 			console.log(data);
			// 			const users = await getActions().getUsers();
			// 			setStore({"myContacts": users});
			// 			console.log("DONE -> ", response.status, response.statusText);
			// 		}else{
			// 			console.log("ERROR -> ", response.status, response.statusText);
			// 		} 
			// 	});
			// },
			
			getContacts : async () => {
				const options = {
					method: "GET"
				};
				const response = await fetch(url_base+"/agenda/mioAgenda3", options);
				if(response.ok) {
					const data = await response.json();
					console.log("ESTO ES DE GET ",data);
					return data;
				}else{
					console.log("ERROR -> ", response.status, response.statusText);
				} 
			},

			
			deleteContact : async (id) => {
				const options = {
					method: "DELETE"
				};
				const response = await fetch(`${url_base}/${id}`, options);
				console.log(`${url_base}/${id}`);
				if(response.ok) {
					const data = await response.json();
					console.log(data);
					const contacts = await getActions().getContacts();
					setStore({"mioAgenda": contacts});
					localStorage.setItem("contactLocal", JSON.stringify(contacts))
					location.reload();
				}else{
					console.log("ERROR -> ", response.status, response.statusText);
				} 
			}

		}
	};
};

export default getState;
