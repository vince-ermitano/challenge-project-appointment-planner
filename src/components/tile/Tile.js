import React from "react";

export const Tile = (props) => {

  const { tile } = props;


  return (
    <div className="tile-container">
      { Object.values(tile).map((tile, index) => (
        <p key={index} className={index === 0 ? 'tile-title' : 'tile'}>{tile}</p>
        ))}
    </div>
  );
};
