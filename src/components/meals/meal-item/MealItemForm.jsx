import Button from "../../UI/Button";
import { ReactComponent as PlusIcon } from "../../../assets/icons/plus-icon.svg"
import styledComponents from "styled-components";
import { styled } from "@mui/system";
import { useContext, useState } from "react";
import { BasketContext } from "../../../store/BasketContext";
import { addToBasket } from "../../../store/basket/basketSlice";
import { useDispatch } from "react-redux";
import { TextField } from "@mui/material";
import MuiButton from "../../UI/Button";

const MealItemForm =({id , title , price})=>{
const dispatch = useDispatch()

    const [amount , setAmount]=useState(1)

    const amountChangeHandler=(event)=>{
        setAmount(+event.target.value)
    }
    

    const submitHandler = (event)=>{
      event.preventDefault()
      const BasketItem={
        id,
        price,
        title,
        amount
      }
      dispatch(addToBasket( BasketItem ))
    }


    return(
        <StyledForm onSubmit={submitHandler}>
        <InputContainer> 
            <label htmlFor={id}>Amount</label>
        <StyledTextField
          id={id}
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          size='small'
          value={amount}
          onChange={amountChangeHandler}
        />
        </InputContainer>
        <MuiButton >     
        <StyledIcon/> Add</MuiButton>
    </StyledForm>
    )
}

export default MealItemForm;

const StyledTextField = styled(TextField)(()=>({
'&.MuiTextField-root':{
    width:'60px',
},
"& .MuiOutlinedInput-input":{
    fontWeight:' 500',
    fontSize: '16px',
    padding: '4px 12px',
}

}))


const StyledForm = styledComponents.form`
    display: flex;
    flex-direction:column;
    align-items:flex-end;
`
const InputContainer = styledComponents.div`
    margin-bottom:12px;
    label{
        font-weight: 600;
        font-size: 18px;
        line-height: 27px;
        color: #222222;

    }
`
const StyledInput = styledComponents.input`
    width: 60px;
    height: 32px;
    border-radius: 6px;
    border: 1px solid #d6d6d6;
    margin-left:20px;
    outline: none;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #222222;
    padding: 4px 12px;

`

const StyledIcon = styledComponents(PlusIcon)`
    margin-right:10px;
`