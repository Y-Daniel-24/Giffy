import React from 'react'
import './Gifs.css'

const Gifs = ({title,id,url}) => {
    return (
            <a href={`#${id}`} key={id} className="Gifs">
                <img src={url} alt={title}/>
              </a>
    )
}

export default Gifs
