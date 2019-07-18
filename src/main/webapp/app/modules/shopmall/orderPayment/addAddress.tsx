import React from 'react';
// tslint:disable-next-line: no-submodule-imports
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
// tslint:disable-next-line: no-submodule-imports
import MenuItem from '@material-ui/core/MenuItem';
// tslint:disable-next-line: no-submodule-imports
import TextField from '@material-ui/core/TextField';
import Title from 'app/modules/public/title';
// tslint:disable-next-line: no-submodule-imports
import ChevronRightRounded from '@material-ui/core/SvgIcon/SvgIcon';
// tslint:disable-next-line: no-submodule-imports
import Switch from '@material-ui/core/Switch';
// tslint:disable-next-line: no-submodule-imports
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1)
    },
    dense: {
      marginTop: theme.spacing(2)
    },
    menu: {
      width: 200
    }
  })
);

// tslint:disable-next-line: interface-name
interface State {
  name: string;
  age: string;
  multiline: string;
  currency: string;
}

export default function OutlinedTextFields() {
  const classes = useStyles();
  const [values, setValues] = React.useState<State>({
    name: 'Cat in the Hat',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR'
  });

  const handleChange = (name: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <div>
      <Title name="新增地址" back="/selectAddress" />
      <form
        style={{
          margin: '45px 0px 0px 0px'
        }}
        className={classes.container}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="name"
          label="收货人"
          style={{ margin: 8 }}
          placeholder="请填写收货人"
          fullWidth
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true
          }}
        />
        <TextField
          id="phoneNumber"
          label="手机号码"
          style={{ margin: 8 }}
          placeholder="请填写手机号码"
          fullWidth
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true
          }}
        />
        <TextField
          id="location"
          label="所在地区"
          style={{ margin: 8 }}
          placeholder="请填写所在地区"
          fullWidth
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true
          }}
        />
        <TextField
          id="address"
          label="详细地址"
          style={{ margin: 8 }}
          placeholder="街道、楼牌号等"
          fullWidth
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true
          }}
        />
        <div style={{ height: '56px', width: '100%', margin: '15px 0px 0px 15px', position: 'relative' }}>
          <span>设置默认地址</span>
          <ChevronRightRounded style={{ float: 'right' }} />
          <div style={{ position: 'relative', float: 'right', bottom: '7px', left: '25px' }}>
            <Switch />
          </div>
        </div>
      </form>
      <div style={{ position: 'fixed', bottom: '0px', zIndex: 1000, width: '100%', backgroundColor: '#ffffff', height: '50px' }}>
        <Button
          style={{
            backgroundColor: '#fe4365',
            color: '#ffffff',
            width: '100%',
            fontSize: '1rem',
            height: '100%'
          }}
        >
          保存地址
        </Button>
      </div>
    </div>
  );
}
