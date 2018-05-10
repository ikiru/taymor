import React from 'react';
import {Form, Input, Icon, Card, Layout} from 'antd';
import ButtonSubmit from '@atom/buttons/button.Submit.js'
import './sass/locationTypeForm.scss'

const FormItem = Form.Item;
const {Content} = Layout;

const locationTypeForm = (props) => {
  return <div className='locationTypeForm'>
  <Content>
    <Card title='Add Location Type'>
      <Form onSubmit={this.handleSubmit}>
        <FormItem>
          <Input prefix={< Icon type = "user" />} placeholder="Add Location Type"/>
          <ButtonSubmit />
        </FormItem>
      </Form>
    </Card>
    </Content>
  </div>
}

export default locationTypeForm;
