import React from "react";
import Header from "./components/Header/Header";
import "./App.css";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./components/AboutUs/AboutUs";
import Reg from "./components/Registration/Create";
import Cabinet from "./components/Cabinet/Cabinet";
import LogIn from "./components/LogIn/LogIn";

import PetAdvertisement from "./components/PetAdvertisement/PetAdvertisement";

const App = () => {

    return (
        <BrowserRouter>
            <div className='wrapper'>
                <Header/>
                <div className="wrapper__content">
                    <Routes>
                        <Route path='/*' element={<Main/>}/>
                        <Route path='/AboutUs' element={<AboutUs/>}/>
                        <Route path='/Registration' element={<Reg/>}/>
                        <Route path='/LogIn' element={<LogIn/>}/>
                        <Route path='/Cabinet' element={<Cabinet/>}/>
                        <Route path='/PetAdvertisement' element={<PetAdvertisement />}/>
                    </Routes>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    
    );

};

export default App;
