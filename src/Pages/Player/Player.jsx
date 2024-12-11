import React, { useEffect, useState } from "react";
import "./Player.css";
import BackArrowIcon from "../../assets/back_arrow_icon.png";
import {useNavigate, useParams} from 'react-router-dom'

const Player = () => {

  const {id} = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: ""
  });

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNTU5ZjFlZmYyOTBmYzEzZmM1OGQ4NjUzMWM3NDMzNCIsIm5iZiI6MTczMzQ5ODMzNi4yMDk5OTk4LCJzdWIiOiI2NzUzMTVlMDgwMmJhZDE2MDkxYWJhMDMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.C3rYBEWqRK8QCjPHKlGdpKJoReXNOQpAVGtapmrkCAA",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results[0]))
      .catch((err) => console.F=error(err));
  },[apiData]);

  return (
    <div className="player">
      <img src={BackArrowIcon} alt="" onClick={()=>{navigate(-1)}}/>
      <iframe
        width="90%"
        height="90%"
        src={`https://www.youtube.com/embed/${apiData.key}`}
        frameborder="0"
        title="trailer"
        allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
};

export default Player;
