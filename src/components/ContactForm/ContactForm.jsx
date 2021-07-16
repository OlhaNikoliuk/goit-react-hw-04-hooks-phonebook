import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FaUserAlt, FaPhoneAlt } from "react-icons/fa";

import { CustomForm, Label, Input, Button } from "./ContactForm.styled";

function ContactForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const onInputChange = (e) => {
    const { value, name } = e.target;

    switch (name) {
      case "name":
        setName(value);
        break;

      case "number":
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    onSubmit({ id: uuidv4(), name, number });
    setName("");
    setNumber("");
  };

  return (
    <div>
      <CustomForm onSubmit={onFormSubmit} autoComplete="off">
        <Label>
          <FaUserAlt size="16" />
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={onInputChange}
            value={name} // в value значение инпута
            placeholder="Rosie Simpson"
            autoFocus
          />
        </Label>
        <Label>
          <FaPhoneAlt size="16" />
          Phone
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            onChange={onInputChange}
            value={number}
            placeholder="38(***) *** ****"
          />
        </Label>
        <Button>Add Contact</Button>
      </CustomForm>
    </div>
  );
}

export default ContactForm;
