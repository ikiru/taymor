import sideMenu from '@atom/sideMenu';
import header from '@atom/header';
import React, {Component} from 'react';
import {Layout} from 'antd';
import './sass/dashboard.scss'
const {Sider} = Layout;

class dashboard extends Component {
  state = {
    collapsed: false
  };
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({collapsed});
  }

  render() {
    return (
      <div className='dashboard'>
        <Layout>
          <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}>
            <header />
            <sideMenu />
          </Sider>
        </Layout>
      </div>
    )
  }
}

export default dashboard;
