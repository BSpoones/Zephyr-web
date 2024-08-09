import "./Header.css"
import Nav from "../nav/Nav";


function Header() {

    const image = (
        <svg width="40" height="30" viewBox="0 0 40 30" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="5" fill="white"></rect>
            <rect y="12" width="40" height="5" fill="white"></rect>
            <rect y="24" width="40" height="5" fill="white"></rect>
        </svg>
    )

    return (
        <>
            <header className="zephyr-header">
                <Nav />
                {/*<div className="header-nav">*/}
                {/*    {image}*/}
                {/*</div>*/}
                <div className="header-name">Zephyr</div>
            </header>
            <br/>
            <br/>

            {Array.from({length: 400}).map((_, index) => (
                <div>
                    <p>Test {index}</p>
                    <br/>
                </div>
            ))}

        </>
    )


}

export default Header;
