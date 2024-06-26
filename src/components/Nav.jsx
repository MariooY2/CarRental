import image from "../assets/image.png"
import cartimage from "../assets/cart.png"
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
function Nav() {
    const activeClassName = "bg-gray-700"; // Style for active link
    const cartItems = useSelector(state => state.cart.cart); // Adjust the path according to your Redux store setup
    const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <nav className="bg-stone-900 text-white p-4">
            <div className="container mx-auto flex items-center justify-between">
                <NavLink to="/" className="mr-3 h-7 sm:h-9">
                    <img src={image} alt="Logo" className="h-6 sm:h-9" />
                </NavLink>
                <div className="flex sm:space-x-2 space-x-0  ">
                    <NavLink to="/" className={({ isActive }) => isActive ? activeClassName + " hover:bg-gray-700 sm:px-3 sm:py-2 px-2 py-1 rounded-md text-sm font-medium" : "hover:bg-gray-700 px-3 py-2 rounded-md text-xs sm:text-sm font-medium"}>Home</NavLink>
                    <NavLink to="/about" className={({ isActive }) => isActive ? activeClassName + " hover:bg-gray-700 sm:px-3 sm:py-2 px-2 py-1 rounded-md text-sm font-medium" : "hover:bg-gray-700 px-3 py-2 rounded-md text-xs sm:text-sm font-medium"}>About</NavLink>
                    <NavLink to="/Shop" className={({ isActive }) => isActive ? activeClassName + " hover:bg-gray-700 sm:px-3 sm:py-2 px-2 py-1 rounded-md text-sm font-medium" : "hover:bg-gray-700 px-3 py-2 rounded-md text-xs sm:text-sm font-medium"}>Shop</NavLink>
                    <NavLink to="/contact" className={({ isActive }) => isActive ? activeClassName + " hover:bg-gray-700 sm:px-3 sm:py-2 px-2 py-1 rounded-md text-sm font-medium" : "hover:bg-gray-700 px-3 py-2 rounded-md text-xs sm:text-sm font-medium"}>Contact</NavLink>
                </div>
                
                <NavLink to="/cart" className="relative">
                    <img src={cartimage} alt="cartImage" className="mr-3 h-6 sm:h-9 filter invert" />
                    {itemCount > 0 && (
                        <span className="absolute top-0 right-0 inline-block h-5 w-5 bg-red-500 text-center text-white rounded-full text-xs">
                            {itemCount}
                        </span>
                    )}
                </NavLink>
            </div>
        </nav>
    );
}

export default Nav;