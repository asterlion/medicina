import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import NaviBar from "./Components/NaviBar";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from "./Components/Home";
import {AuthContext} from "./Context/AuthContext";
import {useState} from "react";
import Departments from "./Components/Departments";
import Footer from "./Components/Footer";
import DepartDetails from "./Components/DepartDetails";
import Admin from "./Components/Admin";
import AddDoctorForm from "./Components/AddDoctorForm";
import AddDepartForm from "./Components/AddDepartForm";
import AppointmentDetails from "./Components/AppointmentDetails";
import ScheduleDoctor from "./Components/ScheduleDoctor";
import ListDoctors from "./Components/ListDoctors";


function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  return (
      <>
        <AuthContext.Provider value={token}>
          <Router>
            <NaviBar/>
            <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route exact path="/depart" element={<Departments/>}/>
              <Route exact path="/departDetails/:id" element={<DepartDetails/>} />
              <Route exact path="/appointmentDetails/:id" element={<AppointmentDetails/>} />
              <Route exact path="/admin" element={<Admin/>} />
              <Route exact path="/addDoctor" element={<AddDoctorForm/>} />
              <Route exact path="/addDepart" element={<AddDepartForm/>} />
              <Route exact path="scheduleDoctor/:id" element={<ScheduleDoctor/>}/>
              <Route exact path="/listDoctors" element={<ListDoctors/>}/>
            </Routes>
            <Footer/>
          </Router>
        </AuthContext.Provider>
      </>


  );
}

export default App;