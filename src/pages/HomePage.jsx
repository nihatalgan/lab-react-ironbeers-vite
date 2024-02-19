import { Link } from "react-router-dom";
import beersImg from "../assets/beers.png";
import randomBeer from "../assets/random-beer.png";
import newBeer from "../assets/new-beer.png";

function HomePage() {
  return (
    <div>
      <div style={{ width: "705px" }}>
        <img
          src={beersImg}
          alt="addbeers"
          // style={{ height: "20px", width: "30px", margin: "auto" }}
        />
        <Link style={{ fontSize: "2rem" }} to={`/beers`}>
          All Beers
        </Link>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis dolor
          mollitia, dolore quod quis quos ducimus modi corrupti quaerat iste!
          Dolores minima amet minus explicabo perspiciatis odio similique
          recusandae ad.
        </p>
      </div>
      <div style={{ width: "705px" }}>
        <img
          src={randomBeer}
          alt="addbeers"
          // style={{ height: "20px", width: "30px", margin: "auto" }}
        />
        <Link style={{ fontSize: "2rem" }} to={`/random-beer`}>
          Random Beer
        </Link>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis dolor
          mollitia, dolore quod quis quos ducimus modi corrupti quaerat iste!
          Dolores minima amet minus explicabo perspiciatis odio similique
          recusandae ad.
        </p>
      </div>
      <div style={{ width: "705px" }}>
        <img
          src={newBeer}
          alt="addbeers"
          // style={{ height: "20px", width: "30px", margin: "auto" }}
        />
        <Link style={{ fontSize: "2rem" }} to={`/new-beer`}>
          New Beer
        </Link>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis dolor
          mollitia, dolore quod quis quos ducimus modi corrupti quaerat iste!
          Dolores minima amet minus explicabo perspiciatis odio similique
          recusandae ad.
        </p>
      </div>
    </div>
  );
}

export default HomePage;
