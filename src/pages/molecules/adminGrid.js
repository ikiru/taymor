import React from 'react';
import {Card} from 'antd';
import './sass/adminGrid.scss'

const adminGrid = (props) => {
  return (
    <div className='adminGrid'>
      <Card className='adminCard' title="Admin">

        <Card.Grid className='gridStyle'>
          <img alt='qr code' src={require('@assets/img/qr-code.png')}/>
          <p>Color</p>
        </Card.Grid>

        <Card.Grid className='gridStyle'>
          <img alt='qr code' src={require('@assets/img/qr-code.png')}/>
          <p>Size</p>
        </Card.Grid>

        <Card.Grid className='gridStyle'>
          <img alt='qr code' src={require('@assets/img/qr-code.png')}/>
          <p>Time Period</p>
        </Card.Grid>

        <Card.Grid className='gridStyle'>
          <img alt='qr code' src={require('@assets/img/qr-code.png')}/>
          <p>Show</p>
        </Card.Grid>

        <Card.Grid className='gridStyle'>
          <img alt='qr code' src={require('@assets/img/qr-code.png')}/>
          <p>
            Keywords</p>
        </Card.Grid>

        <Card.Grid className='gridStyle'>
          <img alt='qr code' src={require('@assets/img/qr-code.png')}/>
          <p>Business Type</p>
        </Card.Grid>

        <Card.Grid className='gridStyle'>
          <img alt='qr code' src={require('@assets/img/qr-code.png')}/>
          <p>
            Renter Types</p>
        </Card.Grid>

        <Card.Grid className='gridStyle'>
          <img alt='qr code' src={require('@assets/img/qr-code.png')}/>
          <p>Active Level</p>
        </Card.Grid>

        <Card.Grid className='gridStyle'>
          <img alt='qr code' src={require('@assets/img/qr-code.png')}/>
          <p>Location Type</p>
        </Card.Grid>

        <Card.Grid className='gridStyle'>
          <img alt='qr code' src={require('@assets/img/qr-code.png')}/>
          <p>Role</p>
        </Card.Grid>

        <Card.Grid className='gridStyle'>
          <img alt='qr code' src={require('@assets/img/qr-code.png')}/>
          <p>Security Level</p>
        </Card.Grid>

        <Card.Grid className='gridStyle'>
          <img alt='qr code' src={require('@assets/img/qr-code.png')}/>
          <p>Size</p>
        </Card.Grid>

      </Card>
    </div>
  );
}

export default adminGrid;
