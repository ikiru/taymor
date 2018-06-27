import Foot from '@atom/footer';
import Head from '@atom/header';
import SideMenu from '@atom/side.Menu';
import ColorForm from './molecules/form/color.Form';
import PeriodForm from './molecules/form/period.Form';
import SecurityLevelForm from './molecules/form/securityLevel.Form';
import ShowForm from './molecules/form/show.Form';
import SizeForm from './molecules/form/size.Form';
import KeywordForm from './molecules/form/keyword.Form';
import RoleForm from './molecules/form/role.Form';
import RenterTypeForm from './molecules/form/renterType.Form';
import BusinessTypeForm from './molecules/form/businessType.Form';
import LocationTypeForm from './molecules/form/locationType.Form';
import ActiveLevelForm from './molecules/form/activeLevel.Form'
import BusinessForm from './molecules/form/business.Form';
import LocationForm from './molecules/form/location.Form';
import EmployeeForm from './molecules/form/employee.Form';
// import AdminGrid from './molecules/form/adminGrid';

import {Layout} from 'antd';
import React, {Component} from 'react';
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
              <ColorForm/>
              <PeriodForm/>
              <SizeForm/>
              <ShowForm/>
              <SecurityLevelForm/>
              <RenterTypeForm/>
              <BusinessTypeForm/>
              <LocationTypeForm/>
              <ActiveLevelForm/>
              <RoleForm/>
              <KeywordForm/>
              <BusinessForm/>
              <LocationForm/>
              <EmployeeForm/>
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
