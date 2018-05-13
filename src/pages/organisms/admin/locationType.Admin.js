/*
  BetterOff Prodictions
  Notes -

  created - Jeff Winkler  05/12/2018

***********************************************************************
  modified -

*/
import React from 'react';
import LocationTypeForm from '../../molecules/form/locationType.Form';
import LocationTypeTable from '../../molecules/table/locationType.Table';
import {Card, Row} from 'antd';

const locationTypeAdmin = (props) => {
  return (
    <div className='locationTypeAdmin'>
      <Card title='locationTypeAdmin'>
        <Card>
          <Row>
            <Card title='Location Type Form'>
              <LocationTypeForm/>
            </Card>
            <Card title='Location Type Table'>
              <LocationTypeTable/>
            </Card>
          </Row>
        </Card>
      </Card>
    </div>
  )
}

export default locationTypeAdmin;
