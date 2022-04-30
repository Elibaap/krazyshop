import { Link } from "react-router-dom";

function ProdSummaryCard(props) {
  const prodID = props.id;
  const prodImgDivStyle = { backgroundImage: `url(${props.imagesrc})` };
  let prodCategory = null;

  switch (props.category.replace(/\W/g, "-")) {
    case "men-s-clothing":
      prodCategory = "men";
      break;
    case "women-s-clothing":
      prodCategory = "women";
      break;
    case "jewelery":
      prodCategory = "jewelry";
      break;
    case "electronics":
      prodCategory = "electronics";
      break;
    default:
      return "Invalid Category";
  }

  return (
    <Link to={`${prodCategory}/${prodID}`} className="prod-sum-card-link">
      <div className="prod-sum-img-div" style={prodImgDivStyle}></div>
      <div className="prod-sum-info-div">
        <p className="prod-sum-price">${props.price}</p>
        <p className="prod-sum-title">{props.title}</p>
      </div>
    </Link>
  );
}

export default ProdSummaryCard;
