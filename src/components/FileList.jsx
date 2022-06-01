import { List } from "@mui/material";

import File from "./File";
import Plus from "./Plus";



export default function FileList({listing}){
  const arr = listing ? listing : []
  console.log(arr)
    return (
        <List>
          {arr.map((filename) => (
        <File name={filename}/>
      ))}
        </List>
    )
}


