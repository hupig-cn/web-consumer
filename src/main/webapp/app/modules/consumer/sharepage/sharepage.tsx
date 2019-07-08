import React from 'react';

export class Sharepage extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <div>
        <img
          style={{
            width: '100%',
            height: '100%',
            position: 'fixed'
          }}
          src="./content/images/sharepage.png"
        />
      </div>
    );
  }
}
export default Sharepage;
