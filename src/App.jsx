import React from 'react';
import './App.css';

function App() {
  const [accept, setAccept] = React.useState(false);

  function randomPosition(min, max) {
    return Math.random() * (max - min) + min + '%';
  }

  function handleClick() {
    setAccept(!accept);
  }

  function changePosition({ target }) {
    target.style.position = 'absolute';
    target.style.bottom = randomPosition(10, 90);
    target.style.left = randomPosition(10, 90);
  }

  return (
    <>
      {accept ? (
        <section className="content">
          <figure className="gif">
            <img src="./img/shrek-meme.gif" />
          </figure>
        </section>
      ) : (
        <section className="content">
          <div className="question">
            <h1>[ SUA PERGUNTA AQUI ]</h1>
          </div>
          <nav className="options">
            <div>
              <button onClick={handleClick}>Sim</button>
            </div>
            <div>
              <button onMouseOver={changePosition} onClick={changePosition}>
                Não
              </button>
            </div>
          </nav>
        </section>
      )}
    </>
  );
}

export default App;
