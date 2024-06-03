import Style from "./ShowInformation.module.css"
import { useState } from "react";
import Data from "../../data/Data"
import Button from "../atoms/Button";
import SectionAlumn from "../molecules/SectionAlumn";

function ShowInformation() {
    const [newAlumn, setNewAlumn] = useState([])  
    let newAlumns = []
    
    const showAlumn = () => {
        
        let alumns = Data.getAlumns();
        for(let i=alumns.length-1;i>=0;i--) {
          let auxAlumn = alumns[i];
          newAlumns.push(
            <SectionAlumn key={i}
              nombre={auxAlumn.name}  
              grado={auxAlumn.grade}
              matricula={auxAlumn.plaque}
            ></SectionAlumn>
          )
        } 
        console.log(newAlumns)
        setNewAlumn(newAlumns)
      }
      

    return(
    
     <div id={Style.cal_section}>
      <div>
         {newAlumn}
      </div>
       <Button title={"showalumn"} onClick={showAlumn}/> 
    </div>
    )
}  

export default ShowInformation; 