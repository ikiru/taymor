import React from 'react';
import {Form, Input, Icon, Card, Layout, Button} from 'antd';
import ButtonSubmit from '@atom/buttons/button.Submit.js'
import './sass/renterTypeForm.scss'

const FormItem = Form.Item;
const {Content} = Layout;

const renterTypeForm = (props) => {
  return <div className='renterTypeForm'>
  <Content>
    <Card title='Add Renter Type'>
      <Form onSubmit={this.handleSubmit}>
        <FormItem>
          <Input prefix={< Icon type = "user" />} placeholder="Add Renter Type"/>
          <ButtonSubmit />
        </FormItem>
      </Form>
    </Card>
    </Content>
  </div>
}

export default renterTypeForm;
