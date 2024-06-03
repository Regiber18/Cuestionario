import Field from "../molecules/Field"
import Swal from "sweetalert2"
import Button from "../atoms/Button"
import Style from "./Questionarie.module.css"
import { useState } from "react";
import Data from "../../data/Data"

function Questionarie() {
     
    const [nombre, setName] = useState('')
    const [grado, setGrade] = useState('');
    const [matricula, setMatricule] = useState("")


    const handlerClick = () => {
        if(!nombre || !grado  || !matricula || matricula < 0) {
            Swal.fire({
                title: "Alta de alumnos",
                icon: "error",
                text: `Error de ingreso`,
              });
        }else {
          Data.addAlumns(nombre, grado, matricula)
          setName("")
          setGrade("")
          setMatricule("")
        Swal.fire({
                title: "Alta de alumnos",
                icon: "success",
                text: `Nombre: ${nombre}  grado: ${grado}   matricula: ${matricula}`,
          });  
        }  
    }
   
   
    return(
        <>
        <div id={Style.login_section}>
            <div id={Style.cal_field}>
                <Field type="text" placeholder="Nombre" text="Nombre" val={nombre} fnVal={setName}/>
                <Field type="number" placeholder="Grado" text="grado" val={grado} fnVal={setGrade}/> 
                <Field type="number" placeholder="Plade"text="matrícula" val={matricula} fnVal={setMatricule} /> 
            </div>
            <div id={Style.cal_button}>
                <Button title={"Addalumn"} onClick={handlerClick} />
            </div>
        </div>
     </>
    )
}

export default Questionarie; 
