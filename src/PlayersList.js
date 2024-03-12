import React from "react";
import Player from "./Player";
import playersData from "./players";

const PlayersList = () => {
   // console.log(playersData)
    return (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
            {playersData.map((player, index) => {
            return <Player key={index} player={player} />
            })}
        </div>
    );
};

export default PlayersList;