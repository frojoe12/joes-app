import {useEffect, useState} from "react"

const WORD_URL = "https://randomuser.me/api/";

const Word = () => { 
    useEffect(()=>{
        console.log("render")
        fetch(WORD_URL)
            .then(response => {return response.json()})
            .then(data => {
                console.log(data)
                setWord(data.results[0].name.last)
            })
        
    },[])
    const [word,setWord] = useState("....."); 
    return (
        <div>
            The Random name is <strong>{word}</strong>
        </div>
    )
}

export default Word;