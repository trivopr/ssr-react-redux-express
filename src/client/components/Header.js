import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component  {

    render() {

        const authButton = this.props.auth ? (
            <a href="/api/logout">Logout</a>
        ) : (
            <a href="/api/auth/google">Login</a>
        );

        return (
            <nav>
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo">SSR Render</Link>
                    <ul className="right">
                        <li>
                            <Link to="/users">User</Link>
                        </li>
                        <li>
                            <Link to="/admins">Admins</Link>
                        </li>
                        <li>
                            { authButton }
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = ( {auth} ) => {
    return { auth };
}

export default connect(mapStateToProps)(Header);  