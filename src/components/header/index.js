import React from "react";
import { Link } from "react-router-dom";
import './style.css'
const Header = ()=>{

    return(
        <header className='header'> <div className='container'><Link className='logo' to='/' >Filmaria</Link>
             <Link className='salvos' to='/favoritos'>Salvos</Link></div> </header>
    )
}

export default Header