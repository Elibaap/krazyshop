import { useState, useEffect } from "react";
import uniqid from "uniqid";
import NavBar from "./NavBar";
import Breadcrumb from "./Breadcrumb";
import Footer from "./Footer";
import ShoppedItemCard from "./ShoppedItemCard";
import { shoppingBasket } from "./ProdFullDescCard";
import { SiMastercard } from "react-icons/si";

function Basket() {
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  function updateTotalItems() {
    const totalItemsInShoppingBasket = shoppingBasket.reduce(
      (acc, curr) => acc + curr.qty,
      0
    );
    const totalPriceOfItemsInBasket = shoppingBasket.reduce(
      (acc, curr) => acc + curr.qty * curr.price,
      0
    );
    setTotalItems(totalItemsInShoppingBasket);
    setTotalPrice(totalPriceOfItemsInBasket.toFixed(2));
  }

  function increaseItemQty(e) {
    const prodID = e.target.getAttribute("data-prod-id");
    shoppingBasket.forEach((i) => i.id === Number(prodID) && (i.qty += 1));
    updateTotalItems();
  }

  function decreaseItemQty(e) {
    const prodID = e.target.getAttribute("data-prod-id");
    shoppingBasket.forEach((i) => i.id === Number(prodID) && (i.qty -= 1));
    updateTotalItems();
  }

  function removeItemFromBask(e) {
    const prodID = e.currentTarget.getAttribute("data-prod-id");
    shoppingBasket.forEach(
      (i, ind) => i.id === Number(prodID) && shoppingBasket.splice(ind, 1)
    );
    updateTotalItems();
  }

  function handlePaymentBtnClick(paymentMode) {
    totalPrice > 0 &&
      alert(
        `Payment successful! Your real ${paymentMode} has not been debited. Thank you.`
      );
  }

  useEffect(() => updateTotalItems(), []);

  const shoppedItems = shoppingBasket.map((i) => (
    <ShoppedItemCard
      prodID={i.id}
      title={i.title}
      price={i.price}
      imgsrc={i.imgsrc}
      qty={i.qty}
      increaseItemQty={increaseItemQty}
      decreaseItemQty={decreaseItemQty}
      removeItemFromBask={removeItemFromBask}
      key={uniqid()}
    />
  ));

  return (
    <section id="cart-section">
      <NavBar backgroundColor="white" textColor="black" />
      <header>
        <Breadcrumb />
        <h1 className="cart-pg-title">YOUR SHOPPING BASKET</h1>
        <p>You have {totalItems} items in the basket.</p>
      </header>
      <div id="shopped-items-and-total-price-div">
        <div id="shopping-basket-div">{shoppedItems}</div>
        <div id="shopping-overview-div">
          <section id="order-summary-section">
            <h3 id="order-summary-heading">ORDER SUMMARY</h3>
            <div id="total-qty-and-price-div">
              <span>{totalItems} ITEMS</span>
              <span>${totalPrice}</span>
              <span>DELIVERY</span>
              <span>FREE</span>
              <span className="summary-total">TOTAL</span>
              <span className="summary-total">${totalPrice}</span>
            </div>
          </section>
          <section id="payment-method-section">
            <h3 id="payment-method-heading">PAYMENT METHOD</h3>
            <div id="bank-card-btn-offset-border">
              <button
                id="bank-card-btn"
                className="btn"
                onClick={() => handlePaymentBtnClick("card")}
              >
                <SiMastercard /> <span id="bank-card-btn-text">Bank Card</span>
              </button>
            </div>
            <button
              id="paypal-btn"
              className="btn"
              onClick={() => handlePaymentBtnClick("PayPal account")}
            ></button>
          </section>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Basket;
