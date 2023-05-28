import { useState } from "react";
import contactsData from "./contacts.json";

// src/App.js
import "./App.css";

function App() {
  const [contacts, setContacts] = useState(contactsData.slice(0, 5));
  //const [contacts, setContacts] = useState(contactsData);

  const remainingContacts = contactsData.slice(5);

  const addRandomContact = () => {
    if (remainingContacts.length > 0) {
      const randomIndex = Math.floor(Math.random() * remainingContacts.length);
      const randomContact = remainingContacts[randomIndex];
      setContacts((prevContacts) => [...prevContacts, randomContact]);
    }
  };

  const sortContactsByName = () => {
    const sortedContacts = [...contacts].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setContacts(sortedContacts);
  };

  const sortContactsByPopularity = () => {
    const sortedContacts = [...contacts].sort(
      (a, b) => b.popularity - a.popularity
    );
    setContacts(sortedContacts);
  };

  const removeContact = (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
  };

  return (
    <div>
      <h1>Contacts</h1>
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={sortContactsByName}>Sort by Name</button>
      <button onClick={sortContactsByPopularity}>Sort by Popularity</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>
                <img src={contact.pictureUrl} alt={contact.name} />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              <td>
                <button onClick={() => removeContact(contact.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default App;
