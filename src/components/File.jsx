import { ListItem ,ListItemButton, ListItemText, ListItemIcon} from "@mui/material";
import DeleteIcon  from '@mui/icons-material/Delete'
import { Download } from "@mui/icons-material";
import { Socket } from "socket.io-client";

export default function File (props){
  const handleDelete = () => {
    const filename = props.name
    const socket = props.socket
    socket.send("DEL "+filename)

  }
  const handleDownload  = () => {
    const filename = props.name
    const socket = props.socket
    socket.send("DWN " + filename)
  }
    return (
        <ListItem disablePadding>
            <ListItemButton>
              
              <ListItemText primary={props.name} />
              <ListItemIcon onClick={handleDelete}>
                <DeleteIcon />
              </ListItemIcon>
              <ListItemIcon onClick={handleDownload}>
                <Download />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
    )
}