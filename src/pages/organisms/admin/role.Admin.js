/*
  BetterOff Prodictions
  Notes -

  created - Jeff Winkler  05/12/2018

***********************************************************************
  modified -

*/
import React from 'react';
import RoleForm from '../../molecules/form/role.Form';
import RoleTable from '../../molecules/table/role.Table';
import {Card, Row} from 'antd';

const roleAdmin = (props) => {
  return (
    <div className='roleAdmin'>
      <Card title='roleAdmin'>
        <Card>
          <Row>
            <Card title='Role Form'>
              <RoleForm/>
            </Card>
            <Card title='Role Table'>
              <RoleTable/>
            </Card>
          </Row>
        </Card>
      </Card>
    </div>
  )
}

export default roleAdmin;
