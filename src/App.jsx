import Title from "./Component/Title";
import Counter from "./Component/Counter"
import Reset from "./Component/Reset"
import CounterButtons from "./Component/CounterButtons"
import { useState } from "react";



export default function App(){
const [count, setcount]= useState(0)

  return(
<>
<main >
  





  <div className="card" >
    <Title />
    <Counter count={count} />
    <Reset setCount={setcount}/>
    <CounterButtons count={count} setcount={setcount}/>
    
  </div>



</main>
</>

  );
}