/*
  BetterOff Prodictions
  Notes -

  created - Jeff Winkler  05/10/2018

***********************************************************************
  modified -

*/

import React from 'react';
import {Form, Input, Icon, Card, Layout} from 'antd';
import ButtonSubmit from '@atom/buttons/button.Submit.js'
import '../sass/sizeForm.scss'

const FormItem = Form.Item;
const {Content} = Layout;

const sizeForm = (props) => {
  return <div className='sizeForm'>
  <Content>
    <Card title='Add Size'>
      <Form onSubmit={this.handleSubmit}>
        <FormItem>
          <Input prefix={< Icon type = "user" />} placeholder="Add Sizes"/>
          <ButtonSubmit />
        </FormItem>
      </Form>
    </Card>
    </Content>
  </div>
}

export default sizeForm;
