/*
  BetterOff Prodictions
  Notes -

  created - Jeff Winkler  05/12/2018

***********************************************************************
  modified -

*/
import React from 'react';
import KeywordForm from '../../molecules/form/keyword.Form';
import KeywordTable from '../../molecules/table/keyword.Table';
import {Card, Row} from 'antd';

const keywordAdmin = (props) => {
  return (
    <div className='keywordAdmin'>
      <Card title='keywordAdmin'>
        <Card>
          <Row>
            <Card title='Keyword Form'>
              <KeywordForm/>
            </Card>
            <Card title='Keyword Table'>
              <KeywordTable/>
            </Card>
          </Row>
        </Card>
      </Card>
    </div>
  )
}

export default keywordAdmin;
