/*
  BetterOff Prodictions
  Notes -

  created - Jeff Winkler  05/10/2018

***********************************************************************
  modified -

*/
import React from 'react';
import {Form, Input, Icon, Card, Layout} from 'antd';
import ButtonSubmit from '@atom/buttons/button.Submit.js'
import '../sass/keywordForm.scss'

const FormItem = Form.Item;
const {Content} = Layout;

const keywordForm = (props) => {
  return <div className='keywordForm'>
  <Content>
    <Card title='Add Keyword'>
      <Form onSubmit={this.handleSubmit}>
        <FormItem>
          <Input prefix={< Icon type = "user" />} placeholder="Add Keywords"/>
          <ButtonSubmit />
        </FormItem>
      </Form>
    </Card>
    </Content>
  </div>
}

export default keywordForm;
