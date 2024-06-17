import s from "./SearchBox.module.css";

export default function SearchBox({ setQuery }) {
  function handleChange(e) {
    setQuery(e.target.value.toLowerCase());
  }

  return (
    <div className={s.search}>
      <label htmlFor="search">Search:</label>
      <input
        name="search"
        id="search"
        className={s.input}
        onChange={handleChange}
      />
    </div>
  );
}
