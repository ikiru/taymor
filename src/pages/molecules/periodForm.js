import React from 'react';
import {Form, Input, Icon, Card, Layout} from 'antd';
import './sass/periodForm.scss'

const FormItem = Form.Item;
const {Content} = Layout;

const periodForm = (props) => {
  return <div className='periodForm'>
  <Content>
    <Card title='Add Time Period'>
      <Form onSubmit={this.handleSubmit}>
        <FormItem>
          <Input prefix={< Icon type = "user" />} placeholder="Add Time Period"/>
        </FormItem>
      </Form>
    </Card>
    </Content>
  </div>
}

export default periodForm;
