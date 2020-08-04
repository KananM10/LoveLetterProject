import React from "react";
import classes from "./NavItem.module.css";
import ai from '../../../assets/images/ai.svg';
import multiplayer from '../../../assets/images/multiplayer.svg';
import settings from '../../../assets/images/settings.svg';
import mods from '../../../assets/images/mods.svg';

const NavItem = props => {
  const classNames = [classes.component, classes[props.className]];
  let icon = null;
  // const iconSize = 100;
  switch (props.case) {
    case "artificial intelligence":
      // icon1 = <AI size={iconSize} />;
      icon = <img src={ai} className={classes.ai} alt={ai} />
      break;
    case "mods":
      // icon1 = <Mods size={iconSize} />;
      icon = <img src={mods} className={classes.mods} alt={mods} />
      break;
    case "settings":
      // icon1 = <Settings size={iconSize} />;
      icon = <img src={settings} className={classes.settings} alt={settings} />
      break;
    case "multiplayer":
      // icon1 = <MultiPlayer size={130} />;
      icon = <img src={multiplayer} className={classes.multiplayer} alt={multiplayer} />
      break;
    default:
      icon = null;
  }

  return (
    <div onClick={props.clicked} className={classNames.join(" ")}>
      <div className={classes.itemicon}>{icon}</div>
      <span className={classes.name}>{props.case}</span>
    </div>
  );
};

export default NavItem;