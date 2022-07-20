import { useState } from 'react';
import Output from './Output';
const Greeting=()=>{

    const [changedText,setChangedText]=useState(false);  
    return(
        <div>
            <h2>Hello world</h2>
            {changedText && <Output>Changed</Output>}
            {!changedText && <p>Its good to see you!</p>}
            <button onClick={()=>setChangedText(true)} > Change Text!</button>
        </div>
    )
}

export default Greeting;