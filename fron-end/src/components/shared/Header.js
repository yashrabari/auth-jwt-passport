import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { ThemeContext } from '../context/ThemeContext';

const Header = ({ title }) => {

    const history = useHistory()
    const { dark, setDark } = useContext(ThemeContext)

    const changeTheme = () => {
        setDark(!dark)
    }

    const logout = () => {
        localStorage.removeItem('token')
        history.push('/')
    }

    return (
        <div>
            <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <section>
                    <h1>{title}</h1>
                </section>
                <section type="square">
                    <span style={{ margin: "0px 25px" }}><Link to="/">Home</Link></span>
                    <span style={{ margin: "0px 25px" }}><Link to="/signup">SignUp</Link></span>
                    <span style={{ margin: "0px 25px" }}><Link to="/login">Login</Link></span>
                    <span style={{ margin: "0px 25px" }}><Link to="/products">Products</Link></span>
                    <span style={{ margin: "0px 25px" }}><button onClick={e => logout()}><i className="fa fa-sign-out"></i></button></span>
                    <span style={{ margin: "0px 25px" }}><button onClick={changeTheme}>{dark ? "Light" : "Dark"}</button></span>
                </section>
            </nav>
        </div>
    );
}

export default Header;
