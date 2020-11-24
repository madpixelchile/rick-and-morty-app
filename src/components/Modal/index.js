
//import {useEffect} from 'react';

import './styles.scss';

function Modal(props){

    const {children, activeModal, closeModal} = props;

    function handleCloseModal(){
        //console.log('close');
        closeModal(false);
    }

    // useEffect(() => {
    //     console.log(activeModal);
    // }, [])

    return(
        <div className={`app-modal ${activeModal === true ? 'active' : ''}`}>
            
            <div className={`app-modal_content`}>
                <button type={`button`} className={`btn btn-close`} onClick={handleCloseModal}>X</button>
                <div className={`app-modal_info`}>
                    {children}
                </div>
            </div>

        </div>
    )

}

export default Modal;
