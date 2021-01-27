import React from 'react';
import { Dropdown, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

export default function({ user, handleLogout }){
  return(
    <Menu>
    <Menu.Item>Home</Menu.Item>
    { user ? <Link to='/logout' ><Menu.Item onClick={handleLogout}>Logout</Menu.Item></Link> : <Link to='/signup' ><Menu.Item>Signup</Menu.Item></Link> }
    <Menu.Item>Forums</Menu.Item>
    <Menu.Item>Contact Us</Menu.Item>
  </Menu>
  )
}