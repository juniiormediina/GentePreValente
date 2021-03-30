import React from "react";

/* Components */
import DetailCard from "./DetailCard";

/* data */
import { cards } from "../../assets/data/cards_data";

const Card = () => {
  return (
    <div className="container mx-auto mt-12">
      <div className="my-6 flex flex-wrap  rounded-2xl">
        {cards.map((cards, i) => (
          <div
            key={i}
            className="w-full sm:w-1/2 px-2 md:px-8  my-14 rounded-2xl"
          >
            <DetailCard cards={cards} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
