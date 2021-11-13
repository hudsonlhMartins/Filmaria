import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './style.css'
import api from "../../services/api";

const Main = ()=>{
    const [anime, setAnime] = useState([])

    useEffect(()=>{
        async function loadApi(){
            const response = await api.get('/r-api/?api=filmes/')
            setAnime(response.data)
        }
        loadApi()
        
    }, [])
 


    return(
        <section className='container_section'>
            <div className='tela'>
                <div className='container_itens'>
                    {anime.map(item =>{
                        return(
                            <div key={item.id}>
                                <h2 className='title'>{item.nome}</h2>
                                <img className='imagem' src={item.foto} alt={item.nome} />
                                <Link to={`/filme/${item.id}`} className='button' >Acessar</Link>
                            </div>
                        )
                    })}
                </div>
            </div>
            
        </section>
    )
}
export default Main