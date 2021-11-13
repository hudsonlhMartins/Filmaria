import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import './favoritos.css'
import {toast} from 'react-toastify'

const Favoritos = ()=>{
    const [filmes, setFilmes] =useState([])

    useEffect(()=>{
        const meusFilmes = localStorage.getItem('filmes')
        setFilmes(JSON.parse(meusFilmes) || [] )
    }, [])

    const handleDelete = (id)=>{
        let filterFilmes = filmes.filter(item =>{
            return(item.id !== id)
        })

        setFilmes(filterFilmes)
        toast.success('Filme exclui do exito')
        localStorage.setItem('filmes', JSON.stringify(filterFilmes))
        
    }

    return (
        <div className='container_salvos'>
            <h1>Meu Filmes Salvos</h1>
            <hr/>
            {filmes.length === 0 && <span>Vc não possuir filmes salvos :'(</span>}
            <ul>
                {filmes.map(item =>{
                    return(
                        <li className='container_favoritos' key={item.id}>
                            <h4 className='title_salvo'>{item.nome}</h4>
                            <div className='btns_favoritos'>
                                <Link className='detalhes' to={`/filme/${item.id}`}>Ver detalhes</Link>
                                <button className='excluir' onClick={()=> handleDelete(item.id)}>Excluir</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Favoritos