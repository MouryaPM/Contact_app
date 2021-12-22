import { useState } from "react";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const AddContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const Contacts = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submitHandler = (event) => {
    event.preventDefault();
    const checkEmail = Contacts.find(
      (contact) => contact.email === email && email
    );
    const checkPhone = Contacts.find(
      (contact) => contact.phone === parseInt(phone) && phone
    );
    if (!name || !email || !phone) {
      return toast.warning("Please fill in all the fields");
    }
    if (checkEmail) {
      return toast.error("This email already exists ");
    }
    if (checkPhone) {
      return toast.error("This contact number already exists");
    }
    const data = {
      id: Contacts[Contacts.length - 1].id + 1,
      name,
      email,
      phone,
    };
    console.log(data);
    dispatch({ type: "ADD_CONTACT", payload: data });
    toast.success("Contact Added Successfully");
    navigate("/");
  };
  return (
    <div className="container">
      <h1 className="display-3 text-center">Add Contact</h1>
      <div className="row">
        <div className="col-md-6 shadow mx-auto p-5">
          <form onSubmit={submitHandler}>
            <div className="form-control">
              <input
                type="text"
                placeholder="Name"
                className="form-control"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div className="form-control">
              <input
                type="email"
                placeholder="email"
                className="form-control"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="form-control">
              <input
                type="number"
                placeholder="Phone number"
                className="form-control"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
              />
            </div>
            <div className="form-control">
              <input
                type="submit"
                value="Add Contact"
                className="btn btn-block btn-dark"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddContact;
