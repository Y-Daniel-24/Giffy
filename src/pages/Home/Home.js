import React,{Fragment, useState,useEffect} from 'react'
import { Link, useLocation } from 'wouter'
import ListOfGif from '../../components/ListOfGif'
import useGifs from '../../hooks/useGifs'

const popularGifs=["matrix","venezuela","chile","ecuador"]


const Home = () => {

    const [keyword, setKeyword] = useState('')
    const [path, pushLocation]=useLocation()
    const {loading, gifs}=useGifs()

    const handleSubmit=(evt)=>{
        evt.preventDefault()
        pushLocation(`/search/${keyword}`)
    }
    const handleChange=(evt)=>{
        setKeyword(evt.target.value)
    }

    return (
        <Fragment>
            <h3>Buscar stickers</h3>

            <form onSubmit={handleSubmit}>
                <input placeholder="Busca tu gif" type="text" onChange={handleChange} value={keyword}/>
                <ListOfGif gifs={gifs}/>
            </form>
            
            <h3 className="App-title">Gifs mas buscados</h3>
            <ul>
                {
                    popularGifs.map(gifs=>(
                        <li key={gifs}>
                            <Link to={`/search/${gifs}`}>
                                Gifs de {gifs}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </Fragment>
    )
}

export default Home
