import React from 'react'
import "./LoadingPage.scss"
import Logo from '../images/logo.png'

export default function LoadingPage() {
    return (

        <div className="contenttt">
            <div className="loading">

                <img className='img_loading' src={Logo} />
                <div>
                    <p className='ploading'>loading</p>
                    <span className='spanLoading'></span>
                </div>
            </div>
        </div>

    )
}
