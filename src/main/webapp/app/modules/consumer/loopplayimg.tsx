import React from 'react';
import { createStyles, makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Homelabelcard from './homelabelcard';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

let tutorialSteps = [
  {
    label: '1号内容',
    imgPath: './content/images/barner1.jpg'
  },
  {
    label: '2号内容',
    imgPath: './content/images/barner2.jpg'
  },
  {
    label: '3号内容',
    imgPath: './content/images/barner3.jpg'
  },
  {
    label: '4号内容',
    imgPath: './content/images/barner4.jpg'
  },
  {
    label: '5号内容',
    imgPath: './content/images/barner5.jpg'
  }
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: '8px',
      marginBottom: '8px',
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
    img: {
      height: '95px',
      display: 'block',
      overflow: 'hidden',
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

function SwipeableTextMobileStepper() {
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
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? <img className={classes.img} src={step.imgPath} alt={step.label} /> : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        variant="dots"
        steps={5}
        position="static"
        activeStep={activeStep}
        className={classes.spot}
        nextButton={null}
        backButton={null}
      />
      <Homelabelcard />
    </div>
  );
}
export default SwipeableTextMobileStepper;
