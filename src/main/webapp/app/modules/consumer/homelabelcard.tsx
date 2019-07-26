import React from 'react';
// tslint:disable-next-line: no-submodule-imports
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
// tslint:disable-next-line: no-submodule-imports
import GridList from '@material-ui/core/GridList';
// tslint:disable-next-line: no-submodule-imports
import GridListTile from '@material-ui/core/GridListTile';
// tslint:disable-next-line: no-submodule-imports
import GridListTileBar from '@material-ui/core/GridListTileBar';
// tslint:disable-next-line: no-submodule-imports
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import { IRootState } from 'app/shared/reducers';
import { connect } from 'react-redux';
import { getProducts } from 'app/requests/basic/result.reducer';
import { getMyImgs } from 'app/requests/basic/files.reducer';
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '100%',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: '#f0f0f0'
    },
    gridList: {
      height: '100%'
    },
    listTitle: {
      '& div': {
        borderRadius: '5px 5px 0px 0px',
        '& img': {
          top: 0,
          left: 0,
          width: '100%',
          transform: 'translateY(0%)'
        },
        '& div': {
          borderRadius: '0px 0px 5px 5px',
          backgroundColor: '#ffffff',
          color: '#00000095',
          position: 'sticky',
          '& div': {
            '& div': {
              marginTop: '-22px',
              float: 'left',
              color: '#fe4365',
              width: '100%',
              padding: '0px 6px 1px 2px'
            },
            '& div:first-child': {
              marginTop: '0px',
              color: '#00000095',
              fontSize: '0.85rem',
              padding: 0
            }
          },
          '& button': {
            '& span': {
              transform: 'translateY(0%)'
            }
          }
        }
      }
    },
    icon: {
      color: '#00000095'
    },
    titlebar: {
      '& div': {
        color: '#123000095'
      },
      '& div:first-child': {
        marginLeft: 3,
        marginRight: 3,
        height: '100%',
        width: 'calc(100% - 6px)',
        display: 'block',
        '& span': {
          '& span': {
            fontSize: 20
          }
        }
      }
    }
  })
);

class TitlebarGridList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      files: []
    };
  }
  componentDidMount() {
    // @ts-ignore
    const product = this.props.getProducts(0, 10);
    product.then(res => {
      this.setState({
        products: res.value.data.data
      });
      const arr = [];
      res.value.data.data.map(elment => elment.specificationsDTO.map(spe => arr.push(spe.fileid)));
      // @ts-ignore
      const files = this.props.getMyImgs(arr);
      // tslint:disable-next-line: no-shadowed-variable
      files.then((res: { value: { data: any } }) => {
        this.setState({
          files: res.value.data
        });
      });
    });
    this.forceUpdate();
  }
  render() {
    const classes = useStyles;
    return (
      // @ts-ignore
      <div className={classes.root}>
        <GridList
          cellHeight={180}
          // @ts-ignore
          className={classes.gridList}
          style={{ margin: -0, width: '97%' }}
        >
          {// @ts-ignore
          this.state.products
            ? // @ts-ignore
              this.state.products.map(tile =>
                tile.specificationsDTO.map((specifications, index) => (
                  <Link
                    to={{
                      pathname: '/Productdetail',
                      id: specifications.id,
                      postage: tile.postage,
                      price: specifications.price,
                      name: tile.name,
                      json: specifications.specifications,
                      model: specifications.model,
                      num: specifications.num,
                      // @ts-ignore
                      img:
                        this.state.files.length !== 0
                          ? `data:${this.state.files[index].fileContentType};base64,${this.state.files[index].file}`
                          : '',
                      integral: specifications.integral
                    }}
                  >
                    <GridListTile
                      key={specifications.titleimage}
                      // @ts-ignore
                      className={classes.listTitle}
                      style={{ height: '200px', width: '50%', maxWidth: '100%', maxHeight: '100%', padding: 4 }}
                    >
                      {// @ts-ignore
                      this.state.files.length !== 0 ? (
                        <img
                          style={{ height: '200px', width: '200px' }}
                          // @ts-ignore
                          src={`data:${this.state.files[index].fileContentType};base64,${this.state.files[index].file}`}
                          alt={tile.name}
                        />
                      ) : (
                        <img src="" />
                      )}
                      <GridListTileBar
                        title={
                          <p
                            style={{
                              wordBreak: 'break-all',
                              whiteSpace: 'pre-wrap',
                              wordWrapL: 'break-word',
                              overflow: 'hidden',
                              display: '-webkit-box',
                              lineHeight: '19px',
                              height: '2.4rem',
                              fontSize: '0.8rem',
                              position: 'relative',
                              margin: '0px'
                            }}
                          >
                            {tile.name} + {specifications.specifications}
                          </p>
                        }
                        subtitle={
                          <span style={{ float: 'left', width: '100%' }}>
                            <span style={{ float: 'left' }}>
                              <span style={{ fontSize: '0.65rem' }}>￥:</span>
                              {specifications.price}
                            </span>
                            <IconButton
                              aria-label={`info about ${tile.name}`}
                              // @ts-ignore
                              className={classes.icon}
                              style={{ height: '100%', outline: 'none', padding: 0, float: 'right', bottom: '5px' }}
                            >
                              …
                            </IconButton>
                          </span>
                        }
                        className={
                          // @ts-ignore
                          classes.titlebar
                        }
                      />
                    </GridListTile>
                  </Link>
                ))
              )
            : '网络繁忙'}
        </GridList>
      </div>
    );
  }
}

const mapStateToProps = ({ authentication, files, result }: IRootState) => ({
  filesEntity: files.entity,
  filesEntitys: files.entities,
  account: authentication.account,
  resultEntity: result.entity
});

const mapDispatchToProps = {
  getProducts,
  getMyImgs
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TitlebarGridList);
