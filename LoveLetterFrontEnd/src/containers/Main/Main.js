import React, { Component } from "react";
import classes from "./Main.module.css";
import NavItems from "../../components/NavItems/NavItems";
import Logo from "../../assets/iconJSX/Logo/Logo";
import LogIn from '../LogIn/LogIn';
import { Route, Switch } from 'react-router-dom';


class Main extends Component {
  state = {
    nav_list: [
      { icon: "multiplayer", name: "multiplayer" },
      { icon: "ai", name: "artificial intelligence" },
      { icon: "mods", name: "mods" },
      { icon: "settings", name: "settings" }
    ]
  };

  render() {
    return (
      <div className={classes.main}>
        <div className={classes.logo}>
          <div className={classes.name}>Love Letter</div>
          <Logo size={60} />
        </div>
        <Switch>
          <Route path="/login" exact component={LogIn} />
          <Route path="/" exact component={() => <NavItems nav_list={this.state.nav_list} /> } />
        </Switch>
      </div>
    );
  }
}

export default Main;
