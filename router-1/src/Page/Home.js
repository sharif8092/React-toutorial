

import { Link } from "react-router-dom"
import CurrentLocation from "../Components/CurrentLocation";


function Home (){
    return(
      <div>
          <h1>
              HomePage
          </h1>

        <CurrentLocation />
      </div>
    )
  }
  export default Home;