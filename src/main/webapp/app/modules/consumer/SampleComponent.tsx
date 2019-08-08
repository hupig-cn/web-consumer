import React from 'react';
import SockJsClient from 'react-stomp';
import { toast } from 'react-toastify';

class SampleComponent extends React.Component {
  private clientRef: any;
  constructor(props) {
    super(props);
  }
  sendMessage = msg => {
    // this.clientRef.sendMessage('/topics/all', msg);
  };

  render() {
    return (
      <div>
        <SockJsClient
          url="http://app.yuanscore.com:9090/marco"
          topics={['/users/' + `${this.props.userid}` + '/message']}
          /* tslint:disable-next-line:jsx-no-lambda */
          onMessage={msg => {
            toast.success(msg);
          }}
          ref={client => {
            this.clientRef = client;
          }}
        />
      </div>
    );
  }
}
export default SampleComponent;
