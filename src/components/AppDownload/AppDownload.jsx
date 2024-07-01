import React from 'react'
import './AppDownload.css'


const AppDownload = () => {
    return (
        <div className='app-download' id='app-download'>
            <p>Para Mejor Experiencia Descarga <br /> Pepperonis App</p>
            <div className="app-download-platforms">
                <img src={assets.play_store} alt="" />
                <img src={assets.app_store} alt="" />
            </div>


        </div>
    )
}


export default AppDownload