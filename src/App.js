import React, { useState } from 'react';
import Quiz from './components/QUIZ/Quiz';
import Button from './components/UI/Button';
import './index.css';

function App() {
  const [start, setStart] = useState(false);

  const startTest = () => {
    setStart(true);
  };

  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>REACT QUIZ</h1>
        </header>
        {!start && <Button onClick={startTest} btnText="Start!!"></Button>}
        {start && <Quiz restart={() => setStart(false)} />}

      </div>
      <footer className="App-footer">
        <p>&copy; 2023 Yuvi's Quiz-App. All rights reserved.</p>
      </footer>
    </>

  );
}

export default App;
