import React,{useEffect,useState} from 'react'
import Gifs from './Gifs'

const ListOfGif = ({gifs}) => {

  console.log(gifs)
      return <div className="gifsContainer">
      {
         gifs.map(({id,title,url}) =>
              <Gifs
                  key={id} 
                  title={title} 
                  url={url} 
                  id={id}
                  />
        )
      }
    </div>
  }

export default ListOfGif
