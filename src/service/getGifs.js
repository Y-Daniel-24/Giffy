
const apiKey="RNXhat4Dl17E4NvxZAwtvsjDh6dcHFxx";


export default function getGifts ({keyword="morty"}={}) {
    
    const urlApi=`https://api.giphy.com/v1/stickers/search?api_key=${apiKey}&q=${keyword}&limit=25&offset=0&rating=g&lang=es`

    return fetch(urlApi)
    .then(res=> res.json())
    .then(response=> {
      const {data}=response;
      const gifs=data.map(image=> {
          const {images,title,id}= image
          const {url}=images.downsized_medium
          return {title,id,url}
        })
        return gifs
    })
}
