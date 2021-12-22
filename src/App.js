import logo from "./logo.svg";
import "./App.css";
import { ToastContainer } from "react-toastify";
import NavBar from "./Components/NavBar/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import AddContact from "./Components/AddContact/AddContact";
import EditContact from "./Components/EditContact/EditContact";
function App() {
  return (
    <div className="App">
      <ToastContainer />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddContact />} />
        <Route path="/edit/:id" element={<EditContact />} />
      </Routes>
    </div>
  );
}

export default App;

{
  /**
add, edit/:id , listing
*/
}
