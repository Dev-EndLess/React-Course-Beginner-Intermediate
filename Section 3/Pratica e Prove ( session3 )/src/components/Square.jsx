import React from "react";
import { useState } from "react";
import boxes from "./data/boxes";
import Box from "./shared/Box";

function Square() {
  /**
   *   * Challenge part 1:
   * 1. Inizializa uno state che come valore predefinito
   *    abbia l'array boxes.js
   *
   * 2. Usa map sull array e visualizzalo su una componente Box
   *
   * 3. Passa una props `on` al componente Box e applica uno style
   *    dinamico. Se e' on, setta su backgroundColor to "#222222"
   *    se e' off settalo su backgroundColor to '#40ff00'
   *
   * 4. Crea una function con parametro id, upgrada lo state e usando un map
   *    sull'array fai tornare un oggetto poi usa un ternary su square.id in modo
   *    che se e' true torni l'oggetto e inverta square.on altrimenti ritorni square
   *
   */

  const [cubes, setBoxes] = useState(boxes);

  function toggle(id) {
    setBoxes(prevState =>
      prevState.map(cube => 
      (cube.id === id ? { ...cube, on: !cube.on } : cube)
      )
    );
  }

  const cubeArray = cubes.map(box => {
    return <Box 
    id={box.id} 
    key={box.id} 
    on={box.on} 
    handleClick={toggle} />;
  });

  return <div>{cubeArray}</div>;
}

export default Square;
