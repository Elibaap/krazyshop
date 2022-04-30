import { useState, useEffect } from "react";
import uniqid from "uniqid";
import NavBar from "./NavBar";
import Breadcrumb from "./Breadcrumb";
import ProdSummaryCard from "./ProdSummaryCard";
import Footer from "./Footer";

function Electronics() {
  const [electronicsData, setElectronicsData] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/electronics")
      .then((res) => res.json())
      .then((json) => {
        setElectronicsData(json);
      })
      .catch(() => console.log("Error fetching Data"));
  }, []);

  function getProductData() {
    return electronicsData.map((i) => (
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
    <section id="electronics-section">
      <NavBar backgroundColor="white" textColor="black" />
      <header>
        <Breadcrumb />
        <h1 className="prod-pg-title">ELECTRONICS</h1>
      </header>
      <article className="products-article">
        {electronicsData && getProductData()}
      </article>
      <Footer />
    </section>
  );
}

export default Electronics;
