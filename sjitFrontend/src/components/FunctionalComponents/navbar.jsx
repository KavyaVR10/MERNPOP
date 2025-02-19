import { Link } from "react-router-dom";
import "../css/navbar.css"

const Navbar=()=>{
   return(
    <header>
    <nav>
        <li><Link to='/Home' className="custom-link">Home</Link></li>      {/*the link to and path in app.jsx should be same*/ }
        <li><Link to='/About' className="custom-link">About</Link></li>
        <li><Link to='/contact' className="custom-link">Contact</Link></li>
        <li><Link to='/Gallery' className="custom-link">Gallery</Link></li>
        <li><Link to='/signup' className="custom-link">SignUp</Link></li>
        <li><Link to='/login' className="custom-link">Login</Link></li>
        <div className="dropdown">
        <span className="DropDown">Hooks</span>
        <ol className="DropDown-Content">
            <li><Link to='/use-state' className="custom-link">UseState</Link></li>
            <li><Link to='/use-effect' className="custom-link">UseEffect</Link></li>
        </ol>
        </div>
        </nav>
    </header>
   );
};
export default Navbar;