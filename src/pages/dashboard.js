import Foot from '@atom/footer';
import Head from '@atom/header';
import SideMenu from '@atom/sideMenu';
import ColorForm from '@mol/colorForm';
import PeriodForm from '@mol/periodForm';
import SecurityLevelForm from '@mol/securityLevelForm';
import SizeForm from '@mol/sizeForm';
import RoleForm from '@mol/roleForm';
import RenterTypeForm from '@mol/renterTypeForm';
import { Layout } from 'antd';
import React, { Component } from 'react';
import './sass/dashboard.scss';

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
              <ColorForm />
              <PeriodForm />
              <SizeForm />
              <SecurityLevelForm />
              <RenterTypeForm />
              <RoleForm />
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
