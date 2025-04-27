import React, { useState, useEffect } from 'react';
import './hero.scss';

const Hero: React.FC = () => {
    const images: string[] = [
        '/assets/images/slide1.png',
        '/assets/images/slide2.png',
        '/assets/images/slide3.png',
    ];
    
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex(prevIndex =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 6000);

        return () => clearInterval(intervalId);
    }, [images.length]);

    return (
        <div className="customSlider">
            <div className="carousal">
                <div
                    className="slider"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {images.map((image, index) => (
                        <img
                            key={index}
                            className="slide"
                            src={image}
                            alt={`Slide ${index}`}
                        />
                    ))}
                </div>
                <div className='heroContents'>
                    <div className='heroLogodiv'>
                        <img className="logoHero" src="/assets/images/herologo.svg" alt="Logo" />
                    </div>
                    <div className='heroSub'>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className='herop'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
                <div className='scrollSec'>
                    <p>Scroll</p>
                </div>
            </div>
        </div>
    );
};

export default Hero;
