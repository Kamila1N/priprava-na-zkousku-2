import React from "react";
import { createRoot } from "react-dom/client";

//props které se musí dát do {}

function Animal({name,type, age}){
    return(
        <div className="animal">
        <h2>{type}</h2>
            <p>jsem šelma {name}</p>
            <p>ziju v zoo</p>
            <p>Vek: {age} let</p>
        </div>
    )
}

function App(){

    return(
        <>
            <Animal name="Joska" type="tygr" age={7}/>
        {/*    props*/}
        </>

    )
}


/**
 * Do not modify the code below!
 */
const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
