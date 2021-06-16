import React, { Component } from "react";
import Counter from "./counter";
// trabaja SIN ESTADO LOCAL en Counter
export default function Counters (props){

    console.log('counterss rendered');
    return (
      <div>
        <button
          onClick={props.onReset}
          className="brn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {props.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={props.onDelete}
            onIncrement={props.onIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  
}

