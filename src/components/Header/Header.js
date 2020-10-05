import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import logo from '../../logos/Group 1329.png';
import './header.css';

const Header = () => {
    const [user,setUser] = useContext(userContext);
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light d-flex justify-content-around d-flex align-items-center">
                <Link className="navbar-brand" to="/"> <img src={logo} alt="logo"/> </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse ml-auto" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto justify-content-around d-flex align-items-center">
                        <Link className="nav-link" to="/home">Home</Link>
                        <Link className="nav-link" to="/login">Login</Link>
                        <Link className="nav-link" to="/yourevents">Your Events</Link>
                        <Link className="nav-link" to="/register">
                            <button className="btn btn-primary">Register</button>
                        </Link>
                        <Link className="nav-link" to="/admin">
                            <button className="btn btn-dark">Admin</button>
                        </Link>
                        {
                            user.userExist && <Link onClick={() => setUser({})} className="nav-link" to="/">
                                <button className="btn btn-dark">Log out</button>
                            </Link>
                        }
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;