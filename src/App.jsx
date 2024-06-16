import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";

import "./App.css";

import initContacts from "./assets/contacts.json";

import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem("Phonebook")) || initContacts
  );
  const [query, setQuery] = useState("");
  useEffect(() => {
    localStorage.setItem("Phonebook", JSON.stringify(contacts));
  }, [contacts]);

  const newContId = nanoid();

  function addContact(newCont) {
    setContacts([...contacts, { ...newCont, id: newContId }]);
  }

  function deleteContact(id) {
    setContacts(contacts.filter((cont) => cont.id !== id));
  }

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          Formik={Formik}
          Form={Form}
          Field={Field}
          ErrorMessage={ErrorMessage}
          setQuery={setQuery}
          addContact={addContact}
          contacts={contacts}
          Yup={Yup}
        />
        <SearchBox
          Formik={Formik}
          Field={Field}
          ErrorMessage={ErrorMessage}
          setQuery={setQuery}
        />
        <ContactList
          list={contacts}
          query={query}
          deleteContact={deleteContact}
        />
      </div>
    </>
  );
}

export default App;
