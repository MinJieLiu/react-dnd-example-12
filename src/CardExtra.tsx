import React, { useRef } from "react";
import { useDrag } from "react-dnd";
import ItemTypes from "./ItemTypes";

const style = {
  border: "1px dashed gray",
  padding: "0.5rem 1rem",
  marginBottom: ".5rem",
  backgroundColor: "white",
  cursor: "move",
};

export interface CardProps {}

const CardExtra: React.FC<CardProps> = () => {
  const ref = useRef<HTMLDivElement>(null);

  const [, drag] = useDrag({
    item: { type: ItemTypes.CARD, id: "fixed", text: "固定" },
  });

  drag(ref);
  return (
    <div ref={ref} style={{ ...style }}>
      固定
    </div>
  );
};

export default CardExtra;
