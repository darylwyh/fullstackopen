import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

// const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<App notes={notes}/>);


/*

axios.get('http://localhost:3001/notes').then(response => {
  const notes = response.data
  ReactDOM.createRoot(document.getElementById('root')).render(<App notes={notes} />)
})
  

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
];ReactDOM.render(
  <App />, 
  document.getElementById('root')
)
//in React 18, the ReactDOM.render method has been replaced by ReactDOM.createRoot for rendering components into the DOM */
