import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { HiUsers } from "react-icons/hi";
import { FaAddressBook } from "react-icons/fa";

import Container from "./components/Container/Container";
import Section from "./components/Section/Section";
import ContactForm from "./components/ContactForm/ContactForm";
// import FormikContactForm from "../src/components/FormikContactForm/FormikContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";

function App() {
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem("contacts")) ?? ""
  );

  const [filter, setFilter] = useState("");

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    const findName = contacts.find(
      (contact) => contact.name === newContact.name
    );

    if (!findName) {
      setContacts((prev) => [newContact, ...prev]);
      console.log(contacts);
      toast.success(`Contact ${newContact.name} added to Phonebook`, {
        duration: 4000,
        position: "top-right",
      });
    } else {
      toast.error(`${newContact.name} is already in contacts.`, {
        duration: 4000,
        position: "top-right",
      });
    }
  };

  const changeFilter = (e) => {
    setFilter(e.currentTarget.value);
  };

  const onInputSearch = () => {
    const searchName = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(searchName)
    );
  };

  const deleteContact = (contactId) => {
    setContacts(
      contacts.filter((contact) => {
        return contact.id !== contactId;
      })
    );
  };

  const visibleContacts = onInputSearch();
  return (
    <Container>
      <Toaster />
      <Section title={"Phonebook"}>
        <FaAddressBook size="24" />
        {/* <FormikContactForm onSubmit={this.addContact} /> */}
        <ContactForm onSubmit={addContact}></ContactForm>
      </Section>

      <Section title={"Contacts"}>
        <HiUsers size="26" />
        <Filter onChange={changeFilter} value={filter} />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={deleteContact}
        ></ContactList>
      </Section>
    </Container>
  );
}

export default App;
