import React from 'react';
// tslint:disable-next-line: no-submodule-imports
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
// tslint:disable-next-line: no-submodule-imports
import Radio from '@material-ui/core/Radio';
// tslint:disable-next-line: no-submodule-imports
import RadioGroup from '@material-ui/core/RadioGroup';
// tslint:disable-next-line: no-submodule-imports
import FormHelperText from '@material-ui/core/FormHelperText';
// tslint:disable-next-line: no-submodule-imports
import FormControlLabel from '@material-ui/core/FormControlLabel';
// tslint:disable-next-line: no-submodule-imports
import FormControl from '@material-ui/core/FormControl';
// tslint:disable-next-line: no-submodule-imports
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex'
    },
    formControl: {
      margin: theme.spacing(3)
    },
    group: {
      margin: theme.spacing(1, 0)
    }
  })
);

export default function RadioButtonsGroup() {
  const classes = useStyles();
  const [value, setValue] = React.useState('female');

  function handleChange(event: React.ChangeEvent<unknown>) {
    setValue((event.target as HTMLInputElement).value);
  }

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">支付方式</FormLabel>
        <RadioGroup aria-label="Gender" name="gender" className={classes.group} value={value} onChange={handleChange}>
          <FormControlLabel value="weixin" control={<Radio color="primary" />} label="微信" labelPlacement="end" />
          <FormControlLabel value="zhifubao" control={<Radio color="primary" />} label="支付宝" labelPlacement="end" />
          <FormControlLabel value="yue" control={<Radio color="primary" />} label="余额" labelPlacement="end" />
          <FormControlLabel value="jifen" control={<Radio color="primary" />} label="积分" labelPlacement="end" />
        </RadioGroup>
      </FormControl>
    </div>
  );
}
