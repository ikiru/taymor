/*
  BetterOff Prodictions
  notes -

  created - Jeff Winkler  05/10/2018

***********************************************************************
  modified -

*/

import React from 'react';
import {Form, Input, Icon, Card, Layout} from 'antd';
import ButtonSubmit from '@atom/buttons/button.Submit.js'
import '../sass/businessTypeForm.scss'

const FormItem = Form.Item;
const {Content} = Layout;

const businessTypeForm = (props) => {
  return <div className='businessTypeForm'>
  <Content>
    <Card title='Add Business Type'>
      <Form onSubmit={this.handleSubmit}>
        <FormItem>
          <Input prefix={< Icon type = "user" />} placeholder="Add Business Type"/>
          <ButtonSubmit />
        </FormItem>
      </Form>
    </Card>
    </Content>
  </div>
}

export default businessTypeForm;
