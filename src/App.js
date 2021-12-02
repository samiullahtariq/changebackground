// import React, { useState } from 'react'

// const App =()=>{


//     let Ctime = new Date().toLocaleTimeString();
//     const [time , setTime] = useState(Ctime);
//     const Updated =()=>{
//         Ctime = new Date().toLocaleTimeString();
//         setTime(Ctimec)
//     }

//     setInterval(Updated , 1000)
//     return(

       

//         <>
//         <h1>{time}</h1>
//         </>
//     )
// }

// export default App;


import React, { useState } from "react"


const App = ()=>{
    let purple ='aqua';
    const [bg ,setBg] =useState(purple);
    const [change , setChange]=useState('Click Me')
    let newColor=()=>{
        let color = 'yellow';
        setBg(color)
        setChange("Ouch!!💢")
    }
    let newEmogi=()=>{
        let color ='red'
        setBg(color)
        setChange("Ayoo😡")
    }
    return(
        <>
        <div style={{backgroundColor:bg}}>
            <button onDoubleClick={newEmogi} onClick={newColor}>{change}</button>
        </div>
        </>
    )
}

export default App;