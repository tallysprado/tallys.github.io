import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import {useEffect} from 'react'

function onClick(){
    document.getElementById('projects').scrollIntoView({behavior: "smooth", block: "center"});
}
export default function DownButton() {
    useEffect(()=> {
        document.getElementById('downButton').addEventListener('click', onClick)
    }, [])
  return (
    <div id="downButton">
        <FontAwesomeIcon className='box bounce-1' icon={faAngleDown} color="white" size="2x" />
    </div>
  );
}
