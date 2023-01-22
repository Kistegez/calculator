import React, { useState } from 'react';
import { TextField, Grid, Button } from '@material-ui/core';

function Calculator() {
  // State to hold the current expression
  const [expression, setExpression] = useState("");

  // Event handlers for the buttons
  const handleNumberClick = (event) => {

  }
  const handleOperatorClick = (event) => {

  }
  const handleClearClick = () => {

  }
  const handleEqualClick = () => {

  }

  return (
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12}>
            <TextField key={expression} value={expression || ''} disabled={true} fullWidth={true}/>
        </Grid>
        <Grid item xs={4}>
          <Button value="1" onClick={handleNumberClick}>1</Button>
        </Grid>
        <Grid item xs={4}>
          <Button value="2" onClick={handleNumberClick}>2</Button>
        </Grid>
        <Grid item xs={4}>
          <Button value="3" onClick={handleNumberClick}>3</Button>
        </Grid>
        <Grid item xs={4}>
          <Button value="4" onClick={handleNumberClick}>4</Button>
        </Grid>
        <Grid item xs={4}>
          <Button value="5" onClick={handleNumberClick}>5</Button>
        </Grid>
        <Grid item xs={4}>
          <Button value="6" onClick={handleNumberClick}>6</Button>
        </Grid>
        <Grid item xs={4}>
          <Button value="7" onClick={handleNumberClick}>7</Button>
        </Grid>
        <Grid item xs={4}>
          <Button value="8" onClick={handleNumberClick}>8</Button>
        </Grid>
        <Grid item xs={4}>
          <Button value="9" onClick={handleNumberClick}>9</Button>
        </Grid>
        <Grid item xs={4}>
          <Button onClick={handleClearClick}>C</Button>
        </Grid>
        <Grid item xs={4}>
          <Button value="0" onClick={handleNumberClick}>0</Button>
        </Grid>
        <Grid item xs={4}>
          <Button onClick={handleEqualClick}>=</Button>
        </Grid>
        <Grid item xs={4}>
          <Button value="+" onClick={handleOperatorClick}>+</Button>
        </Grid>
          <Grid item xs={4}>
              <Button value="-" onClick={handleOperatorClick}>-</Button>
          </Grid>
          <Grid item xs={4}>
              <Button value="*" onClick={handleOperatorClick}>*</Button>
          </Grid>
          <Grid item xs={4}>
              <Button value="÷" onClick={handleOperatorClick}>÷</Button>
          </Grid>
      </Grid>)}

export default Calculator;