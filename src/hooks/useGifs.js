import {useEffect,useState} from 'react'
import getGifts from '../service/getGifs';

function useGifs({keyword}={keyword: null}) {

    const [loading, setLoading] = useState(true)
    const [gifs, setGifs] = useState([]);

    useEffect(() => {
        setLoading(true)
        // Recuperamos la keyword de localstorage
        const keywordToUse=keyword ? keyword: localStorage.getItem('LastKeyword')

        getGifts({keyword:keywordToUse})
        .then((gifs) => {
          setGifs(gifs)
          setLoading(false)
          // guardamos la keyword en el localstorage
          localStorage.setItem('LastKeyword',keyword)
        })
      }, [keyword])
    return{loading,gifs}
}

export default useGifs
