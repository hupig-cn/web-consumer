import React from 'react';
import Title from 'app/modules/public/title';
import { Button, Col, Label, ModalBody, ModalFooter, Row } from 'reactstrap';
import { byteSize, setFileData } from 'react-jhipster';
import { AvField, AvForm, AvGroup, AvInput } from 'availity-reactstrap-validation';
import { connect } from 'react-redux';
import { IRootState } from 'app/shared/reducers';
import { RouteComponentProps } from 'react-router';
import { setBlob, createFile } from 'app/requests/basic/files.reducer';
import { createFeedback } from 'app/requests/basic/basic.reducer';
import { toast } from 'react-toastify';
import { getSession } from 'app/shared/reducers/authentication';

export interface IFeedbackProps extends StateProps, DispatchProps, RouteComponentProps<{}> {}

export class Feedback extends React.Component<IFeedbackProps> {
  componentDidMount() {
    this.props.getSession();
    this.props.setBlob('fileI', undefined, undefined);
  }
  handleSubmit = (event, errors, { title, name, content, imageurl }) => {
    if (imageurl.length < 1) {
      toast.info('提示：请上传问题截图。');
    } else if (imageurl.length > 8000000) {
      toast.info('提示：问题截图过大，请上传6M以内的文件。');
    } else if (title.trim().length < 1) {
      toast.info('提示：标题不能为空。');
    } else if (content.trim().length < 1) {
      toast.info('提示：请输入反馈内容。');
    } else {
      this.submitFeedback(title, name, content, imageurl);
    }
  };
  submitFeedback = (title, name, content, imageurl) => {
    const fileid = this.props.createFile(this.props.account.id, imageurl.length, imageurl, this.props.filesEntity.fileIContentType);
    // @ts-ignore
    fileid.then((result: number) => {
      if (!isNaN(result)) {
        // @ts-ignore
        // tslint:disable-next-line: no-shadowed-variable
        this.props.createFeedback(name, title, content, result, this.props.account.id).then((result: any) => {
          if (result.value.data.code.toString() === '1') {
            toast.success('提示：反馈成功，请等候处理。');
            this.props.history.push('/personal');
          } else {
            toast.error(result.value.data.message);
          }
        });
      } else {
        toast.info('提示：店铺照片上传失败。');
      }
    });
  };

  uptitlephotoshop = () => {
    document.getElementById('upmerchant-upmerchant-uploadphoto-shop').click();
  };

  onBlobChange = (isAnImage, name) => event => {
    setFileData(event, (contentType, data) => this.props.setBlob(name, data, contentType), isAnImage);
  };

  render() {
    const { filesEntity } = this.props;
    const { fileI, fileIContentType } = filesEntity;
    return (
      <div
        style={{
          backgroundColor: '#00000010',
          width: '100%',
          height: '100%',
          margin: '30px 0px 0px 0px',
          padding: '0px'
        }}
      >
        <Title name="问题反馈" back="/personal" />
        <AvForm onSubmit={this.handleSubmit}>
          <div
            style={{
              width: '100%',
              textAlign: 'center',
              padding: '10px',
              fontSize: '1.2rem',
              borderBottom: '1px solid #00000015',
              marginTop: '35px'
            }}
          >
            提交反馈信息
          </div>
          <ModalBody>
            <Row>
              <Col md="12">
                <AvField
                  name="title"
                  label={<span style={{ float: 'left', marginTop: '7px' }}>反馈标题：</span>}
                  placeholder={'请输入标题'}
                  required
                  errorMessage="标题不能为空!"
                  style={{ width: '70%', float: 'right' }}
                />
                <AvField
                  name="name"
                  label={<span style={{ float: 'left', marginTop: '7px' }}>反馈人：</span>}
                  placeholder={'请输入联系人'}
                  style={{ width: '70%', float: 'right' }}
                />
                <AvGroup>
                  <Label id="bigtextLabel" for="bigtext-bigtext">
                    反馈内容:
                  </Label>
                  <AvInput
                    style={{
                      height: '120px'
                    }}
                    id="bigtext-bigtext"
                    type="textarea"
                    name="content"
                  />
                </AvGroup>
                <div
                  style={{
                    width: '100%',
                    height: 'auto',
                    overflow: 'hidden',
                    marginBottom: '10px'
                  }}
                >
                  <AvGroup>
                    <AvGroup>
                      <button
                        style={{
                          float: 'left',
                          backgroundColor: '#fe4365',
                          color: '#fffde5',
                          borderRadius: '0.25rem',
                          border: '0px',
                          width: '45%',
                          height: '40px',
                          margin: '0px 0px 10px 0px'
                        }}
                        type="button"
                        onClick={this.uptitlephotoshop}
                      >
                        上传截图
                      </button>
                      <input
                        style={{ display: 'none' }}
                        id="upmerchant-upmerchant-uploadphoto-shop"
                        type="file"
                        onChange={this.onBlobChange(true, 'fileI')}
                        accept="image/*"
                      />
                      <AvInput type="hidden" name="imageurl" value={fileI} />
                      {fileI ? (
                        <div>
                          <span style={{ float: 'right', width: '50%', height: '100%' }}>
                            <img
                              src={`data:${fileIContentType};base64,${fileI}`}
                              style={{ maxHeight: '100%', width: '100%', minHeight: '50px' }}
                            />
                          </span>
                          <span style={{ float: 'left' }}>
                            <Row>
                              <Col md="11">
                                <span>
                                  {fileIContentType}
                                  <br />
                                  {byteSize(fileI)}
                                </span>
                              </Col>
                            </Row>
                          </span>
                        </div>
                      ) : null}
                    </AvGroup>
                  </AvGroup>
                </div>
              </Col>
            </Row>
          </ModalBody>
          <ModalFooter>
            <Button style={{ backgroundColor: '#fe4365', border: '1px solid #fe4365', width: '100%' }} type="submit">
              提交反馈
            </Button>
          </ModalFooter>
        </AvForm>
      </div>
    );
  }
}

const mapStateToProps = ({ authentication, files }: IRootState) => ({
  filesEntity: files.entity,
  account: authentication.account
});

const mapDispatchToProps = {
  setBlob,
  createFile,
  createFeedback,
  getSession
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feedback);
