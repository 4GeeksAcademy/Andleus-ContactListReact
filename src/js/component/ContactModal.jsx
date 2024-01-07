import React, { useState, useEffect, useContext } from "react";
import Modal from "react-modal";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Context } from '../store/appContext.js';



const ContactModal = ({ isOpen, onRequestClose, onSubmit, contactId}) => {

    const { store, actions } = useContext(Context)
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");

    console.log("ESTO HA LLEGADO -> ",contactId);


    useEffect(() => {
        
        const fetchContactData = async () => {
            try{
                const contactData = await actions.getOneContact(contactId);
                console.log("ESTO ES CONTACTDATA -> ",contactData);
                setName(contactData.full_name || "Can't be found it...");
                setEmail(contactData.email || "Can't be found it...");
                setPhone(contactData.phone || "Can't be found it...");
                setAddress(contactData.address || "Can't be found it...");
            }catch(error){
                console.error("ERROR fecthing contact data: ",error);
            }
        }

        if(isOpen){
            fetchContactData();
        }

    }, [isOpen, contactId])



    const handleSubmit = () => {

        const updatedContact = {
            full_name: name,
            email: email,
            phone: phone,
            address: address,
            id: contactId,
            agenda_slug: "mioAgenda3"
        }


        onRequestClose();
        actions.updateContact(updatedContact);
    };

    return(

        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="UpdateContactData"
            appElement={document.getElementById("myModal")}
            style={{
                content: {
                  width: '400px', // Set the width to your desired size
                  height: '500px',
                  margin: 'auto', // Center the modal horizontally
                  borderRadius: '5px',
                  boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', // Add a subtle box-shadow

                },
                overlay: {
                    backgroundColor: 'transparent', // Set the overlay background color to transparent
                }
              }}
        >   
            <h3>Update the contact data</h3>
            <Form className="text-start" onSubmit={handleSubmit} >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control 
                            placeholder="Full Name" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <Form.Label>Email address</Form.Label>
                        <Form.Control 
                            type="email" 
                            placeholder="Enter email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Form.Label>Phone</Form.Label>
                        <Form.Control 
                            placeholder="Enter Phone" 
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)} 
                        />
                        <Form.Label>Address</Form.Label >
                        <Form.Control 
                            placeholder="Enter address" 
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                        <div className="d-grid gap-2 d-flex justify-content-center">
                            <Button className="my-2" variant="success" type="submit" onClick={handleSubmit} >Update contact</Button>
                            <Button className="my-2" variant="warning" type="reset">Reset</Button>
                        </div>
                    </Form.Group>
                </Form>
        </Modal>

    );


}

export default ContactModal;