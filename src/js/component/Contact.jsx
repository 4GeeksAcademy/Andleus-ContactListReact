import React, { useContext, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAt, faEraser, faMapPin, faPencilAlt, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { Context } from '../store/appContext';
import ContactModel from './ContactModal.jsx';




export const Contact = () => {

    const { store, actions } = useContext(Context);
    const [ contacts, setContacts ] = useState([]);
    const [ modalIsOpen, setModalIsOpen ] = useState(false);
    const [ contactId, setContactId ] = useState("");
    console.log("EN CONTACT");
    console.log("YESTO", store.mioAgenda);

    const openModal = (id) => {
        setContactId(id);
        setModalIsOpen(true);
    };
    const closeModal = () => setModalIsOpen(false);



    const handleModalSubmit = (text) => {
        console.log("submitted text: ", text);
    };

    const handleDeleteContact = (id) => {
        actions.deleteContact(id);
    };

    const handleUpdateContactData = (id) => {
        openModal(id);
    };


    useEffect(() => {

        const fetchContacts = async () => {
            try {
                const contacts = await actions.getContacts();
                console.log("DESDE CONTACTLIST ->", contacts)
                setContacts(contacts);
            } catch (error) {
                console.error("Error fethcing contacts: ", error);
            }
        }

        fetchContacts();

    }, [actions]);

    console.log("Esto es fuera del useEffect -> ", contacts);

    return (

        <div className='container m-auto p-3'>
            <h1>MIO CONTACTS</h1>
            {
                contacts.map((contact, index) => {
                    return (

                        <div key={index} className='contactCard'>
                            <div className="card flex-row justify-content-between">
                                <img alt="" src={contact.imgUrl || "https://img.freepik.com/vector-premium/icono-circulo-usuario-anonimo-ilustracion-vector-estilo-plano-sombra_520826-1931.jpg"} className="w-25" />
                                <div className="card-body">
                                    <div className="m-3 d-flex">
                                        <div><h5>{contact.full_name}</h5></div>
                                        <button className='ms-auto me-3' onClick={() => handleDeleteContact(contact.id)}>
                                            <FontAwesomeIcon icon={faEraser} className="m-2" />
                                        </button>
                                        {/* <button onClick={() => handleUpdateContactData(contact.id)}> */}
                                            {/* <Link to="/" onClick={() => handleUpdateContactData(contact.id)}> */}
                                            {/* <FontAwesomeIcon icon={faPencilAlt} className="m-2" /> */}
                                            {/* </Link> */}
                                        {/* </button> */}
                                        <button onClick={() => openModal(contact.id)}>
                                            <FontAwesomeIcon icon={faPencilAlt} className="m-2" />
                                        </button>
                                        <div id='myModal'>
                                            <ContactModel
                                                isOpen={modalIsOpen}
                                                onRequestClose={closeModal}
                                                onSubmit={handleModalSubmit}
                                                contactId={contactId}
                                            />
                                        </div>
                                        
                                    </div>
                                    <div className="justify-content-between text-black-50 m-4">
                                        <p className="font-weight-bold"><FontAwesomeIcon icon={faAt} /> {contact.email}</p>
                                        <p className="font-weight-bold"><FontAwesomeIcon icon={faPhoneVolume} className="m-1" /> {contact.phone}</p>
                                        <p className="font-weight-bold"><FontAwesomeIcon icon={faMapPin} className="m-1" /> {contact.address}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    );
                })
            }
        </div>

    );

}