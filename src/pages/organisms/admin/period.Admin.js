/*
  BetterOff Prodictions
  Notes -

  created - Jeff Winkler  05/12/2018

***********************************************************************
  modified -

*/
import React from 'react';
import PeriodForm from '../../molecules/form/period.Form';
import PeriodTable from '../../molecules/table/period.Table';
import {Card, Row} from 'antd';

const periodAdmin = (props) => {
  return (
    <div className='periodAdmin'>
      <Card title='periodAdmin'>
        <Card>
          <Row>
            <Card title='Time Period Form'>
              <PeriodForm/>
            </Card>
            <Card title='Time Period Table'>
              <PeriodTable/>
            </Card>
          </Row>
        </Card>
      </Card>
    </div>
  )
}

export default periodAdmin;
