import styles from "../Components/Calculator.module.css";

export default function Falculator(){
 return (
    <div className={styles.app}>
    <h1>React Calculator</h1>
    <input></input><br/>
    <button>7</button>
    <button>8</button>
    <button>9</button>
    <button>+</button>
    <br/>

    <button>4</button>
    <button>5</button>
    <button>6</button>
    <button>-</button>
    <br/>

    <button>1</button>
    <button>2</button>
    <button>3</button>
    <button>*</button>
    <br/>

    <button>C</button>
    <button>0</button>
    <button>=</button>
    <button>/</button>
    </div>
 )
}