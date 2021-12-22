import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
const EditContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const Contacts = useSelector((state) => state);
  const { id } = useParams();
  const dataContact = Contacts.find((contact) => contact.id === parseInt(id));
  useEffect(() => {
    if (dataContact) {
      setName(dataContact.name);
      setEmail(dataContact.email);
      setPhone(dataContact.phone);
    }
  }, [dataContact]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    const checkEmail = Contacts.find(
      (contact) =>
        contact.id !== parseInt(id) && contact.email === email && email
    );
    const checkPhone = Contacts.find(
      (contact) =>
        contact.id !== parseInt(id) &&
        contact.phone === parseInt(phone) &&
        phone
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
      id: parseInt(id),
      name,
      email,
      phone,
    };
    console.log(data);
    dispatch({ type: "UPDATE_CONTACT", payload: data });
    toast.success("Contact Updated Successfully");
    navigate("/");
  };
  return (
    <div className="container">
      {dataContact ? (
        <React.Fragment>
          <h1 className="display-3 text-center">Edit Contact {id}</h1>
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
                    value="Update Contact"
                    className="btn btn-block btn-dark"
                  />
                  <Link to="/" className="btn btn-danger ml-3">
                    Cancel
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </React.Fragment>
      ) : (
        <h1> Contact with id {id} does not exists</h1>
      )}
    </div>
  );
};

export default EditContact;
