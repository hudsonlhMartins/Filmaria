import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import {useNavigate } from 'react-router-dom'
import api from "../../services/api";
import {toast} from 'react-toastify'
import './style.css'
const Filme = ()=>{
    const [filme, setFilme] = useState([])
    const {id} = useParams()
    const navigate = useNavigate ()
    // substituir o useHistory
    const[loading, setLoading] = useState(true)
    // esse id tem que ser o msm nome que vc colocou la na rota :id


    useEffect(()=>{
        async function loadApi(){
            const response = await api.get(`/r-api/?api=filmes/${id}`)
            console.log(filme)
            setFilme(response.data)
            setLoading(false)
        }
        loadApi()

        return ()=>{
            console.log('component desmonatado')
            // isso e quando vc sair da pagina e o component e desmonatado
            // para isso e so return uma function dentro do useEffect
        }
        
    }, [id])


    const addFilme = ()=>{
        const minhaLista = localStorage.getItem('filmes')

        console.log(minhaLista)

        let filmesSalvos = JSON.parse(minhaLista) || []
        // caso minhas lista esteja vazio vai entrar no []

        const hasFilme = filmesSalvos.some(item => {
                console.log(item.id+ ' Id do item no local storege')
                console.log(filme.id)
            return item.id == filme.id})
        // esse metado do js ele return um booleando, ele procura no array se__
        // for true oq esta ali essa function return true se não false

        if(hasFilme){
            toast.error('Voce ja tem esse filme salvo')
            return
        }

        // caso for false vai colocar o filme clicado na array filmesSalvos
        // no caso esse filme e nossa state que contem o resp da api que tem foto etc..
        filmesSalvos.push(filme)
        localStorage.setItem('filmes', JSON.stringify(filmesSalvos))
        toast.success('filme salvo com sucesso')

    }


    if(loading){
        return(
            <div>
                <h1>Carregando seu Filme</h1>
            </div>
        )
    }
    return(
        <div className='container_sinopse'>
            <div className='container_sinopse_item'>
    
        
            
            <article>
                
                <h1 className='title_sinopse'>{filme.nome}</h1>
                <img className='img_sinopse' src={filme.foto} />
                <h5 className='sinopse'>Sinopse</h5>
                <p className='sinopseTxt'>{filme.sinopse}</p>
                <div className='btns_sinopse'>
                    <a onClick={addFilme}>Salvar</a>
                    <a target='blank' href={'https://www.youtube.com/results?search_query='+filme.nome+' '+'trailer oficial'}>Trailer</a>
                </div>
                
            </article>
        )
                
            </div>
        </div>
    )
}

export default Filme