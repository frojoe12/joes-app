import {useEffect, useState} from "react"

const WORD_URL = "https://randomuser.me/api/";

const Word = () => { 
    useEffect(()=>{
        console.log("render")
        fetch(WORD_URL)
            .then(response => {return response.json()})
            .then(data => {
                setWord(data.results[0].name.last)
            })
        
    },[])
    const [word,setWord] = useState("....."); 

    const setNewNameButton = () => {
        fetch(WORD_URL)
            .then(response => {return response.json()})
            .then(data => {
                setWord(data.results[0].name.last)
            })
    }
    
    return (
        <div>
            The Random name is <strong>{word}</strong><br />
            <button onClick={setNewNameButton}>Generate New Name</button>
        </div>
    )
}

export default Word;