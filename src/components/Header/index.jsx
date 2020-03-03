import React from 'react';
import Topbar from '../Topbar';
import DisplayDate from '../Date';

const Header = () => {
    return (
        <div className="Header">
            <Topbar />
            <DisplayDate />
        </div>
    )
}
 
export default Header;