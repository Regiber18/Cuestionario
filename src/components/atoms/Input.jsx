import styled from "styled-components"
const InputStyled = styled.input `
    width:  90%; 
    height: 40px;
    border: 1px solid; 
    border-radius: 5px; 
`

    function Input (props) {
       

        const change = (event) => {
            props.fnVal(event.target.value)
        }
      
        return(<InputStyled pattern={props.pattern} value={props.val} onChange={change} type={props.type} placeholder={props.placeholder}></InputStyled>)
    }

    export default Input; 