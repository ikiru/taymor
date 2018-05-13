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
import './sass/colorForm.scss'

const FormItem = Form.Item;
const {Content} = Layout;

const colorForm = (props) => {
  return <div className='colorForm'>
  <Content>
    <Card title='Add Base Costume Colors'>
      <Form onSubmit={this.handleSubmit}>
        <FormItem>
          <Input prefix={< Icon type = "user" />} placeholder="Add Color"/>
          <ButtonSubmit />
        </FormItem>
      </Form>
    </Card>
    </Content>
  </div>
}

export default colorForm;
