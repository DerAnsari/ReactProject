import { useState } from "react";
import styles from "./AddTasks.module.css"
export default function Form({taskOther,setOther}){
    // const [task, setTask] = useState("");
    const [task, setTask] = useState({name:"", status:false});
    function handleSubmit(e){
        e.preventDefault();
        setOther([...taskOther,task])
        setTask({name:"", status:false})
    }
    return(
        <div className={styles.box}>
            <form className={styles.outerBox} onSubmit={handleSubmit}>
                <input className={styles.enter} onChange={(e)=> setTask({name:e.target.value, status:false})} value={task.name} type="text" placeholder="Enter Your Task"/>
                <button className={styles.addition} type="submit">Add</button>
            </form>
        </div>
        
    )
}