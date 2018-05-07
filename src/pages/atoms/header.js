import { Layout } from 'antd';
import React from 'react';
import './sass/header.scss';
const {Header} = Layout;


const header = (props) => {
  return (
    <div className ='header'>
      <Header>
        <h1>DashBoard</h1>
      </Header>
    </div>
  )
}

export default header;
