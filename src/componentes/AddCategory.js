import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
export const AddCategory = ({setCategorias}) => {

    const [inputValue, setinputValue] = useState("")

    const handleInputChange = (e)=>{
        setinputValue(e.target.value)  
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        if(inputValue.trim()){
            setCategorias(categorias => [inputValue,...categorias])
            setinputValue("")            
        }
    }
    console.log(inputValue)
    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
            <input type="text" 
                value={inputValue} 
                onChange={handleInputChange}/>           
            </form>
        </Fragment>
    )
}

AddCategory.propTypes={
    setCategorias: PropTypes.func.isRequired
}