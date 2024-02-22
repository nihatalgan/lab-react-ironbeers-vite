import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function AllBeersPage() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    // how to update the beers state with data
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
        setBeers(response.data);
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h3>List of Beers</h3>
      {beers.map((beer) => {
        return (
          <div key={beers._id}>
            <img
              style={{ height: "200px" }}
              src={beer.image_url}
              alt="beer_image"
            />
            <Link to={`/beers/${beer._id}`}>
              <h4>{beer.name}</h4>
            </Link>
            <p>${beer.tagline}</p>
            <p>Contributed By: {beer.contributed_by}</p>
          </div>
        );
      })}
    </div>
  );
}

export default AllBeersPage;
