import { Button } from "@mui/material"

export default function Plus(){
    return(
       <Button variant="contained" size="large"
       sx={{ position: 'absolute', bottom: 16, right: 16,borderRadius:"10%" }}>
            Upload
       </Button>
    )
}