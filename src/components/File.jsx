import { ListItem ,ListItemButton, ListItemText, ListItemIcon} from "@mui/material";
import DeleteIcon  from '@mui/icons-material/Delete'
import { Download } from "@mui/icons-material";

export default function File (props){
    return (
        <ListItem disablePadding>
            <ListItemButton>
              
              <ListItemText primary={props.name} />
              <ListItemIcon>
                <DeleteIcon />
              </ListItemIcon>
              <ListItemIcon>
                <Download />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
    )
}