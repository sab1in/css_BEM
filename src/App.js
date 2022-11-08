import React from "react";
import "./style.css";
import PlayListItem from "./components/playListItem";

const App = () => {
  return (
    <>
      <div className="playlist ">
        <div className="playlist__video">
          <video width={"100%"} controls>
            <source src="movie.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="playlist__video__title">Video title </div>
        </div>
        <div className="playlist__list">
          <PlayListItem playing={true} />
          <PlayListItem />
          <PlayListItem />
          <PlayListItem />
          <PlayListItem />
          <PlayListItem />
        </div>
      </div>
    </>
  );
};
export default App;
