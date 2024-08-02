import React from 'react';
import './index.css'; // Import the external CSS file

const AboutUs = () => {
  return (
    <div className="container-modern">
      <div className="hero-section-modern">
        <h1 className="hero-heading-modern">Welcome to FreshTo</h1>
        <p className="hero-subtext-modern">
          Delivering fresh fruits, groceries, and milk right to your doorstep.
        </p>
      </div>
      <div className="content-modern">
        <section className="section-modern">
          <h2 className="subheading-modern">Our Story</h2>
          <p className="paragraph-modern">
            We started FreshTo with a simple idea: to provide our customers with the best quality products, sourced from local farmers and suppliers, and delivered to their doorstep with a smile.
          </p>
        </section>
        <section className="section-modern">
          <h2 className="subheading-modern">Our Services</h2>
          <div className="services-modern">
            <div className="service-item-modern">
              <h3>Fresh Fruits and Groceries</h3>
              <p>We source our products from local farmers and suppliers to ensure they are fresh and of the highest quality.</p>
            </div>
            <div className="service-item-modern">
              <h3>Pure Milk Subscription</h3>
              <p>Our milk is sourced from local dairy farms and delivered to your doorstep on a subscription basis.</p>
            </div>
            <div className="service-item-modern">
              <h3>Convenient Delivery</h3>
              <p>We deliver to your doorstep, so you can enjoy the convenience of having fresh products at your fingertips.</p>
            </div>
          </div>
        </section>
        <section className="section-modern">
          <h2 className="subheading-modern">How it Works</h2>
          <ol className="steps-modern">
            <li>Sign up for our subscription service and choose your preferred plan.</li>
            <li>Receive an OTP (One-Time Password) to verify your subscription.</li>
            <li>Visit your nearest milk center and show your OTP to collect your milk.</li>
          </ol>
        </section>
        <section className="section-modern">
          <h2 className="subheading-modern">Why Choose FreshTo?</h2>
          <ul className="features-modern">
            <li>Fresh and high-quality products</li>
            <li>Convenient delivery to your doorstep</li>
            <li>Flexible subscription plans to suit your needs</li>
            <li>Support for local farmers and suppliers</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
