import './App.css';
import Task1 from './Task1';
import Task2 from './Task2';
import Button from './Button';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const handleTask2 = () => {
    if (count === 0){
      setCount(1);
    }
    else{
      setCount(0);
    }
  }

  const handleTask3 = (event) => {
    let clicked_id = event.currentTarget.id;
    let text = document.getElementById(clicked_id).innerText;
    alert(text);
  }

  return (
    <div className="App">
      <h1>Task 1</h1>
      <Task1 color="#f57d6b" shape="circle" />
      <hr />
      <h1>Task 2</h1>
      <Task2 onClick={handleTask2} count={count} />
      <hr />
      <h1>Task 3</h1>
      <Button id="ok_btn" onClick={handleTask3} name="OK"/>
      <Button id="win_btn" onClick={handleTask3} name="Win"/>
      <Button id="lose_btn" onClick={handleTask3} name="Lose"/>
      <Button id="draw_btn" onClick={handleTask3} name="Draw"/>
      <Button id="end_btn" onClick={handleTask3} name="End"/>
    </div>
  );
}

export default App;
