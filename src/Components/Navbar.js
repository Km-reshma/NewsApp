import React, { Component } from 'react'

export class Navbar extends Component {
  render() {
    return (
        <div>
            <nav className="navbar md:navbar-expand bg-1">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">NewsMonkey</a>
                <button className="btn-icon navbar-toggler" type="button" data-bs-toggle="drawer" data-bs-target="#navbarDrawer" aria-controls="navbarDrawer" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" aria-hidden="true"></span>
                </button>
                <div className="drawer-body mb-2 md:mb-0">
                    <ul className="nav navbar-nav me-auto">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/home">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/abot">About</a>
                        </li>
                    </ul>
                </div>
               
             </div>
        </nav>
    </div>
      
        
      
    )
  }
}

export default Navbar
