import React from 'react';
import '../css/App.css';
import LoginForm from './login';
import useStyles from "./styles";


function App() {
  const classes = useStyles();
  return (
    <div>
   <LoginForm styles={classes}></LoginForm>
  </div>
  );
}

export default App;
