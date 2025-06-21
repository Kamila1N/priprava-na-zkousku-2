import React from "react";
import { createRoot } from "react-dom/client";

//react componenta

function App(){

 return(
     <>
     <h1>Jsem app</h1>
      <p>jsme nova verze a jsem hrozne <br/>cool a o to jde</p>
    <img src="asa" alt="aaa"/>


     </>)
}



/**
 * Do not modify the code below!
 */


const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />
   //  <>
   //    <h1>Ahoj</h1>
   //    <p>pridskmfiriru ndjnue</p>
   // </>
);
