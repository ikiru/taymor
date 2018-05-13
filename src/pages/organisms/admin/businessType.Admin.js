/*
  BetterOff Prodictions
  Notes -

  created - Jeff Winkler  05/12/2018

***********************************************************************
  modified -

*/
import React from 'react';
import BusinessTypeForm from '../../molecules/form/businessType.Form';
import BusinessTypeTable from '../../molecules/table/businessType.Table';
import {Card, Row} from 'antd';

const businessTypeAdmin = (props) => {
  return (
    <div className='businessTypeAdmin'>
      <Card title='businessTypeAdmin'>
        <Card>
          <Row>
            <Card title='Business Type Form'>
              <BusinessTypeForm/>
            </Card>
            <Card title='Business Type Table'>
              <BusinessTypeTable/>
            </Card>
          </Row>
        </Card>
      </Card>
    </div>
  )
}

export default businessTypeAdmin;
