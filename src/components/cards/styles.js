import styled from "styled-components";

const StyledCard = styled.div`

    width: 255px;
    height: 216px;
    background-color: ${props =>(props.active ? '#252B42' : '#FFFFFF')};
    border-radius: 5px;
    border-top: solid 3px #178FF5;
    box-shadow: ${props =>(props.active ? '0' : '1px 2px 6px gray')};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`;

const StyledUser = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    justify-content: center;
    align-items: center;
`;

const StyledIcon = styled.img`
    width: 20px;
    height: 20px;
`;

const StyledP = styled.p`
    font-size: 12px;
    color: #8C98C6;

`;

const StyledH1 = styled.h1`
    font-size: 56px;
    font-weight: 700;
    color: ${props =>(props.active ? '#FFFFFF' : '#252B42')};
    margin-top: 5px;
    margin-bottom: 0;
`;

const StyledH3 = styled.h3`
    font-size: 12px;
    color: #8C98C6;
    letter-spacing: 5px;
    margin: 0;
`;

const StyledCount = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5px;
    justify-content: center;
    align-items: center;
    margin-top: 18px;
`;

const StyledIconCount = styled.img`
    width: 8px;
    height: 4px;
`;

const StyledNumber = styled.p`
    font-size: 12px;
    font-weight: 700;
    color: #1EB589;
`;

export {StyledCard, StyledUser, StyledIcon,StyledP, StyledH1, StyledH3, StyledCount, StyledIconCount, StyledNumber};