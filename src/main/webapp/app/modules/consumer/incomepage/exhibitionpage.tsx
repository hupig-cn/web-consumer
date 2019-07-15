import React from 'react';
import QRCode from 'qrcode.react';
import Title from './title';
import { Button } from '@material-ui/core';
import { IRootState } from 'app/shared/reducers';
import { getSession } from 'app/shared/reducers/authentication';
import { getMyEntityMerchant, resetMerchant } from 'app/requests/merchant/merchant.reducer';
import { connect } from 'react-redux';

export interface IExhibitionpageProp extends StateProps, DispatchProps {}

export class Exhibitionpage extends React.Component<IExhibitionpageProp> {
  componentDidMount() {
    this.props.getSession();
    this.props.resetMerchant();
    this.props.getMyEntityMerchant(this.props.account.id);
  }

  render() {
    const { account, merchantEntity } = this.props;

    function loadbgimg(name) {
      const qrcode = document.getElementById('qrcode-canvas-key') as HTMLCanvasElement; // 二维码
      const bgImg = document.getElementById('qrcode-image') as HTMLImageElement;
      const qrcodeImg = new Image();
      if (qrcode === null) return null;
      qrcodeImg.src = qrcode.toDataURL('image/png');
      // tslint:disable-next-line: only-arrow-functions
      qrcodeImg.onload = function() {
        const canvas = document.getElementById('myCanvas') as HTMLCanvasElement; // 空画板
        const ctx = canvas.getContext('2d');
        const patBg = ctx.createPattern(bgImg, 'repeat');
        ctx.rect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = patBg;
        ctx.fill();
        ctx.drawImage(qrcodeImg, 90, 264, 233, 233);
        ctx.font = '24px bold 黑体';
        ctx.fillStyle = '#fe4365';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(name, 200, 530);
        const overImg = new Image();
        overImg.src = canvas.toDataURL('image/png');
        // tslint:disable-next-line: only-arrow-functions
        overImg.onload = function() {
          const saveImage = document.getElementById('saveImage') as HTMLCanvasElement; // 显示位置
          saveImage.innerHTML = '';
          saveImage.append(overImg);
        };
      };
      return null;
    }

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
          <div style={{ display: 'none' }}>
            <// @ts-ignore
            QRCode
              id="qrcode-canvas-key"
              value={'http://app.yuanscore.com:8080/#id=' + merchantEntity.id}
              renderAs="canvas"
              size={233}
              fgColor="#000000"
              bgColor="#ffffff"
            />
            <canvas id="myCanvas" width="414" height="621">
              不可为空
            </canvas>
            <img id="qrcode-image" src="./content/images/income.png" />
          </div>
          <div id="saveImage">不可为空</div>
          <Button
            variant="contained"
            color={'secondary'}
            style={{ position: 'fixed', top: '90%', left: '20%', width: '60%' }}
            onClick={loadbgimg(merchantEntity.name)}
          >
            预览(长按图像，保存到本地)
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ authentication, merchant }: IRootState) => ({
  account: authentication.account,
  isAuthenticated: authentication.isAuthenticated,
  merchantEntity: merchant.entity
});

const mapDispatchToProps = { getSession, getMyEntityMerchant, resetMerchant };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Exhibitionpage);
