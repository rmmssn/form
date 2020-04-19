import React from "react";
import "./tile.css";

interface ITile {
   children: React.ReactText | React.ReactNode;
   variation: "primary" | "secondary";
   onClick: () => void;
}

export default function Tile(props:ITile) {
   
   const { children, variation, onClick } = props;
   const isClickable = !!(onClick) ? "link" : "";

   const classes = `tile ${variation + " " + isClickable}`;

   return (
      <div className={classes} onClick={onClick && onClick}>
         {children}
      </div>
   )
}

Tile.defaultProps = {
   children: "Tile content. Can be either a 'text' or a html 'node'",
   variation: "primary",
} as ITile;