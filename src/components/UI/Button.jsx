import { Button } from "@mui/material";
import styled from "styled-components";

const MuiButton =({children , variant="contained" , borderStyle="rounded", ...restProps })=>{
    return(
        <Button variant={variant} borderStyle={borderStyle}{...restProps}>{children}</Button>
    )
}

export default MuiButton;

const getBackgroundColor=(props)=>{
    return props=> props.variant === "contained" ? "#8A2B06" : "#ffffff" 
}

const getBorder=(props)=>{
    return props=> props.variant === "contained" ? "none" : "1px solid #8A2B06" 
}
const getColor=(props)=>{
    return props=> props.variant === "contained" ? "#ffff" : " #8A2B06" 
}

const getBorderStyle=(props)=>{
    return props=> props.borderStyle === "rounded" ? "20px" : " 6px" 
}


// const StyledButton = styled.button`
// background:${ getBackgroundColor} ;
// border-radius: ${getBorderStyle};
// padding: 10px 32px;
// font-weight: 600;
// font-size: 16px;
// line-height:24px;
// color: ${getColor};
// border:${getBorder};
// cursor: pointer;
// display: flex;
// align-items:center;
// :hover{
//     background: #7e2a0a;
//     color: #ffff;
// }
// :active{
//     background:#993108;
// }
// `