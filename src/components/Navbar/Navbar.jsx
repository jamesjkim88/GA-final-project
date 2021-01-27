import React from 'react';
import { Dropdown, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

export default function({ user, handleLogout }){
  return(
    <Menu>
    <Menu.Item>Home</Menu.Item>
    <Dropdown text={ user ? user.username : 'profile' } pointing className='link item'>
      <Dropdown.Menu>
        <Dropdown.Header>Categories</Dropdown.Header>
        <Dropdown.Item onClick={handleLogout}>{ user ? 'logout' : 'sign up' }</Dropdown.Item>
        <Dropdown.Item>Home Goods</Dropdown.Item>
        <Dropdown.Item>Bedroom</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Header>Order</Dropdown.Header>
        <Dropdown.Item>Status</Dropdown.Item>
        <Dropdown.Item>Cancellations</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <Menu.Item>Forums</Menu.Item>
    <Menu.Item>Contact Us</Menu.Item>
  </Menu>
  )
}