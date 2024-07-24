import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import freshTo from "../../assets/fresto.jpg";
import fruitVideo from "../../assets/videos/fruits.mp4";
import milkVideo from "../../assets/videos/MilkVideo.mp4";
import groceries from "../../assets/videos/groceries.mp4";

const updateElementAttributes = () => {
    const elements = document.querySelectorAll('.animate-element');
    let angle, distance;

    elements.forEach(element => {
        const screenWidth = window.innerWidth;

        if (screenWidth > 1024) {
            angle = parseInt(element.getAttribute('data-angle-desktop')) || 0;
            distance = parseInt(element.getAttribute('data-distance-desktop')) || 0;
        } else if (screenWidth > 768) {
            angle = parseInt(element.getAttribute('data-angle-tablet')) || 0;
            distance = parseInt(element.getAttribute('data-distance-tablet')) || 0;
        } else if (screenWidth > 479) {
            angle = parseInt(element.getAttribute('data-angle-mobile')) || 0;
            distance = parseInt(element.getAttribute('data-distance-mobile')) || 0;
        } else {
            angle = parseInt(element.getAttribute('data-angle-mobile-m')) || 0;
            distance = parseInt(element.getAttribute('data-distance-mobile-m')) || 0;
        }

        const radian = angle * (Math.PI / 180);
        const x = distance * Math.cos(radian);
        const y = distance * Math.sin(radian);
        element.style.transform = `translate(${x}px, ${y}px)`;
    });
};

export default function Home() {
    useEffect(() => {
        updateElementAttributes();

        window.addEventListener('resize', updateElementAttributes);

        return () => {
            window.removeEventListener('resize', updateElementAttributes);
        };
    }, []);

    return (
        <div className="home-container">
            <div className='card-11 animate-element'
                 data-angle-desktop="203" data-distance-desktop="400"
                 data-angle-tablet="0" data-distance-tablet="0"
                 data-angle-mobile-m="0" data-distance-mobile-m="0"
                 data-angle-mobile="0" data-distance-mobile="0">
                <button className="buy-button">Our Services</button>
                <h4 className='card-11-heading'>Order fruits, groceries—we deliver quality products to your doorstep.</h4>
            </div>
            <div className="flex-container">
                <div className="sub-container sub-container-1">
                    <img className='fresto-img' src={freshTo} alt="freshto" />
                    <div className='card-1 animate-element' 
                         data-angle-desktop="120" data-distance-desktop="180"
                         data-angle-tablet="87" data-distance-tablet="120"
                         data-angle-mobile-m="90" data-distance-mobile-m="-55"
                         data-angle-mobile="90" data-distance-mobile="-90">
                        <h1 id ="font-size-card-i" className='special-heading'>Today's Special Picks</h1>  
                    </div>
                    <div className='card-1 animate-element' 
                         data-angle-desktop="160" data-distance-desktop="450"
                         data-angle-tablet="150" data-distance-tablet="300"
                         data-angle-mobile-m="90" data-distance-mobile-m="480"
                         data-angle-mobile="90" data-distance-mobile="310">
                        <video className="fruit-video" src={groceries} autoPlay loop muted playsInline />
                        <Link to="/visit-store" className="buy-button">Visit Store</Link>
                    </div>
                    <div className='card-1 animate-element'
                         data-angle-desktop="180" data-distance-desktop="330"
                         data-angle-tablet="180" data-distance-tablet="260"
                         data-angle-mobile-m="90" data-distance-mobile-m="330"
                         data-angle-mobile="90" data-distance-mobile="200">
                        <video className="fruit-video" src={milkVideo} autoPlay loop muted playsInline />
                        <Link to="/milk-plan" className="buy-button">Milk Plan</Link>
                    </div>
                    <div className='card-1 animate-element' 
                         data-angle-desktop="235" data-distance-desktop="190"
                         data-angle-tablet="260" data-distance-tablet="140"
                         data-angle-mobile-m="90" data-distance-mobile-m="180"
                         data-angle-mobile="90" data-distance-mobile="90">
                        <video className="fruit-video" src={fruitVideo} autoPlay loop muted playsInline />
                        <Link to="/buy-fruits" className="buy-button">Buy Fruits</Link>
                    </div>
                </div>
                <div className="sub-container sb-v-1 sub-container-2">
                    <div className="nav-section">
                        <h3 id="font-size-card" className='special-heading'>Explore Our Exclusive Offers</h3>
                        <Link to="/fruit-store" className="nav-button n-v-1">
                            <h4>Fruit Store</h4>
                            <p>Fresh, juicy fruits picked just for you. Explore our wide range of seasonal and exotic fruits.</p>
                        </Link>
                        <Link to="/kirana-store" className="nav-button n-v-1">
                            <h4>Kirana Store</h4>
                            <p>Your one-stop shop for all daily essentials and groceries. Quality products at unbeatable prices.</p>
                        </Link>
                        <Link to="/milk-subscription" className="nav-button n-v-1">
                            <h4>Milk Subscription</h4>
                            <p>Enjoy fresh milk delivered to your doorstep. Choose from various plans tailored to your needs.</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
