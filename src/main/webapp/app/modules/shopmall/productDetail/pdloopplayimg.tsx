import React from 'react';
// tslint:disable-next-line: no-submodule-imports
import { createStyles, makeStyles, Theme, useTheme } from '@material-ui/core/styles';
// tslint:disable-next-line: no-submodule-imports
import MobileStepper from '@material-ui/core/MobileStepper';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: '0号内容',
    imgPath: 'https://img.alicdn.com/bao/uploaded/O1CN01Zt1WHw1DJoAOObYak_!!0-item_pic.jpg_320x320Q50s50.jpg_.webp'
  },
  {
    label: '1号内容',
    imgPath: 'https://img.alicdn.com/bao/uploaded/O1CN01Ks0Xie1DJoA7zcatH_!!0-item_pic.jpg_320x320Q50s50.jpg_.webp'
  },
  {
    label: '2号内容',
    imgPath: 'https://img.alicdn.com/bao/uploaded/O1CN01Zt1WHw1DJoAOObYak_!!0-item_pic.jpg_320x320Q50s50.jpg_.webp'
  },
  {
    label: '3号内容',
    imgPath: 'https://img.alicdn.com/bao/uploaded/O1CN01Ks0Xie1DJoA7zcatH_!!0-item_pic.jpg_320x320Q50s50.jpg_.webp'
  }
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      position: 'relative',
      width: '100%'
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      height: '50px',
      paddingLeft: theme.spacing(4),
      backgroundColor: theme.palette.background.default
    },
    loopplaying: {
      height: '100%',
      width: '100%',
      overflow: 'hidden'
    },
    img: {
      width: '100%'
    },
    spot: {
      position: 'absolute',
      marginTop: '-12px',
      backgroundColor: 'transparent',
      padding: '4px',
      width: '100%',
      '& div': {
        margin: '0 auto',
        '& div': {
          margin: '0px 2px 0px 2px',
          width: '12px',
          height: '3px',
          borderRadius: '10px'
        }
      }
    }
  })
);

function SwipeableTextMobileStepper(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  function handleStepChange(step) {
    setActiveStep(step);
  }
  return (
    <div className={classes.root}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {/*{tutorialSteps.map((step, index) => (*/}
        {/*<div className={classes.loopplaying} key={step.label}>*/}
        {/*{Math.abs(activeStep - index) <= 2 ? <img className={classes.img} src={step.imgPath} alt={step.label} /> : null}*/}
        {/*</div>*/}
        {/*))}*/}
        {props.img.length !== 0 ? (
          props.img.map((step, index) => (
            <div className={classes.loopplaying} key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <img className={classes.img} src={`data:${step.fileContentType};base64,${step.file}`} />
              ) : null}
            </div>
          ))
        ) : (
          <img src="https://img.alicdn.com/bao/uploaded/O1CN01Ks0Xie1DJoA7zcatH_!!0-item_pic.jpg_320x320Q50s50.jpg_.webp" />
        )}
      </AutoPlaySwipeableViews>
      <MobileStepper
        variant="dots"
        steps={4}
        position="static"
        activeStep={activeStep}
        className={classes.spot}
        nextButton={null}
        backButton={null}
      />
    </div>
  );
}
export default SwipeableTextMobileStepper;
