/*
  BetterOff Prodictions
  Notes -

  created - Jeff Winkler  05/12/2018

***********************************************************************
  modified -

*/
import React from 'react';
import SizeForm from '../../molecules/form/size.Form';
import SizeTable from '../../molecules/table/size.Table';
import {Card, Row} from 'antd';

const sizeAdmin = (props) => {
  return (
    <div className='sizeAdmin'>
      <Card title='sizeAdmin'>
        <Card>
          <Row>
            <Card title='Size Form'>
              <SizeForm/>
            </Card>
            <Card title='Size Table'>
              <SizeTable/>
            </Card>
          </Row>
        </Card>
      </Card>
    </div>
  )
}

export default sizeAdmin;
