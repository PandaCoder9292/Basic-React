import RestCard from "./RestCard";
import {useState, useEffect} from "react";   //Named Import
import Shimmer from "./Shimmer";

const Body = () => {
  // Local State Variable
  const [listOfRest, setListOfRest] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [searchText, setSerachText] = useState("");

  useEffect(() =>{
    fetchData();
  }, []);

  //console.log(listOfRest);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7262317&lng=76.8562405&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    
    setListOfRest(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };
  //console.log(listOfRest);

  return listOfRest.length === 0 ?
  <Shimmer /> : (
    <div className="body">
      <div className="filter" >
        <div className="search">
          <input type="text" className="search-box" value={searchText} onChange={(e) =>{
            setSerachText(e.target.value);
          }} />
          <button className="search-btn" onClick={
            //Filter the cards and update UI
            () =>{
              console.log(searchText);
              const filteredRestList = listOfRest.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRes(filteredRestList);
            }}>Search</button>
        </div>
        <button className="filter-btn" onClick={() =>{
            const newListOfRest = listOfRest.filter(
                (res) => res.info.avgRating >= 4.6
            );
            setListOfRest(newListOfRest);
            // console.log(listOfRest)
        }}>Top Rated Resturant</button>
      </div>
      <div className="res-container">
        {
          filteredRes.map((resturant) =>(
            <RestCard key={resturant.info.id} resData={resturant} />
          ))
        }
      </div>
    </div>
  )
}

export default Body;