// import { Box, Typography , Modal} from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { deleteBasketItem, submitOrder, updateBasketItem } from "../../store/basket/basketSlice";
import { uiActions } from "../../store/ui/uiSlice";
import MuiModal from "../UI/Modal";
import BasketItem from "./BasketItem";
import TotalAmount from "./TotalAmoun";

const Basket =({onClose})=>{
    const dispatch = useDispatch()
const items = useSelector(state=>state.basket.items)


    const getTotalPrice=()=>{
        return items.reduce((sum, {price , amount })=>sum + (amount * price ) , 0)
    }

    
    const decrementAmount=(id , amount)=>{
        if(amount > 1 ){
           dispatch( updateBasketItem({amount: amount - 1 , id }) ) 
        }else{
           dispatch( deleteBasketItem(id)) 
        }
       
    }
    const incrementAmount = (id, amount)=>{
       dispatch(updateBasketItem({amount: amount + 1 , id}) ) 
    }


    const orderSubmitHandler = async()=>{
      try{
        await dispatch(
            submitOrder({
             orderData:{items}, 
    })
    ).unwrap()
dispatch(uiActions.showSnackbar({
severity:"success",
message:"Order completed successfully!"
}))
onClose()
      }catch(error){
        dispatch(uiActions.showSnackbar({
            severity:"error",
            message:"Failed try again later !"
            }))
      }finally{
        onClose()
      } 
    }
   
      
    return(
<>

       <MuiModal onClose={onClose}>

        <Content>

        
         {items.length ? (  <FixedHeightContainer>
                  {items.map((item)=>{
                return(
                    <BasketItem 
                key={item._id}
                incrementAmount={()=>incrementAmount(item._id , item.amount)}
                decrementAmount={()=>decrementAmount(item._id , item.amount)}
                title={item.title} 
                price={item.price}
                amount={item.amount}/>
                )
            })}
            </FixedHeightContainer>  ):null}
            
          
             { <TotalAmount price={getTotalPrice()}onClose={onClose} onOrder={orderSubmitHandler}/>}
        </Content>
       
       </MuiModal>
      

       </>
    )
}

export default Basket ;


const Content = styled.div`
width: 100%;
height: 100%;
padding: 0 1rem 1.5rem 1rem;
`

const FixedHeightContainer=styled.div`
    max-height: 228px;
    overflow-y:scroll;
  
`