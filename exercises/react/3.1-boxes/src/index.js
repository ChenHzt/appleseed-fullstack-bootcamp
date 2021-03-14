import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Box from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Box color='#B0FF8C' height='300px' width='300px'>
      <Box color='#8EBAFF' height='250px' width='250px'>
        <Box color='#FFA2B8' height='200px' width='200px'>
          <Box color='#BA49FF' height='70px' width='150px'></Box>
          <Box color='#BA49FF' height='70px' width='150px'></Box>
        </Box>
      </Box>
    </Box>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
