import React from "react";
import NavBar from "../components/NavBar";

function index() {
  return (
    <div>
      <NavBar />
      <h1>Hello</h1>
    </div>
  );
}

export default index;

// import { useState } from "react";

// export default function Home() {
//   const [ counter, setCounter ]= useState(0);
//   const onClickCounterHandler = () => {
//     setCounter((prev) => prev + 1)
//   }

//   return (
//     <div>
//       <h1>
//       This is Counter {counter}
//       </h1>
//       <button onClick={onClickCounterHandler}>Counter</button>
//     </div>
//   )
// }
