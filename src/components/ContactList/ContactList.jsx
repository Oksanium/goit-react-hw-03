import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";

export default function ContactList({ list, query, deleteContact }) {
  function renderList(contact) {
    return (
      <Contact
        contact={contact}
        key={contact.id}
        deleteContact={deleteContact}
        id={contact.id}
      />
    );
  }

  return (
    <div className={s.list}>
      {list
        .filter((elem) => {
          return elem.name.toLowerCase().includes(query);
        })
        .map(renderList)}
    </div>
  );
}
