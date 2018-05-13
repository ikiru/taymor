/*
  BetterOff Prodictions
  Notes -

  created - Jeff Winkler  05/12/2018

***********************************************************************
  modified -

*/
import React from 'react';
import SecurityLevelForm from '../../molecules/form/securityLevel.Form';
import SecurityLevelTable from '../../molecules/table/securityLevel.Table';
import {Card, Row} from 'antd';

const securityLevelAdmin = (props) => {
  return (
    <div className='securityLevelAdmin'>
      <Card title='securityLevelAdmin'>
        <Card>
          <Row>
            <Card title='Security Level Form'>
              <SecurityLevelForm/>
            </Card>
            <Card title='Security Level Table'>
              <SecurityLevelTable/>
            </Card>
          </Row>
        </Card>
      </Card>
    </div>
  )
}

export default securityLevelAdmin;
