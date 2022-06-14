import React from "react";
import { Card } from "semantic-ui-react";
import "../stylesheets/Host.css";

function Host({ selected , onSelect , host }) {
  const { imageUrl } = host
  /* NOTE: The className "host selected" renders a different style than simply "host". */
  const handleClick = () => {
    onSelect(host)
  }

  const cardClass = selected === host ? "host selected" : "host"
  
  return (
    <Card
      className={cardClass}
      onClick={handleClick}
      image={imageUrl}
      raised
      link
    />
  );
}

export default Host;
