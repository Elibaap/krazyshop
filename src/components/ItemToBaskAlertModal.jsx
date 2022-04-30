import { Link } from "react-router-dom";
import { BiCheck } from "react-icons/bi";
import { IoClose } from "react-icons/io5";

function ItemToBaskAlertModal() {
  return (
    <article id="added-to-bask-modal-bg">
      <div id="added-to-bask-modal-div">
        <span id="added-to-bask-modal-chk-mark-span">
          <BiCheck />
        </span>
        <span id="added-to-bask-modal-text-span">
          Item successfully added to your basket!
        </span>
        <Link to="/basket" id="view-bask-modal-btn" className="btn">
          View Basket
        </Link>
        <span id="close-added-to-bask-modal-icon">
          <IoClose />
        </span>
      </div>
    </article>
  );
}

export default ItemToBaskAlertModal;
