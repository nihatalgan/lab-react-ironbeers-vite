import { useState, useEffect } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import axios from "axios";

function BeerDetailsPage() {
  const [fetching, setFetching] = useState(true);
  const [foundBeer, setFoundBeer] = useState(null);
  let { beerId } = useParams();

  useEffect(() => {
    // how to update the beers state with data
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((response) => {
        setFoundBeer(response.data);
        setFetching(false);
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {fetching && <p>Loading...</p>}
      {foundBeer && (
        <div>
          <img
            style={{ height: "200px" }}
            src={foundBeer.image_url}
            alt="beer_image"
          />
          <h4>{foundBeer.name}</h4>
          <p>{foundBeer.tagline}</p>
          <p>{foundBeer.first_brewed}</p>
          <p>{foundBeer.attenuation_level}</p>
          <p>{foundBeer.description}</p>
          <p>{foundBeer.contributed_by}</p>
        </div>
      )}
    </div>
  );
}

export default BeerDetailsPage;
