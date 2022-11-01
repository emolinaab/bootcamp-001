import React, {useState, useEffect} from 'react';

export const PokemonApi = (url) => {
    const [result, setResult] = useState({charging:true, data:null});

    useEffect( ()=>{
        getData(url)
    },[url]);
    async function getData(url){
        try{
            setResult({charging:true,data:null});
            const conect = await fetch(url);
            const data = await conect.json();
            setResult({charging:false,data});
        }catch(e){
            console.log(e);    
        }
    }
    return result;
}