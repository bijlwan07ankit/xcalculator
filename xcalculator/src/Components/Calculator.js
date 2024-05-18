import styles from "../Components/Calculator.module.css";
import {useState} from "react";
import "../App.css"

export default function Calculator(){
   const [value, setValue]= useState("")
   const[ans, setAns] = useState(0)
    const[btnClicked, setbtnClicked] = useState(false)

    const reset=(()=>{
   setValue("");
   setAns(0);
   setbtnClicked(false);
   
    })
  

    const calculate=(()=>{
        setAns(eval(value));
   setbtnClicked(true);
   console.log(ans);
//    setAns(ans);
   
   
    })
 return (
    <div className={styles.app}>
    <h1>React Calculator</h1>
    <input value={value} type="text" /><br/>

    {btnClicked===true && value==="" && <p>Error</p>}
    {ans !== 0 && <p>{ans}</p>}

    <div className={styles.buttonParent}>
    <button onClick={()=> setValue(()=> value.concat("7"))}>7</button>
    <button onClick={()=> setValue(()=> value.concat("8"))}>8</button>
    <button onClick={()=> setValue(()=> value.concat("9"))}>9</button>
    <button onClick={()=> setValue(()=> value.concat("+"))}>+</button>
    <br/>

    <button onClick={()=> setValue(()=> value.concat("4"))}>4</button>
    <button onClick={()=> setValue(()=> value.concat("5"))}>5</button>
    <button onClick={()=> setValue(()=> value.concat("6"))}>6</button>
    <button onClick={()=> setValue(()=> value.concat("-"))}>-</button>
    <br/>

    <button onClick={()=> setValue(()=> value.concat("1"))}>1</button>
    <button onClick={()=> setValue(()=> value.concat("2"))}>2</button>
    <button onClick={()=> setValue(()=> value.concat("3"))}>3</button>
    <button onClick={()=> setValue(()=> value.concat("*"))}>*</button>
    <br/>

    <button onClick={reset}>C</button>
    <button onClick={()=> setValue(()=> value.concat("0"))}>0</button>
    <button onClick={calculate}>=</button>
    <button onClick={()=> setValue(()=> value.concat("/"))}>/</button>
    </div>
    </div>
 )
}