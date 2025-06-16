import React,{useState} from "react";
import Tours from "../Data/Tours.js";
import Tour from "./Tour.js";

const App = () => {
    return(
      <main id="main">
        <Tours data={tourList}/>
        <Tour/>
      </main>
    )
}
export default App;
