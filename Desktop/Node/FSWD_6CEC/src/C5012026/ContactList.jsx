import React, { useState } from "react";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [form, setForm] = useState({
    id: null,
    name: "",
    email: "",
    phone: ""
  });
  const [isEdit, setIsEdit] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addContact = () => {
    if (!form.name || !form.email) return;
    setContacts([...contacts, { ...form, id: Date.now() }]);
    setForm({ id: null, name: "", email: "", phone: "" });
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter(c => c.id !== id));
  };

  const editContact = (contact) => {
    setForm(contact);
    setIsEdit(true);
  };

  const updateContact = () => {
    setContacts(
      contacts.map(c => (c.id === form.id ? form : c))
    );
    setForm({ id: null, name: "", email: "", phone: "" });
    setIsEdit(false);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Contact List</h2>

      <div style={styles.form}>
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
          style={styles.input}
        />

        {isEdit ? (
          <button style={styles.btnUpdate} onClick={updateContact}>
            Update
          </button>
        ) : (
          <button style={styles.btnAdd} onClick={addContact}>
            Add
          </button>
        )}
      </div>

      <hr />

      {contacts.map(contact => (
        <div key={contact.id} style={styles.card}>
          <div>
            <b>{contact.name}</b>
            <p>{contact.email}</p>
            <p>{contact.phone}</p>
          </div>
          <div>
            <button style={styles.btnEdit} onClick={() => editContact(contact)}>
              Edit
            </button>
            <button
              style={styles.btnDelete}
              onClick={() => deleteContact(contact.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    width: "420px",
    margin: "40px auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    fontFamily: "Arial"
  },
  heading: {
    textAlign: "center"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px"
  },
  input: {
    padding: "8px",
    fontSize: "14px"
  },
  btnAdd: {
    padding: "8px",
    background: "#4CAF50",
    color: "#fff",
    border: "none",
    cursor: "pointer"
  },
  btnUpdate: {
    padding: "8px",
    background: "#2196F3",
    color: "#fff",
    border: "none",
    cursor: "pointer"
  },
  card: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    marginTop: "10px"
  },
  btnEdit: {
    marginRight: "5px",
    padding: "5px 8px"
  },
  btnDelete: {
    padding: "5px 8px",
    background: "#f44336",
    color: "#fff",
    border: "none"
  }
};

export default ContactList;
