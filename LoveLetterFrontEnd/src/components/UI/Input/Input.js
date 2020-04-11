import React from 'react';

import classes from './Input.module.css';

import Lock from "../../../assets/iconJSX/Lock/Lock";
import User from "../../../assets/iconJSX/User/User";

const input = ( props ) => {
    let inputElement = null;
    const inputClasses = [classes.InputElement];
    const iconSize = 25;
    let icon = null;

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(classes.Invalid);
    }

    switch(props.type){
        case ('login'):
            icon = <User size={iconSize} />;
            break;

        case ('password'):
            icon = <Lock size={iconSize} />;
            break;
        default:
            icon = <User size={iconSize} />;
    }

    switch ( props.elementType ) {
        case ( 'input' ):
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        case ( 'textarea' ):
            inputElement = <textarea
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        case ( 'select' ):
            inputElement = (
                <select
                    className={inputClasses.join(' ')}
                    value={props.value}
                    onChange={props.changed}>
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            );
            break;
        default:
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
    }

    return (
        <div className={classes.Input}>
            {icon} 
            {inputElement}
        </div>
    );

};

export default input;