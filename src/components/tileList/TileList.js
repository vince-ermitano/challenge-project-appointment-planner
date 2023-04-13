import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = (props) => {

  const { tiles } = props;

  return (
    <div>
      { tiles.map(tile => (
        <Tile key={tile.id} tile={tile} />
      )) }
    </div>
  );
};
