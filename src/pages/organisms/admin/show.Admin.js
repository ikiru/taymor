/*
  BetterOff Prodictions
  Notes -

  created - Jeff Winkler  05/12/2018

***********************************************************************
  modified -

*/
import React from 'react';
import showForm from '../../molecules/form/show.Form';
import ShowTable from '../../molecules/table/show.Table';
import {Card, Row} from 'antd';

const showAdmin = (props) => {
  return (
    <div className='showAdmin'>
      <Card title='showAdmin'>
        <Card>
          <Row>
            <Card title='Show Form'>
              <showForm/>
            </Card>
            <Card title='Show Table'>
              <ShowTable/>
            </Card>
          </Row>
        </Card>
      </Card>
    </div>
  )
}

export default showAdmin;
