/*
  BetterOff Prodictions
  Notes -

  created - Jeff Winkler  05/12/2018

***********************************************************************
  modified -

*/
import React from 'react';
import ColorForm from '../../molecules/form/color.Form';
import ColorTable from '../../molecules/table/color.Table';
import {Card, Row} from 'antd';

const colorAdmin = (props) => {
  return (
    <div className='colorAdmin'>
      <Card title='colorAdmin'>
        <Card>
          <Row>
            <Card title='Color Form'>
              <ColorForm/>
            </Card>
            <Card title='Caolor Table'>
              <ColorTable/>
            </Card>
          </Row>
        </Card>
      </Card>
    </div>
  )
}

export default colorAdmin;
