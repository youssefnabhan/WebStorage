import { Button } from "@mui/material"

export default function Plus({socket}) {

    const upload = (event) => {
        const file = event.target.files[0]
        socket.send(file)  
    }
    return (
        <>
            <input
                accept="image/*"
                style={{ display: 'none' }}
                id="raised-button-file"
                multiple
                type="file"
                onChange={upload}
            />
            <label htmlFor="raised-button-file">
                <Button  sx={{ position: 'absolute', bottom: 16, right: 16, borderRadius: "10%" }} variant="raised" component="span" >
                    Upload
                </Button>
            </label>
        </>

    )
}

