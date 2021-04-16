import ContactForm from "../components/contact/ContactForm";
import FormInput from "../components/contact/FormInput";

function Contacts(props) {
  return (
    <>
      <div className="row">
        <div className="col">
          <h1>Контакти</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-7">
          <ContactForm />
        </div>
        <div className="col-md-5">
          <FormInput />
        </div>
      </div>
    </>
  );
}
export default Contacts;
