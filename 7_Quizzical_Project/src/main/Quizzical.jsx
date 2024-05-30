import React, { useEffect, useState } from "react";
import { decode } from "html-entities";
import data from "../mockData/data";
import Button from "../components/Button";
import { nanoid } from "nanoid";
import { Navigate } from "react-router-dom"; // Importa Navigate


function Quizzical({ onPlayAgain }) {
  // Decodifica e mescola i dati solo una volta, utilizzando useEffect
  useEffect(() => {
    const decodedData = data.map((item) => ({
      ...item,
      question: decode(item.question),
      correct_answer: decode(item.correct_answer),
      incorrect_answers: item.incorrect_answers.map((answer) => decode(answer)),
    }));

    const shuffled = decodedData.reduce((acc, item, index) => {
      const allAnswers = shuffleArray([
        ...item.incorrect_answers,
        item.correct_answer,
      ]);
      acc[index] = allAnswers;
      return acc;
    }, {});

    setAPIData(decodedData);
    setShuffledAnswers(shuffled);
  }, []);

  const [APIdata, setAPIData] = useState([]);
  const [shuffledAnswers, setShuffledAnswers] = useState({});
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [isPlayAgainDisabled, setIsPlayAgainDisabled] = useState(true);
  const [showResults, setShowResults] = useState(false);

  // useEffect(() => {
  //   async function getData() {
  //     const response = await fetch(`https://opentdb.com/api.php?amount=5`)
  //     const data = await response.json()
  // Decodifica domande e risposte
  // const decodedData = data.results.map(item => ({
  //   ...item,
  //   question: decode(item.question),
  //   correct_answer: decode(item.correct_answer),
  //   incorrect_answers: item.incorrect_answers.map(answer => decode(answer))
  // }));
  // setAPIData(decodedData);
  //   }
  //   getData()
  // }, [])

  console.log(APIdata);

  // Funzione per mischiare un array
  function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  // Seleziona o deseleziona una risposta
  const handleSelectAnswer = (questionIndex, answer) => {
    setSelectedAnswers((prevSelectedAnswers) => ({
      ...prevSelectedAnswers,
      [questionIndex]: answer,
    }));
  };

  // Funzione per controllare le risposte e calcolare il punteggio
  const checkAnswers = () => {
    let correctAnswers = 0;
    APIdata.forEach((item, index) => {
      if (selectedAnswers[index] === item.correct_answer) {
        correctAnswers++;
      }
    });
    setCorrectAnswers(correctAnswers);
    setIsPlayAgainDisabled(false);
    setShowResults(true); // Mostra i risultati
  };

  return (
    <div className="main">
      <section class="wrapper">
        <div class="top">Quizzical</div>
        <div class="bottom" aria-hidden="true">
          Quizzical
        </div>
      </section>
      {APIdata.map((item, index) => {
        const allAnswers = shuffledAnswers[index];
        return (
          <div key={index}>
            <br />
            <h3 className="question-text">{item.question}</h3>
            <div className="answer-box">
              {allAnswers.map((answer, idx) => (
                <Button
                key={idx}
                answer={answer}
                isSelected={selectedAnswers[index] === answer}
                onSelect={() => handleSelectAnswer(index, answer)}
                isCorrect={showResults && answer === item.correct_answer}
                isIncorrect={showResults && selectedAnswers[index] === answer && answer !== item.correct_answer}
                isDisabled={showResults} 
              >
                {answer}
              </Button>
              ))}
            </div>
            <br />
            <hr />
          </div>
        );
      })}
      <div className="play-again">
        <h2>You scored {correctAnswers}/5 correct answers</h2>
        <button className="button-30" onClick={checkAnswers}>
          Check Answers
        </button>
        <button className="button-30" disabled={isPlayAgainDisabled}>
          Play Again
        </button>
      </div>
    </div>
  );
}

export default Quizzical;
