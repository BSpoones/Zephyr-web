import {useState} from "react";
import "./Nav.css";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "../Home";

function Nav() {
    const [navState, setNavState] = useState<boolean>(false);

    const toggleNav = () => {
        setNavState((prevNavState) => !prevNavState);
    };

    const links = [
        {name: "Test", link: ""},
        {name: "Test Two", link: ""},
    ]


    const hamburgerButton = () => {
        return (
            <svg height="4vh" viewBox="0 0 40 30" xmlns="http://www.w3.org/2000/svg" onClick={toggleNav}>
                <defs>
                    <linearGradient id="redBlue" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{stopColor: "#f10000", stopOpacity: 1}}/>
                        <stop offset="100%" style={{stopColor: "#0000f1", stopOpacity: 1}}/>
                    </linearGradient>
                </defs>

                {/* Gradient background rectangles */}
                <rect className="gradient-bg" width="40" height="5" rx="2.5" ry="2.5" fill="url(#redBlue)"></rect>
                <rect className="gradient-bg" y="12" width="40" height="5" rx="2.5" ry="2.5"
                      fill="url(#redBlue)"></rect>
                <rect className="gradient-bg" y="24" width="40" height="5" rx="2.5" ry="2.5"
                      fill="url(#redBlue)"></rect>

                {/* White cover rectangles */}
                <rect className={navState ? "swipe-out" : "swipe-in"} width="40" height="5" rx="2.5" ry="2.5"
                      fill="#fff"></rect>
                <rect className={navState ? "swipe-out" : "swipe-in"} y="12" width="40" height="5" rx="2.5" ry="2.5"
                      fill="#fff"></rect>
                <rect className={navState ? "swipe-out" : "swipe-in"} y="24" width="40" height="5" rx="2.5" ry="2.5"
                      fill="#fff"></rect>

            </svg>
        );
    };

    return (
        <>
            {hamburgerButton()}
            {navState && (
                <nav>



                </nav>
            )}

            <Router>
                <Routes>
                    <Route path="/home" element={<Home />} />
                </Routes>
            </Router>
        </>
    );
}

export default Nav;
