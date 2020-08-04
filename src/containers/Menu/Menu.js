import React, {Component} from "react";
import classes from "./menu.module.css";
import NavItems from "../../components/NavItems/NavItems";
// import {Logo} from "../../assets/iconJSX/Logo/Logo";
import logo  from '../../assets/images/logo.svg';
import { connect } from 'react-redux';
import Wait from "../../components/Wait/Wait";


class Menu extends Component{
    state = {}


  join_to_game = () => {
    
  }

  menuAction = (choise) => {
    switch(choise){
      
      case 'multiplayer':
        console.log(choise);
        this.join_to_game();
        break;
      
      case 'artificial intelligence':
        console.log(choise);
        break;
      
      case 'mods':
        console.log(choise);
        break;
      
      case 'settings':
        console.log(choise);
        break;
      
      default: 
        break;
    
    }
  }

  render() {
    let list = [ "multiplayer", "artificial intelligence", "mods", "settings" ];

    //window.location.pathname.

    let userC = this.props.userName.charAt(0).toUpperCase() + this.props.userName.slice(1);

    return (
      <div className={classes.menu}>
        <div className={classes.user}>
          <div className={classes.userPhoto} >{userC.charAt(0)}</div>
          <div className={classes.userName} >{userC}</div>
        </div>
        
        <div className={classes.gameName}>
          <div className={classes.name}>Love Letter</div>
          <img src={logo} className={classes.logo} alt="logo" />
        </div>
        
        <NavItems menuAction={this.menuAction} nav_list={list} />
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
        // loading: state.auth.loading,
        // error: state.auth.error,
        // isAuthenticated: state.auth.token !== null,
        // buildingBurger: state.burgerBuilder.building,
        // authRedirectPath: state.auth.authRedirectPath
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // onAuth: ( ...params ) => dispatch( actions.auth( ...params ) ),
        // onSetAuthRedirectPath: () => dispatch( actions.setAuthRedirectPath( '/' ) )
    };
};

export default connect( mapStateToProps, mapDispatchToProps )( Menu );