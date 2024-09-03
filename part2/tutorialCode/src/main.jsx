import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
 
 
const notes = [
  {
    id: 1,
    content: 'HTML is easy'
  },
  {
    id: 2,
    content: 'Browser can execute only JavaScript'
  },
  {
    id: 3,
    content: 'Most important methods of HTTP-protocol are GET and POST'
  }
];
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App notes={notes}/>);


/*ReactDOM.render(
  <App />, 
  document.getElementById('root')
)
//in React 18, the ReactDOM.render method has been replaced by ReactDOM.createRoot for rendering components into the DOM */
