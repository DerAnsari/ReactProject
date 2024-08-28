import ContainTask from "./tasksContain";
import styles from "./listingTasks.module.css"

export default function Listing({taskOther, setOther}){
    const sorted= taskOther.slice().sort((a,b)=>Number(a.status)-Number(b.status))
    return(
        <div className={styles.list}>
            {sorted.map(item=>(
                <ContainTask
                    key={item.name} 
                    item={item} 
                    taskOther={taskOther} 
                    setOther={setOther}
                />
            ))}
        </div>
    )
}