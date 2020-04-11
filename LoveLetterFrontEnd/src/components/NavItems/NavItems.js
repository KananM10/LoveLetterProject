import React from "react";
import classes from "./NavItems.module.css";
import NavItem from "./NavItem/NavItem";

const NavItems = props => (
  <div className={classes.components}>
    {props.nav_list.map(nav_item => (
      <NavItem
        icon={nav_item.icon}
        className={nav_item.name}
        name={nav_item.name}
        key={nav_item.name}
      />
    ))}
  </div>
);

export default NavItems;
