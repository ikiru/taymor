import React from 'react';
import {Form, Input, Icon, Card, Layout} from 'antd';
import ButtonSubmit from '@atom/buttons/button.Submit.js'
import './sass/securityLevelForm.scss'

const FormItem = Form.Item;
const {Content} = Layout;

const securityLevelForm = (props) => {
  return <div className='securityLevelForm'>
  <Content>
    <Card title='Add Security Level'>
      <Form onSubmit={this.handleSubmit}>
        <FormItem>
          <Input prefix={< Icon type = "user" />} placeholder="Add security Level"/>
          <ButtonSubmit />
        </FormItem>
      </Form>
    </Card>
    </Content>
  </div>
}

export default securityLevelForm;
