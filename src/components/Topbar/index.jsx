import React from 'react';
import './index.css';
import menuIcon from './assets/menu.png';
import searchIcon from './assets/search.png';

const Topbar = () => {
    return (
        <div className="Topbar">
            <div className="Topbar-container">
                <div className="Topbar-menu">
                    <div className="Topbar-menu__icon">
                        <img src={menuIcon} alt="Menu" className="Topbar-menu__icon-image" />
                    </div>
                    <div className="Topbar-menu__icon">
                        <img src={searchIcon} alt="Menu" className="Topbar-menu__icon-image" />
                    </div>
                </div>
            </div>
        </div>
    )
}
 
export default Topbar;