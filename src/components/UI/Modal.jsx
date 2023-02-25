import { Box, Modal, Typography } from "@mui/material";

const { createPortal } = require("react-dom");
const { default: styled } = require("styled-components")


const StyledBackdrop= styled.div`
 position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 20;
    background-color:rgba(0,0,0,0.75);
    
`;

const Backdrop =({onClose})=>{
    return(
        <StyledBackdrop onClick={onClose}/>
    )
};
// ////////////////////////////////////////////////////////////

// const StyledModalContent = styled.div`
// position: fixed;
// top: 20vh;
// left:28%;
// left: calc(50%-20rem);
// background-color: #ffffff;
// padding: 1rem;
// border-radius: 14px;
// box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
// z-index: 30;
// animation: slide-down 300ms ease-out forwards;
// width: 40rem;


// @keyframes slide-down {
//   from {
//     opacity: 0;
//     transform: translateY(-3rem);
//   }
//   to {
//     opacity: 1;
//     transform: translateY(0);
//   }
// }
// `
const style = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '40rem',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    zIndex:30,
    borderRadius:"14px",
  };

const ModalContent =({children})=>{
    return(
        <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
         {children}
        </Typography>
      </Box>
    )
};

// /////////////////////////////////////////////

const backdropRoot = document.getElementById("backdrop")
const modalOverlayRoot = document.getElementById("modal-overlay")



const MuiModal =({children , onClose})=>{
    return(
        <>
         {createPortal ( <ModalContent> {children} </ModalContent> ,modalOverlayRoot )}
        {createPortal ( <Backdrop onClose={onClose}/> ,backdropRoot )}
       
        </>
    )
}


export default MuiModal;