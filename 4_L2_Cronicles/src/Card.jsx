import React from "react";

function Card(props) {
  return (
    <div className="card">
      <img className="card--image" src={props.item.image} alt="" />
      <div className="card--content">
        <span className="span">
            <img className="img--icon"
            src={props.item.logo} alt="icona" />
          {props.item.chronicle}:
          <hr />
            {props.item.name}
        </span>
        <h4>Date Release</h4>
        <span className="release--dateKOR">
          {props.item.dateKOR} (Korea Release)
        </span>
        <span className="release--dateEU">
          {props.item.dateEU} (Europe Release)
        </span>
        <p className="release--dateEU">{props.item.desc}</p>
      </div>
    </div>
  );
}

export default Card;
