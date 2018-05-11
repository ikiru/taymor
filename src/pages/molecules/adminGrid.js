import React from 'react';
import {Card} from 'antd';
import './sass/adminGrid.scss'

const adminGrid = (props) => {
  return (
    <div className='adminGrid'>
      <Card title="Admin">
        <Card.Grid className='gridStyle'>Color</Card.Grid>
        <Card.Grid className='gridStyle'>Size</Card.Grid>
        <Card.Grid className='gridStyle'>Time Period</Card.Grid>
        <Card.Grid className='gridStyle'>Show</Card.Grid>
        <Card.Grid className='gridStyle'>Keywords</Card.Grid>
        <Card.Grid className='gridStyle'>Business Type</Card.Grid>
        <Card.Grid className='gridStyle'>Renter Type</Card.Grid>
        <Card.Grid className='gridStyle'>Active Level</Card.Grid>
        <Card.Grid className='gridStyle'>Location Type</Card.Grid>
        <Card.Grid className='gridStyle'>Role</Card.Grid>
        <Card.Grid className='gridStyle'>Security Level</Card.Grid>
        <Card.Grid className='gridStyle'>Size</Card.Grid>

      </Card>
    </div>
  );
}

export default adminGrid;
