import React, {useState} from 'react'
import { Contact } from '../../models/contact.class'
import ContactComponent from '../pure/ContactComponent'; 

export const ContactListComponent = () => {

    let defaultContact = new Contact('Emmanuel','Martinez','mrtnz3007@gmail.com',false);

const [enLinea,setEnLinea] = useState(defaultContact.conected)

    const changeState = () =>{
        setEnLinea(!enLinea);
    }


  return (
    <div>
        <ContactComponent contact={defaultContact} changeState={changeState} enLinea={enLinea}/>
    </div>
  )
}
