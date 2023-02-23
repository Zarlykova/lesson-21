import styled from "styled-components";
import BackgroundImg from "../../assets/images/summary-background.jpg"
import SummaryInfoCard from "./SummaryInfoCard";

const Summary =()=>{
    return(
        <Container>
            <StyledImg src={BackgroundImg} alt="summary "/>
            <SummaryInfoCard/>
        </Container>
    )
}

export default Summary;

const Container =styled.div`
    height: 527px;

`

const StyledImg = styled.img`
    width: 100%;
    height: 432px;
`