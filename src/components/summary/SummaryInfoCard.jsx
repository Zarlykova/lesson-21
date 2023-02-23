import styled from "styled-components"

const SummaryInfoCard = ()=>{
    return(
        <Card>
            <StyledTitle>Delicious Food, Delivered To You</StyledTitle>
            <p>
            Choose your favorite meal from our broad selection of available meals and enjoy a delicious
            lunch or dinner at home. 
            </p>
            <p>
            All our meals are cooked with high-quality ingredients, just-in-time and of course by
            experienced chefs!
            </p>

        </Card>
    )
}
export default SummaryInfoCard;

const Card = styled.div`
width: 53.375rem;
background: #383838;
box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.3);
border-radius: 16px;
padding: 36px 40px 16px 40px;
margin: 0 auto;
position: relative;
top:-12rem;
color:white;
font-weight: 500;
font-size: 16px;
line-height: 24px;
text-align: center;
p{
    margin-bottom:20px;
}

`

const StyledTitle = styled.h1`
font-weight: 600;
font-size: 36px;
line-height: 54px;
margin-bottom:28px;
`