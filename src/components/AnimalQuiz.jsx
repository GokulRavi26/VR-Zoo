//src/components/AnimalQuiz.jsx
import { useState } from "react";

export default function AnimalQuiz({ quiz = {}, lang = "en" }) {
  const questions = quiz?.[lang] || [];

  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [done, setDone] = useState(false);

  if (questions.length === 0) return null;

  const current = questions[index];

  const handleAnswer = (option) => {
    if (selected) return;

    setSelected(option);

    if (option === current.answer) {
      setScore((s) => s + 1);
    }

    setTimeout(() => {
      setSelected(null);

      if (index + 1 < questions.length) {
        setIndex((i) => i + 1);
      } else {
        setDone(true);
      }
    }, 800);
  };

  const restartQuiz = () => {
    setIndex(0);
    setScore(0);
    setSelected(null);
    setDone(false);
  };

  if (done) {
    const win = score >= questions.length / 2;

    return (
      <div style={styles.result}>
        <h3>{win ? "🏆 You Win!" : "❌ Try Again"}</h3>
        <p>
          Score: {score} / {questions.length}
        </p>
        <button onClick={restartQuiz}>🔄 Restart Quiz</button>
      </div>
    );
  }

  return (
    <div style={styles.box}>
      <h3>🧠 Quiz</h3>
      <p>{current.question}</p>

      {current.options.map((opt) => {
        let bg = "#eee";

        if (selected) {
          if (opt === current.answer) bg = "#4caf50";
          else if (opt === selected) bg = "#f44336";
        }

        return (
          <button
            key={opt}
            onClick={() => handleAnswer(opt)}
            style={{
              ...styles.option,
              background: bg,
              color: selected ? "#fff" : "#000",
            }}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
}

const styles = {
  box: {
    marginTop: 20,
    padding: 15,
    borderRadius: 10,
    background: "#f9f9f9",
  },
  option: {
    width: "100%",
    padding: 10,
    marginBottom: 8,
    border: "none",
    borderRadius: 6,
    cursor: "pointer",
  },
  result: {
    marginTop: 20,
    padding: 20,
    borderRadius: 10,
    background: "#e8f5e9",
    textAlign: "center",
  },
};
