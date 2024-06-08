import image from "../assets/image.png"
import cartimage from "../assets/cart.png"
import { NavLink } from 'react-router-dom';
function Nav() {
    const activeClassName = "bg-gray-700"; // Style for active link

    return (
        <nav className="bg-stone-900 text-white p-4">
            <div className="container mx-auto flex items-center justify-between">
                <NavLink to="/" className="mr-3 h-7 sm:h-9">
                    <img src={image} alt="Logo" className="h-7 sm:h-9" />
                </NavLink>
                <div className="flex space-x-2">
                    <NavLink to="/" className={({ isActive }) => isActive ? activeClassName + " hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium" : "hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"}>Home</NavLink>
                    <NavLink to="/about" className={({ isActive }) => isActive ? activeClassName + " hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium" : "hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"}>About</NavLink>
                    <NavLink to="/services" className={({ isActive }) => isActive ? activeClassName + " hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium" : "hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"}>Services</NavLink>
                    <NavLink to="/contact" className={({ isActive }) => isActive ? activeClassName + " hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium" : "hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"}>Contact</NavLink>
                </div>
                <NavLink to="/cart">
                    <img src={cartimage} alt="cartImage" className="mr-3 h-7 sm:h-9 filter invert" />
                </NavLink>
            </div>
        </nav>
    );
}
export default Nav;