import React from 'react';
import {Form, Input, Icon, Card, Layout} from 'antd';
import './sass/renterTypeForm.scss'

const FormItem = Form.Item;
const {Content} = Layout;

const renterTypeForm = (props) => {
  return <div className='sizeForm'>
  <Content>
    <Card title='Add Renter Type'>
      <Form onSubmit={this.handleSubmit}>
        <FormItem>
          <Input prefix={< Icon type = "user" />} placeholder="Add Renter Type"/>
        </FormItem>
      </Form>
    </Card>
    </Content>
  </div>
}

export default renterTypeForm;
