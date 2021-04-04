import React from 'react'

export const GifGridItem = ({id,title,url}) => {

    return (
        <div className="animate__animated animate__fadeInLeft animate__faster card">
            <img src={url} alt={title} />
        </div>
    )
}
