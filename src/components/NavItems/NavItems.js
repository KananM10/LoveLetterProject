import React from "react";
import classes from "./NavItems.module.css";
import NavItem from "./NavItem/NavItem";

const NavItems = props => (
  <div className={classes.components}>
    {props.nav_list.map( item => (
      <NavItem
      	clicked={() => props.menuAction(item)}
        key={item}
        case={item}
      />
    ))}
  </div>
);

export default NavItems;