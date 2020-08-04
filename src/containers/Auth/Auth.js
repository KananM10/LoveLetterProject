import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom';

import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
// import Spinner from '../../components/UI/Spinner/Spinner';
import classes from './auth.module.css';
import * as actions from '../../store/actions/index';
import { updateObject, checkValidity } from '../../shared/utility';
import { NavLink } from "react-router-dom";
import logo  from '../../assets/images/logo.svg';


class Auth extends Component {
    state = {
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Email'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'name',
                    placeholder: 'Name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            }
        },
        isSignup: false
    }

    // componentDidMount () {
    //     if ( !this.props.buildingBurger && this.props.authRedirectPath !== '/' ) {
    //         this.props.onSetAuthRedirectPath();
    //     }
    // }

    inputChangedHandler = ( event, controlName ) => {
        const updatedControls = updateObject( this.state.controls, {
            [controlName]: updateObject( this.state.controls[controlName], {
                value: event.target.value,
                valid: checkValidity( event.target.value, this.state.controls[controlName].validation ),
                touched: true
            } )
        } );
        this.setState( { controls: updatedControls } );
    }

    submitHandler = ( event ) => {
        event.preventDefault();
        this.props.onAuth( this.state.controls.email.value, this.state.controls.password.value, this.state.isSignup, this.state.controls.name.value );
    }

    switchAuthModeHandler = () => {
        this.setState( prevState => {
            return { isSignup: !prevState.isSignup };
        } );

    }

    render () {
        const formElementsArray = [];
        for ( let key in this.state.controls ) {
            if(!this.state.isSignup){
                if(key === 'name'){
                    continue;
                }
            }
            formElementsArray.push( {
                id: key,
                config: this.state.controls[key]
            } );
        }

        let form = formElementsArray.map( formElement => (
            <Input
                key={formElement.id}
                type={formElement.config.elementConfig.type}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                changed={( event ) => this.inputChangedHandler( event, formElement.id )} />
        ) );

        // if ( this.props.loading ) {
        //     form = <Spinner />
        // }

        // let errorMessage = null;

        // if ( this.props.error ) {
        //     errorMessage = (
        //         <p>{this.props.error.message}</p>
        //     );
        // }

        // let authRedirect = null;
        // if ( this.props.isAuthenticated ) {
        //     authRedirect = <Redirect to={this.props.authRedirectPath} />
        // }

        let style = null;

        if(!this.state.isSignup){
            style = {
                gridRow: '4/5'
            }
        }

        return(
        <div className={classes.main}>
                {/*authRedirect}
                {errorMessage*/}
                
                <div className={classes.gameName}>
                    <div className={classes.name}>Love Letter</div>
                    <img src={logo} className={classes.logo} alt="logo" />
                </div>
                
                <form onSubmit={this.submitHandler} className={classes.auth} >
                    {form}
                    <Button btnType="auth">{this.state.isSignup ? 'REGISTER' : 'SIGN IN'}</Button>
                    <NavLink to="/menu" style={style} exact className={classes.guestLink}>
                        PLAY AS GUEST
                    </NavLink>
                    <NavLink to="/" exact style={style} className={classes.link} onClick={this.switchAuthModeHandler}>
                        GO TO {this.state.isSignup ? 'SIGN IN' : 'REGISTER'}
                    </NavLink>
                </form>
                
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
        onAuth: ( ...params ) => dispatch( actions.auth( ...params ) ),
        // onSetAuthRedirectPath: () => dispatch( actions.setAuthRedirectPath( '/' ) )
    };
};

export default connect( mapStateToProps, mapDispatchToProps )( Auth );