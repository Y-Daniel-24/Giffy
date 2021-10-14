import React,{Fragment} from 'react'
import ListOfGif from '../../components/ListOfGif.jsx'
import useGifs from '../../hooks/useGifs.js'

const SearchResults = ({params}) => {

    const {keyword}=params
    const {loading,gifs}= useGifs({keyword})

    return (
        <>
            {
                loading ? "Cargando": <ListOfGif gifs={gifs}/>
            }
        </>
    )
}

export default SearchResults
