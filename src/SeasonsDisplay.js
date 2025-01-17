import "./SeasonsDisplay.css";

import React from "react";

const seasonConfig = {
  summer: {
    text: "Lets hit the beach",
    iconName: "sun"
  },
  winter: {
    text: "Burr, its chilly",
    iconName: "snowflake"
  }
};

const getSesason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonsDisplay = props => {
  const season = getSesason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season]; //{text, iconName}
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonsDisplay;
