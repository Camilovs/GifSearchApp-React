
export const getGifs = async(category)=>{

        const url = `https://api.giphy.com/v1/gifs/search?api_key=ji86JDWe9CfKRhtrxWxiInvaRyXxDigs&limit=5&q=${encodeURI(category)}`
        const resp = await fetch(url) //await espera por el termino del fecth
        const {data} = await resp.json()//await espera por el json 
        const gifs = data.map( img =>{
                return ({
                    id:img.id,
                    title:img.title,
                    url:img.images.downsized_medium.url
                })
        }   )
        //console.log(gifs)
        // setImages(gifs)
        return gifs
    }