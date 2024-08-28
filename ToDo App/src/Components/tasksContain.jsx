import styles from "./tasksContain.module.css"
export default function ContainTask({item,taskOther,setOther}){
    function deleted(item){
        console.log("deleted",item)
        setOther(taskOther.filter((CreatTask)=> CreatTask !== item))
    }

    function completedTask(name){
        const newArray = taskOther.map((task)=>
            task.name=== name? {...task,status: !task.status} :task 
        )
        setOther(newArray)
        console.log(taskOther, "was clicked")
    }
    const className = item.status? styles.completed : "";
    return(
        <div className={styles.item}>
            <div className={styles.itemHold}>
                <span className={className} onClick={()=>{completedTask(item.name)}}>
                    {item.name}
                </span>
                
                <span>
                    <button onClick={()=>{deleted(item)}} className={styles.deleteButton}>x</button>
                </span>
            </div>
            <hr className={styles.line} />
        </div>
    );
};