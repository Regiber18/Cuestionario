import styled from "styled-components"
import Data from "../../data/Data"

const ButtonStyled = styled.button`
width: 90%;
height: 50px;
background-color: #7FFF00 ;
border-radius: 5px;
color: black; 
color: #7FFF00;
font-size: 10px;
display: flex; 
justify-content: flex-start; 
box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
   &:hover {
   background-color: #5257de; 
   };`  

function Button_new() {

    

    return(<ButtonStyled  ></ButtonStyled>)
}

export default Button_new;