import React from 'react';
import {Menu, Icon, Layout} from 'antd'

const {Sider} = Layout;

const sideMenu = (props) => {
  return (
    <div className='sideMenu'>
      <Sider>
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
      </Sider>
    </div>
  );
}

export default sideMenu;
