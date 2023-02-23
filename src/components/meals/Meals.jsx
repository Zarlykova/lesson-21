import { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchApi } from "../../lib/FetchApi";
import MealItem from "./meal-item/MealItem";

// const DUMMY_MEALS =[
//     {
//         id:"1",
//         title : "sushi",
//         description:"Finest fish and veggies",
//         price:22.99
//     },
//     {
//         id:"2",
//         title : "Schnitzel",
//         description:"A german specialty!",
//         price:16.00
//     },
//     {
//         id:"3",
//         title : "Barbecue Burger",
//         description:"American, raw, meaty",
//         price:12.99
//     },
//     {
//         id:"4",
//         title : "Green Bowl",
//         description:"Healthy...and green...",
//         price:19.99
//     },
// ];



const Meals =()=>{
    const[ meals , setMeals ]=useState([])
    const [error , setError ]= useState("")
    const [ isLoading , setLoading]=useState(true)

    

    const getMeals =async()=>{
       try{
        setLoading(true)
        const response = await fetchApi("foods")

        setMeals(response.data)
        setLoading(false)
    }catch(error){
        
        setError("Failed to load meals")

    }
    }
    useEffect(()=>{
        getMeals()

    }, [])
    return(
        <Card>
            {isLoading && !error &&<p>LOADING...</p>}
            {error && <p style={{color:"red"}}>{error}</p>}
            {meals.map((meal)=>{
                return(
                <MealItem
                title={meal.title} 
                description={meal.description} 
                price={meal.price}
                id={meal._id}
                />
               
                ) 
            })}
        </Card>
    )
}

export default Meals;

const Card = styled.ul`
background: #FFFFFF;
border-radius: 16px;
width: 1039px;
margin: 40px auto;
padding: 40px 40px 16px 40px;
`