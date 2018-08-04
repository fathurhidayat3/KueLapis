import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-default" role="navigation">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <Link className="navbar-brand" to="/">KueLapis</Link>
                </div>


                <div className="collapse navbar-collapse navbar-ex1-collapse">
                    <ul className="nav navbar-nav">
                        <li><Link to="/color">Color</Link></li>
                        <li><Link to="/palette">Palette</Link></li>
                        <li><Link to="/gradient">Gradient</Link></li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown">Additional Link
                            <b className="caret"></b></a>
                            <ul className="dropdown-menu">
                                {/* <li><a href="#">Contribute Yours</a></li> */}
                                <li><a href="https://github.com/fathurhidayat3/KueLapis" target="_blank">Github Repository</a></li>
                                <li><a href="#">About</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>


        );
    }
}

export default Navbar;