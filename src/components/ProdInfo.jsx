import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Breadcrumb from "./Breadcrumb";
import ProdFullDescCard from "./ProdFullDescCard";
import ItemToBaskAlertModal from "./ItemToBaskAlertModal";
import Footer from "./Footer";

function ProdInfo({ match }) {
  const [prodData, setProdData] = useState(null);
  const productID = match.params.productid;

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productID}`)
      .then((res) => res.json())
      .then((json) => setProdData(json))
      .catch(() => console.log("Error fetching Data"));
  }, [productID]);

  return (
    <section className="product-info-section">
      <NavBar backgroundColor="white" textColor="black" />
      <header>
        <Breadcrumb />
        <h1 className="prod-pg-title">PRODUCT INFO</h1>
      </header>
      <ItemToBaskAlertModal />
      {prodData && (
        <ProdFullDescCard
          id={prodData.id}
          title={prodData.title}
          price={prodData.price}
          description={prodData.description}
          imagesrc={prodData.image}
        />
      )}
      <Footer />
    </section>
  );
}

export default ProdInfo;
