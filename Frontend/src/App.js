import Payment from "./Components/Payment";
import QrCode from "./Components/QrCode";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Forgotpassword from "./Components/Forgotpassword";
import NewPassword from "./Components/NewPassword";
import History from "./Components/History";
import Pay from "./Components/Pay";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Modal from "./Components/Modal";


function App() {

  return (
    <>
      <Routes>
        <Route exact path='/payment' element={<Payment />} />
        <Route exact path='/qrCode' element={<QrCode />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/' element={<Home />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/contact' element={<Contact/>} />
        <Route exact path='/forgotpassword' element={<Forgotpassword />} />
        <Route exact path='/newPass' element={<NewPassword />} />
        <Route exact path='/history' element={<History />} />
        <Route exact path='/pay' element={<Pay />} />
        <Route exact path='/mod' element={<Modal/>} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;