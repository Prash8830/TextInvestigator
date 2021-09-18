import React from 'react'
// import PropTypes from 'prop-types'
// import {Link} from 'react-router-dom';

export default function Navbar(props) {
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">{props.title}</a>
                            </li>

                            {/* <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">About</a>
                            </li> */}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Connect
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown" style={{backgroundColor: props.mode === 'dark'?'#073642':'white'}}>
                                    <li ><a className="dropdown-item" href="https://github.com/Prash8830" style={{backgroundColor: props.mode === 'dark'?'#073642':'white',color: props.mode === 'dark'?'lightgreen':'#212529'}}>Github</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="https://www.linkedin.com/in/prashant-patil-8830/" style={{backgroundColor: props.mode === 'dark'?'#073642':'white',color: props.mode === 'dark'?'lightgreen':'#212529'}}>Linkedin</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="https://twitter.com/Prash8830" style={{backgroundColor: props.mode === 'dark'?'#073642':'white',color: props.mode === 'dark'?'lightgreen':'#212529'}}>Twitter</a></li>
                                </ul>
                            </li>
                        </ul>
                        {/* <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.togglemode}/>
                            <label className ="form-check-label" htmlFor="flexSwitchCheckDefault" id="km">Dark Mode</label>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
// by this you can control value coming form props are valid or not
// Navbar.propTypes = {
//     title: PropTypes.string.isRequired,  //.isrequired makes necessary for prop input 
//     num: PropTypes.number,
// }
// Navbar.defaultProps = {
//     title: 'Home',
//     num: "Set Number" //you can give default value to other data types also
// }