import {  Outlet } from "react-router-dom";
import { Header } from "./component/Header";
import { useContext } from "react";
import { contextCr } from "./hooks/ContextApi";

function App() {
  const {state,dispatch} =useContext(contextCr);
  const handClick = ()=>{
    dispatch({type:"ADD"})
    console.log("adad")
  }
  return (
    <div className="App">
  <button onClick={handClick}>Click Me</button>

        <Header/>
        <Outlet/>
    </div>
  );
}

export default App;
