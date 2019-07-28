import './shopCar.scss';

import React from 'react';
import { RouteComponentProps } from 'react-router';
import { IRootState } from 'app/shared/reducers';
import { getSession } from 'app/shared/reducers/authentication';
import { createUserShopping, deleteShopping, deleteShoppingList, getAllShoppingByUser } from 'app/requests/shopmall/shopmall.reducer';
import { connect } from 'react-redux';
// tslint:disable-next-line: no-submodule-imports
import Avatar from '@material-ui/core/Avatar';
import Title from 'app/modules/public/title';
// tslint:disable-next-line: no-submodule-imports
import Button from '@material-ui/core/Button';

export interface IShopCarProps extends StateProps, DispatchProps, RouteComponentProps<{}> {}

export class ShopCar extends React.Component<IShopCarProps> {
  shopCarList = [
    {
      name: 'shop1',
      img: './content/images/sys1.png',
      price: 10,
      count: 1,
      totalPrice: 10,
      isChecked: false
    },
    {
      name: 'shop2',
      img: './content/images/sys2.png',
      price: 20,
      count: 1,
      totalPrice: 10,
      isChecked: false
    },
    {
      name: 'shop3',
      img: './content/images/sys3.png',
      price: 30,
      count: 1,
      totalPrice: 10,
      isChecked: false
    },
    {
      name: 'shop4',
      img: './content/images/sys4.png',
      price: 40,
      count: 1,
      totalPrice: 10,
      isChecked: false
    },
    {
      name: 'shop5',
      img: './content/images/sys1.png',
      price: 50,
      count: 1,
      totalPrice: 10,
      isChecked: false
    }
  ];

  state = {
    shopCarList: this.shopCarList,
    isCheckedAll: false,
    totalPrice: 0
  };

  componentDidMount() {
    // @ts-ignore
    this.props.getSession().then(respone => {
      // @ts-ignore
      this.props.getAllShoppingByUser(respone.id).then(res => {
        if (res.value.data.data) {
          this.setState({
            shopCarList: res.value.data.data
          });
        }
      });
    });
  }

  handleCheckAll = () => {
    this.setState({
      isCheckedAll: !this.state.isCheckedAll
    });
    this.state.shopCarList.map((item: { isChecked: boolean }) => {
      item.isChecked = !this.state.isCheckedAll;
    });
    this.setState({
      totalPrice: this.handleTotalPrice()
    });
  };

  handleCheck = (event, index) => {
    this.state.shopCarList[index].isChecked = event.target.checked;
    this.setState({
      shopCarList: this.state.shopCarList
    });
    const checkedCache = new Array(0);
    this.state.shopCarList.forEach((item: { isChecked: any }) => {
      checkedCache.push(item.isChecked);
    });
    this.setState({
      isCheckedAll: checkedCache.every(isChecked => isChecked)
    });

    this.setState({
      totalPrice: this.handleTotalPrice()
    });
  };

  handleCountChange = (event, index) => {
    this.state.shopCarList[index].count = event.target.value;
    this.state.shopCarList[index].totalPrice = event.target.value * this.state.shopCarList[index].price;
    this.setState({
      shopCarList: this.state.shopCarList
    });
    this.state.totalPrice = this.handleTotalPrice();
    this.setState({
      totalPrice: this.state.totalPrice
    });
  };

  handleTotalPrice = () => {
    let totalPrice = 0;
    this.state.shopCarList.forEach((item: { isChecked: any; count: number; price: number }) => {
      if (item.isChecked) {
        totalPrice += item.count * item.price;
      }
    });
    return totalPrice;
  };

  handleHaveCheck = () => {
    const haveChecked = new Array(0);

    this.state.shopCarList.forEach((item: any) => {
      haveChecked.push(item.isChecked);
    });

    return haveChecked.some(item => item === true);
  };

  handleRemove = () => {
    if (this.handleHaveCheck()) {
      this.state.shopCarList.forEach((item: any) => {
        if (item.isChecked) {
          this.state.shopCarList = this.state.shopCarList.filter((ele: any) => ele !== item);
        }
      });

      this.setState({
        shopCarList: this.state.shopCarList,
        totalPrice: this.handleTotalPrice()
      });
    } else {
      alert('请选中商品!');
    }
  };

  handleBuy = () => {
    if (this.handleHaveCheck()) {
      alert('购买成功');
    } else {
      alert('请选中商品！');
    }
  };

  render() {
    return (
      <div>
        <Title name="购物车" back="/" />
        <div id="shopCar-outWrap" className="container">
          <h3 id="shopCar-title">购物车</h3>
          <div id="shopCar-container" className="container">
            <table className="shopCar-table">
              <thead>
                <tr>
                  <th>商品&nbsp;</th>
                  <th>数量&nbsp;</th>
                  <th>单价&nbsp;</th>
                  <th>总价&nbsp;</th>
                  <th>
                    全选&nbsp;
                    <input
                      className="selectAll checkBox"
                      type="checkbox"
                      checked={this.state.isCheckedAll}
                      onChange={this.handleCheckAll}
                    />
                  </th>
                </tr>
              </thead>
              <tbody>
                {// tslint:disable-next-line: ter-arrow-body-style
                this.state.shopCarList.map((item, index) => {
                  return (
                    <ShopRow
                      key={index}
                      img={item.img}
                      name={item.name}
                      price={item.price}
                      count={item.count}
                      totalPrice={item.totalPrice}
                      isChecked={item.isChecked}
                      // tslint:disable-next-line: jsx-no-lambda
                      handleCheck={(e: any) => {
                        this.handleCheck(e, index);
                      }}
                      // tslint:disable-next-line: jsx-no-lambda
                      handleCountChange={(e: any) => {
                        this.handleCountChange(e, index);
                      }}
                    />
                  );
                })}
              </tbody>
            </table>
            <div style={{ float: 'right' }}>
              <TotalBlock totalPrice={this.state.totalPrice} />
            </div>
          </div>
        </div>
        <div style={{ position: 'fixed', bottom: '0px', zIndex: 1000, width: '100%', backgroundColor: '#ffffff', height: '50px' }}>
          <Button
            style={{
              borderRadius: '0px 20px 20px 0px',
              float: 'right',
              backgroundColor: '#fe4365',
              color: '#ffffff',
              margin: '10px 10px 5px 0px',
              width: '100px',
              fontSize: '0.8rem',
              height: '35px'
            }}
            onClick={this.handleBuy}
          >
            立即购买
          </Button>
          <Button
            style={{
              borderRadius: '20px 0px 0px 20px',
              float: 'right',
              backgroundColor: '#fe9f1f',
              color: '#ffffff',
              margin: '10px 0px 5px 0px',
              width: '100px',
              fontSize: '0.8rem',
              height: '35px'
            }}
            onClick={this.handleRemove}
          >
            清空购物车
          </Button>
        </div>
      </div>
    );
  }
}

function TotalBlock(props) {
  return (
    <div className="totalBlock">
      <div className="totalBlock-word">
        <span>总计</span>
      </div>
      <div className="totalBlock-price">
        <span>{props.totalPrice}</span>
      </div>
    </div>
  );
}

function ShopRow(props) {
  return (
    <tr className="listItem">
      <td>
        <Avatar
          src={props.img}
          style={{
            borderRadius: 0,
            width: '44px',
            height: '44px',
            marginRight: 10
          }}
        />
        <div className="listItem-img bg-img" style={{ backgroundImage: `url(${props.img})` }} />
        <span className="listItem-name">{props.name}</span>
      </td>
      <td style={{ width: '20%' }}>
        <input style={{ width: '100%' }} className="listItem-count" type="number" value={props.count} onChange={props.handleCountChange} />
      </td>
      <td className="listItem-price">{props.price}</td>
      <td className="listItem-totalPrice">{props.totalPrice}</td>
      <td>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input className="checkBox" type="checkbox" checked={props.isChecked} onChange={props.handleCheck} />
      </td>
    </tr>
  );
}

const mapStateToProps = ({ authentication, files }: IRootState) => ({
  filesEntity: files.entity,
  account: authentication.account
});

const mapDispatchToProps = { getSession, createUserShopping, deleteShopping, deleteShoppingList, getAllShoppingByUser };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopCar);
