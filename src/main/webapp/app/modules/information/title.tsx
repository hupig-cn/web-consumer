import React from 'react';
import Button from '@material-ui/core/Button';
import Selects from 'app/modules/information/selects';

export default function PrimarySearchAppBar() {
  return (
    <div>
      <div
        style={{
          height: 35,
          width: '100vw',
          color: '#fffde5',
          backgroundColor: '#fe4365',
          padding: '5px 10px 0px 10px',
          position: 'fixed',
          top: 0,
          zIndex: 1000
        }}
      >
        <span style={{ float: 'left', fontSize: '1rem', marginTop: '3px', marginLeft: '2px', color: '#fffde5' }}>消息</span>
        <Button
          type="button"
          variant="contained"
          color="secondary"
          style={{
            color: '#fffde5',
            float: 'right',
            padding: 0,
            fontSize: '1rem',
            minWidth: 0,
            boxShadow: 'none',
            backgroundColor: '#fe4365',
            outline: 'none'
          }}
          onClick={() => {}}
        >
          管理
        </Button>
      </div>
      <Selects />
    </div>
  );
}
