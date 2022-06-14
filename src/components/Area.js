import React from "react";
import "../stylesheets/Area.css";
import HostList from './HostList'

function Area({ area , selected , onSelect , activeHosts }) {
  const { name , limit } = area

  const sanitizeString = (string) => {
    const replaceUnderscore = string.replace("_", " ")
    const wordsArray = replaceUnderscore.split(" ")
    const capitalizeWords = wordsArray.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    return capitalizeWords.join(" ")
  };

  const sanitizeName = sanitizeString(name);
  const filteredHosts = activeHosts.filter((host) => host.area === name);

  return (
    <div
      className="area"
      id={
        name
      }
    >
      <h3 className="labels">
        {/* Don't just pass in the name from the data...clean that thing up */}
        {sanitizeName}
      </h3>
      {/* See Checkpoint 1 item 2 in the Readme for a clue as to what goes here */}
      <HostList onSelect={onSelect} hosts={filteredHosts} selected={selected}/>
    </div>
  );
}

Area.propTypes = {
  hosts: function (props) {
    if (props.hosts.length > props.limit) {
      throw Error(
        `HEY!! You got too many hosts in ${props.name}. The limit for that area is ${props.limit}. You gotta fix that!`
      );
    }
  },
};

export default Area;
