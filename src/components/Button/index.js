
//import {useState} from 'react';
import './styles.scss';

function Button(props){

    const {children, className, type, onClick} = props;

    return(
        <button
            className={className}
            type={type}
            onClick={onClick}
        >
            {children}
        </button>
    )

}

export default Button;