import { StyledCard, StyledCount, StyledH1, StyledH3, StyledIcon, StyledIconCount, StyledNumber, StyledP, StyledUser } from "./styles";

const Cards = ({src, alt, user, h1, srcCount, altCount, followers, active})=>{

    return(

        <StyledCard
            active={active}>
            <StyledUser>
                <StyledIcon src={src} alt={alt}></StyledIcon>
                <StyledP>{user}</StyledP>
            </StyledUser>
            <StyledH1 active={active}>{h1}</StyledH1>   
            <StyledH3>FOLLOWERS</StyledH3>
            <StyledCount>
                <StyledIconCount src={srcCount} alt={altCount}></StyledIconCount>
                <StyledNumber>{followers}</StyledNumber>
            </StyledCount>
            
        </StyledCard>


    );
};


export default Cards;