import { Alert, Snackbar } from "@mui/material"

export const MuiSnackbar =({isOpen , onClose , message , severity , autoHideDuration })=>{
    return(
        <Snackbar
        open={isOpen}
        autoHideDuration={autoHideDuration || 4000}
        onClose={onClose}
        anchorOrigin={{vertical:'top', horizontal:'right'}}
        // action={action}
      >
         <Alert 
         onClose={onClose} 
         severity={severity} 
         sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    )
}

