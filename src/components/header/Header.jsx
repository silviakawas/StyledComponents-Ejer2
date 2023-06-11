
import { StyledButton, StyledButtonCircle, StyledH1, StyledH2, StyledHeader, StyledModo } from "./styles";

const Header = ({active, setActive})=>{


    return(

        <StyledHeader>

            <div>
               <StyledH1 active={active}>Social Media Dashboard</StyledH1> 
               <StyledH2 active={active}>Total Followers: 23,004</StyledH2>
            </div>
            <div>
                <StyledModo>     
                    <StyledH2 active={active}>Dark Mode</StyledH2>
                    <StyledButton>
                        <StyledButtonCircle onClick={()=>darkMode(active, setActive)} active={active}></StyledButtonCircle>
                    </StyledButton>
                </StyledModo>
            </div>

        </StyledHeader>
    )

};

const darkMode = (active, setActive) =>{
    setActive(!active)
};

export default Header;