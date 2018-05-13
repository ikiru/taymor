/*
  BetterOff Prodictions
  Notes -

  created - Jeff Winkler  05/12/2018

***********************************************************************
  modified -

*/
import React from 'react';
import ActiveLevelForm from '../../molecules/form/activeLevel.Form';
import ActiveLevelTable from '../../molecules/tble/activeLevel.Table';
import {Card, Row} from 'antd';

const activeLevelAdmin = (props) => {
  return (
    <div className='activeLevelAdmin'>
      <Card title='activeLevelAdmin'>
        <Card>
          <Row>
            <Card title='Active Level Form'>
              <ActiveLevelForm/>
            </Card>
            <Card title='Active Level Table'>
              <ActiveLevelTable/>
            </Card>
          </Row>
        </Card>
      </Card>
    </div>
  )
}

export default activeLevelAdmin;
