import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Card({ handleCardClick, card, isMatch, isMismatch, isFlipped }) {
  const match = isMatch ? "match" : "";
  const mismatch = isMismatch ? "mismatch" : "";
  const flipped = isFlipped || isMatch || isMismatch ? "flipped" : "";

  return (
    <div
      onClick={() => handleCardClick(card.id, card.name)}
      className={`card ${flipped} ${match}${mismatch}`.trim()}
    >
      <FontAwesomeIcon icon={card.name} />
    </div>
  );
}

export default Card;