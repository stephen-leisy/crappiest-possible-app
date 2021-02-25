import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div className='header'>
                {/* <NavLink exact activeClassName='active' to='/'>Home</NavLink> */}
                <NavLink exact activeClassName='active' className='nav-links' to='/albums'>Album List</NavLink>
                <NavLink exact activeClassName='active' className='nav-links' to='/create'>Create</NavLink>


            </div>
        )
    }
}
