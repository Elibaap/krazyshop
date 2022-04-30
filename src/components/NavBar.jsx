import { Link } from "react-router-dom";
import { BiCartAlt } from "react-icons/bi";
import { shoppingBasket } from "./ProdFullDescCard";

function NavBar(props) {
  const shoppingCartStyle = { fontSize: "1.3rem", color: props.textColor };
  const navStyle = { backgroundColor: props.backgroundColor };
  const navTextStyle = { color: props.textColor };
  const totalItemsInShoppingBasket = shoppingBasket.reduce(
    (acc, curr) => acc + curr.qty,
    0
  );

  return (
    <nav style={navStyle}>
      <Link className="logo" style={navTextStyle} to="/">
        krazyshop.
      </Link>
      <ul className="nav-pgs-links">
        <li>
          <Link style={navTextStyle} to="/all">
            All
          </Link>
        </li>
        <li>
          <Link style={navTextStyle} to="/women">
            Women's Clothing
          </Link>
        </li>
        <li>
          <Link style={navTextStyle} to="/men">
            Men's Clothing
          </Link>
        </li>
        <li>
          <Link style={navTextStyle} to="/jewelry">
            Jewelry
          </Link>
        </li>
        <li>
          <Link style={navTextStyle} to="/electronics">
            Electronics
          </Link>
        </li>
      </ul>
      <Link className="cart-link" to="/basket">
        <span className="cart-total-items" style={navTextStyle}>
          {totalItemsInShoppingBasket > 99 ? "99+" : totalItemsInShoppingBasket}
        </span>
        <span>
          <BiCartAlt style={shoppingCartStyle} />
        </span>
      </Link>
    </nav>
  );
}

export default NavBar;
