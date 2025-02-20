import { Link } from "react-router-dom";
import "../css/navbar.css";
import { useState } from "react";

const Navbar = () => {
  var [dropDown, showDropdown] = useState(false);
  return (
    <header>
      <nav>
        <li>
          <Link to="/Home" className="custom-link">
            Home
          </Link>
        </li>{" "}
        {/*the link to and path in app.jsx should be same*/}
        <li>
          <Link to="/About" className="custom-link">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="custom-link">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/Gallery" className="custom-link">
            Gallery
          </Link>
        </li>
        <li>
          <Link to="/signup" className="custom-link">
            SignUp
          </Link>
        </li>
        <li>
          <Link to="/login" className="custom-link">
            Login
          </Link>
        </li>
        <div
          className="dropdown"
          onClick={(val) => showDropdown(!dropDown)}
        >
          <span className="DropDown">Hooks</span>
          {dropDown && (
            <ol className="DropDown-Content">
              <li>
                <Link to="/use-state" className="custom-link">
                  UseState
                </Link>
              </li>
              <li>
                <Link to="/use-effect" className="custom-link">UseEffect
                </Link>
              </li>
              <li>
                <Link to="/UseEffectAPI" className="custom-link">UseEffectAPI
                </Link>
              </li>
              <li>
                <Link to="/UseRef" className="custom-link">UseRef
                </Link>
              </li>
              <li>
                <Link to="/UseMemo" className="custom-link">UseMemo
                </Link>
              </li>
            </ol>
          )}
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
