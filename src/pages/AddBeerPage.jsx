import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddBeerPage() {
  const [headLine, setHeadline] = useState("");
  const [tagLine, setTagline] = useState("");
  const [beerDescription, setBeerDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState("");
  const [contributedBy, setContributedBy] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    //1. Define a new apartment object
    const newBeer = {
      name: headLine,
      tagline: tagLine,
      description: beerDescription,
      first_brewed: firstBrewed,
      brewers_tips: brewersTips,
      attenuation_level: attenuationLevel,
      contributed_by: contributedBy,
    };
    //2. Send a Post request to the API in order to create the apartment
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer)
      .then((response) => {
        console.log("response.data", response.data);
        //3. Navigate back to the page with all the apartments to confirm it worked
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h3>Add New Beer</h3>

      {/*    ADD   */}
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="headLine"
          onChange={(e) => setHeadline(e.target.value)}
          value={headLine}
        />
        <label>Tagline</label>
        <input
          type="text"
          name="tagLine"
          onChange={(e) => setTagline(e.target.value)}
          value={tagLine}
        />
        <label>Description</label>
        <textarea
          type="text"
          name="beerDescription"
          onChange={(e) => setBeerDescription(e.target.value)}
          value={beerDescription}
        />
        <label>First Brewed</label>
        <input
          type="text"
          name="firstBrewed"
          onChange={(e) => setFirstBrewed(e.target.value)}
          value={firstBrewed}
        />
        <label>Brewer's Tips</label>
        <input
          type="text"
          name="brewersTips"
          onChange={(e) => setBrewersTips(e.target.value)}
          value={brewersTips}
        />
        <label>Attenuation Level</label>
        <input
          type="number"
          name="attenuationLevel"
          onChange={(e) => setAttenuationLevel(e.target.value)}
          value={attenuationLevel}
        />
        <label>Contributed By</label>
        <input
          type="text"
          name="contributedBy"
          onChange={(e) => setContributedBy(e.target.value)}
          value={contributedBy}
        />

        <button type="submit">Create a Beer</button>
      </form>
    </div>
  );
}

export default AddBeerPage;
