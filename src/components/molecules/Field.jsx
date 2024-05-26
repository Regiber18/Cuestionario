import Input from "../atoms/Input"
import Label from  "../atoms/Label"
import  { useState } from "react"; 
import Style from "./Field.module.css"

function Field(props) {

    const [val, setVal] = useState("")

  

       
    return(

       
    <>
    <div  style= {{width:"80%"}}>
        <div id={Style.cal_label}> 
          <Label text={props.text}></Label>
        </div>

        <div>
            <Input value={val} setVal={setVal} type={props.type}  placeholder={props.placeholder}></Input>
        </div>
    </div>
    </> 

    )
}

export default Field; 