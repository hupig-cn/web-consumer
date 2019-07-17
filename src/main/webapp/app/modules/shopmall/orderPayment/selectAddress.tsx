import React from 'react';
import Title from './selectAddressTitle';
// tslint:disable-next-line: no-submodule-imports
import ChevronRightRounded from '@material-ui/icons/ChevronRightRounded';

export class SelectAddress extends React.Component {
  render() {
    const mydiv = {
      backgroundColor: '#ffffff',
      padding: '30px 5px 15px 20px',
      margin: '1px 0px',
      height: '100px'
    };
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          margin: '30px 0px 0px 0px',
          padding: '0px'
        }}
      >
        <Title />
        <div style={mydiv}>
          <div>
            <div style={{ float: 'left' }}>
              <div>
                <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>陈小杨&nbsp;&nbsp;&nbsp;&nbsp;137 1048 0479</span>
                <span
                  style={{
                    margin: '0px 0px 0px 10px',
                    display: 'inline-block',
                    padding: '0px 0.14rem',
                    background: 'rgb(255, 70, 70)',
                    fontSize: '0.3rem',
                    color: 'white',
                    borderRadius: '20px'
                  }}
                >
                  默认地址
                </span>
              </div>
              <div
                style={{
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  fontSize: '0.9rem',
                  whiteSpace: 'nowrap',
                  color: 'rgb(102, 102, 102)',
                  marginTop: '0.1rem',
                  maxWidth: '320px'
                }}
              >
                广东广州番禺东环迎宾路832号ABP总部大厦1号楼2区802 510000
              </div>
            </div>
            <ChevronRightRounded style={{ float: 'right', height: '35px' }} />
          </div>
          <div style={{ backgroundColor: '#00000005', width: '100%' }} />
        </div>
      </div>
    );
  }
}
export default SelectAddress;
