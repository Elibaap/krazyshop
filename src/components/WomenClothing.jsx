import { useState, useEffect } from "react";
import uniqid from "uniqid";
import NavBar from "./NavBar";
import Breadcrumb from "./Breadcrumb";
import ProdSummaryCard from "./ProdSummaryCard";
import Footer from "./Footer";

function WomenClothing() {
  const [womenClothingData, setWomenClothingData] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/women's%20clothing")
      .then((res) => res.json())
      .then((json) => {
        setWomenClothingData(json);
      })
      .catch(() => console.log("Error fetching Data"));
  }, []);

  function getProductData() {
    return womenClothingData.map((i) => (
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
    <section id="women-clothing-section">
      <NavBar backgroundColor="white" textColor="black" />
      <header>
        <Breadcrumb />
        <h1 className="prod-pg-title">WOMEN'S CLOTHING</h1>
      </header>
      <article className="products-article">
        {womenClothingData && getProductData()}
      </article>
      <Footer />
    </section>
  );
}

export default WomenClothing;
