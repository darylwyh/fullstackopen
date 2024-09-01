const App = () => {
  const course="Half Stack application development"
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  return (
    <div>
      <Header course={course} />
      <Content parts={[part1, part2, part3]} />
       
      <Total numTotal={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )

}

/*
<Content 
        parts={[
          { part: part1, exercises: exercises1 },
          { part: part2, exercises: exercises2 },
          { part: part3, exercises: exercises3 }
        ]}
/> 
*/

const Header = (props) => {
  //rendering name of the course 
  return (
    <div>
      <h1> Course is {props.course} </h1>
    </div>
  )
}

const Content = (props) => {
  //render the parts and their number of exercises 
  return (
    <div>
      {props.parts.map((part, index) => (
        <Part key={index} name={part.name} exercises={part.exercises} />
      ))}
    </div>
  )
}

/*
<div>
      <Part part={props.parts[0].part} exercises={props.parts[0].exercises} />
      <Part part={props.parts[1].part} exercises={props.parts[1].exercises} />
      <Part part={props.parts[2].part} exercises={props.parts[2].exercises} />
    </div>
*/

const Part = (props) => {
  // Render the name of the part and number of exercises
  return (
    <div>
      <p>{props.name} {props.exercises}</p>
    </div>
  );
}
const Total = (props) => {
  //render total number of exercises 
  return (
    <div>
      <p>Number of exercises {props.numTotal}</p>
    </div>
  )
}

export default App