import React from 'react';
import HeroImage from '../cars/c-class.jpg';  // Assume this is your hero image for the about page
import classic from "../cars/classic2.jpg"
import vision from "../cars/vision.jpg"
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
function About() {
    return (
        <div className="flex flex-col items-center text-gray-700 min-h-screen">
            {/* Hero Section with Fullscreen Background Image */}
            <div className="relative w-full h-screen text-white text-center flex flex-col justify-center" style={{ backgroundImage: `url(${HeroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="absolute inset-0 bg-black bg-opacity-60"></div>  {/* Dark overlay for better text readability */}
                
                <div className="z-10">
                    <h1 className="text-6xl font-extrabold mb-3" style={{ textShadow: '2px 2px 10px rgba(0, 0, 0, 0.6)' }}>About Mercedes-Benz</h1>
                    <p className="text-2xl max-w-3xl mx-auto" style={{ textShadow: '1px 1px 8px rgba(0, 0, 0, 0.5)' }}>
                        Innovation and excellence since 1926.
                    </p>
                    <a href="#our-story" className="mt-6 inline-block bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-300 transition-colors">Explore Our Story</a>
                </div>
            </div>
            {/* Content Section */}
            <div id="our-story" className="w-full py-10 px-4 md:px-20">
            <section className="mb-10">
                <h2 className="text-4xl font-bold mb-6">Our Heritage</h2>
                <p className="text-lg leading-relaxed mb-4">
                    From the invention of the first car powered by an internal combustion engine in 1886, Mercedes-Benz has pioneered the future of mobility. Our founders, Gottlieb Daimler and Carl Benz, set the cornerstone for what would become the world's oldest automobile manufacturer, known globally for luxury and precision.
                </p>
                <div  className="flex justify-center">  
                <img src={classic} alt="Vintage Mercedes-Benz" className="my-4 rounded shadow-lg max-w-xs md:max-w-md lg:max-w-lg h-auto"/>
</div>

                <p className="text-lg leading-relaxed mb-6">
                    Throughout our history, Mercedes-Benz has been at the forefront of automotive innovation. We introduced the first passenger safety cell, antilock braking system, and pioneered key advancements in fuel efficiency and electric mobility. Each vehicle is a blend of luxury, elegance, and cutting-edge technology, crafted with an unwavering commitment to quality and sustainability.
                </p>

                <p className="text-lg leading-relaxed">
                    As we navigate the future, our dedication to excellence remains unchanged. We are actively shaping the next generation of vehicles with a focus on digitalization, electrification, and autonomous driving, ensuring that our legacy of innovation continues to enrich lives around the globe.
                </p>
            </section>

            <section>
                <h2 className="text-4xl font-bold mb-6">Our Vision</h2>
                <p className="text-lg leading-relaxed">
                    Mercedes-Benz is committed to pioneering sustainable and innovative mobility solutions that do not just meet but exceed the expectations of our customers. With an eye toward the future, we aim to create a world where mobility enhances freedom and global responsibility hand-in-hand.
                </p>
                <div  className="flex justify-center">  
                <img src={vision} alt="Vision Mercedes-Benz" className="my-4 rounded shadow-lg max-w-xs md:max-w-md lg:max-w-lg h-auto"/>
</div>
                <p className="text-lg leading-relaxed mt-4">
                    Our goal is not only to lead in technology and services but also to shape the societal change towards mobility within the framework of environmental and economic responsibility.
                </p>
            </section>
        </div>

            {/* Footer Section */}
            <footer className="bg-black w-full text-white text-center p-4 flex items-center justify-center">
               
                {/* Social Media Icons */}
                <div className="flex justify-center space-x-40 mt-1">
    <a href="https://www.facebook.com/MercedesBenz" target="_blank" rel="noopener noreferrer">
        <FaFacebook className="text-gray-600 hover:text-gray-400 text-3xl" /> {/* Using Tailwind's text size classes */}
    </a>
    <a href="https://twitter.com/MercedesBenz" target="_blank" rel="noopener noreferrer">
        <FaTwitter className="text-gray-600 hover:text-gray-400 text-3xl" />
    </a>
    <a href="https://www.instagram.com/mercedesbenz/" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="text-gray-600 hover:text-gray-400 text-3xl" />
    </a>
</div>

            </footer>
        </div>
    );
}

export default About;
