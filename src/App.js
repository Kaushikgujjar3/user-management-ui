import logo from './logo.svg';
import './App.css';
import Login from './Component/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './Component/Signup';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Component/Dashboard';
import Header from './Component/Header';
import Home from './Component/Home';

function App() {
  return (
   <>



<Routes>
  <Route path='/' element={<Login></Login>}></Route>
  <Route path='/Signup' element={<Signup></Signup>}></Route>
  <Route path='/Home' element={<Home></Home>}></Route>
  <Route path='/Header' element={<Header></Header>}></Route>
  <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
</Routes>


   </>
  );
}

export default App;
