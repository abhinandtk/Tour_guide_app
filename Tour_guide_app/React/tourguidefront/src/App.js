import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Add from './Components/Add/Add';
import View from './Components/View/View';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Nav from './Components/Nav/Nav';
import LoginView from './Components/LoginView/LoginView';
import Home from './Components/AdminHome/Home';
import Profile from './Components/Profile/Profile';
import Edit from './Components/Edit/Edit';
import Contactusview from './Components/Contactusview/Contactusview';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/Add' element={<Add></Add>}></Route>
      <Route path='/View' element={<View></View>}></Route>
      <Route path='/Login' element={<Login></Login>}></Route>
      <Route path='/Signup' element={<Signup></Signup>}></Route>
      <Route path='/Navbar' element={<Nav></Nav>}></Route>
      <Route path='/LoginView' element={<LoginView></LoginView>}></Route>
      <Route path='/Profile' element={<Profile></Profile>}></Route>
      <Route path='/Edit/:id' element={<Edit></Edit>}></Route>
      <Route path='/Contactusview' element={<Contactusview></Contactusview>}></Route>
    </Routes>
    </BrowserRouter>
    </>
    
    
  );
}

export default App;
