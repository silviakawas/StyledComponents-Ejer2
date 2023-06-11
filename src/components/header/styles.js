import styled from "styled-components";

const StyledHeader = styled.div`

    width: 1200px;
    height: 130px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: auto;
    padding-top: 20px;

`;

const StyledH1 = styled.h1`

    font-size: 28px;
    font-weight: 700;
    color: ${props =>(props.active ? '#FFFFFF' : '#000000')};
    margin-bottom: 8px;

`;

const StyledH2 = styled.h2`

    font-size: 14px;
    font-weight: 700;
    color: ${props =>(props.active ? '#FFFFFF' : '#000000')};

`;

const StyledModo = styled.div`

    display: flex;
    flex-direction: row;
    gap: 15px;

`;

const StyledButton = styled.button`

    display: flex;
    position: relative;
    align-items: center;
    background: linear-gradient(to right, #388FE7, #40DB82);
    border: none;
    border-radius: 2rem;
    padding: 1rem 2.2rem;

`;

const StyledButtonCircle = styled.button`

    width: 28px;
    position: absolute;
    left: ${props =>(props.active ? '3px' : '40px')};
    background-color: #333A55;
    aspect-ratio: 1;
    border: none;
    border-radius: 100%;

`;

export {StyledHeader, StyledH1, StyledH2, StyledModo, StyledButton, StyledButtonCircle};