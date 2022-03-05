import { useCallback, useEffect, useState } from "react";
import "./App.css";

/* 
  - preciso de pegar o evento e colocar dentro do setState
*/

const Header = () => {
  return (
    <div>
      <h1>Header</h1>
    </div>
  );
};

const Body = () => {
  const [word, setWord] = useState([]);
  const [rows, setRows] = useState([word]);

  const handleKeyDown = useCallback(
    (e) => {
      const key = e.key.toLowerCase();
      const isLetter = /^[a-z]$/i.test(key);
      if (isLetter && key >= "a" && key <= "z" && word.length < 5) {
        setWord((prevState) => [...prevState, key]);
      }
      if (key === "backspace") {
        const newWord = [...word];
        newWord.pop();
        setWord(newWord);
      }
      if (key === "enter" && word.length === 5) {
        alert("valid enter");
      }
    },
    [word]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [word, handleKeyDown]);

  return (
    <div>
      <h1>Infinite Term.ooo</h1>
      {[...Array(6)].map((x,i) => (
        <div key={i} style={{ display: "flex", justifyContent: "center", gap: "4px", marginBottom: "4px" }}>
          {[...Array(5)].map((x, i) => {
            return (
              <div
                key={i}
                style={{
                  width: 40,
                  height: 40,
                  border: "2px solid",
                  borderColor: "#fff",
                  backgroundColor: "green",
                  borderRadius: "4px",
                  textAlign: "center",
                  verticalAlign: "middle",
                }}
              >
                <div>{word[i] || ""}</div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      <h1>Footer</h1>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Body />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
