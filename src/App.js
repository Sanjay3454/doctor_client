

import './App.css';
import Adminhome from './components/Admin_home/Adminhome';
import DoctorAdd from './components/Admin_home/DoctorAdd';
import DoctorEdit from './components/Admin_home/DoctorEdit';
import DoctorCheck from './components/Doctorcomponent.js/DoctorCheck';
import DoctorRegister from './components/Doctorcomponent.js/DoctorRegister';
import Dotorsview from './components/Admin_home/Dotorsview';
import Adminlogin from './components/Adminlogin';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import DoctorLogin from './components/Doctorcomponent.js/DoctorLogin';
import DoctorHome from './components/Doctorcomponent.js/DoctorHome';

import UserHome from './components/userComponent/UserHome';
import UserRegister from './components/userComponent/UserRegister';
import UserLogins from './components/userComponent/UserLogins';
import UserBook from './components/userComponent/UserBook';
import UserBookingDetails from './components/userComponent/UserBookingDetails';
import Header from './Header';
import Footer from './Footer';


function App() {
  return (
    <div className="App">

     <Header/>
     
      <Routes>
      <Route path='/' element={<Adminlogin/>}/>
      <Route path='/adminhome' element={<Adminhome/>}/>
      <Route path='/add' element={<DoctorAdd/>}/>
      <Route path='adminhome/edit/:id' element={<DoctorEdit/>}/>
      <Route path='/view/:id' element={<Dotorsview/>}/>
      <Route path='/verify' element={<DoctorCheck/>}/>
      <Route path='/register-doctor' element={<DoctorRegister/>}/>
      <Route path='/login-doctor' element={<DoctorLogin/>}/>
      <Route path='/home-doctor' element={<DoctorHome/>}/>

      
      <Route path='/user-register' element={<UserRegister/>}/>
      <Route path='/user-logins' element={<UserLogins/>}/>
      <Route path='/user-home' element={<UserHome/>}/>
      <Route path='user-home/user-book/:id' element={<UserBook/>}/>
      <Route path="/user-home/bookingdetails/:email" element={<UserBookingDetails/>} />      </Routes>

      {/* <Footer/> */}
    </div>
  );
}

export default App;
