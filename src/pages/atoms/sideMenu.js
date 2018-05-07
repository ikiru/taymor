import React from 'react';
import {Menu, Icon} from 'antd'

const sideMenu = (props) => {
  return (
    <div className='sideMenu'>
      <div style={{
        width: 256
      }}>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark">
          <Menu.Item>
            <Icon type="dashboard"/>
            <span>Dashboard</span>
          </Menu.Item>
          <Menu.Item>
            <Icon type="desktop"/>
            <span>Business</span>
          </Menu.Item>
          <Menu.Item>
            <Icon type="team"/>
            <span>Renters</span>
          </Menu.Item>
          <Menu.Item>
            <Icon type="setting"/>
            <span>Settings</span>
          </Menu.Item>
        </Menu>
      </div>
    </div>
  );
}

export default sideMenu;
