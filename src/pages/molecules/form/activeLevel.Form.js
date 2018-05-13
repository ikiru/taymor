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
import './sass/activeLevelForm.scss'

const FormItem = Form.Item;
const {Content} = Layout;

const activeLevelForm = (props) => {
  return <div className='activeLevelForm'>
  <Content>
    <Card title='Add Active Level'>
      <Form onSubmit={this.handleSubmit}>
        <FormItem>
          <Input prefix={< Icon type = "user" />} placeholder="Add Active Level"/>
          <ButtonSubmit />
        </FormItem>
      </Form>
    </Card>
    </Content>
  </div>
}

export default activeLevelForm;
