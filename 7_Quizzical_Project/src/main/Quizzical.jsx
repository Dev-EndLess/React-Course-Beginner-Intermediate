import React, { useEffect, useState } from "react";
import data from "../mockData/data";
import Button from "../components/Button";
import { nanoid } from "nanoid";

function Quizzical() {
  const [APIdata, setAPIData] = useState(data);

  // useEffect(() => {
  //   async function getData() {
  //     const response = await fetch(`https://opentdb.com/api.php?amount=5`)
  //     const data = await response.json()
  //     setAPIData(data.results)
  //   }
  //   getData()
  // }, [])

  console.log(APIdata)

  // Funzione per mischiare un array
  function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  return (
    <div className="main">
      {APIdata.map((item, index) => {
        // Combina le risposte sbagliate con la risposta corretta
        const allAnswers = shuffleArray([...item.incorrect_answers, item.correct_answer]);
        return (
          // <div key={index}>
          //   <h3>{item.question}</h3>
          //   <Button>
          //     {allAnswers.map((answer, idx) => (
          //       <li key={idx}>{answer}</li>
          //     ))}
          //   </Button>
          //   <hr/>
          // </div>
          <div key={index}>
          <h3>{item.question}</h3>
          {allAnswers.map((answer, idx) => (
            <Button key={idx}>{answer}</Button>
          ))}
          <hr />
        </div>
        );
      })}
    </div>
  );
}

export default Quizzical;
