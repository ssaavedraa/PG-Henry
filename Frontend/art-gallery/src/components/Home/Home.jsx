import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPaintings } from "../../redux/actions/actions";
import CardHomeArt from "../CardHome/CardHomeArt";
import "./home.css";

function Home() {
  const { paintings } = useSelector((state) => state);
  const dispatch = useDispatch();

  //Obras mas populares max 6
  useEffect(() => {
    dispatch(getPaintings());
  }, [dispatch]);

  
  function getRandom(){
    const random =
    paintings && paintings.length > 0
      ? Math.floor(Math.random() * (paintings.length - 1))
      : 1;
    return random;
  }

  let paintsPopulars = [];
  for (let i = 0; i < 5; i++) {
    paintsPopulars.push(paintings[getRandom()]);
  }

  return (
    <div className="container-home">
      <div className="text-conteiner-home">
        <span className="line anim-typewriter">
          {" "}
          THE BEST PAINTINGS & ARTISTS
        </span>
      </div>

      <div className="content-all">
        <div className="content-carrousel">
          {paintings.length > 0 && paintsPopulars.length > 0 && paintsPopulars.map((paint, index) => (
            <CardHomeArt
              key={index}
              id={paint.id}
              url={paint.photos[0].url}
              artist={paint.artist.name}
              title={paint.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
