import { useLocation } from "react-router-dom";

const CurrentLocation = ()=>{
    const location = useLocation();

   return(
    <div>
        <p>CurrentLocation:{location.pathname}</p>
    </div>
   )
}
export default CurrentLocation;