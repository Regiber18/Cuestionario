import Label from "../atoms/Label";
import Card from "../atoms/Card"

function SectionAlumn(props) {
    return(
        <>
           <Card>
              <Label text={props.nombre}></Label>
              <Label text={props.grado}></Label>
              <Label text={props.matricula}></Label>
           </Card>         
        </>
    )
}

export default SectionAlumn;