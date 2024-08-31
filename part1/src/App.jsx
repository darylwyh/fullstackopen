const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content 
        parts={[
          { part: part1, exercises: exercises1 },
          { part: part2, exercises: exercises2 },
          { part: part3, exercises: exercises3 }
        ]}
      />
      <Total numTotal={exercises1 + exercises2 + exercises3}/>
    </div>
  )

}

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
       <Part part={props.parts[0].part} exercises={props.parts[0].exercises} />
       <Part part={props.parts[1].part} exercises={props.parts[1].exercises} />
       <Part part={props.parts[2].part} exercises={props.parts[2].exercises} />
    </div>
  )
}

const Part = (props) => {
  // Render the name of the part and number of exercises
  return (
    <div>
      <p>{props.part} {props.exercises}</p>
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