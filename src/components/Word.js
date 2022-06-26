
import {useEffect, useState} from "react"


const Word = () => { 
    useEffect(()=>{
        setWord("Myself")
    },[])
    const [word,setWord] = useState(""); 
    return (
        <div>
            {word}
        </div>
    )
}

export default Word;