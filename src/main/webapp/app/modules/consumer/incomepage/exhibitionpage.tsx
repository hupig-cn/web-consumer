import React from 'react';
import QRCode from 'qrcode.react';
import Title from './title';

export class Exhibitionpage extends React.Component {
  render() {
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          position: 'fixed',
          backgroundColor: '#ffffff',
          zIndex: 100,
          paddingTop: '35px'
        }}
      >
        <Title />
        <div
          style={{
            width: '100%',
            height: '100%',
            position: 'relative'
          }}
        >
          <img style={{}} src="./content/images/income.png" />
          <div
            style={{
              float: 'left',
              position: 'absolute',
              top: '264px',
              left: '91px',
              textAlign: 'center'
            }}
          >
            <QRCode value={'http://app.yuanscore.com:8080/#id=1'} size={232} fgColor="#000000" bgColor="#ffffff" />
          </div>
        </div>
      </div>
    );
  }
}

export default Exhibitionpage;
