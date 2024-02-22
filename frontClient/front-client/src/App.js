import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import NaviBar from "./Components/NaviBar";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from "./Components/Home";
import About from "./Components/About";
import {AuthContext} from "./Context/AuthContext";
import {useState} from "react";
import Departments from "./Components/Departments";
import Footer from "./Components/Footer";
import DepartDetails from "./Components/DepartDetails";
import AppointmentDetails from "./Components/AppointmentDetails";
import ScheduleDoctor from "./Components/ScheduleDoctor";
import ClientAppointment from "./Components/ClientAppointment"

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  return (
      <>
        <AuthContext.Provider value={token}>
          <Router>
            <NaviBar/>
            <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route exact path="/about" element={<About/>}/>
              <Route exact path="/depart" element={<Departments/>}/>
              <Route exact path="/departDetails/:id" element={<DepartDetails/>} />
              <Route exact path="/appointmentDetails/:id" element={<AppointmentDetails/>} />
              <Route exact path="scheduleDoctor/:id" element={<ScheduleDoctor/>}/>
              <Route exact path="/clientAppointment" element={<ClientAppointment/>}/>
            </Routes>
            <Footer/>
          </Router>
        </AuthContext.Provider>
      </>


  );
}

export default App;