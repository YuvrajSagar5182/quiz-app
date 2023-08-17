import React, { useState } from 'react';
import Quiz from './components/QUIZ/Quiz';
import Button from './components/UI/Button';
import DropDown from './components/UI/DropDown';
import './index.css';

function App() {
  const [start, setStart] = useState(false);
  const [category, setCategory] = useState("");

  const startTest = () => {
    setStart(true);
  };

  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>REACT QUIZ</h1>
        </header>
        {!start && <>
          <DropDown selectQty={"Category"} setQty={(val) => setCategory(val)} firstOption={"Random"} firstOptionValue={'random'} secondOption={"History"} secondOptionValue={23} thirdOption={"Science Gadgets"} thirdOptionValue={30} fourthOption={"Sports"} fourthOptionValue={21} />
          <Button onClick={startTest} btnText="Start!!"></Button></>}
        {start && <Quiz restart={() => setStart(false)} category={category} />}

      </div>
      <footer className="App-footer">
        <p>&copy; 2023 Yuvi's Quiz-App. All rights reserved.</p>
      </footer>
    </>

  );
}

export default App;
