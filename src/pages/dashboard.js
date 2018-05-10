import Foot from '@atom/footer';
import Head from '@atom/header';
import SideMenu from '@atom/side.Menu';
import ColorForm from '@mol/color.Form';
import PeriodForm from '@mol/period.Form';
import SecurityLevelForm from '@mol/securityLevel.Form';
import SizeForm from '@mol/size.Form';
import RoleForm from '@mol/role.Form';
import RenterTypeForm from '@mol/renterType.Form';
import LocationTypeForm from '@mol/locationType.Form';
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
              <LocationTypeForm />
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
