import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from 'react';
import Home from './pages/Home';
import Header from './components/Header';
import Services from './pages/Services';
import Contact from './pages/Contact';
import AddEmployee from './pages/Addemployee';
import Editemployee from './pages/Editemployee';
import Protectroutetwo from './components/Protectroutetwo';
import Employee from './pages/Employee';
import Protectroute from './components/Protectroute'; 
import Login from './pages/Login';


const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        let loginStatus = JSON.parse(localStorage.getItem("isLoggedIn"));
        setIsLoggedIn(loginStatus);
    }, []);

    return (
        <BrowserRouter>
            <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Header" element={<Header />} />
                <Route path="/Services" element={<Services/>}/>
                <Route path="/contact" element={<Contact />} />
                
                <Route path="/login" element={
                    <Protectroutetwo isLoggedIn={isLoggedIn}>
                        <Login setIsLoggedIn={setIsLoggedIn} />
                    </Protectroutetwo>
                } />

                <Route path="/employees" element={
                    <Protectroute Component={Employee} isLoggedIn={isLoggedIn}>
                       
                    </Protectroute>
                } />

                <Route path="/add-employee" element={
                    <Protectroute Component={AddEmployee} isLoggedIn={isLoggedIn}>
                        
                    </Protectroute>
                } />

                <Route path="/edit-employee/:id" element={
                    <Protectroute Component={Editemployee} isLoggedIn={isLoggedIn}>
                        
                    </Protectroute>
                } />
            </Routes>
            <ToastContainer />
        </BrowserRouter>
    );
}

export default App;
