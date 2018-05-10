import SideMenu from '@atom/sideMenu';
import Head from '@atom/header';
import Foot from '@atom/footer';
import ColorForm from '@mol/colorForm';
import PeriodForm from '@mol/periodForm';
import React, {Component} from 'react';

import './sass/dashboard.scss'
import {Layout} from 'antd';
const {Header, Footer, Sider, Content} = Layout;

class dashboard extends Component {
  state = {
    collapsed: false
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  render() {
    return (
      <div className='dashboard'>
        <Layout>
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <SideMenu/>
          </Sider>
          <Layout>
            <Header>
              <Head/>
            </Header>
            <Content>
              <ColorForm/>
              <PeriodForm/>
            </Content>
            <Footer>
              <Foot/>
            </Footer>
          </Layout>
        </Layout>
      </div>
    )
  }
}

export default dashboard;
