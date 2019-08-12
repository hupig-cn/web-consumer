import React from 'react';
import { connect } from 'react-redux';
import { getSession, getSessionRE } from 'app/shared/reducers/authentication';
import './scroll.scss';
import ReactPullLoad, { STATS } from 'react-pullload';
import Axios from 'axios';
import { IRootState } from 'app/shared/reducers';
import { Link } from 'react-router-dom';
import { getProducts } from 'app/requests/basic/result.reducer';
import { getMyImgs } from 'app/requests/basic/files.reducer';
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { toast } from 'react-toastify';
// tslint:disable-next-line: no-submodule-imports
import List from '@material-ui/core/List';
// tslint:disable-next-line: no-submodule-imports
import ListItem from '@material-ui/core/ListItem';
// tslint:disable-next-line: no-submodule-imports
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
// tslint:disable-next-line: no-submodule-imports
import ListItemText from '@material-ui/core/ListItemText';
// tslint:disable-next-line: no-submodule-imports
import Typography from '@material-ui/core/Typography';
// tslint:disable-next-line: no-submodule-imports
import Avatar from '@material-ui/core/Avatar';
const staticData = [
  { person: 'http://p2.qhimgs4.com/t018afa1ba080b39539.jpg' },
  { person: 'http://n1.itc.cn/img8/wb/recom/2016/04/30/146200014549632322.JPEG' },
  { person: 'http://news.youth.cn/gj/201607/W020160715338675815378.jpg' },
  { person: 'http://img.mp.sohu.com/upload/20170513/d36e19b125f048d8b21a913e134d2ac6_th.png' },
  { person: 'https://ps.ssl.qhmsg.com/sdr/400__/t01ddeaf7316f5e2354.jpg' },
  { person: 'http://p7.qhimg.com/t01c3c616d6c0e2b0cb.jpg?size=1024x688' },
  { person: 'https://cms-bucket.nosdn.127.net/2018/09/13/fd8f875d97524561bd10b4f33c2b7839.jpeg' },
  { person: 'http://img5q.duitang.com/uploads/item/201507/07/20150707215849_w4XzE.thumb.700_0.png' },
  { person: 'http://e0.ifengimg.com/12/2019/0113/2D6FB41D683A30D9A8C8C86AE6EB4CBBBA49F314_size121_w960_h1200.jpeg' },
  { person: 'http://desk.fd.zol-img.com.cn/t_s960x600c5/g5/M00/00/0A/ChMkJ1cpupiIW7yaABC-KDRTyM8AARBAQNvQmYAEL5A375.jpg' },
  { person: 'http://p2.qhimgs4.com/t0122786b4612c4fa10.jpg' },
  { person: 'http://img.pconline.com.cn/images/upload/upc/tx/photoblog/1409/29/c0/39107107_1411954214699_mthumb.jpg' },
  { person: 'http://img.pconline.com.cn/images/photoblog/5/9/0/1/5901413/20096/28/1246124954856_mthumb.jpg' },
  { person: 'http://cdn.duitang.com/uploads/blog/201310/03/20131003193012_TGFX8.thumb.600_0.png' },
  { person: 'http://pic1.nipic.com/2008-11-18/20081118182731958_2.jpg' }
];

export interface IManageProp extends StateProps, DispatchProps {}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    text: {
      padding: theme.spacing(2, 2, 0)
    },
    paper: {
      paddingBottom: 0,
      boxShadow: 'none',
      marginTop: 72
    },
    list: {
      fontFamily: '黑体',
      padding: 0
    },
    subheader: {
      backgroundColor: theme.palette.background.paper
    },
    appBar: {
      top: 'auto',
      bottom: 0
    },
    grow: {
      flexGrow: 1
    },
    fabButton: {
      zIndex: 1,
      top: -30,
      left: 0,
      right: 0,
      margin: '0 auto'
    },
    inline: {
      width: '100%'
    }
  })
);
export class Informations extends React.Component {
  state = {
    // 默认当做有第二页
    hasMore: true,
    data: [], // staticData,
    action: STATS.init,
    // 指定动态加载数据 还是本地静态数据（静态: false, 动态：true）
    syncLoadData: true,
    // 分页页码
    pageNum: 0,
    // 每次获取N条记录
    pageSize: 10,
    files: []
  };
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.handRefreshing();
    // @ts-ignore
    // const product = this.props.getProducts(0, 10);
    // product.then(res => {
    //   this.setState({
    //     products: res.value.data.data
    //   });
    //   const arr = [];
    //   res.value.data.data.map(elment => elment.specificationsDTO.map(spe => arr.push(spe.fileid)));
    //   // @ts-ignore
    //   const files = this.props.getMyImgs(arr);
    //   // tslint:disable-next-line: no-shadowed-variable
    //   files.then((res: { value: { data: any } }) => {
    //     this.setState({
    //       files: res.value.data
    //     });
    //   });
    // });
  }

  handleAction = (action: any) => {
    // window.console.info(action, this.state.action, action === this.state.action);

    // 拒绝重复刷新
    // @ts-ignore
    if (action === this.state.action) {
      return false;
    }

    // 刷新中
    if (action === STATS.refreshing) {
      this.handRefreshing();
    } else if (action === STATS.loading) {
      // 加载更多
      this.handLoadMore();
    } else {
      // default
      this.setState({ action });
    }
  };
  // 刷新
  handRefreshing = () => {
    // 前次刷新中，拒绝操作
    if (STATS.refreshing === this.state.action) {
      return false;
    }

    // this.setState({ pageNum: 1 });

    // @ts-ignore
    if (this.state.syncLoadData) {
      // @ts-ignore
      this.syncLoadResource();
    } else {
      setTimeout(() => {
        // 刷新完成，
        // 1、重置数据队列 2、重置状态为已刷新完成 3、
        this.setState({
          data: staticData,
          hasMore: true,
          action: STATS.refreshed,
          index: this.state.pageSize
        });
      }, 1000);
    }
    // 刷新中
    this.setState({
      action: STATS.refreshing
    });
  };

  // @ts-ignore
  syncLoadResource = (more: boolean) => {
    // // @ts-ignore
    // Axios.post('http://wskj.tpddns.cn:32767/api/scroll1/react-iscroll.php?page=' + this.state.pageSize + '&limit=' + this.state.pageNum ,
    //   { pageNum: this.state.pageNum , pageSize: this.state.pageSize }).then(response => {
    //   // 刷新完成，
    //   // 1、重置数据队列 2、重置状态为已刷新完成 3、
    //   const resource = response.data.data; // Object list 对象
    //
    //   if (resource.length === 0) {
    //     this.setState({
    //       action: STATS.reset,
    //       hasMore: false
    //       });
    //   } else {
    //     this.setState({
    //       data: more ? this.state.data.concat(response.data.data) : response.data.data,
    //       hasMore: true,
    //       action: STATS.refreshed,
    //       index: this.state.pageSize,
    //       pageNum: this.state.pageNum + 1 // 页面递增
    //     });
    //   }
    // }).catch(error => window.console.log(error));
    Axios.get('services/login/api/account').then(respone => {
      if (respone.data.id) {
        // @ts-ignore
        Axios.post('services/basic/api/get-account-information', {
          userId: respone.data.id,
          pageNum: this.state.pageNum,
          pageSize: this.state.pageSize
        }).then(res => {
          if (res.data.data) {
            // @ts-ignore
            this.setState({
              data: more ? this.state.data.concat(res.data.data) : res.data.data,
              hasMore: true,
              action: STATS.refreshed,
              index: this.state.pageSize,
              pageNum: this.state.pageNum + 1 // 页面递增
            });
          } else {
            this.setState({
              action: STATS.reset,
              hasMore: false
            });
          }
        });
      } else {
        toast.error('请先登录');
      }
    });
    // props.getProducts(this.state.pageNum , this.state.pageSize).then(res => {
    //   console.log(res);
    // });
    // product.then(res => {
    //   if (res.value.data.data.length === 0) {
    //     this.setState({
    //       action: STATS.reset,
    //       hasMore: false
    //     });
    //   } else {
    //     const arr = [];
    //     res.value.data.data.map(elment => elment.specificationsDTO.map(spe => arr.push(spe.fileid)));
    //     // @ts-ignore
    //     const files = this.props.getMyImgs(arr);
    //     // tslint:disable-next-line: no-shadowed-variable
    //     files.then((res: { value: { data: any } }) => {
    //       this.setState({
    //         files: res.value.data
    //       });
    //     });
    //     this.setState({
    //       data: more ? this.state.data.concat(res.value.data.data) : res.value.data.data,
    //       hasMore: true,
    //       action: STATS.refreshed,
    //       index: this.state.pageSize,
    //       pageNum: this.state.pageNum + 1 // 页面递增
    //     });
    //   }
    // });
  };

  handLoadMore = () => {
    // 拒绝重复刷新
    // @ts-ignore
    if (STATS.loading === this.state.action) {
      return false;
    }

    // @ts-ignore
    if (this.state.syncLoadData) {
      this.setState({
        action: STATS.loading
      });
      this.syncLoadResource(true);
    } else {
      setTimeout(() => {
        // @ts-ignore
        if (this.state.index === 0) {
          this.setState({
            action: STATS.reset,
            hasMore: false
          });
        } else {
          this.setState({
            data: [...this.state.data, staticData[0], staticData[0]],
            action: STATS.reset,
            // @ts-ignore
            index: this.state.index - 1
          });
        }
      }, 1000);

      // 加载更多
      this.setState({
        action: STATS.loading
      });
    }
  };
  render() {
    // @ts-ignore
    const { data, hasMore } = this.state;

    const fixHeaderStyle = {
      position: 'fixed',
      width: '100%',
      height: '200px',
      color: '#fff',
      lineHeight: '200px',
      backgroundColor: '#e24f37',
      left: 0,
      top: 0,
      textAlign: 'center',
      zIndex: 1
    };
    const classes = useStyles;
    return (
      <div ws-container-id="scrolls">
        {/*<div style={fixHeaderStyle}> fixed header </div>*/}
        <ReactPullLoad
          downEnough={500}
          action={this.state.action}
          handleAction={this.handleAction}
          hasMore={hasMore}
          // style={{ paddingTop: 35 }}
          distanceBottom={1000}
        >
          <List
            style={{
              fontFamily: '黑体',
              padding: '0px 10px',
              height: window.outerHeight,
              marginTop: '35px'
            }}
            id="messageHtml"
          >
            {this.state.data.map(({ id, title, content, person, type, createdate }) => (
              <React.Fragment key={id}>
                <ListItem button style={{ borderBottom: '1px solid #f0f0f0', position: 'relative' }}>
                  <Link to={{ pathname: '/Productdetail', id }} />
                  <ListItemAvatar>
                    <Avatar
                      alt="Profile Picture"
                      src={type !== 1 ? './content/images/sys3.png' : './content/images/sys4.png'}
                      style={{
                        borderRadius: 0,
                        width: '44px',
                        height: '44px',
                        marginRight: 10
                      }}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    style={{
                      margin: '0 auto',
                      height: '100%'
                    }}
                    primary={title}
                    secondary={
                      <React.Fragment>
                        <Typography
                          component="span"
                          variant="body2"
                          // @ts-ignore
                          className={classes.inline}
                          color="textPrimary"
                        >
                          <p
                            style={{
                              width: '100%',
                              whiteSpace: 'nowrap',
                              textOverflow: 'ellipsis',
                              overflow: 'auto',
                              marginBottom: '0px',
                              marginTop: '20px',
                              fontSize: '0.85rem'
                            }}
                          >
                            {content}
                          </p>
                        </Typography>
                      </React.Fragment>
                    }
                  />
                  <p
                    style={{
                      position: 'absolute',
                      top: '8px',
                      fontSize: '0.8rem',
                      right: '16px',
                      width: 'auto',
                      color: '#777777',
                      marginTop: '-5px'
                    }}
                  >
                    {createdate}
                  </p>
                </ListItem>
              </React.Fragment>
            ))}
          </List>
        </ReactPullLoad>
      </div>
      // demo
    );
  }
}

const mapStateToProps = ({ authentication }: IRootState) => ({
  account: authentication.account,
  isAuthenticated: authentication.isAuthenticated
});

const mapDispatchToProps = { getSession, getSessionRE, getProducts, getMyImgs };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Informations);
