import React from "react";

import classes from "./wait.module.css";
import user from '../../assets/images/nofill_user.svg';
import filledUser from '../../assets/images/filled_user.svg';


const Wait = (props) => {
  let icons = [];

  for(let j=0; j<props.actives; j++){
      icons.push(<img src={filledUser} className={classes.userIcon} alt="icon" key={Math.random() * 20} /> );
  }

  for(let i=props.actives; i < 4; i++){ 
      icons.push(<img src={user} className={classes.userIcon} alt="icon" key={Math.random() * 20}/> );
  }

  return(
    <div className={classes.waitPage}>
      <div className={classes.wait}>
        <div className={classes.title}>
          <p className={classes.loading}>Waiting for players</p>
        </div>
        <div className={classes.icons}>
          {icons}
        </div>
      </div>
    </div>
  );

}


export default Wait;