import React from 'react';
import QRCode from 'qrcode.react';
import Title from 'app/modules/public/title';
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
  componentDidUpdate() {
    if (this.props.merchantEntity.id > 0) {
      const qrcode = document.getElementById('qrcode-canvas-key') as HTMLCanvasElement; // 二维码
      const bgImg = document.getElementById('qrcode-image') as HTMLImageElement;
      const qrcodeImg = new Image();
      if (qrcode !== null) {
        qrcodeImg.src = qrcode.toDataURL('image/png');
        // tslint:disable-next-line: only-arrow-functions
        qrcodeImg.onload = () => {
          const canvas = document.getElementById('myCanvas') as HTMLCanvasElement; // 空画板
          const ctx = canvas.getContext('2d');
          const patBg = ctx.createPattern(bgImg, 'repeat');
          ctx.rect(0, 0, canvas.width, canvas.height);
          ctx.fillStyle = patBg;
          ctx.fill();
          ctx.drawImage(qrcodeImg, 49, 144, 128, 128);
          ctx.font = '14px bold 黑体';
          ctx.fillStyle = '#fe4365';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          let name = this.props.merchantEntity.name;
          name = name.length > 9 ? name.substr(0, 9) + '...' : name;
          ctx.fillText(name, 113, 288);
          const overImg = new Image();
          overImg.src = canvas.toDataURL('image/png');
          // tslint:disable-next-line: only-arrow-functions
          overImg.onload = () => {
            const saveImage = document.getElementById('saveImage') as HTMLCanvasElement; // 显示位置
            saveImage.innerHTML = '';
            saveImage.append(overImg);
          };
        };
      }
    }
  }

  render() {
    const { merchantEntity } = this.props;
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
        <Title name="打印收款码" back="/incomepage" />
        <div
          style={{
            width: '100%',
            height: '100%',
            position: 'relative'
          }}
        >
          <div style={{ display: 'none' }}>
            {merchantEntity.id > 0 ? (
              // @ts-ignore
              <QRCode
                id="qrcode-canvas-key"
                value={'http://app.yuanscore.com/?id=' + merchantEntity.id}
                renderAs="canvas"
                size={128}
                fgColor="#000000"
                bgColor="#ffffff"
              />
            ) : (
              // @ts-ignore
              <QRCode id="qrcode-canvas-key" value={'error'} renderAs="canvas" size={128} fgColor="#ffffff" bgColor="#ffffff" />
            )}
            <canvas id="myCanvas" width="227" height="340">
              {' '}
            </canvas>
            <img id="qrcode-image" src="./content/images/income.png" />
          </div>
          <div id="saveImage">&nbsp;</div>
          <Button
            variant="contained"
            color={'secondary'}
            style={{ position: 'fixed', top: '90%', left: '20%', width: '60%' }}
            // onClick={loadbgimg(merchantEntity.name)}
          >
            长按图像可保存到手机
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
