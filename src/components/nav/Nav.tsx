import {useState} from "react";

function Nav() {

    const [navState, setNavState] = useState<Boolean>(false)

    const toggleNav = () => {
        setNavState(n => !n)
    }


    return (
        <>
            <button onClick={toggleNav}>
                {navState ? "Hide Menu" : "Show Menu"}
            </button>

            {navState && (
                <nav style={{ padding: "10px", background: "#333", color: "white" }}>
                    <ul>
                        <li><a href="./home" style={{ color: "white" }}>Home</a></li>
                        <li><a href="./about" style={{ color: "white" }}>About</a></li>
                        <li><a href="./services" style={{ color: "white" }}>Services</a></li>
                        <li><a href="./contact" style={{ color: "white" }}>Contact</a></li>
                    </ul>
                </nav>
            )}

        </>
    )



}


export default Nav
