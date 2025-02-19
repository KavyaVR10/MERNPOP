import { Link } from "react-router-dom";
import "../css/navbar.css"

const Navbar=()=>{
   return(
    <header>
    <nav>
        <li><Link to='/Home'>Home</Link></li>      {/*the link to and path in app.jsx should be same*/ }
        <li><Link to='/About'>About</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <li><Link to='/Gallery'>Gallery</Link></li>
        <li><Link to='/signup'>SignUp</Link></li>
        <div>
        <span>Hooks</span>
        <ol>
            <li><Link to='/use-state'>UseState</Link></li>
            <li><Link to='/use-effect'>UseEffect</Link></li>
        </ol>
       
        </div>
        </nav>
    </header>
   );
};
export default Navbar;