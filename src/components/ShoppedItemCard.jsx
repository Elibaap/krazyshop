import { IoClose } from "react-icons/io5";

function ShoppedItemCard(props) {
  const prodImgDivStyle = { backgroundImage: `url(${props.imgsrc})` };

  function handleQtyChange(e) {
    if (e.target.value > 10) {
      e.target.value = props.qty;
      alert("Sorry, You are limited to 10 pieces of each item.");
      return;
    } else {
      e.target.value > props.qty
        ? props.increaseItemQty(e)
        : props.decreaseItemQty(e);
    }
  }

  function handleItemRemovalRequest(e) {
    props.removeItemFromBask(e);
  }

  return (
    <article className="shopped-item-card">
      <div className="shopped-item-image-div" style={prodImgDivStyle}></div>
      <div className="shopped-item-info-div">
        <p className="shopped-item-price">${props.price}</p>
        <p className="shopped-item-title">{props.title}</p>
        <input
          type="number"
          data-prod-id={props.prodID}
          className="shopped-item-quantity"
          min="1"
          max="10"
          defaultValue={props.qty}
          onChange={handleQtyChange}
        />
        <div
          className="shopped-item-remove-div"
          data-prod-id={props.prodID}
          onClick={handleItemRemovalRequest}
        >
          <span className="shopped-item-remove-icon">
            <IoClose />
          </span>
          <span className="shopped-item-remove-text">Remove</span>
        </div>
      </div>
    </article>
  );
}

export default ShoppedItemCard;
