import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Login from './components/Login/Login'
import Home from './components/Home/Home'


const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

