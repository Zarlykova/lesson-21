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

const StyledModalContent = styled.div`
position: fixed;
top: 20vh;
left:28%;
left: calc(50%-20rem);
background-color: white;
padding: 1rem;
border-radius: 14px;
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
z-index: 30;
animation: slide-down 300ms ease-out forwards;
width: 40rem;


@keyframes slide-down {
  from {
    opacity: 0;
    transform: translateY(-3rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
`

const ModalContent =({children})=>{
    return(
        <StyledModalContent > {children} </StyledModalContent>
    )
};


// /////////////////////////////////////////////

const backdropRoot = document.getElementById("backdrop")
const modalOverlayRoot = document.getElementById("modal-overlay")



const Modal =({children , onClose})=>{
    return(
        <>
        {createPortal ( <Backdrop onClose={onClose}/> ,backdropRoot )}
        {createPortal ( <ModalContent> {children} </ModalContent> ,modalOverlayRoot )}
        </>
    )
}


export default Modal;