import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { fetchApi } from "../../lib/FetchApi"

export const basketActionTypes={
    // ADD_ITEM_SUCCESS:'ADD_ITEM_SUCCESS',
    GET_BASKET_SUCCESS:'GET_BASKET_SUCCESS',
}

const initialState = {
    items:[],
    error:'',
}

export const basketSlice = createSlice({
    name:'basket',
    initialState,
    reducers:{},
     extraReducers:(builder)=>{
          builder.addCase(getBasket.fulfilled,( state , action )=>{
             state.items=action.payload;
          }) ;  
          builder.addCase(addToBasket.rejected,(state , action)=>{
          state.error = action.payload
          });
          builder.addCase(updateBasketItem.rejected,(state , action)=>{
          state.error = action.payload
          });
          builder.addCase(deleteBasketItem.rejected,(state , action)=>{
          state.error = action.payload
          });

        }
})


export const basketActions = basketSlice.actions

export const getBasket = createAsyncThunk('basket/getBasket', async(payload , {dispatch , rejectWithValue })=>{ 
    try{

         const {data} = await fetchApi("basket")
           return data.items;
     }catch(error){
     return rejectWithValue(error)
    
     }})



 export const addToBasket = createAsyncThunk ('basket/addToBasket', async(newItem, {dispatch, rejectWithValue})=>{
    try{
        await fetchApi(`foods/${newItem.id}/addToBasket`, {
           method : "POST", 
           body :{amount:newItem.amount},
       })
     dispatch(getBasket())
 }catch(error){
    return rejectWithValue('something went wrong')

 }
 })



 export const updateBasketItem = createAsyncThunk( 'basket/updateBasketItem', async( id , amount, {dispatch , rejectWithValue })=>{
    try{
   
       await fetchApi(`basketItem/${id}/update`, {
            method:"PUT", 
            body :{amount},
        })

 dispatch(getBasket())
    }catch(error){
        rejectWithValue('something went wrong')

    }
    })

 export const deleteBasketItem = createAsyncThunk( 'basket/deleteBasketItem' , async(id , {dispatch , rejectWithValue} )=>{
    try{
   
    await fetchApi(`basketItem/${id}/delete`, {method:"DELETE",})

   dispatch(getBasket())
    }catch(error){
        rejectWithValue('something went wrong')

    }
    })


 export const submitOrder = createAsyncThunk (
    'basket/submitOrder', 
    async({orderData  }, {dispatch, rejectWithValue})=>{
    try{
        await fetch(`https://jsonplaceholder.typicode.com/posts`, {
           method : "POST", 
           body :orderData,
       })
     dispatch(getBasket())
 }catch(error){
    return rejectWithValue('something went wrong')

 }
 })