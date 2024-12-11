import React from "react";
import "./Home.css";
import NavBar from "../../Components/NavBar/NavBar.jsx";
import HeroBanner from "../../assets/hero_banner.jpg";
import HeroTitle from "../../assets/hero_title.png";
import PlayIcon from "../../assets/Play_icon.png";
import InfoIcon from "../../assets/info_icon.png";
import TitleCards from "../../Components/TitleCards/TitleCards.jsx";
import Footer from "../../Components/Footer/Footer.jsx"

const Home = () => {
  return (
    <div className="home">
      <NavBar />
      <div className="hero">
        <img src={HeroBanner} alt="" className="banner-image" />
        <div className="hero-caption">
          <img src={HeroTitle} alt="" className="caption-img" />
          <p>
            Discovering his ties to a secret ancient order, a young man living
            in modern Istanbul embarks on a quest to save the city from an
            immortal enemy.{" "}
          </p>
          <div className="hero-btns">
            <button className="btn">
              <img src={PlayIcon} alt="" />
              Play
            </button>
            <button className="btn dark-btn">
              <img src={InfoIcon} alt="" />
              More Info
            </button>
          </div>
          <TitleCards/>
        </div>
      </div>
      <div className="more-cards">
      <TitleCards title={"Blockbuster Movies"} category={"top_rated"}/>
      <TitleCards title={"Only On Netflix"} category={"popular"}/>
      <TitleCards title={"Upcoming"} category={"upcoming"}/>
      <TitleCards title={"Top Pics For You"} category={"now_playing"}/>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
