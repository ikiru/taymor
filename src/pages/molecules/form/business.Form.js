/*
  BetterOff Prodictions
  Notes -

  created - Jeff Winkler  05/10/2018

***********************************************************************
  modified -

*/

import React from 'react';
import {
  Form,
  Input,
  Icon,
  Card,
  Layout,
  Select
} from 'antd';
import ButtonSubmit from '@atom/buttons/button.Submit.js'
import '../sass/businessForm.scss'

const FormItem = Form.Item;
const {Content} = Layout;
const Option = Select.Option;

const businessForm = (props) => {
  return <div className='businessTypeForm'>
    <Content>
      <Card title='Business Information'>
        <Form onSubmit={this.handleSubmit}>

          <FormItem>
            <Input prefix={< Icon type = "user" />} placeholder="Business Name"/>
          </FormItem>

          <FormItem>
            <Select placeholder="Please select a location">
              <Option value="china">China</Option>
            </Select>
          </FormItem>

          <FormItem>
          <Input prefix={< Icon type = "user" />} placeholder="Active Levels"/>
          </FormItem>

          <FormItem>
            <ButtonSubmit/>
          </FormItem>
        </Form>
      </Card>
    </Content>
  </div>
}

export default businessForm;
