import Navbar from './Navbar';
import FileList from './FileList';
import Plus from './Plus';

export default function Main(props){
    return (
        <>
          <Navbar setSocket={props.setSocket} file={props.file}/>
          <FileList listing={props.listing} socket={props.socket}/>
          <Plus file={props.file} setFile={props.setFile} socket={props.socket}/>
        </>
    )
}