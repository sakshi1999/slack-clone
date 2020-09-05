import React from 'react'
import './Header.css';
import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { useStateValue } from './StateProvider';

function Header() {
    const [{user,userImage}] = useStateValue();
    return (
        <div className="header">
            <div className="header__left">
                <Avatar 
                alt={user}
                src={userImage}
                />
                <AccessTimeIcon/>
                
            </div>
            <div className="header__search">
                <SearchIcon/>
                <input type="text" placeholder="search"/>
            </div>
            <div className="header__right">
                <HelpOutlineIcon/>
            </div>

            
        </div>
    )
}

export default Header;
