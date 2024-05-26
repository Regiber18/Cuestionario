import styled from "styled-components";

const LabelStyled = styled.label`
    font-weight: 500;
    font-size: 15px;
`;

function Label(props) {
    return(
        <LabelStyled>{props.text}</LabelStyled>
    )
}

export default Label;