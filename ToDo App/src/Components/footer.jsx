import styles from "./footer.module.css"
export default function Footer({completedAmmount, totalTasks}){
    return(
        <div className={styles.foot}>
            <span>Total tasks completed:{completedAmmount}</span>
            <br />
            <span>Total tasks:{totalTasks}</span>
        </div>
    )
}