import { Link } from "react-router-dom";
import NavBar from "./NavBar";

function App() {
  return (
    <div id="home-div">
      <NavBar backgroundColor="transparent" textColor="white" />
      <article id="tagline-article">
        <h1 id="main-tagline">Rakun is Love</h1>
        <p id="sub-tagline">Bilhin kahit di kailangan. Bili lang ng bili.</p>
        <div id="tagline-btn-offset-border">
          <Link to="/all" id="tagline-btn" className="btn">
            SHOP NOW
          </Link>
        </div>
      </article>
    </div>
  );
}

export default App;
