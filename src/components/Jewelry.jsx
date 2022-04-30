import { useState, useEffect } from "react";
import uniqid from "uniqid";
import NavBar from "./NavBar";
import Breadcrumb from "./Breadcrumb";
import ProdSummaryCard from "./ProdSummaryCard";
import Footer from "./Footer";

function Jewelry() {
  const [jewelryData, setJewelryData] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/jewelery")
      .then((res) => res.json())
      .then((json) => {
        setJewelryData(json);
      })
      .catch(() => console.log("Error fetching Data"));
  }, []);

  function getProductData() {
    return jewelryData.map((i) => (
      <ProdSummaryCard
        key={uniqid()}
        id={i.id}
        title={i.title}
        price={i.price}
        category={i.category}
        imagesrc={i.image}
      />
    ));
  }

  return (
    <section id="jewelry-section">
      <NavBar backgroundColor="white" textColor="black" />
      <header>
        <Breadcrumb />
        <h1 className="prod-pg-title">JEWELRY</h1>
      </header>
      <article className="products-article">
        {jewelryData && getProductData()}
      </article>
      <Footer />
    </section>
  );
}

export default Jewelry;
