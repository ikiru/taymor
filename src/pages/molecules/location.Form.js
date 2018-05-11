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
import './sass/businessForm.scss'

const FormItem = Form.Item;
const {Content} = Layout;
const Option = Select.Option;

const locationForm = (props) => {
  return <div className='businessTypeForm'>
    <Content>
      <Card title='Location Information'>
        <Form onSubmit={this.handleSubmit}>

        <FormItem>
            <Select placeholder="Location Type">
              <Option value="KS">KS</Option>
            </Select>
          </FormItem>

          <FormItem>
            <Input prefix={< Icon type = "user" />} placeholder="Address"/>
          </FormItem>

          <FormItem>
            <Input prefix={< Icon type = "user" />} placeholder="City"/>
          </FormItem>

          <FormItem>
            <Select placeholder="State">
              <Option value="KS">KS</Option>
            </Select>
          </FormItem>

          <FormItem>
            <Input prefix={< Icon type = "user" />} placeholder="Zip"/>
          </FormItem>

          <FormItem>
            <Input prefix={< Icon type = "user" />} placeholder="Phone"/>
          </FormItem>

          <FormItem>
            <Input prefix={< Icon type = "user" />} placeholder="Email"/>
          </FormItem>


          <FormItem>
            <ButtonSubmit/>
          </FormItem>
        </Form>
      </Card>
    </Content>
  </div>
}

export default locationForm;
