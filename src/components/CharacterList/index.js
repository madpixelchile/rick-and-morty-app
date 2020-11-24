
import {useState, useEffect} from 'react';
import Card from '../Card';
import Button from '../Button';
import LoadCharacters from '../LoadCharacters';
import PageNavigator from '../PageNavigator';


import './styles.scss';

export function BuildCharacterList(props){

    const {allCharacters, sendModalDeployEvent} = props;
    const [addClass, setAddClass] = useState('');
    
    useEffect(() => {
        setTimeout(function(){
            setAddClass('active');
        },1000)
    }, []);

    return(
        <>
            {
                allCharacters.length > 0 ? allCharacters.map((obj,i)=>{
                    return(
                        <div key={i} className={`col-md-4 offset-top-2`}>
                            <Card addedClass={addClass}>
                                <div className={`app-card_cover`}>
                                    <img src={obj.image} alt={`Imagen correpsondiente a ${obj.name}`}/>
                                </div>
                                <div className={`app-card_info-area`}>
                                    <h4>{obj.name}</h4>
                                    <p><strong>Specie: {obj.species}</strong></p>
                                    <p><strong>Status: {obj.status}</strong></p>
                                    <Button className={`btn btn--secondary`} onClick={()=> sendModalDeployEvent(obj)}>Ver detalle</Button>
                                    {/* <button className={`btn btn--secondary`} onClick={console.log('hola')}>Ver detalle</button> */}
                                </div>
                            </Card>
                        </div>
                    )
                }) : <span className={`app-loader-text`}>Loading content...</span>
            }
        </>
    )
}

function CharacterList(props){

    const [charState, setCharState] = useState([]);
    const [pageNumState, setPageNumState] = useState(1);
    const {useModal} = props;

    // function activeModalState(){
    //     useModal();
    //     //console.log('JUASH!');
    // }

    function handleCharacterDataState(charData){
        setCharState(charData);
    }

    function pageChange(pageNum){
        setPageNumState(pageNum);
        //console.log(pageNum, 'actualizada')
    }

    //console.log('Por fuera',pageNumState);

    return(
        <>
            <PageNavigator bringChangedPage={pageChange}></PageNavigator>
            <LoadCharacters bringAllCharacters={handleCharacterDataState} characterPage={pageNumState}></LoadCharacters>
            <div className={`container offset-top-2`}>
                <div className={`row`}>
                    <BuildCharacterList allCharacters={charState} sendModalDeployEvent={useModal}></BuildCharacterList>
                </div>
            </div>
            
        </>
    )

}

export default CharacterList;