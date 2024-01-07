import React, { useState, useEffect, useContext } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from "react-router-dom";
import { Context } from '../store/appContext.js';


import "../../styles/demo.css";

export const CreateUser = () => {

	const { store, actions } = useContext(Context);
	const navigate = useNavigate();

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");

    const handlecreateUsers = (e) => {
		const newUser = {
			full_name: name,
            address: address,
            phone: phone,
            email: email,
            agenda_slug: "mioAgenda3"
        };
		// const newUser = [
			// 	{
				// 		"full_name": "name",
				// 		"address": "address",
				// 		"phone": "phone",
				// 		"email": "email",
				// 		"agenda_slug": "mioAgenda"
				// 	},
				// 	{
					// 		"full_name": "name",
					// 		"address": "address",
					// 		"phone": "phone",
					// 		"email": "email",
					// 		"agenda_slug": "mioAgenda"
					// 	},
					// 	{
		// 		"full_name": "name",
		// 		"address": "address",
		// 		"phone": "phone",
		// 		"email": "email",
		// 		"agenda_slug": "mioAgenda"
		// 	}
		// ]
		console.log(newUser);
        actions.createContact(newUser);
    };
	
	const handleSubmit = (e) => {
		e.preventDefault();
		navigate("/contactList");
	};



	return (
		<div>
			<div className="p-4 col-6 m-auto">
                <h2 className="text-center"><strong>Add a new contact</strong></h2>
                <Form className="text-start" onSubmit={handleSubmit} >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control placeholder="Full Name" onChange={(e) => setName(e.target.value)} />
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                        <Form.Label>Phone</Form.Label>
                        <Form.Control placeholder="Enter Phone" onChange={(e) => setPhone(e.target.value)}  />
                        <Form.Label>Address</Form.Label >
                        <Form.Control placeholder="Enter address" onChange={(e) => setAddress(e.target.value)} />
                        <div className="d-grid gap-2 d-flex justify-content-center">
                            <Button className="my-2" variant="success" type="submit" onClick={handlecreateUsers}  >Save</Button>
                            <Button className="my-2" variant="warning" type="reset">Reset</Button>
                        </div>
                        <div>
                            <Link to="/contactList">or get back to contacts</Link>
                        </div>
                    </Form.Group>
                </Form>
            </div>
		</div>
	);
};
