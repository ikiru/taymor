/*
  BetterOff Prodictions
  Notes -

  created - Jeff Winkler  05/12/2018

***********************************************************************
  modified -

*/
import React from 'react';
import RenterTypeForm from '../../molecules/form/renterType.Form';
import RenterTypeTable from '../../molecules/table/renterType.Table';
import {Card, Row} from 'antd';

const renterTypeAdmin = (props) => {
  return (
    <div className='renterTypeAdmin'>
      <Card title='renterTypeAdmin'>
        <Card>
          <Row>
            <Card title='Renter Type Form'>
              <RenterTypeForm/>
            </Card>
            <Card title='Renter Type Table'>
              <RenterTypeTable/>
            </Card>
          </Row>
        </Card>
      </Card>
    </div>
  )
}

export default renterTypeAdmin;
