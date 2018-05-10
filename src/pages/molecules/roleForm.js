import React from 'react';
import {Form, Input, Icon, Card, Layout} from 'antd';
import './sass/roleForm.scss'

const FormItem = Form.Item;
const {Content} = Layout;

const roleForm = (props) => {
  return <div className='roleForm'>
  <Content>
    <Card title='Add Role'>
      <Form onSubmit={this.handleSubmit}>
        <FormItem>
          <Input prefix={< Icon type = "user" />} placeholder="Add Role"/>
        </FormItem>
      </Form>
    </Card>
    </Content>
  </div>
}

export default roleForm;
