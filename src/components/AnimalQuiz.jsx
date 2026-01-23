// import { useState } from "react";

// export default function AnimalQuiz({ quiz = [] }) {
//   const [index, setIndex] = useState(0);
//   const [score, setScore] = useState(0);
//   const [selected, setSelected] = useState(null);
//   const [done, setDone] = useState(false);

//   if (quiz.length === 0) return null;

//   const currentQuestion = quiz[index];

//   const handleAnswer = (option) => {
//     if (selected) return; // prevent double click

//     setSelected(option);

//     if (option === currentQuestion.answer) {
//       setScore((prev) => prev + 1);
//     }

//     // move to next question after delay
//     setTimeout(() => {
//       setSelected(null);

//       if (index + 1 < quiz.length) {
//         setIndex((prev) => prev + 1);
//       } else {
//         setDone(true);
//       }
//     }, 800);
//   };

//   /* 🔁 Restart Quiz */
//   const restartQuiz = () => {
//     setIndex(0);
//     setScore(0);
//     setSelected(null);
//     setDone(false);
//   };

//   /* 🏆 QUIZ FINISHED */
//   if (done) {
//     const isWin = score >= quiz.length / 2;

//     return (
//       <div style={styles.resultBox}>
//         <h3>{isWin ? "🏆 You Win!" : "❌ Try Again"}</h3>
//         <p>
//           Score: {score} / {quiz.length}
//         </p>

//         {/* 🔁 Restart Button */}
//         <button style={styles.restartButton} onClick={restartQuiz}>
//           🔄 Restart Quiz
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div style={styles.quizBox}>
//       <h3>🧠 Quiz</h3>
//       <p style={styles.question}>{currentQuestion.question}</p>

//       {currentQuestion.options.map((opt) => {
//         let bg = "#eee";

//         if (selected) {
//           if (opt === currentQuestion.answer) bg = "#4caf50"; // green
//           else if (opt === selected) bg = "#f44336"; // red
//         }

//         return (
//           <button
//             key={opt}
//             onClick={() => handleAnswer(opt)}
//             style={{
//               ...styles.option,
//               backgroundColor: bg,
//               color: selected ? "#fff" : "#000",
//             }}
//           >
//             {opt}
//           </button>
//         );
//       })}
//     </div>
//   );
// }

// /* ================= STYLES ================= */

// const styles = {
//   quizBox: {
//     marginTop: 25,
//     padding: 15,
//     borderRadius: 10,
//     background: "#f9f9f9",
//   },

//   question: {
//     fontSize: 16,
//     marginBottom: 10,
//   },

//   option: {
//     display: "block",
//     width: "100%",
//     padding: "10px",
//     marginBottom: "8px",
//     border: "none",
//     borderRadius: 6,
//     cursor: "pointer",
//     fontSize: 15,
//     transition: "background-color 0.3s ease",
//   },

//   resultBox: {
//     marginTop: 25,
//     padding: 20,
//     borderRadius: 12,
//     background: "#e8f5e9",
//     textAlign: "center",
//     fontSize: 18,
//   },

//   restartButton: {
//     marginTop: 15,
//     padding: "10px 18px",
//     fontSize: 16,
//     cursor: "pointer",
//     border: "none",
//     borderRadius: 6,
//     background: "#2196f3",
//     color: "#fff",
//   },
// };

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
