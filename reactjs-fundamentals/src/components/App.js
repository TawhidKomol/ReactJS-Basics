/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import AddContact from './AddContact';
import './App.css';
import ContactList from './ContactList';
import Header from './Header';

function App() {
    const LOCAL_STORAGE_KEY = 'contacts';
    const [contacts, setContacts] = useState([]);

    const addContactHandler = (contact) => {
        setContacts([...contacts, contact]);
        console.log(contact);
    };

    useEffect(() => {
        const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if (retriveContacts) setContacts(retriveContacts);
    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    }, [contacts]);
    return (
        <div className="ui container">
            <Header />
            <AddContact addContactHandler={addContactHandler} />
            <ContactList contacts={contacts} />
        </div>
    );
}

export default App;
