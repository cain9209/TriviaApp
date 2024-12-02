import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import QuestionComponent from "./components/QuestionComponent";

function App() {
  const [count, setCount] = useState(0)

  return (

    <div>
    <QuestionComponent />
  </div>
);
}
    

export default App
