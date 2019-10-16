import React from "react";

function FilterParams(props) {
  return (
    <p>
      {" "}
      Selected height <span className="selectedHeight">{props.height}</span> (m)
      and weakness{" "}
      <span
        className={props.weakness.toLocaleLowerCase() + " type optionWeakness"}
      >
        {props.weakness === "" ? "All" : props.weakness}
      </span>{" "}
    </p>
  );
}

export default FilterParams;
