import image from "../assets/image.png"
import cartimage from "../assets/cart.png"
import { Link } from 'react-router-dom';
function Nav() {
    return (
        <nav className="bg-stone-900 text-white p-4">
            <div className="container mx-auto flex items-center justify-between">
               
                    <img src={image} alt="Logo" className="mr-3 h-7 sm:h-9" />
                   
               
                <div className="flex space-x-2">
                <Link to="/" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                    <Link to="/about" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">About</Link>
                    <Link to="/services" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Services</Link>
                    <Link to="/contact" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
                </div>
                <Link to="/cart">
                    <img src={cartimage} alt="cartImage" className="mr-3 h-7 sm:h-9 filter invert" />
                </Link>
            </div>
        </nav>
    );
}

export default Nav;
