const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
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
  return (
    <div>
      {props.parts.map((part, index) => (
        <Part key={index} name={part.name} exercises={part.exercises} />
      ))}
    </div>
  );
} 

/*
{props.parts.map((part, index) => (
        <Part key={index} name={part.name} exercises={part.exercises} />
      ))}
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
  const totalExercises = props.parts.reduce((sum, part) => sum + part.exercises, 0);

  return (
    <div>
      <p>Total number of exercises {totalExercises}</p>
    </div>
  );
}
export default App