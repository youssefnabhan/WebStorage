import Navbar from './Navbar';
import FileList from './FileList';
import Plus from './Plus';

export default function Main(props){
    return (
        <>
      <Navbar/>
      <FileList listing={props.listing}/>
      <Plus/>
        </>
    )
}