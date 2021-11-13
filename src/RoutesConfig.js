import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from "./components/main";
import Filme from "./components/filme";
import Header from "./components/header";
import Favoritos from "./components/favoritos";
import Error from "./components/error";

const Rotas = ()=>{
    return(
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path='/' element={<Main/>} />
                <Route path='/filme/:id' element={<Filme/>}/>
                <Route path='/favoritos' element={<Favoritos/>} />

                <Route path='*' element={<Error/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas