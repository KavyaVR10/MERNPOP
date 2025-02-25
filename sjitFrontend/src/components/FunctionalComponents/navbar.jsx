import { Link } from "react-router-dom";
import "../css/navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [dropDown, showDropdown] = useState(false); // State for Hooks dropdown
  const [dropDownMemo, showDropDownMemo] = useState(false); // State for Memoization dropdown

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/Home" className="custom-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/About" className="custom-link">
              About
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
          {/* Hooks Dropdown */}
          <li className="dropdown" onClick={() => showDropdown(!dropDown)}>
            <span className="DropDown">Hooks</span>
            {dropDown && (
              <ol className="DropDown-Content">
                <li>
                  <Link to="/use-state" className="custom-link">
                    UseState
                  </Link>
                </li>
                <li>
                  <Link to="/use-effect" className="custom-link">
                    UseEffect
                  </Link>
                </li>
                <li>
                  <Link to="/UseEffectAPI" className="custom-link">
                    UseEffectAPI
                  </Link>
                </li>
                <li>
                  <Link to="/UseRef" className="custom-link">
                    UseRef
                  </Link>
                </li>
                <li>
                  <Link to="/UseMemo" className="custom-link">
                    UseMemo
                  </Link>
                </li>
                <li>
                  <Link to="/UseCallback" className="custom-link">
                    UseCallback
                  </Link>
                </li>
                <li>
                  <Link to="/UseMemoize" className="custom-link">
                    UseMemoize
                  </Link>
                </li>
                <li>
                  <Link to="/HoC" className="custom-link">
                    HoC
                  </Link>
                </li>
                <li>
                  <Link to="/res" className="custom-link">
                    ContextAPI
                  </Link>
                </li>
              </ol>
            )}
          </li>
          {/* Memoization Dropdown */}
          <li className="dropdown" onClick={() => showDropDownMemo(!dropDownMemo)}>
            <span className="DropDown">Memoization</span>
            {dropDownMemo && (
              <ol className="DropDown-Content">
                <li><Link to="/memo" className="custom-link">Memo</Link></li>
                <li><Link to="/lazyload" className="custom-link">LazyLoading</Link></li>
                <li><Link to="/num" className="custom-link">NumFile</Link></li>
              </ol>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
