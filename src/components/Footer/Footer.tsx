import React from 'react'
import './Footer.scss'

const Footer = () => {
    return (
        <div className='footer'>
            <div>
                <div className='footermenflex'>
                    <a href="#">Home</a>
                    <a href="#">Page 1</a>
                    <a href="#">Page 2</a>
                </div>
                <div className='footerlogoflex'>
                    <a href="#"><img src="assets/images/facebook.svg" alt="social" className='socialicon'/></a>
                    <a href="#"><img src="assets/images/twitter.svg" alt="social" className='socialicon'/></a>
                    <a href="#"><img src="assets/images/instagram.svg" alt="social" className='socialicon'/></a>
                    <a href="#"><img src="assets/images/tiktok.svg" alt="social" className='socialicon'/></a>
                </div>
                <div className='cmpmark'>
                    <p>© Logo, Inc.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer