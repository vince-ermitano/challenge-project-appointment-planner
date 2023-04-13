import React, { useState, useEffect } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [duplicate, setDuplicate] = useState(false);

  // get props
  const { contacts, addContact } = props;


  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if (!duplicate) {
      addContact(name, phone, email);
      setName("");
      setPhone("");
      setEmail("");
    }
  };

  /*
  Using hooks, check for duplicate contact names
  and update the duplicate state variable
  */
  useEffect(() => {
    const duplicate = contacts.some((contact) => contact.name === name);
    setDuplicate(duplicate);
  }, [name, contacts]);

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props and alert user
  */
  useEffect(() => {
    if (duplicate) {
      document.querySelector('.dup-name').style.display = 'block';
    } else {
      document.querySelector('.dup-name').style.display = 'none';
    }
  }, [duplicate]);



  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm handleSubmit={handleSubmit} setName={setName} setPhone={setPhone} setEmail={setEmail} name={name} phone={phone} email={email} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tiles={contacts} />
      </section>
    </div>
  );
};
