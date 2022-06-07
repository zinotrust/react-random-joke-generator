import { useState, useEffect } from "react";
import "./Jokes.scss";
import smileyFace from "../../assets/smiley.png";

const Jokes = () => {
  const url = "http://api.icndb.com/jokes/random";
  const [isLoading, setIsLoading] = useState(true);
  const [joke, setJoke] = useState({});

  async function getJoke() {
    setIsLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setJoke(data);
    setIsLoading(false);
  }

  useEffect(() => {
    setTimeout(() => {
      getJoke();
    }, 3000);
  }, []);

  return (
    <section className="jokes-sec --center-all">
      <div className="container joke --bg-light --card">
        <h2>Random Jokes Generator</h2>
        <img src={smileyFace} alt="smiley" className="smiley" />
        <hr />
        {isLoading ? (
          <h3>Loading...</h3>
        ) : (
          <p className="--my2">{joke.value.joke}</p>
        )}

        <hr />
        <button onClick={getJoke} className="--btn --btn-primary --btn-block">
          Generate New Joke
        </button>
      </div>
    </section>
  );
};

export default Jokes;
