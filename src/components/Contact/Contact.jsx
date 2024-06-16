import s from "./Contact.module.css";
import { IoPersonSharp } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";

export default function Contact({ contact, deleteContact, id }) {
  function onDeleteClickHandler(evt) {
    deleteContact(evt.target.id);
  }

  return (
    <div className={s.contact}>
      <div className={s.info}>
        <div className={s.nameDiv}>
          <IoPersonSharp className={s.ico} />
          <p className={s.contactField + " " + s.name}>{contact.name}</p>
        </div>
        <div className={s.numDiv}>
          <IoMdCall className={s.ico} />
          <p className={s.contactField}>{contact.number}</p>
        </div>
      </div>

      <button onClick={onDeleteClickHandler} className={s.btn} id={id}>
        DELETE
      </button>
    </div>
  );
}
