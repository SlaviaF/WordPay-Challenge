import React from 'react'
import './Main.css'
import iphone from '../images/iPhone12Mockup.png'

const Main = () => {
    return (
        <div className="main-section">
            <div className="image-container">
                <img src={iphone} className="phone-img" alt="iphone" />
            </div>
            <div className="main-content">
                <h1>A new way to <br/>charge for content</h1>
                <p>Monetize and convert a larger share of your reader base by accepting payments for selective pieces of content. </p>
            </div>
        </div>
    )
}

export default Main