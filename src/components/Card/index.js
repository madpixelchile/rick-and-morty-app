

//import {useState} from 'react';
import './styles.scss';
//import Button from '../Button';

function Card(props){

    //const [toggleClass, setToggleClass] = useState('');
    const {children, addedClass} = props;

    return(
        <div className={`app-card ${addedClass}`}>
            {
                children
            }
        </div>
    )

}

export default Card;