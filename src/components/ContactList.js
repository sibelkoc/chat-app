import React from 'react';
import Contact from './Contact.js'

const ContactList = props => {
    return (
        <div>
        {props.Contact.map(contact => <Contact name={contact.name} avatar={contact.avatar} status={contact.status}/>)}
        </div>
    )
}

export default ContactList;
