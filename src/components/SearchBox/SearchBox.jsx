import s from "./SearchBox.module.css";

export default function SearchBox({ Formik, Field, ErrorMessage, setQuery }) {
  function handleChange(e) {
    setQuery(e.target.value.toLowerCase());
  }

  return (
    <Formik initialValues={""}>
      <div className={s.search}>
        <label htmlFor="search">Search:</label>
        <Field
          name="search"
          id="search"
          className={s.input}
          onChange={handleChange}
        />
        <ErrorMessage name="search" component="span" />
      </div>
    </Formik>
  );
}
