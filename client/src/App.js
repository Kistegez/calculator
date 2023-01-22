import React, { useState } from 'react';
import { TextField, Grid, Button } from '@material-ui/core';

function Calculator() {


  // State to hold the current expression
    const [calculation, setCalculation]=useState('')
    const [output, setOutput]=useState('')
    const actions = ['/', '*', '+', '-', '.']

    const createDigits =()=>{
        const digits=[]

        for (let i=1;i<10; i++){
            digits.push(
                <button onClick={()=>handleNumberClick(i.toString())} key={i}>{i}</button>
            )
        }
        return digits
    }

  // Event handlers for the buttons
  const handleCalcClick = (value) => {
      if(
          actions.includes(value) & calculation === '' ||
          actions.includes(value) & actions.includes(calculation.slice(-1))
      ){
          return
      }
      setCalculation(calculation+value)

      if (!actions.includes(value)){
          setOutput(eval(calculation+value).toString())
      }
  }

  const handleClearClick = () => {
      if(calculation === ''){
          return
      }
      const value=calculation.slice(0,-1)
      setCalculation(value)
  }
  const handleEqualClick = () => {
    try {
        setCalculation(eval(calculation).toString());
    } catch (e) {
        setCalculation("Error");
    }
  }

  return (
      <div>
          <center> <h1> Simple React Calculator</h1></center>

          <div className="calc-grid">
              <div className='output'>
                  {calculation||'0'}
                  {output ? <span className="preRes">{output}</span>:''}
              </div>

              <div>
                  <div className='ops'>

                      <button onClick={()=>{handleCalcClick('/')}} >/</button>
                      <button onClick={()=>{handleCalcClick('*')}}>*</button>
                      <button onClick={()=>{handleCalcClick('+')}}>+</button>
                      <button onClick={()=>{handleCalcClick('-')}}>-</button>
                      <button onClick={handleClearClick}> <img  width={40} height={40} src="https://cdn-icons-png.flaticon.com/512/159/159805.png" /></button>
                  </div>
                  <div className='dig'>

                      {createDigits()}

                      <button onClick={()=>{handleCalcClick('.')}}>.</button>
                      <button onClick={()=>{handleCalcClick('0')}}>0</button>
                      <button onClick={handleEqualClick}>=</button>
                  </div>
              </div>


          </div>
      </div>
  );}

export default Calculator;

