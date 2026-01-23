// //src/pages/AnimalDetailsPage.jsx
// import { useParams, useNavigate } from "react-router-dom";
// import { animals } from "../config/animalConfig";
// import { useEffect, useRef, useState } from "react";
// import AnimalQuiz from "../components/AnimalQuiz";
// import { translations } from "../i18n";

// export default function AnimalDetailsPage() {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [visible, setVisible] = useState(false);
//   const [lang, setLang] = useState("en");

//   const audioRef = useRef(null);
//   const imageRef = useRef(null);

//   const animal = animals.find((a) => a.id === id);
//   const t = translations[lang];

//   useEffect(() => {
//     setVisible(true);
//   }, []);

//   if (!animal) return <div>Animal not found</div>;

//   /* 🔊 Play sound */
//   const playSound = () => {
//     if (!audioRef.current) return;
//     audioRef.current.currentTime = 0;
//     audioRef.current.play();
//   };

//   /* 🖱️ Image hover movement */
//   const handleImageMove = (e) => {
//     const rect = imageRef.current.getBoundingClientRect();
//     const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
//     const y = ((e.clientY - rect.top) / rect.height - 0.5) * 10;

//     imageRef.current.style.transform = `scale(1.05) translate(${x}px, ${y}px)`;
//   };

//   const resetImage = () => {
//     imageRef.current.style.transform = "scale(1)";
//   };

//   const handleBack = () => {
//     setVisible(false);
//     setTimeout(() => {
//       navigate("/");
//       window.location.reload();
//     }, 400);
//   };
  
//   return (
//     <div
//       style={{
//         ...styles.page,
//         backgroundImage: `url(${animal.image})`,
//         opacity: visible ? 1 : 0,
//         transform: visible ? "translateY(0)" : "translateY(20px)",
//       }}
//     >
//       {/* 🌐 Language Toggle */}
//       <div style={{ position: "absolute", top: 20, right: 20 }}>
//         <button onClick={() => setLang("en")}>EN</button>
//         <button onClick={() => setLang("ta")} style={{ marginLeft: 5 }}>
//           TA
//         </button>
//       </div>

//       <div style={styles.overlay}>
//         {/* 🔙 Back */}
//         <button style={styles.backButton} onClick={handleBack}>
//           ← Back to Zoo
//         </button>

//         {/* 🧾 Card */}
//         <div style={styles.card}>
//           {/* 🖼 Image */}
//           <div style={styles.imageBox}>
//             <img
//               ref={imageRef}
//               src={animal.image}
//               alt={animal.name}
//               style={styles.image}
//               onMouseMove={handleImageMove}
//               onMouseLeave={resetImage}
//               onClick={playSound}
//             />
//           </div>

//           {/* 📄 Info */}
//           <div style={styles.info}>
//             <h1 style={styles.title}>{animal.name}</h1>
//             <p style={styles.text}>{animal.description}</p>

//             {/* 🧠 Facts */}
//             <div style={styles.facts}>
//               <h3>{t.facts}</h3>
//               <ul>
//                 <li><strong>{t.diet}:</strong> {animal.facts?.diet}</li>
//                 <li><strong>{t.habitat}:</strong> {animal.facts?.habitat}</li>
//                 <li><strong>{t.lifespan}:</strong> {animal.facts?.lifespan}</li>
//               </ul>
//             </div>

//             {/* 🔊 Sound */}
//             <button style={styles.soundButton} onClick={playSound}>
//               {t.playSound}
//             </button>

//             {/* 🧠 QUIZ SECTION */}
//             <AnimalQuiz quiz={animal.quiz} />
//           </div>
//         </div>

//         <audio ref={audioRef} src={animal.sound} preload="auto" />
//       </div>
//     </div>
//   );
// }

// /* ================= STYLES ================= */

// const styles = {
//   page: {
//     width: "100vw",
//     height: "100vh",
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     transition: "opacity 0.4s ease, transform 0.4s ease",
//   },
//   overlay: {
//     width: "100%",
//     height: "100%",
//     backdropFilter: "blur(14px)",
//     backgroundColor: "rgba(0,0,0,0.45)",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     paddingTop: "30px",
//   },
//   backButton: {
//     alignSelf: "flex-start",
//     marginLeft: "15%",
//     marginBottom: "20px",
//     padding: "8px 16px",
//     cursor: "pointer",
//   },
//   card: {
//     display: "flex",
//     width: "70%",
//     minHeight: "420px",
//     background: "#fff",
//     borderRadius: "14px",
//     overflow: "auto",
//   },
//   imageBox: {
//     width: "40%",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     background: "#f0f0f0",
//   },
//   image: {
//     maxWidth: "100%",
//     maxHeight: "100%",
//     objectFit: "contain",
//     cursor: "pointer",
//     transition: "transform 0.15s ease-out",
//   },
//   info: {
//     width: "60%",
//     padding: "30px",
//   },
//   title: { fontSize: "34px" },
//   text: { fontSize: "18px", marginBottom: "15px" },
//   facts: {
//     background: "#f4f4f4",
//     padding: "15px",
//     borderRadius: "8px",
//     marginBottom: "15px",
//   },
//   soundButton: {
//     padding: "10px 16px",
//     marginBottom: "20px",
//   },
// };


import { useParams, useNavigate } from "react-router-dom";
import { animals } from "../config/animalConfig";
import { useEffect, useRef, useState } from "react";
import AnimalQuiz from "../components/AnimalQuiz";
import { translations } from "../i18n";

export default function AnimalDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [lang, setLang] = useState("en");
  const audioRef = useRef(null);

  const animal = animals.find((a) => a.id === id);
  const t = translations[lang];

  if (!animal) return <div>Animal not found</div>;

  const playSound = () => {
    audioRef.current?.play();
  };

  return (
    <div style={styles.page}>
      {/* Language */}
      <div style={styles.lang}>
        <button onClick={() => setLang("en")}>EN</button>
        <button onClick={() => setLang("ta")}>TA</button>
      </div>

      {/* Back */}
      <button style={styles.back} onClick={() => navigate("/")}>
        ← Back
      </button>

      <div style={styles.card}>
        {/* Image */}
        <div style={styles.imageBox}>
          <img src={animal.image} style={styles.image} />
        </div>

        {/* Info */}
        <div style={styles.info}>
          <h1>{animal.name?.[lang]}</h1>
          <p>{animal.description?.[lang]}</p>

          <ul>
            <li>
              <b>{t.diet}:</b> {animal.facts?.diet?.[lang]}
            </li>
            <li>
              <b>{t.habitat}:</b> {animal.facts?.habitat?.[lang]}
            </li>
            <li>
              <b>{t.lifespan}:</b> {animal.facts?.lifespan?.[lang]}
            </li>
          </ul>

          <button onClick={playSound}>{t.playSound}</button>

          <AnimalQuiz quiz={animal.quiz} lang={lang} />
        </div>
      </div>

      <audio ref={audioRef} src={animal.sound?.[lang]} />
    </div>
  );
}

const styles = {
  page: {
    width: "100vw",
    height: "100vh",
    background: "#222",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    overflow: "hidden",
  },
  lang: {
    position: "absolute",
    top: 20,
    right: 20,
  },
  back: {
    position: "absolute",
    top: 20,
    left: 20,
  },
  card: {
    marginTop: 80,
    width: "90%",
    height: "80%",
    background: "#fff",
    display: "flex",
    borderRadius: 12,
    overflow: "hidden",
  },
  imageBox: {
    width: "40%",
    background: "#eee",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "contain",
  },
  info: {
    width: "60%",
    padding: 30,
    overflowY: "auto",
  },
};
