
import { Button, Checkbox, Form, Icon, Input, Timeline } from 'antd';
import React from 'react';
import './sass/login.scss';


const FormItem = Form.Item;

const Login = (props) => {
  return (
    <div className='login'>
      <div className='loginPanel'>
        <div className='loginPanelContent'>
          <Form className="loginForm">
            <FormItem>
            <h1>BetterOff Stage</h1>
            </FormItem>
            <FormItem>
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
            </FormItem>
            <FormItem >
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
            </FormItem>
            <FormItem>
              <Checkbox>Remember me</Checkbox>
              <a className="login-form-forgot" href="">Forgot password</a>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
              </Button>
            </FormItem>
          </Form>
        </div>
        <div className="features">
          <h3>Current version: 0.0.1</h3>
          <h3 style={{ paddingBottom : '10px'}}>What's new?</h3>
          <Timeline>
            <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />} color="red">Currently working on atoms</Timeline.Item>
            <Timeline.Item color="red">05/04/2018 - Login Page </Timeline.Item>
            <Timeline.Item color="blue">05/03/2018 - Added apollo</Timeline.Item>
            <Timeline.Item color="green">05/02/2018 - Solved SASS problem for ANT framework</Timeline.Item>
            <Timeline.Item color="blue">05/02/2018 - Initalized the project</Timeline.Item>
          </Timeline>
        </div>
      </div>
    </div>
  )
}

export default Login


