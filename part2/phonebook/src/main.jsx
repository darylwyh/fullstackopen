import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

/*ReactDOM.render(
  <App />, 
  document.getElementById('root')
)
//in React 18, the ReactDOM.render method has been replaced by ReactDOM.createRoot for rendering components into the DOM */
