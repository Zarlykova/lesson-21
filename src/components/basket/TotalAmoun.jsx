import styled from "styled-components";
import MuiButton from "../UI/Button";
import Button from "../UI/Button"
const TotalAmount=({price , onClose , onOrder  })=>{
    const orderButton = price > 0 ? <Button onClick={onOrder} >Order</Button>: null

    const fixedPrice = price.toFixed(2)
    return(
        <div style={{paddingTop:30}}> 
            <InfoContainer>
            <Label>Total amount</Label>
            <Price>${fixedPrice}</Price>
            </InfoContainer>
           
            <ActionButtonsContainer>
                <MuiButton variant="outlined" onClick={onClose}>Close</MuiButton>
               {orderButton } 
            </ActionButtonsContainer>
        </div>
    )
}

export default TotalAmount;


const Label = styled.p`
    
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    text-align: center;
    color: #222222;
    margin: 0;
`

const Price= styled.p`
    font-weight: 600;
    font-size: 22px;
    line-height: 33px;
    color: #8a2b06;
    margin: 0;
`

const InfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const ActionButtonsContainer = styled.div`
display:flex;
margin-top:24px;
justify-content: flex-end;
gap:1rem;
`
    
