import React from 'react';

import classes from './Input.module.css';
import lock from '../../../assets/images/Lock.svg';
import user from '../../../assets/images/User.svg';
import email from '../../../assets/images/email.svg';


const input = ( props ) => {
    let inputElement = null;
    const inputClasses = [classes.InputElement];
    let icon;

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(classes.Invalid);
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
    
    switch (props.type) {
    case "email":
      icon = <img src={email} className={classes.email} alt=""/>;
      break;
    case "name":
      icon = <img src={user} className={classes.user} alt=""/>;
      break;
    case "password":
      icon = <img src={lock} className={classes.lock} alt=""/>;
      break;
    default:
      icon = null;
  }

  return (
    <div className={classes.Input}>
      {icon}
      {inputElement}
    </div>
  );

};

export default input;