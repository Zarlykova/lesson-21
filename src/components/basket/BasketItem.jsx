import { useContext } from "react";
import styled from "styled-components";
import MuiButton from "../UI/Button";
import Button from "../UI/Button"

const BasketItem = ({title, price , amount , decrementAmount , incrementAmount ,})=>{
   
    
    return(
     <Container>
        <Title>
            {title}
         </Title>
        <Content>
            <PriceAmountContainer>
                <Price>${price}</Price>
                <Amount> x {amount} </Amount>
            </PriceAmountContainer>
            <CounterContainer>
                <MuiButton borderStyle="squared" variant="outlined" onClick={decrementAmount} >-</MuiButton>
                <MuiButton borderStyle="squared" variant="outlined" onClick={incrementAmount}>+</MuiButton>
            </CounterContainer>

        </Content>
     </Container>   
    )
}

export default BasketItem;

const Container =styled.div`
    padding: 24px 0 ;
    width: 100%;
`

const Title= styled.p`
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    color:#222222;
    margin: 0 0 12px 0 ;
`

const Price =styled.p`
    margin: 0;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    color: #ad5502;

`

const Amount = styled.span`
    border: 1px solid #d6d6d6;
    border-radius: 6px;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #222222;
    padding: 6px 14px;
    display: block;
`

const PriceAmountContainer = styled.div`
    display: flex;
    align-items:center ;
    width: 153px;
    justify-content: space-between;
`

const CounterContainer =styled.div`
display: flex;
    gap: 14px;
`

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

`