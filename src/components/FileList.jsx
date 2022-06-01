import { List } from "@mui/material";

import File from "./File";
import Plus from "./Plus";


const arr = ['file1',"file2",'file3']
export default function FileList(){
    return (
        <List>
          {arr.map((filename) => (
        <File name={filename}/>
      ))}
        </List>
    )
}


