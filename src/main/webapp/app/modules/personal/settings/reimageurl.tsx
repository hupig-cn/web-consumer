import React from 'react';
import Title from 'app/modules/public/title';
import { AvForm, AvGroup, AvInput } from 'availity-reactstrap-validation';
import { IRootState } from 'app/shared/reducers';
import { getSession, getSessionRE } from 'app/shared/reducers/authentication';
import { connect } from 'react-redux';
import { getMyImg } from 'app/requests/basic/files.reducer';
import { Button } from '@material-ui/core';
import { ModalFooter } from 'reactstrap';
import { setFileData } from 'react-jhipster';
// tslint:disable-next-line: no-duplicate-imports
import { setBlob, createFile } from 'app/requests/basic/files.reducer';
import { toast } from 'react-toastify';
// tslint:disable-next-line: no-duplicate-imports
import { updateMyimgurl } from 'app/shared/reducers/authentication';
import { RouteComponentProps } from 'react-router';

export interface IMysettingsProp extends StateProps, DispatchProps, RouteComponentProps<{}> {}

export class Mysettings extends React.Component<IMysettingsProp> {
  state = { file: '', fileContentType: '' };
  handleSubmit = (event, errors, { imageurl }) => {
    if (imageurl.length < 1) {
      toast.info('提示：请上传头像。');
    } else if (imageurl.length > 8000000) {
      toast.info('提示：头像图片过大，请上传6M以内的文件。');
    } else if (this.props.filesEntity.fileIContentType === undefined) {
      toast.info('提示：请上传新的头像文件');
    } else {
      const fileid = this.props.createFile(this.props.account.id, imageurl.length, imageurl, this.props.filesEntity.fileIContentType);
      // @ts-ignore
      fileid.then((result: number) => {
        if (!isNaN(result)) {
          // @ts-ignore
          // tslint:disable-next-line: no-shadowed-variable
          this.props.updateMyimgurl(this.props.account.id, this.props.account.login, result).then((result: any) => {
            if (result.value.data === '修改成功') {
              toast.success('提示：修改成功。');
              this.props.history.push('/mysettings');
            } else {
              toast.error(result.value.data);
            }
          });
        } else {
          toast.error('提示：头像上传失败。');
        }
      });
    }
  };

  componentDidMount() {
    this.props.getSession();
    this.props
      .getSessionRE()
      // @ts-ignore
      .then(valueI => {
        valueI.payload.then(valueII => {
          if (valueII.data.imageUrl > 0) {
            this.props
              .getMyImg(valueII.data.imageUrl)
              // @ts-ignore
              .then(photo => {
                this.setState({
                  file: photo.value.data.file,
                  fileContentType: photo.value.data.fileContentType
                });
              });
          }
        });
      });
  }
  uptitlephotoshop = () => {
    document.getElementById('upmerchant-upmerchant-uploadphoto-shop').click();
  };
  onBlobChange = (isAnImage, name) => event => {
    setFileData(
      event,
      (contentType, data) => {
        this.props.setBlob(name, data, contentType);
        this.setState({ file: data, fileContentType: contentType });
      },
      isAnImage
    );
  };

  render() {
    return (
      <div style={{ width: '100%', height: '100%', margin: '30px 0px 0px 0px', textAlign: 'center' }}>
        <Title name="更换头像" back="/mysettings" />
        <div>
          <AvForm onSubmit={this.handleSubmit}>
            <AvGroup>
              <AvGroup>
                <div style={{ width: '100%', height: 'auto', marginTop: '30%' }}>
                  <input
                    style={{ display: 'none' }}
                    id="upmerchant-upmerchant-uploadphoto-shop"
                    type="file"
                    onChange={this.onBlobChange(true, 'fileI')}
                    accept="image/*"
                  />
                  <AvInput type="hidden" name="imageurl" value={this.state.file} />
                  {this.state.file ? (
                    <div style={{ position: 'relative', paddingTop: '100%' }}>
                      <img
                        src={`data:${this.state.fileContentType};base64,${this.state.file}`}
                        style={{ width: '100%', position: 'absolute', left: '0px', top: '0px', height: 'auto' }}
                      />
                    </div>
                  ) : null}
                </div>
              </AvGroup>
            </AvGroup>
            <ModalFooter style={{ display: 'block', borderTop: '0px' }}>
              <Button type="button" variant="contained" color="default" style={{ margin: '10px 10px' }} onClick={this.uptitlephotoshop}>
                选择头像
              </Button>
              <Button type="submit" variant="contained" color="secondary" style={{ margin: '10px 10px' }}>
                保存修改
              </Button>
            </ModalFooter>
          </AvForm>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ files, authentication }: IRootState) => ({
  account: authentication.account,
  isAuthenticated: authentication.isAuthenticated,
  filesEntity: files.entity
});

const mapDispatchToProps = { getSession, getMyImg, setBlob, createFile, updateMyimgurl, getSessionRE };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Mysettings);
