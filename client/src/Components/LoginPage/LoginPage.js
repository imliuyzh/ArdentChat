import React from 'react';
import './LoginPage.css';

import Logo from '../../Assets/Image/logo.png';

export default function LoginPage()
{
    return (
        <div id="login-section">
            <div id="logo-container">
                <img src={Logo} id="logo" alt="Ardent Logo" />
            </div>
            <form className="helvetica" id="form-input">
                <legend className="f2 fw6 ph0 mh0">ARDENTCHAT</legend>
                <div className="mt3" id="full-name-input">
                    <label className="db fw6 lh-copy f6" for="full-name">Name</label>
                    <input className="pa2 input-reset ba bg-transparent" name="full-name" type="text" required />
                </div>
                <div className="mv3" id="ardent-id-input">
                    <label className="db fw6 lh-copy f6" for="ardent-id">ID</label>
                    <input className="pa2 input-reset ba bg-transparent" name="ardent-id" type="text" required />
                </div>
                <input className="ph3 pv2 input-reset b--black bg-transparent grow pointer f6 dib hover-bg-black hover-white" type="submit" value="Login" />
                <div className="f7 lh-copy mt4" id="links">
                    <a href="" className="link dim black db">Activate</a>
                    <a href="mailto:learn@ardentlbs.io" className="link dim black db">Problems? Send an Email to us!</a>
                </div>
            </form>
        </div>
    );
}