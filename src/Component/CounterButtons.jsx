import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export default function CounterButton({setcount, count}){
    return(
        <>
        <div className="button-container">
      <button className="count-btn" onClick={()=> { if(count > 0) setcount(count-1) }}>
        <MinusIcon className="count-btn-icon"></MinusIcon></button>
      <button className="count-btn" onClick={()=> { if(count < 5) setcount(count + 1) }}>
        <PlusIcon className="count-btn-icon"></PlusIcon>
      </button>
    </div>
        </>
    )
}