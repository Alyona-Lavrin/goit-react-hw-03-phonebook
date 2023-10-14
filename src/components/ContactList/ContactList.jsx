import { ContactsUl, Contactsli, DelBtn } from './ContactList.styled'

const ContactList = ({contacts, onDeleteContact }) => {
  return (
    <>
      <ContactsUl>
        {contacts.map(({id, name, number}) => {
          return (
            <Contactsli key={id}>
              <span>{name}</span>: <span>{number}</span> <DelBtn onClick={() => onDeleteContact(id)}>Delete</DelBtn>
            </Contactsli>
          )
        })}
      </ContactsUl>
    </>
  )
}

export default ContactList