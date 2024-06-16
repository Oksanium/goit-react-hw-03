import s from "./ContactForm.module.css";

export default function ContactForm({
  Formik,
  Form,
  Field,
  ErrorMessage,
  addContact,
  contacts,
  Yup,
}) {
  const phoneRegExp = /^[\d\(\)\-+]+$/m;

  const ContactSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "too short")
      .max(50, "too long")
      .required("Required"),
    number: Yup.string()
      .min(3, "too short")
      .max(50, "too long")
      .required("required")
      .matches(phoneRegExp, "use only digits and + - ( )"),
  });

  function handleSubmit(values, actions) {
    addContact(values);
    actions.resetForm();
  }

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form className={s.form}>
        <div className={s.labelCont}>
          <label htmlFor="name">Name:</label>
          <span className={s.err}>
            <ErrorMessage name="name" />
          </span>
        </div>
        <Field name="name" id="name" className={s.input} />
        <div className={s.labelCont}>
          <label htmlFor="number">Number:</label>
          <span className={s.err}>
            <ErrorMessage name="number" />
          </span>
        </div>
        <Field name="number" id="number" className={s.input} />
        <button type="submit" className={s.btn}>
          Save
        </button>
      </Form>
    </Formik>
  );
}
