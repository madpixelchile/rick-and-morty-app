
import {useState, useEffect} from 'react';

import './styles.scss';

function PageNavigator(props){

    const [counter, setCounter] = useState(1);
    const totalPages = 20;

    const {bringChangedPage} = props;

    function handleClick(e){
        let itemAction = e.target.attributes.action.value;
        if(itemAction === 'next'){
            if(counter < totalPages){
                setCounter(counter + 1);
            }
        }else if(itemAction === 'prev'){
            if(counter > 1){
                setCounter(counter - 1);
            }
        }

    }

    //console.log('state', counter);
    useEffect(() => {
        bringChangedPage(counter)
    }, [counter, bringChangedPage])

    return(
        <div className={`app-page-navigator`}>
            <button type={`button`} onClick={handleClick} action={`prev`}>Prev</button>
            <p>{`Page ${counter} of 20`}</p>
            <button type={`button`} onClick={handleClick} action={`next`}>Next</button>
        </div>
    )
}

export default PageNavigator;