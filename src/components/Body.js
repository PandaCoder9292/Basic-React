import RestCard from "./RestCard";
import resList from "../utils/mockData";
import {useState} from "react";

const Body = () => {
  // Local State Variable
    const [listOfRest, setListOfRest] = useState(resList);

  return (
    <div className="body">
      <div className="filter" >
        <button className="filter-btn" onClick={() =>{
            const newListOfRest = listOfRest.filter(
                (res) => res.info.avgRating >= 4
            );
            setListOfRest(newListOfRest);
            // console.log(listOfRest)
        }}>Top Rated Resturant</button>
        <button className="filter-btn" onClick={() =>{
            setListOfRest(resList);
            // console.log(listOfRest)
        }}>Reset</button>
      </div>
      <div className="res-container">
        {
          listOfRest.map((resturant) =>(
            <RestCard key={resturant.info.id} resData={resturant} />
          ))
        }
      </div>
    </div>
  )
}

export default Body;