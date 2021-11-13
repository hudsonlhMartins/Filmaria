import React from "react";
import Rotas from "./RoutesConfig";
import './style.css'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <div >
      <Rotas/>
      <ToastContainer autoClose={3000}/>
    </div>
  );
}

export default App;


// https://sujeitoprogramdor.com/r-api/?api=filmes/