import { useState } from "react";
import Form from "./AddTasks";
import Listing from "./listingTasks";
import Footer from "./footer";

export default function CreatTask(){
    const [taskOther,setOther] = useState([]);
    const completedAmmount= taskOther.filter((task)=>task.status).length
    const totalTasks= taskOther.length
    return(
        <div>
            <Form taskOther={taskOther} setOther={setOther} />
            <Listing taskOther={taskOther} setOther={setOther} />
            <Footer completedAmmount={completedAmmount} totalTasks={totalTasks}/>
        </div>
    )
}