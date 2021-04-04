import React, { Fragment, useState } from 'react'
import { AddCategory } from './componentes/AddCategory'
import { GifGrid } from './componentes/GifGrid'


export const GifExpertApp = () => {

    const [categorias, setCategorias] = useState(["Naruto"])
    
    return (
        <Fragment>
            <h2>GifExpertApp</h2>
            <AddCategory  setCategorias={setCategorias} />
            <hr></hr>         
            <ol>
                {categorias.map(categoria=> 
                    <GifGrid key={categoria} category = {categoria} />
                )}
            </ol>
        </Fragment>
    )
}
