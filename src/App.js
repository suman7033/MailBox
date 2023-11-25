import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Login from './components/Login/Login'
import Home from './components/Home/Home'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
//import EmailDetails from "./components/EmailDetails/EmailDetails";


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        {/* <Route path="/email" element={<EmailDetails/>}></Route> */}
      </Routes>
      </BrowserRouter>
      <ToastContainer/>
      </div>
  )
}

export default App

