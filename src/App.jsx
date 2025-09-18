import { useState } from 'react'
import './App.css'
import Quiz from './Quiz'
import Btn from './components/Btn'


function App() {
  const [isStarting, setIsStarting] =useState(false)
  const startClickBtnHandler = () =>{
    setIsStarting(prevState=>!prevState)
  }
  return (
    <>
    {!isStarting&&
     <div style={{height:'100px', width:'800px', margin:'100px auto'}}>
        <h1 style={{marginBottom:'50px'}}>Take the challenge and verify your React knowledge!!</h1>
        <div style={{width:'300px', margin:'0 auto'}}>
          <Btn
            style={{fontSize:'32px', padding:'0'}}
            type="button"
            onClick={startClickBtnHandler}
            className="start"
          >
            <p>Start</p>
          </Btn>
        </div>
     </div>}

    {isStarting&&
      <Quiz 
        startClickBtnHandler={startClickBtnHandler}
      />}
    </>
  )
}

export default App
