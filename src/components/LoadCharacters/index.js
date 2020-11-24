
import {useEffect} from 'react';

function LoadCharacters(props){

    const {bringAllCharacters, characterPage} = props;
    
    useEffect(()=> {
        
        //console.log('IRFI CHANGED', characterPage);
        fetch(`https://rickandmortyapi.com/api/character/?page=${characterPage}`).then((resolve)=>{
            return resolve.json();
        }).then((data)=>{
            const {results = 0} = data;
            bringAllCharacters(results);
        }).catch((error)=>{
            //console.log(error);
            return error;
        })

    },[bringAllCharacters,characterPage])

    return <></>;

}


export default LoadCharacters;