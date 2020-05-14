import React from 'react';
import styles from './NutritionInfo.module.css';
import Tooltip from '@material-ui/core/Tooltip'
import { withStyles } from '@material-ui/core/styles';

const LightTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: '#F29B20',
      color:'white',
      fontSize: 14,
      fontFamily:'Rubik',
      fontWeight: 'bold'
    },
    arrow : {
      color: '#F29B20'
    }
  }))(Tooltip);

const NutritionInfo = (props) => {
    return (
        <React.Fragment>
                <div className={styles.Amount}>
                  <LightTooltip title={props.title} arrow>
                    <img className={styles.NutritionImg} src={`../../../../Images/Icone/${props.icon}.png`} alt={props.title} />
                  </LightTooltip>
                    <small>{typeof props.amount === 'string' ? props.amount : props.amount.toFixed(2)} {props.unit}</small>
                </div>
        </React.Fragment>
    );
}

export default NutritionInfo;