import React from 'react';
import {Form, Input, Icon, Card, Layout} from 'antd';
import './sass/sizeForm.scss'

const FormItem = Form.Item;
const {Content} = Layout;

const sizeForm = (props) => {
  return <div className='sizeForm'>
  <Content>
    <Card title='Add Size'>
      <Form onSubmit={this.handleSubmit}>
        <FormItem>
          <Input prefix={< Icon type = "user" />} placeholder="Add Sizes"/>
        </FormItem>
      </Form>
    </Card>
    </Content>
  </div>
}

export default sizeForm;
