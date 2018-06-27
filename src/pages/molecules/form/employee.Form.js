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
import '../sass/employeeForm.scss'

const FormItem = Form.Item;
const {Content} = Layout;
const Option = Select.Option;

const employeeForm = (props) => {
  return <div className='employeeForm'>
    <Content>
      <Card title='Add Employee'>
        <Form onSubmit={this.handleSubmit}>

          <FormItem>
            <Input prefix={< Icon type = "user" />} placeholder="Add Employees"/>

          </FormItem>

          <FormItem>
            <Select placeholder="Please select a Role">
              <Option value="china">China</Option>
            </Select>
          </FormItem>

          <FormItem>
            <ButtonSubmit/>
          </FormItem>

        </Form>
      </Card>
    </Content>
  </div>
}

export default employeeForm;
