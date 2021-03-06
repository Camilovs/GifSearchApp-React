import React, { Fragment} from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'

export const GifGrid = ({category}) => {
    
    const {data:images,loading} = useFetchGifs(category)

    return (
        <Fragment>
            <h3 className="animate__animated animate__fadeInLeft animate__faster"> {category}</h3>          
            {loading && <p className="animate__animated animate__flash animate__faster">Cargando...</p> }
            <div className="card-grid">      
                {
                    images.map( img =>(
                        <GifGridItem        
                            key={img.id}          
                            //Enviamos como prop las propiedades de la img independientemente
                            {...img}                         
                        />)
                    )
                }
            </div>
        </Fragment>
    )
}
