/* 
Import the useState and useEffect hooks from React 
Import the dataUpperBody data from the libraries/dataUpperBody.js file
Import the ReactPlayer component from react-player
*/
"use client";
import { useState, useEffect } from "react";
import dataLowerBody from "../../libraries/dataLowerBody";
import ReactPlayer from "react-player";

/* 
Export the IdUpperHome component
Convert params.id to a number
Find the exercise with the id of itemId in the dataUpperBody array.
Create a state variable to store whether the video player should be shown.
Set the showPlayer state variable to true when the component mounts.
If the item is not found, return a <div> element with the text "Item not found".
Then Return the IdUpperHome component
*/
export default function IdLowerHome({ params }) {
  const itemId = parseInt(params.id); // Convert params.id to a number
  const item = dataLowerBody.find((item) => item.id === itemId);
  const [showPlayer, setShowPlayer] = useState(false);

  useEffect(() => {
    setShowPlayer(true);
  }, []);

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <section className="sec-video">
      <h3>{item.id}: {item.name}</h3>
      <img src={`/images/${item.picture}`} className="drill-img" alt="" />
      {showPlayer && (
        <div className="video-container">
          <div className="video-container-inner">
            <ReactPlayer
              url={`${item.video}`}
              width="100%"
              height="100%"
              className="video-player"
            />
          </div>
        </div>
      )}
    </section>
  );
}
