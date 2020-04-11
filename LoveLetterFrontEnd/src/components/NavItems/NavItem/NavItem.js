import React from "react";
import classes from "./NavItem.module.css";
import AI from "../../../assets/iconJSX/AI/AI";
// import Lock from "../../../assets/iconJSX/Lock/Lock";
// import Logo from "../../../assets/iconJSX/Logo/Logo";
import Mods from "../../../assets/iconJSX/Mods/Mods";
import Settings from "../../../assets/iconJSX/Settings/Settings";
import MultiPlayer from "../../../assets/iconJSX/MultiPlayer/MultiPlayer";
// import User from "../../../assets/iconJSX/User/User";

const NavItem = props => {
  const classNames = [classes.component, props.className];
  let icon = null;
  const iconSize = 100;
  switch (props.icon) {
    case "ai":
      icon = <AI size={iconSize} />;
      break;
    case "mods":
      icon = <Mods size={iconSize} />;
      break;
    case "settings":
      icon = <Settings size={iconSize} />;
      break;
    case "multiplayer":
      icon = <MultiPlayer size={130} />;
      break;
    default:
      icon = null;
  }

  return (
    <div className={classNames.join(" ")}>
      <div className={classes.itemicon}>{icon}</div>
      <span className={classes.name}>{props.name}</span>
    </div>
  );
};

export default NavItem;
