import React, { useEffect, useRef, useState } from 'react';
import './index.css'; // Import CSS file for styling

const AboutUs = () => {
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Function to check if element is in viewport
  const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  useEffect(() => {
    const aboutElement = aboutRef.current;
    const handleScroll = () => {
      if (isInViewport(aboutElement)) {
        setIsVisible(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`about-us ${isVisible ? 'visible' : ''}`} ref={aboutRef}>
      <h2>About freshto</h2>
      <p>
        Welcome to freshto, your one-stop destination for fresh fruits, groceries, and milk delivered right to your doorstep. We are passionate about bringing you the highest quality products, sourced directly from local farms and trusted suppliers.
      </p>
      <p>
        At freshto, we understand the importance of convenience and health in today's busy lifestyle. Our mission is to make fresh and nutritious food accessible to everyone, ensuring that you and your family can enjoy wholesome meals without any hassle.
      </p>
      <p>
        Whether you're looking for seasonal fruits, organic vegetables, pantry staples, or daily milk subscriptions, freshto has got you covered. With flexible delivery options and competitive pricing, we strive to exceed your expectations every time you shop with us.
      </p>
      <p>
        Join thousands of satisfied customers who trust freshto for their daily grocery needs. Experience the convenience of online shopping with a personal touch - because your satisfaction is our priority.
      </p>
      <p>
        Discover freshto today and embark on a journey towards healthier living, one fresh delivery at a time.
      </p>
    </div>
  );
}

export default AboutUs;
