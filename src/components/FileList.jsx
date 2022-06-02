import { List } from "@mui/material";

import File from "./File";
import Plus from "./Plus";



export default function FileList({listing,socket}){
  const arr = listing ? listing : []
  
    return (
        <List>
          {arr.map((filename) => (
        <File name={filename} socket={socket}/>
      ))}
        </List>
    )
}


