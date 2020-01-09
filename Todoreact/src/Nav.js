
import React, { Component } from 'react'

class Navbar extends Component {

   
 
    render() {
        return (





            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Todo APP</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav ">
                        <li className="nav-item active mr-3">
                            <button type='click' >NEW ITEM</button>
                        </li>
                        <li className="nav-item mr-3">
                            <a className="nav-link" href="#">Features</a>
                        </li>
                        <li className="nav-item mr-3">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>

                    </ul>
                </div>
            </nav>
        )
    }
}


export default Navbar
