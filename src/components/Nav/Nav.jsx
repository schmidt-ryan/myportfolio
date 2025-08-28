import './Nav.css'

export function Nav(props) {
    let current = props.current;
    return (
        <>
            <div id="darkfade"></div>
            <img id="logo" src="images/ryanschmidt.svg" alt="Ryan Schmidt" />
            <ul id="nav">
                {props.current == "Home" ? <><li className="current"><a href='/'>Home</a></li></> : <><li><a href="/">Home</a></li></>}
                {props.current == "About" ? <><li className="current"><a href='/about'>About</a></li></> : <><li><a href='/about'>About</a></li></>}
                {props.current == "Contact" ? <><li className="current"><a href='/contact'>Contact</a></li></> : <><li><a href='/contact'>Contact</a></li></>}
            </ul>
        </>
    )
}

