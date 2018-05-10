import React from 'react';
import {Menu, Icon} from 'antd'
import {Link} from 'react-router-dom';
import './sass/sideMenu.scss'

const sideMenu = (props) => {

  return (
    <div className='sideMenu'>
      <div className="logo"/>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>

        <Menu.Item key="1">
          <Link to="/">
          DashBoard</Link>
          <Icon type="home"/>
        </Menu.Item>

        <Menu.Item key="2">
          <Link to="/business">
          Business</Link>
          <Icon type="team"/>
        </Menu.Item>

        <Menu.Item key="3">
          <Link to="/renter">
            Contacts</Link>
          <Icon type="contacts"/>
        </Menu.Item>

        <Menu.Item key="4">
          <Link to="/admin">
            Admin</Link>
          <Icon type="code-o"/>
        </Menu.Item>

        <Menu.Item key="5">
          <Link to="/settings">
            Settings</Link>
          <Icon type="setting"/>
        </Menu.Item>

      </Menu>
    </div>
  )

};

export default sideMenu;
