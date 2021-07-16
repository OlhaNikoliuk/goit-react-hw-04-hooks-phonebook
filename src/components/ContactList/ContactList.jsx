import PropTypes from "prop-types";
import {BsTrashFill} from 'react-icons/bs'
import {RiContactsFill} from 'react-icons/ri'

import { List, ListItem, Button } from "./ContactList.styled";

function ContactList({ contacts, onDeleteContact }) {
  return (
    <List>
      {contacts.map((contact) => {
        return (
          <ListItem key={contact.id}>
            <RiContactsFill size='17'/>
            {contact.name}:  {contact.number}
            <Button type="button" onClick={() => onDeleteContact(contact.id)}>
              Delete
              <BsTrashFill></BsTrashFill>
            </Button>
          </ListItem>
        );
      })}
    </List>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  onDeleteContact: PropTypes.func,
};

export default ContactList;
