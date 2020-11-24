import {useState} from 'react';

import './App.css';
import './assets/scss/grid.scss';

import Modal from './components/Modal';
import CharacterList from './components/CharacterList';

function App() {

  const [modalCont, setModalCont] = useState([]);
  const [modalState, setModalState] = useState(false);

  function handleFromInnerModalClose(){
    setModalState(false);
  }

  function activeModalState(modalData){
    setModalState(true);
    setModalCont(modalData)
  }

  return (
    <div className="App">
        <h1>Rick & Morty APP</h1>
        
        <CharacterList useModal={activeModalState}></CharacterList>
        <Modal activeModal={modalState} closeModal={handleFromInnerModalClose}>
            <img className={`app-modal_img`} src={modalCont.image} alt={modalCont.name}/>
            <div>
                <h4>{modalCont.name}</h4>
                {/* <p>{modalCont.origin['name'] ? 'Origin: ' + modalCont.origin['name'] : ''}</p> */}
                {/* <p>{modalCont.location['name'] ? 'Location: ' + modalCont.location['name'] : ''}</p> */}
                <p>Created:  {modalCont.created}</p>
                <p>Gender:   {modalCont.gender}</p>
            </div>
        </Modal>
    </div>
  );
}

export default App;
