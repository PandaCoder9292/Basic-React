import { CDN_URL } from "../utils/constants";

const styleCard = {
  backgroundColor: "#f0f0f0"
}

const RestCard = (props) => {
  // console.log(props);
  const {resData} = props;
  const {cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo } = resData?.info;
  return (
    <div className="res-card" style={styleCard}>
      <img className="res-logo" alt="res-card" src={CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{sla.slaString} mins.</h4>
      <h4>{costForTwo}</h4>
    </div>
  )
}

export default RestCard;