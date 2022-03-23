import React, { useEffect, useState } from "react";
import axios from "axios";
import CardHomeArt from "../CardHome/CardHomeArt";
import "./home.css";

function Home() {
  const [obraRandon, setObraRandon] = useState([]);
  const random = Math.floor(Math.random() * 30 + 1);

  //Obras mas populares max 6
  useEffect(() => {
    axios
      .get(`/painting/getrecommended/${random}`)
      .then((res) => setObraRandon(res.data.slice(0, 5)))
      .catch((err) => console.log(err));
  }, []);

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
          {obraRandon.length > 0 &&
            obraRandon.map((paint, index) => (
              <CardHomeArt
                key={index}
                id={paint.id}
                url={paint.image}
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
