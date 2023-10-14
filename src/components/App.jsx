import { Component } from "react";
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList'

export class App extends Component {

  state = {
    contacts: [],
    filter: '',
  };

  async componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts !== null) {
      this.setState({
        contacts: JSON.parse(savedContacts),
      });
    }
  }

  componentDidUpdate(prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }


  addCantact = (value) => {
    const { contacts } = this.state;

    if (contacts.filter(({name}) => name.toLowerCase() === value.name.toLowerCase()).length > 0) {
      alert(`${value.name} is already in contacts`);
      return;
    }

    const data = {
      id: nanoid(),
      name: value.name,
      number: value.number
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, data],
    }));
  }

  getVisibleItems = () => {
    const { contacts, filter } = this.state;

    let result = contacts
    
    if(filter !== '') {
      result = contacts.filter(({name}) => name.toLowerCase().includes(filter.toLowerCase()))
    }
    
    return result;
  };

  deleteContact = (deleteId) => {
    const { contacts } = this.state;

    const result = contacts.filter(({id}) => id !== deleteId)
    this.setState(() => ({
      contacts: result,
    }));
  }

  setFilter = (string) => {
    this.setState(() => ({
      filter: string,
    }));
  }
  

  render() {
    const visibleItems = this.getVisibleItems();
    
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.addCantact} />
        <h2>Contacts</h2>
        <Filter onFilterContact={this.setFilter}/>
        <ContactList contacts={visibleItems} onDeleteContact={this.deleteContact}/>
      </div>
    );
  };
}