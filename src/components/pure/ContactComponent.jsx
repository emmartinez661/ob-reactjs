import React from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../../models/contact.class'


const ContactComponent = ({ contact, enLinea, changeState }) => {
    

    const handleClick = () =>{
        changeState();
    }

  return (
        <div>
            <h1>Name: {contact.name}</h1>
            <h2>Apellido: {contact.last_name}</h2>
            <h3>Email: {contact.email}</h3>
            <h4>
                {
                    enLinea ? 'En linea' : 'Desconectado' 
                }
            </h4>
            <button type="button" onClick={handleClick}>Cambiar Estado de Conexion </button>
        </div>
  )
}

Contact.propTypes = {
    contact: PropTypes.instanceOf( Contact )
}

export default ContactComponent;