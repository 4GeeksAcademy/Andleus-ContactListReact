import React, { useContext, useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import { Contact } from '../component/Contact.jsx';
import { Context } from '../store/appContext.js';

// Establecemos las variables constantes que van a ir cambiando (props no, params sí)


export const Contactlist = () => {



   return (
    <div>
      <nav className="navbar navbar-light bg-light mb-3 p-2">
        <Link to="/"><span className="navbar-brand mb-0 h1">Home</span></Link>
        <Link to="/createUser">
          <button className="btn btn-warning">Add a New Contact</button>
        </Link>
      </nav>
      <div className="container display-flex m-auto">
        <h3>Mio Contact List</h3>
        < Contact />
      </div>
    </div>
  );
}
