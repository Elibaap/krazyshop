import { useState, useEffect } from "react";
import uniqid from "uniqid";
import NavBar from "./NavBar";
import Breadcrumb from "./Breadcrumb";
import ProdSummaryCard from "./ProdSummaryCard";
import Footer from "./Footer";

function MenClothing() {
  const [menClothingData, setMenClothingData] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/men's%20clothing")
      .then((res) => res.json())
      .then((json) => {
        setMenClothingData(json);
      })
      .catch(() => console.log("Error fetching Data"));
  }, []);

  function getProductData() {
    return menClothingData.map((i) => (
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
    <section id="men-clothing-section">
      <NavBar backgroundColor="white" textColor="black" />
      <header>
        <Breadcrumb />
        <h1 className="prod-pg-title">MEN'S CLOTHING</h1>
      </header>
      <article className="products-article">
        {menClothingData && getProductData()}
      </article>
      <Footer />
    </section>
  );
}

export default MenClothing;
