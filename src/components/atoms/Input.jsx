import styled from "styled-components"
import Data from "../../data/Data"
const InputStyled = styled.input `
    width:  90%; 
    height: 40px;
    border-radius: 5px; 
    
    &: hover {
        backgroun-color: black;
      }`

    function Input (props) {
       

        const change = (event) => {
            props.setVal(event.target.name)
         }
    
      
        return(<InputStyled  name={props.value} onChange={change} type={props.type} placeholder={props.placeholder}></InputStyled>)
    }

    export default Input; 