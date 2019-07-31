import React from 'react';
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

class TitlebarGridList extends React.Component {
  state = { products: [], files: [] };
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
    return (
      <div>
        <GridList cellHeight={180} style={{ margin: -0, width: '97%' }}>
          {// @ts-ignore
          this.state.products ? (
            // @ts-ignore
            this.state.products.map(tile =>
              tile.specificationsDTO.map((specifications, index) => (
                <Link
                  to={{
                    pathname: '/productdetail',
                    productid: specifications.id,
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
                            wordWrap: 'break-word',
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
                            style={{ height: '100%', outline: 'none', padding: 0, float: 'right', bottom: '5px' }}
                          >
                            …
                          </IconButton>
                        </span>
                      }
                    />
                  </GridListTile>
                </Link>
              ))
            )
          ) : (
            <p>网络繁忙</p>
          )}
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
